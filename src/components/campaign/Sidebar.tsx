'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Brain,
  BarChart3,
  DollarSign,
  Wallet,
  Mail,
  BookUser,
  FileText,
  Upload,
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
  { segment: '/dashboard', label: 'Intelligence', icon: Brain },
  { segment: '/analytics', label: 'Analytics', icon: BarChart3 },
  { segment: '/inbox', label: 'Mailbox', icon: Mail },
  { segment: '/contacts', label: 'Contacts', icon: BookUser },
  { segment: '/campaigns', label: 'Documents', icon: FileText },
  { segment: '/creatives', label: 'Upload', icon: Upload },
  { segment: '/spending', label: 'Ad Spend', icon: DollarSign },
  { segment: '/wallet', label: 'Wallet', icon: Wallet },
  { segment: '/history', label: 'History', icon: Clock },
] as const

export function CampaignSidebar({ onSignOut }: { onSignOut: () => void }) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const { shortPaths } = useCampaignPaths()

  const nav = (
    <>
      <div className="mb-8 flex items-center gap-3 px-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-neutral-200 bg-neutral-50">
          <Mail className="h-4 w-4 text-blue-600" strokeWidth={1.25} />
        </div>
        <div>
          <p className="font-serif text-sm tracking-wide text-neutral-900">Campaign</p>
          <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-neutral-500">Portal</p>
        </div>
      </div>
      <nav className="flex flex-1 flex-col gap-0.5">
        {items.map(({ segment, label, icon: Icon }) => {
          const href = hrefForCampaignSegment(shortPaths, segment)
          const active = campaignNavActive(pathname, shortPaths, segment)
          return (
            <Link
              key={segment}
              href={href}
              onClick={() => setOpen(false)}
              className={clsx(
                'flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors duration-200',
                active
                  ? 'bg-blue-50 text-blue-700 font-medium'
                  : 'text-neutral-500 hover:bg-neutral-100/70 hover:text-neutral-900'
              )}
            >
              <Icon className="h-4 w-4 shrink-0" strokeWidth={1.5} />
              {label}
            </Link>
          )
        })}
      </nav>
      <div className="mt-auto border-t border-neutral-200 pt-4">
        <div className="mb-3 flex items-center gap-3 px-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-neutral-50 text-xs font-medium text-neutral-600">CM</div>
          <div className="min-w-0">
            <p className="truncate text-xs text-neutral-500">campaign@firstclassmail.xyz</p>
          </div>
        </div>
        <button
          type="button"
          onClick={onSignOut}
          className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-sm text-neutral-500 transition hover:bg-red-50 hover:text-red-600"
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
        className="fixed left-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-200 bg-white text-neutral-600 shadow-sm lg:hidden"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
      >
        <Menu className="h-5 w-5" />
      </button>
      <aside className="fixed left-0 top-0 z-40 hidden h-screen w-64 flex-col border-r border-neutral-200 bg-white px-4 py-6 lg:flex">
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
              className="fixed inset-0 z-40 bg-neutral-900/20 backdrop-blur-sm lg:hidden"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            />
            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="fixed left-0 top-0 z-50 flex h-full w-[min(100%,18rem)] flex-col border-r border-neutral-200 bg-white px-4 py-6 shadow-2xl lg:hidden"
            >
              <button type="button" className="mb-4 ml-auto rounded-full p-1.5 text-neutral-400 hover:bg-neutral-100 hover:text-neutral-900" onClick={() => setOpen(false)} aria-label="Close">
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
