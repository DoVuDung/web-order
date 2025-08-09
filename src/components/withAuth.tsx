import React from 'react';
import { useAuth, type UserRole } from '@/hooks/useAuth';

// Higher-order component for role-based protection
export function withAuth<T extends Record<string, unknown>>(
  Component: React.ComponentType<T>,
  requiredRole?: UserRole
) {
  return function AuthenticatedComponent(props: T) {
    const { isLoaded, hasPermission } = useAuth(requiredRole);
    
    if (!isLoaded) {
      return (
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      );
    }

    if (requiredRole && !hasPermission(requiredRole)) {
      return (
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Access Denied</h2>
            <p className="text-gray-600">You don&apos;t have permission to view this page.</p>
          </div>
        </div>
      );
    }

    return <Component {...props} />;
  };
}
