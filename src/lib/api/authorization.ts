import { NextRequest, NextResponse } from "next/server";
import { getAuthUser, hasRole, type UserRole } from "./auth";
import { unauthorizedResponse, forbiddenResponse } from "./auth";

export interface AuthorizationOptions {
  /**
   * Required role to access this endpoint
   */
  requiredRole?: UserRole;
  
  /**
   * Allow access if user is the owner of the resource
   * Resource owner check function
   */
  allowOwner?: (userId: string, request: NextRequest) => Promise<boolean>;
  
  /**
   * Custom authorization check function
   */
  customCheck?: (auth: Awaited<ReturnType<typeof getAuthUser>>, request: NextRequest) => Promise<boolean>;
  
  /**
   * Error message for unauthorized access
   */
  errorMessage?: string;
}

/**
 * Authorization middleware wrapper for API routes
 * 
 * @example
 * ```typescript
 * export async function GET(request: NextRequest) {
 *   return withAuthorization(request, { requiredRole: 'admin' }, async (auth) => {
 *     // Your handler code here
 *     return NextResponse.json({ data: '...' });
 *   });
 * }
 * ```
 */
export async function withAuthorization<T = NextResponse>(
  request: NextRequest,
  options: AuthorizationOptions,
  handler: (auth: Awaited<ReturnType<typeof getAuthUser>>, request: NextRequest) => Promise<T>
): Promise<T | NextResponse> {
  try {
    // Get authenticated user
    const auth = await getAuthUser();

    // Check if user is authenticated
    if (!auth.isAuthenticated) {
      return unauthorizedResponse(options.errorMessage || "Authentication required");
    }

    // Check required role
    if (options.requiredRole && !hasRole(auth.userRole, options.requiredRole)) {
      // Check if owner is allowed and user is the owner
      if (options.allowOwner && auth.userId) {
        const isResourceOwner = await options.allowOwner(auth.userId, request);
        if (isResourceOwner) {
          return handler(auth, request);
        }
      }
      
      return forbiddenResponse(
        options.errorMessage || `Access denied. Required role: ${options.requiredRole}`
      );
    }

    // Run custom authorization check if provided
    if (options.customCheck) {
      const customCheckResult = await options.customCheck(auth, request);
      if (!customCheckResult) {
        return forbiddenResponse(options.errorMessage || "Access denied by custom authorization check");
      }
    }

    // Execute handler
    return handler(auth, request);
  } catch (error) {
    console.error('Authorization error:', error);
    return NextResponse.json(
      { error: "Authorization check failed", code: 'AUTHORIZATION_ERROR' },
      { status: 500 }
    );
  }
}

/**
 * Require authentication only (no role check)
 */
export function requireAuth<T = NextResponse>(
  handler: (auth: Awaited<ReturnType<typeof getAuthUser>>, request: NextRequest) => Promise<T>
) {
  return async (request: NextRequest): Promise<T | NextResponse> => {
    return withAuthorization(request, {}, handler);
  };
}

/**
 * Require specific role
 */
export function requireRole(role: UserRole) {
  return <T = NextResponse>(
    handler: (auth: Awaited<ReturnType<typeof getAuthUser>>, request: NextRequest) => Promise<T>
  ) => {
    return async (request: NextRequest): Promise<T | NextResponse> => {
      return withAuthorization(request, { requiredRole: role }, handler);
    };
  };
}

/**
 * Require admin role
 */
export function requireAdmin<T = NextResponse>(
  handler: (auth: Awaited<ReturnType<typeof getAuthUser>>, request: NextRequest) => Promise<T>
) {
  return async (request: NextRequest): Promise<T | NextResponse> => {
    return withAuthorization(request, { requiredRole: 'admin' }, handler);
  };
}

/**
 * Require moderator or admin role
 */
export function requireModerator<T = NextResponse>(
  handler: (auth: Awaited<ReturnType<typeof getAuthUser>>, request: NextRequest) => Promise<T>
) {
  return async (request: NextRequest): Promise<T | NextResponse> => {
    return withAuthorization(request, { requiredRole: 'moderator' }, handler);
  };
}

/**
 * Require owner or specific role
 */
export function requireOwnerOrRole(
  role: UserRole,
  getResourceOwnerId: (request: NextRequest) => Promise<string | null>
) {
  return <T = NextResponse>(
    handler: (auth: Awaited<ReturnType<typeof getAuthUser>>, request: NextRequest) => Promise<T>
  ) => {
    return async (request: NextRequest): Promise<T | NextResponse> => {
      return withAuthorization(
        request,
        {
          requiredRole: role,
          allowOwner: async (userId, req) => {
            const resourceOwnerId = await getResourceOwnerId(req);
            return resourceOwnerId !== null && userId === resourceOwnerId;
          },
        },
        handler
      );
    };
  };
}

/**
 * Group-specific authorization helpers
 */
export async function isGroupOwner(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _userId: string,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _groupId: string
): Promise<boolean> {
  // This will be implemented when GroupOrder model is available
  // For now, return false as placeholder
  // TODO: Implement with Prisma query
  return false;
}

export async function isGroupMember(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _userId: string,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _groupId: string
): Promise<boolean> {
  // This will be implemented when GroupOrder model is available
  // For now, return false as placeholder
  // TODO: Implement with Prisma query
  return false;
}

/**
 * Require group owner
 */
export function requireGroupOwner(groupIdExtractor: (request: NextRequest) => Promise<string>) {
  return <T = NextResponse>(
    handler: (auth: Awaited<ReturnType<typeof getAuthUser>>, request: NextRequest) => Promise<T>
  ) => {
    return async (request: NextRequest): Promise<T | NextResponse> => {
      return withAuthorization(
        request,
        {
          customCheck: async (auth, req) => {
            if (!auth.userId) return false;
            const groupId = await groupIdExtractor(req);
            return isGroupOwner(auth.userId, groupId);
          },
          errorMessage: "Only group owner can perform this action",
        },
        handler
      );
    };
  };
}

/**
 * Require group member (owner or member)
 */
export function requireGroupMember(groupIdExtractor: (request: NextRequest) => Promise<string>) {
  return <T = NextResponse>(
    handler: (auth: Awaited<ReturnType<typeof getAuthUser>>, request: NextRequest) => Promise<T>
  ) => {
    return async (request: NextRequest): Promise<T | NextResponse> => {
      return withAuthorization(
        request,
        {
          customCheck: async (auth, req) => {
            if (!auth.userId) return false;
            const groupId = await groupIdExtractor(req);
            return isGroupOwner(auth.userId, groupId) || isGroupMember(auth.userId, groupId);
          },
          errorMessage: "Only group members can perform this action",
        },
        handler
      );
    };
  };
}

