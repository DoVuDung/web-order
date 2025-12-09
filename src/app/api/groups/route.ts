import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/lib/src/generated/prisma";
import { requireAuth } from "@/lib/api/authorization";
import { validateRequest } from "@/lib/api/validation";
import { withRateLimit } from "@/lib/api/rate-limit";
import { internalErrorResponse, badRequestResponse } from "@/lib/api/auth";
import { z } from "zod";

// Global Prisma instance
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

const prisma = globalForPrisma.prisma ?? new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

// Validation schemas
const createGroupSchema = z.object({
  restaurantId: z.string().min(1, "Restaurant ID is required"),
  name: z.string().min(1).max(100).optional(),
});

/**
 * @swagger
 * /api/groups:
 *   post:
 *     summary: Create a new group order
 *     tags: [Groups]
 *     security:
 *       - ClerkAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - restaurantId
 *             properties:
 *               restaurantId:
 *                 type: string
 *                 description: ID of the restaurant for this group order
 *               name:
 *                 type: string
 *                 description: Optional custom name for the group
 *     responses:
 *       200:
 *         description: Group created successfully
 *       401:
 *         $ref: '#/components/responses/UnauthorizedError'
 *       400:
 *         $ref: '#/components/responses/BadRequestError'
 */
export const POST = withRateLimit('api', requireAuth(async (auth, request: NextRequest) => {
  try {
    // Validate request
    const validation = await validateRequest(request, createGroupSchema);
    if (!validation.success) {
      return validation.response;
    }

    const { restaurantId, name } = validation.data;

    // Verify restaurant exists
    const restaurant = await prisma.restaurant.findUnique({
      where: { id: restaurantId },
    });

    if (!restaurant) {
      return badRequestResponse("Restaurant not found");
    }

    // Generate unique group ID
    const groupId = `group_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    // Create group order
    const groupOrder = await prisma.groupOrder.create({
      data: {
        groupId,
        ownerId: auth.userId!,
        restaurantId,
        platform: restaurant.platform,
        status: 'DRAFT',
        totalAmount: 0,
        deliveryFee: 0,
        serviceFee: 0,
        tax: 0,
        // Create the owner as the first member
        members: {
          create: {
            userId: auth.userId!,
            role: 'OWNER',
            cartTotal: 0,
          },
        },
      },
      include: {
        restaurant: true,
        owner: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        members: {
          include: {
            user: {
              select: {
                id: true,
                name: true,
                email: true,
              },
            },
          },
        },
      },
    });

    return NextResponse.json({
      success: true,
      groupOrder,
      message: 'Group created successfully. Share the group ID with others to let them join.',
    });
  } catch (error) {
    console.error("Error creating group:", error);
    return internalErrorResponse("Failed to create group", error);
  }
}));

/**
 * @swagger
 * /api/groups:
 *   get:
 *     summary: Get user's active groups
 *     tags: [Groups]
 *     security:
 *       - ClerkAuth: []
 *     responses:
 *       200:
 *         description: List of user's groups
 *       401:
 *         $ref: '#/components/responses/UnauthorizedError'
 */
export const GET = withRateLimit('api', requireAuth(async (auth, request: NextRequest) => {
  try {
    // Get all groups where user is a member
    const groups = await prisma.groupOrder.findMany({
      where: {
        members: {
          some: {
            userId: auth.userId!,
            leftAt: null,
          },
        },
        status: {
          in: ['DRAFT', 'ACTIVE', 'LOCKED', 'PLACED', 'CONFIRMED', 'PREPARING', 'DELIVERING', 'DELIVERED', 'PAYMENT_PENDING'],
        },
      },
      include: {
        restaurant: true,
        owner: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        members: {
          where: {
            leftAt: null,
          },
          include: {
            user: {
              select: {
                id: true,
                name: true,
                email: true,
              },
            },
          },
        },
        _count: {
          select: {
            members: true,
            payments: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json({ groups });
  } catch (error) {
    console.error("Error fetching groups:", error);
    return internalErrorResponse("Failed to fetch groups", error);
  }
}));

