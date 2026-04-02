/**
 * Hostnames for campaign/admin apps — must match `next.config.js` rewrites and Vercel domain aliases.
 * Set `NEXT_PUBLIC_CAMPAIGN_URL` / `NEXT_PUBLIC_ADMIN_URL` to full origins (e.g. https://campaign.firstclassmail.xyz).
 */
export function mainSiteHostname(): string {
  const u = process.env.NEXT_PUBLIC_MAIN_SITE_URL
  if (u) {
    try {
      return new URL(u).hostname.toLowerCase()
    } catch {
      /* fall through */
    }
  }
  return 'firstclassmail.xyz'
}

export function campaignAppHostname(): string {
  const u = process.env.NEXT_PUBLIC_CAMPAIGN_URL
  if (u) {
    try {
      return new URL(u).hostname
    } catch {
      /* fall through */
    }
  }
  return `campaign.${mainSiteHostname()}`
}

export function adminAppHostname(): string {
  const u = process.env.NEXT_PUBLIC_ADMIN_URL
  if (u) {
    try {
      return new URL(u).hostname
    } catch {
      /* fall through */
    }
  }
  return `admin.${mainSiteHostname()}`
}

/** Prefer forwarded host (Vercel / proxies) so subdomain detection matches the browser URL. */
export function hostFromRequestHeaders(getHeader: (name: string) => string | null): string {
  const xf = getHeader('x-forwarded-host')
  if (xf) {
    const first = xf.split(',')[0]?.trim()
    if (first) return first
  }
  return getHeader('host') ?? ''
}

function bareHost(hostHeader: string): string {
  return hostHeader.split(':')[0]?.toLowerCase() ?? ''
}

/** `Host` / `x-forwarded-host`: campaign app, production or `campaign.localhost` dev. */
export function isCampaignAppHost(hostHeader: string): boolean {
  const h = bareHost(hostHeader)
  if (!h) return false
  if (h.startsWith('campaign.localhost')) return true
  const apex = mainSiteHostname()
  return h === campaignAppHostname().toLowerCase() || (apex.length > 0 && h === `campaign.${apex}`)
}

export function isAdminAppHost(hostHeader: string): boolean {
  const h = bareHost(hostHeader)
  if (!h) return false
  if (h.startsWith('admin.localhost')) return true
  const apex = mainSiteHostname()
  return h === adminAppHostname().toLowerCase() || (apex.length > 0 && h === `admin.${apex}`)
}
