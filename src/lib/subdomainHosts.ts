/**
 * Hostnames for campaign/admin apps — must match `next.config.js` rewrites and Vercel domain aliases.
 * Set `NEXT_PUBLIC_CAMPAIGN_URL` / `NEXT_PUBLIC_ADMIN_URL` to full origins (e.g. https://campaign.firstclassmail.xyz).
 */
export function campaignAppHostname(): string {
  const u = process.env.NEXT_PUBLIC_CAMPAIGN_URL
  if (u) {
    try {
      return new URL(u).hostname
    } catch {
      /* fall through */
    }
  }
  return 'campaign.firstclassmail.xyz'
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
  return 'admin.firstclassmail.xyz'
}

/** `Host` header (with optional port): campaign app, production or `campaign.localhost` dev. */
export function isCampaignAppHost(hostHeader: string): boolean {
  const h = hostHeader.split(':')[0]?.toLowerCase() ?? ''
  return h === campaignAppHostname().toLowerCase() || h.startsWith('campaign.localhost')
}

export function isAdminAppHost(hostHeader: string): boolean {
  const h = hostHeader.split(':')[0]?.toLowerCase() ?? ''
  return h === adminAppHostname().toLowerCase() || h.startsWith('admin.localhost')
}
