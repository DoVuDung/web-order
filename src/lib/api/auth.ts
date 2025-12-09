import { auth, clerkClient } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export type UserRole = 'admin' | 'moderator' | 'customer';

export interface AuthResult {
  userId: string | null;
  userRole: UserRole;
  isAuthenticated: boolean;
  isAdmin: boolean;
  isModerator: boolean;
}

/**
 * Get current authenticated user and their role
 */
export async function getAuthUser(): Promise<AuthResult> {
  try {
    const { userId } = await auth();
    
    if (!userId) {
      return {
        userId: null,
        userRole: 'customer',
        isAuthenticated: false,
        isAdmin: false,
        isModerator: false,
      };
    }

    // Get user metadata from Clerk
    const client = await clerkClient();
    const user = await client.users.getUser(userId);
    const role = (user.publicMetadata?.role as UserRole) || 'customer';

    return {
      userId,
      userRole: role,
      isAuthenticated: true,
      isAdmin: role === 'admin',
      isModerator: role === 'moderator' || role === 'admin',
    };
  } catch (error) {
    console.error('Error getting auth user:', error);
    return {
      userId: null,
      userRole: 'customer',
      isAuthenticated: false,
      isAdmin: false,
      isModerator: false,
    };
  }
}

/**
 * Check if user has required role
 */
export function hasRole(userRole: UserRole, requiredRole: UserRole): boolean {
  const roleHierarchy: Record<UserRole, number> = {
    'customer': 1,
    'moderator': 2,
    'admin': 3,
  };

  return roleHierarchy[userRole] >= roleHierarchy[requiredRole];
}

/**
 * Check if user is the owner of a resource
 */
export function isOwner(userId: string | null, resourceUserId: string): boolean {
  return userId !== null && userId === resourceUserId;
}

/**
 * Create unauthorized response
 */
export function unauthorizedResponse(message: string = "Unauthorized"): NextResponse {
  return NextResponse.json(
    { error: message, code: 'UNAUTHORIZED' },
    { status: 401 }
  );
}

/**
 * Create forbidden response
 */
export function forbiddenResponse(message: string = "Forbidden - Insufficient permissions"): NextResponse {
  return NextResponse.json(
    { error: message, code: 'FORBIDDEN' },
    { status: 403 }
  );
}

/**
 * Create bad request response
 */
export function badRequestResponse(message: string, details?: unknown): NextResponse {
  return NextResponse.json(
    { error: message, code: 'BAD_REQUEST', details },
    { status: 400 }
  );
}

/**
 * Create not found response
 */
export function notFoundResponse(message: string = "Resource not found"): NextResponse {
  return NextResponse.json(
    { error: message, code: 'NOT_FOUND' },
    { status: 404 }
  );
}

/**
 * Create internal server error response
 */
export function internalErrorResponse(message: string = "Internal server error", error?: unknown): NextResponse {
  console.error('Internal server error:', error);
  return NextResponse.json(
    { 
      error: message, 
      code: 'INTERNAL_ERROR',
      ...(process.env.NODE_ENV === 'development' && error ? { details: error } : {})
    },
    { status: 500 }
  );
}

