'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Mail, ArrowRight } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { campaignAbsoluteUrl } from '@/lib/publicUrls'

const nav = [
  { href: '/correspondence', label: 'Correspondence' },
  { href: '/journey', label: 'The Journey' },
  { href: '/practice', label: 'The Practice' },
] as const

export function MarketingHeader() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-neutral-900/30 md:hidden"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            />
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.28 }}
              className="fixed right-0 top-0 z-50 flex h-full w-[min(100%,22rem)] flex-col rounded-l-[2rem] border-l border-neutral-200 bg-white shadow-2xl md:hidden"
            >
              <div className="flex items-center justify-between border-b border-neutral-200 p-6">
                <span className="font-serif text-lg text-neutral-900">Menu</span>
                <button
                  type="button"
                  className="rounded-full p-2 text-neutral-500 transition hover:bg-neutral-100 hover:text-neutral-900"
                  onClick={() => setOpen(false)}
                  aria-label="Close"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <nav className="flex flex-col gap-1 p-5 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
                {nav.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className={`rounded-2xl px-4 py-3.5 text-sm transition hover:bg-neutral-100 hover:text-neutral-900 ${
                      pathname === href ? 'bg-neutral-100 font-medium text-neutral-900' : 'text-neutral-600'
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
                <Link
                  href="/#contact"
                  className="rounded-2xl px-4 py-3.5 text-sm text-neutral-600 transition hover:bg-neutral-100 hover:text-neutral-900"
                  onClick={() => setOpen(false)}
                >
                  Contact
                </Link>
                <a
                  href={campaignAbsoluteUrl('/')}
                  className="btn btn-primary mt-6 justify-center"
                  onClick={() => setOpen(false)}
                >
                  Open portal
                  <ArrowRight className="ml-2 h-4 w-4" strokeWidth={1.5} />
                </a>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      <header className="sticky top-0 z-50 border-b border-neutral-200/80 bg-white/95 pb-4 pt-[max(1rem,env(safe-area-inset-top))] backdrop-blur-md sm:pt-6">
        <div className="shell">
          <nav className="flex h-14 items-center justify-between rounded-full border border-neutral-200/90 bg-white/95 px-4 shadow-sm sm:h-[3.75rem] sm:px-6 lg:px-8">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-neutral-200 bg-neutral-50">
                <Mail className="h-4 w-4 text-neutral-900" strokeWidth={1.25} />
              </div>
              <div>
                <span className="font-serif text-lg tracking-wide text-neutral-900 md:text-xl">FirstClassMail</span>
                <p className="hidden font-mono text-[10px] uppercase tracking-[0.35em] text-neutral-500 sm:block">
                  Postal Service
                </p>
              </div>
            </Link>
            <div className="hidden items-center gap-6 md:flex lg:gap-8">
              {nav.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`text-sm transition hover:text-neutral-900 ${
                    pathname === href ? 'font-medium text-neutral-900' : 'text-neutral-600'
                  }`}
                >
                  {label}
                </Link>
              ))}
              <a href={campaignAbsoluteUrl('/')} className="btn btn-primary px-6 py-2.5 text-xs uppercase tracking-widest">
                Open portal
              </a>
            </div>
            <button
              type="button"
              className="rounded-full p-2.5 text-neutral-600 transition hover:bg-neutral-100 hover:text-neutral-900 md:hidden"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.25} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </nav>
        </div>
      </header>
    </>
  )
}
