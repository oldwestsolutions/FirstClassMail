import { type NextRequest, NextResponse } from 'next/server'
import { hostFromRequestHeaders, isAdminAppHost, isCampaignAppHost } from '@/lib/subdomainHosts'

/**
 * Map campaign.* / admin.* (and localhost dev aliases) to internal `/campaign/*`, `/admin/*`
 * so the browser URL stays short (`/`, `/dashboard`) while Next resolves app routes.
 * Without this, `GET /` on a subdomain could hit the marketing `app/page.tsx`.
 */
export function middleware(request: NextRequest) {
  const host = hostFromRequestHeaders((name) => request.headers.get(name))
  const { pathname } = request.nextUrl

  if (pathname.startsWith('/_next') || pathname.startsWith('/api')) {
    return NextResponse.next()
  }

  if (isCampaignAppHost(host) && !pathname.startsWith('/campaign')) {
    const url = request.nextUrl.clone()
    const suffix = pathname === '/' ? '' : pathname
    url.pathname = `/campaign${suffix}`
    return NextResponse.rewrite(url)
  }

  if (isAdminAppHost(host) && !pathname.startsWith('/admin')) {
    const url = request.nextUrl.clone()
    const suffix = pathname === '/' ? '' : pathname
    url.pathname = `/admin${suffix}`
    return NextResponse.rewrite(url)
  }

  return NextResponse.next()
}

export const config = {
  // Include `/` explicitly — the regex below does not match the index path on some Next versions,
  // so subdomain roots would skip middleware and render `app/page.tsx` (marketing).
  matcher: [
    '/',
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)',
  ],
}
