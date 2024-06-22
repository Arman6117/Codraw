import { clerkMiddleware, createRouteMatcher, } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([
    '/dashboard(.*)',
  ]);
  const publicRoute = ['/']
export default clerkMiddleware((auth,req)=> {
  if (isProtectedRoute(req) && req.nextUrl.pathname !== "/") {
    auth().protect();
  }
});

export const config = {

  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};