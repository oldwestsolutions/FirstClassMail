'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  BarChart3,
  Brain,
  DollarSign,
  Wallet,
  Megaphone,
  Image,
  Mail,
  BookUser,
  Clock,
  LogOut,
  Menu,
  X,
} from 'lucide-react'
import { useState } from 'react'
import { clsx } from 'clsx'
import { motion, AnimatePresence } from 'framer-motion'
import { hrefForCampaignSegment, campaignNavActive, useCampaignPaths } from '@/components/campaign/CampaignPathContext'

const items = [
  { segment: '/dashboard', label: 'Overview', icon: LayoutDashboard },
  { segment: '/analytics', label: 'Analytics', icon: BarChart3 },
  { segment: '/intelligence', label: 'Intelligence', icon: Brain },
  { segment: '/spending', label: 'Ad Spend', icon: DollarSign },
  { segment: '/wallet', label: 'Wallet', icon: Wallet },
  { segment: '/campaigns', label: 'Campaigns', icon: Megaphone },
  { segment: '/creatives', label: 'Creatives', icon: Image },
  { segment: '/inbox', label: 'Inbox', icon: Mail },
  { segment: '/contacts', label: 'Contacts', icon: BookUser },
  { segment: '/history', label: 'History', icon: Clock },
] as const

export function CampaignSidebar({ onSignOut }: { onSignOut: () => void }) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const { shortPaths } = useCampaignPaths()

  const nav = (
    <>
      <div className="mb-8 flex items-center gap-2 px-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 text-sm font-bold text-white">
          FC
        </div>
        <div>
          <p className="font-serif text-sm text-white">Campaign</p>
          <p className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">Portal</p>
        </div>
      </div>
      <nav className="flex flex-1 flex-col gap-1">
        {items.map(({ segment, label, icon: Icon }) => {
          const href = hrefForCampaignSegment(shortPaths, segment)
          const active = campaignNavActive(pathname, shortPaths, segment)
          return (
            <Link
              key={segment}
              href={href}
              onClick={() => setOpen(false)}
              className={clsx(
                'flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition',
                active ? 'bg-white/10 text-white' : 'text-neutral-400 hover:bg-white/5 hover:text-neutral-200'
              )}
            >
              <Icon className="h-4 w-4 shrink-0" strokeWidth={1.5} />
              {label}
            </Link>
          )
        })}
      </nav>
      <div className="mt-auto border-t border-white/10 pt-4">
        <div className="mb-3 flex items-center gap-3 px-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-xs text-neutral-300">CM</div>
          <div className="min-w-0">
            <p className="truncate text-xs text-neutral-400">campaign@firstclassmail.xyz</p>
          </div>
        </div>
        <button
          type="button"
          onClick={onSignOut}
          className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-sm text-red-300/90 hover:bg-red-500/10"
        >
          <LogOut className="h-4 w-4" />
          Sign out
        </button>
      </div>
    </>
  )

  return (
    <>
      <button
        type="button"
        className="fixed left-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white lg:hidden"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
      >
        <Menu className="h-5 w-5" />
      </button>
      <aside className="fixed left-0 top-0 z-40 hidden h-screen w-64 flex-col border-r border-white/10 bg-black/40 px-4 py-6 backdrop-blur-xl lg:flex">
        {nav}
      </aside>
      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/60 lg:hidden"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            />
            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.25 }}
              className="fixed left-0 top-0 z-50 flex h-full w-[min(100%,18rem)] flex-col border-r border-white/10 bg-neutral-950/95 px-4 py-6 backdrop-blur-xl lg:hidden"
            >
              <button type="button" className="mb-4 ml-auto text-neutral-400" onClick={() => setOpen(false)} aria-label="Close">
                <X className="h-5 w-5" />
              </button>
              {nav}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
