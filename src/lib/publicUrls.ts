import { adminAppHostname, campaignAppHostname, mainSiteHostname } from '@/lib/subdomainHosts'

/**
 * Canonical origins for subdomain apps — use for links from the main marketing site.
 */
export const CAMPAIGN_ORIGIN = (
  process.env.NEXT_PUBLIC_CAMPAIGN_URL ?? `https://${campaignAppHostname()}`
).replace(/\/$/, '')

export const ADMIN_ORIGIN = (
  process.env.NEXT_PUBLIC_ADMIN_URL ?? `https://${adminAppHostname()}`
).replace(/\/$/, '')

/** Main marketing site — use for “home” from subdomain apps. */
export const MAIN_SITE_ORIGIN = (
  process.env.NEXT_PUBLIC_MAIN_SITE_URL ?? `https://${mainSiteHostname()}`
).replace(/\/$/, '')

/** Full URL on the campaign host (paths match browser on subdomain: `/dashboard`, not `/campaign/dashboard`). */
export function campaignAbsoluteUrl(path = '/') {
  const p = path.startsWith('/') ? path : `/${path}`
  return `${CAMPAIGN_ORIGIN}${p}`
}

export function adminAbsoluteUrl(path = '/') {
  const p = path.startsWith('/') ? path : `/${path}`
  return `${ADMIN_ORIGIN}${p}`
}
