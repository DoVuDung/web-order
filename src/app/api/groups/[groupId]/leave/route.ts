import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/lib/src/generated/prisma";
import { requireAuth } from "@/lib/api/authorization";
import { withRateLimit } from "@/lib/api/rate-limit";
import { internalErrorResponse, notFoundResponse, badRequestResponse, forbiddenResponse } from "@/lib/api/auth";

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
 * /api/groups/{groupId}/leave:
 *   post:
 *     summary: Leave a group order
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
 *         description: Successfully left group
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
  return withRateLimit('api', requireAuth(async (auth) => {
    try {
      const { groupId } = await context.params;

      const groupOrder = await prisma.groupOrder.findUnique({
        where: { groupId },
        include: {
          members: {
            where: {
              leftAt: null,
            },
          },
        },
      });

      if (!groupOrder) {
        return notFoundResponse("Group not found");
      }

      // Check if user is a member
      const member = groupOrder.members.find(m => m.userId === auth.userId);
      if (!member) {
        return badRequestResponse("You are not a member of this group");
      }

      // Owner cannot leave (must transfer ownership or delete group)
      if (member.role === 'OWNER') {
        return forbiddenResponse("Group owner cannot leave. Transfer ownership or delete the group instead.");
      }

      // Cannot leave if order is locked or beyond
      if (['LOCKED', 'PLACED', 'CONFIRMED', 'PREPARING', 'DELIVERING', 'DELIVERED', 'PAYMENT_PENDING'].includes(groupOrder.status)) {
        return badRequestResponse("Cannot leave group after order is locked");
      }

      // Mark member as left
      await prisma.groupMember.update({
        where: { id: member.id },
        data: {
          leftAt: new Date(),
        },
      });

      return NextResponse.json({
        success: true,
        message: 'Successfully left the group',
      });
    } catch (error) {
      console.error("Error leaving group:", error);
      return internalErrorResponse("Failed to leave group", error);
    }
  }))(request);
}

