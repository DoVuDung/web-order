import { crawlGrabFood } from "@/lib/craw/grab";
import { NextResponse } from "next/server";
import { PrismaClient } from "@/lib/src/generated/prisma";

// Global Prisma instance for hot reload
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export async function POST(req: Request) {
  try {
    const { url } = await req.json();
    
    if (!url || !url.includes("grab.com")) {
      return NextResponse.json({ error: "Invalid GrabFood link" }, { status: 400 });
    }

    console.log("Starting crawl for URL:", url);
    const data = await crawlGrabFood(url);
    console.log('data: ', data);
    
    if (!data.restaurantName || !data.menu) {
      return NextResponse.json({ error: "Failed to extract restaurant data" }, { status: 400 });
    }

    // Check if restaurant already exists
    const existingRestaurant = await prisma.restaurant.findUnique({
      where: { grabLink: url },
      include: { 
        products: {
          include: {
            restaurant: {
              select: {
                id: true,
                name: true
              }
            }
          }
        }
      }
    });

    if (existingRestaurant) {
      console.log("Restaurant already exists:", existingRestaurant.name);
      return NextResponse.json(existingRestaurant);
    }

    console.log("Creating new restaurant:", data.restaurantName);
    
    // Filter out products that might already exist in the database
    type CrawledItem = { name: string; price: string; imageUrl?: string };
    const uniqueProducts = data.menu.filter((item: CrawledItem, index: number, array: CrawledItem[]) => {
      // Remove duplicates within the crawled data itself
      const firstIndex = array.findIndex((otherItem: CrawledItem) => 
        otherItem.name.toLowerCase().trim() === item.name.toLowerCase().trim() &&
        parseFloat(otherItem.price.replace(/[^0-9.]/g, "")) === parseFloat(item.price.replace(/[^0-9.]/g, ""))
      );
      return firstIndex === index;
    });

    console.log(`Creating restaurant with ${uniqueProducts.length} unique products`);
    
    const restaurant = await prisma.restaurant.create({
      data: {
        name: data.restaurantName,
        grabLink: url,
        products: {
          create: uniqueProducts.map((item: CrawledItem) => ({
            name: item.name,
            price: parseFloat(item.price.replace(/[^0-9.]/g, "")) || 0,
            imageUrl: item.imageUrl || null,
            // restaurantId will be automatically set by the relation
          })),
        },
      },
      include: { 
        products: {
          include: {
            restaurant: {
              select: {
                id: true,
                name: true
              }
            }
          }
        }
      },
    });

    console.log("Restaurant created successfully:", restaurant.id);
    console.log("Restaurant data being returned:", {
      id: restaurant.id,
      name: restaurant.name,
      products: restaurant.products,
      productsCount: restaurant.products.length
    });
    return NextResponse.json(restaurant);
  } catch (error) {
    console.error("Error in crawl API:", error);
    return NextResponse.json(
      { error: "Internal server error", details: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}
