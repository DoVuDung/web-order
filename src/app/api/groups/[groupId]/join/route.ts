import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/lib/src/generated/prisma";
import { requireAuth } from "@/lib/api/authorization";
import { withRateLimit } from "@/lib/api/rate-limit";
import { internalErrorResponse, notFoundResponse, badRequestResponse } from "@/lib/api/auth";

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
 * /api/groups/{groupId}/join:
 *   post:
 *     summary: Join an existing group order
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
 *         description: Successfully joined group
 *       401:
 *         $ref: '#/components/responses/UnauthorizedError'
 *       400:
 *         $ref: '#/components/responses/BadRequestError'
 *       404:
 *         $ref: '#/components/responses/NotFoundError'
 */
export async function POST(
  request: NextRequest,
  context: RouteContext
) {
  return withRateLimit('api', requireAuth(async (auth, req: NextRequest) => {
    try {
      const { groupId } = await context.params;

      // Find group
      const groupOrder = await prisma.groupOrder.findUnique({
        where: { groupId },
        include: {
          members: {
            where: {
              leftAt: null,
            },
          },
          restaurant: true,
        },
      });

      if (!groupOrder) {
        return notFoundResponse("Group not found");
      }

      // Check if group is still joinable
      if (groupOrder.status === 'LOCKED' || groupOrder.status === 'CANCELLED' || groupOrder.status === 'COMPLETED') {
        return badRequestResponse(`Cannot join group with status: ${groupOrder.status}`);
      }

      // Check if already a member
      const existingMember = groupOrder.members.find(m => m.userId === auth.userId);
      if (existingMember) {
        return badRequestResponse("You are already a member of this group");
      }

      // Check member limit (max 20)
      if (groupOrder.members.length >= 20) {
        return badRequestResponse("Group is full (maximum 20 members)");
      }

      // Add user as member
      const newMember = await prisma.groupMember.create({
        data: {
          groupOrderId: groupOrder.id,
          userId: auth.userId!,
          role: 'MEMBER',
          cartTotal: 0,
        },
        include: {
          user: {
            select: {
              id: true,
              name: true,
              email: true,
            },
          },
          groupOrder: {
            include: {
              restaurant: true,
            },
          },
        },
      });

      // Update group status to ACTIVE if it was DRAFT
      if (groupOrder.status === 'DRAFT') {
        await prisma.groupOrder.update({
          where: { groupId },
          data: { status: 'ACTIVE' },
        });
      }

      return NextResponse.json({
        success: true,
        member: newMember,
        message: `Successfully joined ${groupOrder.restaurant.name} group order`,
      });
    } catch (error) {
      console.error("Error joining group:", error);
      return internalErrorResponse("Failed to join group", error);
    }
  }))(request);
}

