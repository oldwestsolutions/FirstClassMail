'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  Server,
  Activity,
  TrendingUp,
  Shield,
  Users,
  Send,
  FileCheck,
  Building2,
  Banknote,
  Brain,
  Settings,
  LogOut,
  Menu,
  X,
} from 'lucide-react'
import { useState } from 'react'
import { clsx } from 'clsx'
import { motion, AnimatePresence } from 'framer-motion'

const items = [
  { href: '/admin/dashboard', label: 'Overview', icon: LayoutDashboard },
  { href: '/admin/server', label: 'Server Health', icon: Server },
  { href: '/admin/platform', label: 'Platform Health', icon: Activity },
  { href: '/admin/earnings', label: 'Earnings', icon: TrendingUp },
  { href: '/admin/quality', label: 'Ad Quality', icon: Shield },
  { href: '/admin/subscribers', label: 'Subscribers', icon: Users },
  { href: '/admin/deliverability', label: 'Deliverability', icon: Send },
  { href: '/admin/compliance', label: 'Compliance', icon: FileCheck },
  { href: '/admin/carriers', label: 'Carriers', icon: Building2 },
  { href: '/admin/payouts', label: 'Payouts', icon: Banknote },
  { href: '/admin/intelligence', label: 'Intelligence', icon: Brain },
  { href: '/admin/settings', label: 'Settings', icon: Settings },
] as const

export function AdminSidebar({ onSignOut }: { onSignOut: () => void }) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const nav = (
    <>
      <div className="mb-8 flex items-center gap-2 px-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500/90 to-red-600 text-sm font-bold text-white">
          AD
        </div>
        <div>
          <p className="font-serif text-sm text-white">Admin</p>
          <p className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">Console</p>
        </div>
      </div>
      <nav className="flex flex-1 flex-col gap-1 overflow-y-auto">
        {items.map(({ href, label, icon: Icon }) => {
          const active = pathname === href
          return (
            <Link
              key={href}
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
        <div className="mb-3 px-2">
          <p className="truncate text-xs text-neutral-500">admin@firstclassmail.xyz</p>
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
      <aside className="fixed left-0 top-0 z-40 hidden h-screen w-64 flex-col border-r border-white/10 bg-black/50 px-4 py-6 backdrop-blur-xl lg:flex">
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
            />
            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              className="fixed left-0 top-0 z-50 flex h-full w-[min(100%,18rem)] flex-col border-r border-white/10 bg-neutral-950/95 px-4 py-6 backdrop-blur-xl lg:hidden"
            >
              <button type="button" className="mb-4 ml-auto text-neutral-400" onClick={() => setOpen(false)}>
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
