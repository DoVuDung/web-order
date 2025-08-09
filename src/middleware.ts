import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isAdminRoute = createRouteMatcher(['/admin(.*)'])
const isAdminApiRoute = createRouteMatcher(['/api/admin(.*)'])

export default clerkMiddleware(async (auth, req) => {
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