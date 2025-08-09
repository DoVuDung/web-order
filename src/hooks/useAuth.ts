import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useCallback } from "react";

export type UserRole = 'admin' | 'moderator' | 'user';

export function useAuth(requiredRole?: UserRole) {
  const { user, isLoaded, isSignedIn } = useUser();
  const router = useRouter();

  const userRole = (user?.publicMetadata?.role as UserRole) || 'user';
  
  const hasPermission = useCallback((role: UserRole) => {
    if (!isSignedIn) return false;
    
    const roleHierarchy: Record<UserRole, number> = {
      'user': 1,
      'moderator': 2,
      'admin': 3
    };
    
    return roleHierarchy[userRole] >= roleHierarchy[role];
  }, [isSignedIn, userRole]);

  const isAdmin = useCallback(() => hasPermission('admin'), [hasPermission]);
  const isModerator = useCallback(() => hasPermission('moderator'), [hasPermission]);
  const isUser = useCallback(() => hasPermission('user'), [hasPermission]);

  // Redirect if user doesn't have required role
  useEffect(() => {
    if (isLoaded && requiredRole) {
      if (!isSignedIn) {
        router.push('/sign-in');
        return;
      }
      
      if (!hasPermission(requiredRole)) {
        router.push('/');
        return;
      }
    }
  }, [isLoaded, isSignedIn, requiredRole, router, hasPermission]);

  return {
    user,
    isLoaded,
    isSignedIn,
    userRole,
    hasPermission,
    isAdmin,
    isModerator,
    isUser
  };
}
