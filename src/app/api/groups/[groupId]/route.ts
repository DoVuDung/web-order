import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/lib/src/generated/prisma";
import { requireAuth } from "@/lib/api/authorization";
import { withRateLimit } from "@/lib/api/rate-limit";
import { internalErrorResponse, notFoundResponse, forbiddenResponse } from "@/lib/api/auth";

// Global Prisma instance
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

const prisma = globalForPrisma.prisma ?? new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

interface RouteContext {
  params: Promise<{ groupId: string }>;
}

/**
 * @swagger
 * /api/groups/{groupId}:
 *   get:
 *     summary: Get group order details
 *     tags: [Groups]
 *     security:
 *       - ClerkAuth: []
 *     parameters:
 *       - name: groupId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Group details
 *       401:
 *         $ref: '#/components/responses/UnauthorizedError'
 *       404:
 *         $ref: '#/components/responses/NotFoundError'
 */
export async function GET(
  request: NextRequest,
  context: RouteContext
) {
  return withRateLimit('api', requireAuth(async (auth, req: NextRequest) => {
    try {
      const { groupId } = await context.params;

      const groupOrder = await prisma.groupOrder.findUnique({
        where: { groupId },
        include: {
          restaurant: {
            include: {
              products: true,
            },
          },
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
            orderBy: {
              joinedAt: 'asc',
            },
          },
          payments: {
            include: {
              fromUser: {
                select: {
                  id: true,
                  name: true,
                  email: true,
                },
              },
              toUser: {
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

      if (!groupOrder) {
        return notFoundResponse("Group not found");
      }

      // Check if user is a member
      const isMember = groupOrder.members.some(m => m.userId === auth.userId);
      if (!isMember && !auth.isAdmin) {
        return forbiddenResponse("You are not a member of this group");
      }

      return NextResponse.json({ groupOrder });
    } catch (error) {
      console.error("Error fetching group:", error);
      return internalErrorResponse("Failed to fetch group", error);
    }
  }))(request);
}

/**
 * @swagger
 * /api/groups/{groupId}:
 *   delete:
 *     summary: Delete/cancel a group order
 *     tags: [Groups]
 *     security:
 *       - ClerkAuth: []
 *     parameters:
 *       - name: groupId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Group deleted successfully
 *       401:
 *         $ref: '#/components/responses/UnauthorizedError'
 *       403:
 *         $ref: '#/components/responses/ForbiddenError'
 *       404:
 *         $ref: '#/components/responses/NotFoundError'
 */
export async function DELETE(
  request: NextRequest,
  context: RouteContext
) {
  return withRateLimit('api', requireAuth(async (auth, req: NextRequest) => {
    try {
      const { groupId } = await context.params;

      const groupOrder = await prisma.groupOrder.findUnique({
        where: { groupId },
        include: {
          payments: true,
        },
      });

      if (!groupOrder) {
        return notFoundResponse("Group not found");
      }

      // Only owner or admin can delete
      if (groupOrder.ownerId !== auth.userId && !auth.isAdmin) {
        return forbiddenResponse("Only the group owner can delete this group");
      }

      // Cannot delete if payments have been made
      if (groupOrder.payments.length > 0) {
        return forbiddenResponse("Cannot delete group with existing payments");
      }

      // Update status to cancelled instead of hard delete
      await prisma.groupOrder.update({
        where: { groupId },
        data: {
          status: 'CANCELLED',
        },
      });

      return NextResponse.json({
        success: true,
        message: 'Group cancelled successfully',
      });
    } catch (error) {
      console.error("Error deleting group:", error);
      return internalErrorResponse("Failed to delete group", error);
    }
  }))(request);
}

