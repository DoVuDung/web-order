import { NextResponse } from "next/server";
import { PrismaClient } from "@/lib/src/generated/prisma";
import { corsOptionsResponse } from "@/lib/api/cors";

// Global Prisma instance for hot reload
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

/**
 * @swagger
 * /api/restaurants:
 *   get:
 *     summary: Get all restaurants
 *     tags: [Restaurants]
 *     description: Retrieve all restaurants with their products
 *     responses:
 *       200:
 *         description: List of restaurants
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Restaurant'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
export async function GET() {
  try {
    const restaurants = await prisma.restaurant.findMany({
      include: {
        products: {
          orderBy: {
            createdAt: 'desc'
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    return NextResponse.json(restaurants);
  } catch (error) {
    console.error("Error fetching restaurants:", error);
    return NextResponse.json(
      { error: "Internal server error", details: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}

/**
 * @swagger
 * /api/restaurants:
 *   delete:
 *     summary: Delete a restaurant
 *     tags: [Restaurants]
 *     description: Delete a restaurant by ID (cascades to products)
 *     parameters:
 *       - in: query
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Restaurant ID to delete
 *     responses:
 *       200:
 *         description: Restaurant deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Restaurant deleted successfully"
 *       400:
 *         description: Missing restaurant ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *             example:
 *               error: "Restaurant ID is required"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const restaurantId = searchParams.get('id');

    if (!restaurantId) {
      return NextResponse.json({ error: "Restaurant ID is required" }, { status: 400 });
    }

    // Delete restaurant (products will be cascade deleted)
    await prisma.restaurant.delete({
      where: { id: restaurantId }
    });

    return NextResponse.json({ message: "Restaurant deleted successfully" });
  } catch (error) {
    console.error("Error deleting restaurant:", error);
    return NextResponse.json(
      { error: "Internal server error", details: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}
