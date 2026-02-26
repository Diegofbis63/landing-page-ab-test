import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const isAdminRoute = request.nextUrl.pathname.startsWith('/admin')

    if (isAdminRoute) {
        const authCookie = request.cookies.get('admin_session')

        if (!authCookie || authCookie.value !== 'authenticated') {
            const loginUrl = new URL('/login', request.url)
            // Save the original URL to redirect back after login
            loginUrl.searchParams.set('callbackUrl', request.nextUrl.pathname)
            return NextResponse.redirect(loginUrl)
        }
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/admin/:path*'],
}
