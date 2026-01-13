import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const token = request.cookies.get('token')?.value;

    // Protect /blog/create
    if (request.nextUrl.pathname.startsWith('/blog/create')) {
        if (!token) {
            return NextResponse.redirect(new URL('/signin', request.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/blog/create'],
};
