import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { verify } from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'

// Add paths that require authentication
const protectedPaths = [
  '/account',
  '/checkout',
]

export function middleware(request: NextRequest) {
  // Check if the path requires authentication
  const isProtectedPath = protectedPaths.some(path => 
    request.nextUrl.pathname.startsWith(path)
  )

  if (!isProtectedPath) {
    return NextResponse.next()
  }

  const token = request.cookies.get('auth-token')?.value

  if (!token) {
    // Redirect to login if no token
    return NextResponse.redirect(new URL('/auth/signin', request.url))
  }

  try {
    // Verify token
    verify(token, JWT_SECRET)
    return NextResponse.next()
  } catch (error) {
    // Redirect to login if token is invalid
    return NextResponse.redirect(new URL('/auth/signin', request.url))
  }
}

export const config = {
  matcher: [
    '/account/:path*',
    '/checkout/:path*',
  ],
} 