'use client'

import { createContext, useContext } from 'react'

type Ctx = {
  /** True when served at campaign.* host — browser paths omit /campaign */
  shortPaths: boolean
}

const CampaignPathContext = createContext<Ctx>({ shortPaths: false })

export function CampaignPathProvider({ shortPaths, children }: { shortPaths: boolean; children: React.ReactNode }) {
  return <CampaignPathContext.Provider value={{ shortPaths }}>{children}</CampaignPathContext.Provider>
}

export function useCampaignPaths() {
  return useContext(CampaignPathContext)
}

/** Map app segment e.g. `/dashboard` or `/` to correct href */
export function hrefForCampaignSegment(shortPaths: boolean, segment: string): string {
  const p = segment.startsWith('/') ? segment : `/${segment}`
  if (shortPaths) {
    if (p.startsWith('/campaign')) return p.replace(/^\/campaign/, '') || '/'
    return p
  }
  if (p.startsWith('/campaign')) return p
  if (p === '/') return '/campaign'
  return `/campaign${p}`
}

/** Active nav item on either `campaign.*` (short) or `localhost` / main host (nested). */
export function campaignNavActive(pathname: string, shortPaths: boolean, segment: string): boolean {
  const a = hrefForCampaignSegment(false, segment)
  const b = hrefForCampaignSegment(true, segment)
  return [a, b].some((c) => pathname === c || (c !== '/' && pathname.startsWith(`${c}/`)))
}
