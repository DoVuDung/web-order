import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isAdminRoute = createRouteMatcher(['/admin(.*)'])
const isAdminApiRoute = createRouteMatcher(['/api/admin(.*)'])
const isPublicRoute = createRouteMatcher([
  '/sign-in(.*)',
  '/sign-up(.*)',
  '/',
  '/about',
  '/api-docs'
])

export default clerkMiddleware(async (auth, req) => {
  // Allow public routes (sign-in, sign-up, home, about, api-docs) - no authentication required
  if (isPublicRoute(req)) {
    return; // Allow access without authentication
  }

  // Protect admin routes - require authentication
  if (isAdminRoute(req) || isAdminApiRoute(req)) {
    const authResult = await auth();
    if (!authResult.userId) {
      // Will redirect to sign-in
      return authResult.redirectToSignIn();
    }
  }
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}