import { NextResponse } from 'next/server';
import { clerkMiddleware, } from "@clerk/nextjs/server";

export default clerkMiddleware((auth,req) => {
  const { pathname } = req.nextUrl;
  const userId = auth().userId
  console.log(auth().userId)

  // Redirect authenticated users from the homepage to the dashboard
  if (pathname === '/' && userId) {
    return NextResponse.redirect(new URL('/dashboard', req.url));
  }

  // Protect /dashboard route
  if (pathname.startsWith('/dashboard') && !userId) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  // Allow the request to proceed if none of the above conditions match
  return NextResponse.next();
});

export const config = {
  matcher: [
    "/((?!.*\\..*|_next).*)", 
    "/", 
    "/(api|trpc)(.*)"
  ],
};
