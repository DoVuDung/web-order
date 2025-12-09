import { crawlGrabFood } from "@/lib/craw/grab";
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/lib/src/generated/prisma";
import { requireAuth } from "@/lib/api/authorization";
import { validateRequest, schemas } from "@/lib/api/validation";
import { withRateLimit } from "@/lib/api/rate-limit";
import { internalErrorResponse } from "@/lib/api/auth";
import { corsOptionsResponse } from "@/lib/api/cors";
import { z } from "zod";

// Global Prisma instance for hot reload
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

// Validation schema
const crawlRequestSchema = z.object({
  url: schemas.restaurantUrl,
});

/**
 * @swagger
 * /api/craw:
 *   post:
 *     summary: Crawl Grab Food restaurant page
 *     tags: [Crawling]
 *     description: Scrapes a Grab Food restaurant URL and extracts menu items, then stores them in the database. Requires authentication.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CrawlRequest'
 *           example:
 *             url: "https://food.grab.com/vn/vi/restaurant/..."
 *     responses:
 *       200:
 *         description: Restaurant data successfully crawled and stored
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CrawlResponse'
 *       400:
 *         description: Invalid request or failed to extract data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *             example:
 *               error: "Invalid GrabFood link"
 *       401:
 *         description: Unauthorized - Authentication required
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       429:
 *         description: Too many requests - Rate limit exceeded
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
export const POST = withRateLimit('crawl', requireAuth(async (auth, request: NextRequest) => {
  try {
    // Validate request body
    const validation = await validateRequest(request, crawlRequestSchema);
    if (!validation.success) {
      return validation.response;
    }

    const { url } = validation.data;

    console.log("Starting crawl for URL:", url);
    const data = await crawlGrabFood(url);
    console.log('data: ', data);
    
    if (!data.restaurantName || !data.menu) {
      return NextResponse.json(
        { error: "Failed to extract restaurant data", code: 'CRAWL_FAILED' },
        { status: 400 }
      );
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
    return NextResponse.json(restaurant);
  } catch (error) {
    console.error("Error in crawl API:", error);
    return internalErrorResponse("Failed to crawl restaurant data", error);
  }
}));

/**
 * @swagger
 * /api/craw:
 *   options:
 *     summary: CORS preflight for crawl endpoint
 *     tags: [Crawling]
 *     description: Handles CORS preflight requests
 *     responses:
 *       200:
 *         description: CORS preflight response
 */
export async function OPTIONS() {
  return corsOptionsResponse();
}
