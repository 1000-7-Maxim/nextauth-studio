import { url } from 'inspector';
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    const path  = request.nextUrl.pathname;
    const token = request.cookies.get("auth-token")?.value || '';
    const isPublicPath = path === '/login' || path === '/signup';

    console.log(path)

    if(isPublicPath && token) {
        return NextResponse.redirect(new URL('/', request.nextUrl))
    }

    if(!isPublicPath && !token) {
        return NextResponse.redirect(new URL('/login', request.nextUrl))
    }

}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/',
    '/login',
    '/signup',
    // '/profile',
    '/profile/:path*'
  ],
}