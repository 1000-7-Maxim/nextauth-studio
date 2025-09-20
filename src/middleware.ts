import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;
    const token = request.cookies.get("auth-token")?.value || '';
    
    const isAuthPage = path === '/login' || path === '/signup' || path === '/verifyemail';
    const isProtectedPath = path === '/profile' || path.startsWith('/profile/') || path === '/getviatoken';

    // Redirect logged-in users away from auth pages to profile
    if(isAuthPage && token) {
        return NextResponse.redirect(new URL('/profile', request.nextUrl))
    }

    // Redirect non-logged-in users away from protected pages to login
    if(isProtectedPath && !token) {
        return NextResponse.redirect(new URL('/login', request.nextUrl))
    }

}
 
export const config = {
  matcher: [
    '/login',
    '/signup', 
    '/profile',
    '/profile/:path*',
    '/getviatoken',
    '/verifyemail'
  ],
}