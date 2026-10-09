import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { decrypt } from './lib/session'
import { brand } from './lib/brand'

const siteOrigin = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? (process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : brand.url)
).origin

function isSameOrigin(value: string | null, requestUrl: URL): boolean {
  if (!value) return false
  try {
    const origin = new URL(value).origin
    if (origin === requestUrl.origin || origin === siteOrigin) {
      return true
    }
    if (process.env.NODE_ENV === 'development') {
      const parsed = new URL(value)
      if (parsed.hostname === 'localhost' || parsed.hostname === '127.0.0.1') {
        return true
      }
    }
    return false
  } catch {
    return false
  }
}

export async function middleware(request: NextRequest) {
  const nonce = crypto.randomUUID()
  const isDev = process.env.NODE_ENV === "development"

  const cspDirectives = [
    "default-src 'self'",
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic'${isDev ? " 'unsafe-eval'" : ""}`,
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: blob:",
    "font-src 'self'",
    "connect-src 'self' https://vitals.vercel-insights.com",
    "base-uri 'self'",
    "form-action 'self'",
    "object-src 'none'",
    "frame-ancestors 'none'",
    ...(isDev ? [] : ["upgrade-insecure-requests"]),
  ].join("; ")

  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-nonce', nonce)
  // Also pass the CSP in request headers so it can be read if needed, though 'x-nonce' is enough for the root layout
  requestHeaders.set('Content-Security-Policy', cspDirectives)

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    }
  })

  response.headers.set('Content-Security-Policy', cspDirectives)
  response.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()')
  response.headers.set('Cross-Origin-Opener-Policy', 'same-origin')

  const isAdminRoute = request.nextUrl.pathname.startsWith('/admin')
  const isLoginRoute = request.nextUrl.pathname === '/admin/login'
  const isApiAdminRoute = request.nextUrl.pathname.startsWith('/api/admin')
  const isApiLoginRoute = request.nextUrl.pathname === '/api/admin/login'

  // CSRF Mitigation for API routes
  if (isApiAdminRoute && ['POST', 'PUT', 'PATCH', 'DELETE'].includes(request.method)) {
    if (!isSameOrigin(request.headers.get('origin') ?? request.headers.get('referer'), request.nextUrl)) {
      return NextResponse.json({ error: 'CSRF Token Invalid' }, { status: 403, headers: response.headers })
    }
  }

  if (isAdminRoute && !isLoginRoute) {
    const session = request.cookies.get('admin_session')?.value
    if (!session) {
      return NextResponse.redirect(new URL('/admin/login', request.url), { headers: response.headers })
    }
    const parsed = await decrypt(session)
    if (!parsed) {
      return NextResponse.redirect(new URL('/admin/login', request.url), { headers: response.headers })
    }
  }

  if (isApiAdminRoute && !isApiLoginRoute) {
    const session = request.cookies.get('admin_session')?.value
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401, headers: response.headers })
    }
    const parsed = await decrypt(session)
    if (!parsed) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401, headers: response.headers })
    }
  }

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * We need the middleware to run on all pages for CSP, not just /admin
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}
