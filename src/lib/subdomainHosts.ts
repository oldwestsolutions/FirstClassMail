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
