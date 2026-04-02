import { type NextRequest, NextResponse } from 'next/server'

/** Local dev only — production uses `next.config.js` host rewrites for campaign/admin subdomains. */
function isCampaignLocal(host: string) {
  return host.startsWith('campaign.localhost')
}

function isAdminLocal(host: string) {
  return host.startsWith('admin.localhost')
}

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || ''
  const { pathname } = request.nextUrl

  if (pathname.startsWith('/_next') || pathname.startsWith('/api')) {
    return NextResponse.next()
  }

  if (isCampaignLocal(host) && !pathname.startsWith('/campaign')) {
    const url = request.nextUrl.clone()
    const suffix = pathname === '/' ? '' : pathname
    url.pathname = `/campaign${suffix}`
    return NextResponse.rewrite(url)
  }

  if (isAdminLocal(host) && !pathname.startsWith('/admin')) {
    const url = request.nextUrl.clone()
    const suffix = pathname === '/' ? '' : pathname
    url.pathname = `/admin${suffix}`
    return NextResponse.rewrite(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)'],
}
