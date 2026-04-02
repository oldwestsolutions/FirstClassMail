'use client'

import { createContext, useContext } from 'react'

type Ctx = { shortPaths: boolean }

const AdminPathContext = createContext<Ctx>({ shortPaths: false })

export function AdminPathProvider({ shortPaths, children }: { shortPaths: boolean; children: React.ReactNode }) {
  return <AdminPathContext.Provider value={{ shortPaths }}>{children}</AdminPathContext.Provider>
}

export function useAdminPaths() {
  return useContext(AdminPathContext)
}

export function hrefForAdminSegment(shortPaths: boolean, segment: string): string {
  const p = segment.startsWith('/') ? segment : `/${segment}`
  if (shortPaths) {
    if (p.startsWith('/admin')) return p.replace(/^\/admin/, '') || '/'
    return p
  }
  if (p.startsWith('/admin')) return p
  if (p === '/') return '/admin'
  return `/admin${p}`
}

export function adminNavActive(pathname: string, shortPaths: boolean, segment: string): boolean {
  const a = hrefForAdminSegment(false, segment)
  const b = hrefForAdminSegment(true, segment)
  return [a, b].some((c) => pathname === c || (c !== '/' && pathname.startsWith(`${c}/`)))
}
