'use client'

import { Fragment, useState, useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Mail,
  ArrowRight,
  KeyRound,
  CheckCircle,
  Shield,
} from 'lucide-react'
import Link from 'next/link'
import { PortalMockMini, PortalProductDemo } from '@/components/PortalMock'
import { MarketingFooter } from '@/components/marketing/MarketingFooter'
import { PathIllustration } from '@/components/PracticeIllustrations'
import { campaignAbsoluteUrl } from '@/lib/publicUrls'

/** Smooth luxury-style easing (slow-out) */
const luxeOut = [0.45, 0, 0.2, 1] as const

/** Gentle spring — avoids abrupt “snap” vs stiff tweens */
const overlaySpring = { type: 'spring' as const, stiffness: 220, damping: 34, mass: 0.85 }
const overlayExit = { duration: 0.32, ease: luxeOut }

function IllustrationHoverCard({
  title,
  body,
  preset,
  mode = 'simple',
  pillar,
  isActive,
  href,
}: {
  title: string
  body: string
  preset: string
  mode?: 'simple' | 'pillar'
  pillar?: { border: string; bar: string }
  /** Overlay visible; parent grid ensures one card active at a time. */
  isActive: boolean
  /** When set (Correspondence cards), entire card links to the feature page. */
  href?: string
}) {
  const slug = `${preset}-${title}`.replace(/\s+/g, '-').toLowerCase()

  const overlay = (
    <motion.div
      className={`absolute inset-0 z-20 flex flex-col items-center justify-center overflow-hidden p-3 sm:p-4 ${isActive ? 'pointer-events-auto' : 'pointer-events-none'}`}
      initial={false}
      animate={{ opacity: isActive ? 1 : 0 }}
      transition={isActive ? overlaySpring : overlayExit}
      style={{ willChange: 'opacity' }}
      aria-hidden={!isActive}
    >
      <motion.div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-white via-white to-neutral-50/95 backdrop-blur-md"
        initial={false}
        animate={{ opacity: isActive ? 1 : 0 }}
        transition={isActive ? overlaySpring : overlayExit}
      />
      <motion.div
        className="relative z-10 max-h-[88%] w-full max-w-[17rem] overflow-y-auto rounded-xl border border-neutral-200/90 bg-white p-4 text-left shadow-[0_12px_40px_-8px_rgba(0,0,0,0.14),0_4px_16px_-4px_rgba(0,0,0,0.07)] ring-1 ring-black/[0.06] sm:max-w-none sm:p-5"
        initial={false}
        animate={
          isActive
            ? { opacity: 1, y: 0, scale: 1 }
            : { opacity: 0, y: 10, scale: 0.985 }
        }
        transition={isActive ? overlaySpring : { opacity: overlayExit, y: overlayExit, scale: overlayExit }}
        style={{ willChange: 'transform, opacity' }}
      >
        <p className="text-[0.8125rem] leading-relaxed text-neutral-700 sm:text-sm">{body}</p>
      </motion.div>
    </motion.div>
  )

  const inner = (
    <>
      <p id={`card-desc-${slug}`} className="sr-only">
        {body}
      </p>
      <div className="relative z-0 flex w-full flex-col items-center">
        <div className="w-full shrink-0 px-0.5 text-center">
          <h3 className="mx-auto max-w-[20ch] font-serif text-[1.125rem] font-medium leading-tight tracking-[-0.02em] text-neutral-900 sm:text-[1.25rem]">
            {title}
          </h3>
        </div>
        <div className="relative mx-auto mt-3 w-full max-w-[220px] shrink-0 sm:max-w-[236px]">
          <motion.div
            aria-hidden
            className="will-change-transform"
            initial={false}
            animate={isActive ? { y: 0 } : { y: [0, -4, 0] }}
            transition={
              isActive
                ? { y: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }
                : { y: { duration: 6, repeat: Infinity, ease: 'easeInOut' } }
            }
          >
            <PortalMockMini preset={preset} compactHeader />
          </motion.div>
        </div>
      </div>
      {overlay}
    </>
  )

  if (mode === 'pillar' && pillar) {
    return (
      <div
        className={`flex min-h-full flex-col overflow-hidden rounded-2xl border border-neutral-200/85 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04),0_10px_32px_-10px_rgba(0,0,0,0.07),inset_0_0_0_1px_rgba(255,255,255,0.6)] ${pillar.border} border-l-[1.5px]`}
      >
        <div className={`h-px w-full shrink-0 opacity-90 ${pillar.bar}`} aria-hidden />
        <div
          role="group"
          tabIndex={0}
          aria-describedby={`card-desc-${slug}`}
          aria-expanded={isActive}
          className={`relative flex flex-col items-center bg-gradient-to-b from-white px-5 py-5 text-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-400 sm:px-6 sm:py-6 ${
            isActive ? 'to-neutral-50/80' : 'to-neutral-50/40'
          }`}
        >
          {inner}
        </div>
      </div>
    )
  }

  const simpleClassName =
    'relative flex flex-col overflow-hidden rounded-2xl border border-neutral-200/90 bg-gradient-to-b from-white to-neutral-50/30 px-5 py-5 text-center shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_28px_-10px_rgba(0,0,0,0.07)] transition-[border-color,box-shadow] duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-400 sm:px-6 sm:py-6 [@media(hover:hover)]:hover:border-neutral-300/90 [@media(hover:hover)]:hover:shadow-[0_4px_32px_-12px_rgba(0,0,0,0.1)]'

  if (href) {
    return (
      <Link
        href={href}
        className={`${simpleClassName} block cursor-pointer`}
        aria-describedby={`card-desc-${slug}`}
        aria-expanded={isActive}
      >
        {inner}
      </Link>
    )
  }

  return (
    <div
      role="group"
      tabIndex={0}
      aria-describedby={`card-desc-${slug}`}
      aria-expanded={isActive}
      className={simpleClassName}
    >
      {inner}
    </div>
  )
}

function IsoBlock({ className, delay = 0 }: { className: string; delay?: number }) {
  return (
    <motion.div
      className="relative h-[5.5rem] w-[5.5rem] sm:h-24 sm:w-24 [perspective:900px]"
      initial={false}
    >
      <motion.div
        className={`absolute inset-0 rounded-2xl border border-black/10 ${className}`}
        style={{ transformStyle: 'preserve-3d' }}
        animate={{
          rotateX: [14, 22, 14],
          rotateY: [-18, -10, -18],
          y: [0, -4, 0],
        }}
        transition={{ duration: 14 + delay, repeat: Infinity, ease: 'easeInOut', delay }}
      />
    </motion.div>
  )
}

export default function MarketingHome() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [headerHidden, setHeaderHidden] = useState(false)
  const [openPillarTitle, setOpenPillarTitle] = useState<string | null>(null)
  const [openCorrespondencePreset, setOpenCorrespondencePreset] = useState<string | null>(null)
  const pillarGridRef = useRef<HTMLDivElement>(null)
  const correspondenceGridRef = useRef<HTMLDivElement>(null)
  const lastScrollY = useRef(0)
  const ticking = useRef(false)

  const clearPillarIfFocusLeft = () => {
    requestAnimationFrame(() => {
      const active = document.activeElement
      if (pillarGridRef.current?.contains(active)) return
      setOpenPillarTitle(null)
    })
  }

  const clearCorrespondenceIfFocusLeft = () => {
    requestAnimationFrame(() => {
      const active = document.activeElement
      if (correspondenceGridRef.current?.contains(active)) return
      setOpenCorrespondencePreset(null)
    })
  }

  useEffect(() => {
    lastScrollY.current = typeof window !== 'undefined' ? window.scrollY : 0
  }, [])

  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return
      ticking.current = true
      requestAnimationFrame(() => {
        const y = window.scrollY
        const prev = lastScrollY.current
        const delta = y - prev
        if (y < 48) {
          setHeaderHidden(false)
        } else if (delta > 6) {
          setHeaderHidden(true)
        } else if (delta < -6) {
          setHeaderHidden(false)
        }
        lastScrollY.current = y
        ticking.current = false
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const pillars = [
    {
      accent: 'bg-rgb-red/90',
      border: 'border-l-rgb-red/88',
      illustration: 'notifications',
      title: 'Notifications',
      body: 'Real-time alerts and status updates for every message—delivery confirmations, policy changes, and system events stay organized in your correspondence feed.',
    },
    {
      accent: 'bg-rgb-green/90',
      border: 'border-l-rgb-green/88',
      illustration: 'payments',
      title: 'Payments',
      body: 'USDC-powered billing and settlement within the platform—subscription fees, service charges, and payouts processed without leaving your mail workflow.',
    },
    {
      accent: 'bg-rgb-blue/90',
      border: 'border-l-rgb-blue/88',
      illustration: 'security',
      title: 'Security',
      body: 'End-to-end encryption, zero-knowledge verification, and audit-ready compliance controls protecting every thread and transaction.',
    },
  ] as const

  const mailPath = [
    {
      step: 'Step 1',
      title: 'Automation',
      illustration: 'users',
      body: 'Use automated intake and sorting to classify inbound messages by policy, priority, and destination.',
    },
    {
      step: 'Step 2',
      title: 'Enforcement',
      illustration: 'platform',
      body: 'Configure and enforce email authentication standards before messages are released or forwarded.',
    },
    {
      step: 'Step 3',
      title: 'Storage',
      illustration: 'office',
      body: 'Retain controlled records and archive communication history for continuity, audit, and retrieval.',
    },
  ] as const

  return (
    <div className="min-h-screen bg-white text-neutral-600">
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-neutral-900/30"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            />
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.28 }}
              className="fixed right-0 top-0 z-50 flex h-full w-[min(100%,22rem)] flex-col rounded-l-[2rem] border-l border-neutral-200 bg-white shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-neutral-200 p-6">
                <span className="font-serif text-lg text-neutral-900">Menu</span>
                <button
                  type="button"
                  className="rounded-full p-2 text-neutral-500 transition hover:bg-neutral-100 hover:text-neutral-900"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <nav className="flex flex-col gap-1 p-5">
                {[
                  ['Correspondence', '/correspondence'],
                  ['The Journey', '/journey'],
                  ['Pricing', '/pricing'],
                  ['Contact', '/#contact'],
                ].map(([label, href]) => (
                  <Link
                    key={href}
                    href={href}
                    className="rounded-2xl px-4 py-3.5 text-sm text-neutral-600 transition hover:bg-neutral-100 hover:text-neutral-900"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
                <a
                  href={campaignAbsoluteUrl('/')}
                  className="btn btn-primary mt-6 justify-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Open portal
                </a>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      <motion.header
        className="fixed left-0 right-0 top-0 z-50 border-b border-transparent bg-white/80 pb-4 pt-4 backdrop-blur-md sm:pt-6"
        initial={false}
        animate={{ y: headerHidden ? '-100%' : '0%' }}
        transition={{ type: 'tween', duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
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
              <Link href="/correspondence" className="text-sm text-neutral-600 transition hover:text-neutral-900">
                Correspondence
              </Link>
              <Link href="/journey" className="text-sm text-neutral-600 transition hover:text-neutral-900">
                The Journey
              </Link>
              <Link href="/pricing" className="text-sm text-neutral-600 transition hover:text-neutral-900">
                Pricing
              </Link>
              <a href={campaignAbsoluteUrl('/')} className="btn btn-primary px-6 py-2.5 text-xs uppercase tracking-widest">
                Open portal
              </a>
            </div>
            <button
              type="button"
              className="rounded-full p-2.5 text-neutral-600 transition hover:bg-neutral-100 hover:text-neutral-900 md:hidden"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.25} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </nav>
        </div>
      </motion.header>

      <div className="bg-white text-neutral-900">
        <div className="h-[4rem] bg-white sm:h-[5rem]" aria-hidden />

        <header className="border-b border-neutral-200 bg-white">
          <div className="shell py-12 md:py-20 lg:py-24">
            <div className="grid grid-cols-12 gap-x-6 gap-y-10 lg:gap-x-10 lg:gap-y-12">
              <div className="col-span-12 flex flex-col justify-start lg:col-span-7 lg:row-span-1">
                <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.4em] text-neutral-500">
                  FirstClassMail
                </p>
                <h1 className="mb-6 max-w-[22ch] font-serif text-4xl font-medium leading-[1.08] text-neutral-900 md:text-5xl lg:text-[3.5rem] xl:text-6xl">
                  Encrypted messaging, verified connections, privacy by design.
                </h1>
                <p className="max-w-xl text-base leading-[1.75] text-neutral-600 md:text-lg">
                  FirstClassMail is built for professional correspondence: TLS-backed transport, identity checks before threads
                  open, and routing through a neutral intermediary. The objective is predictable delivery and governance—not
                  exposing personal endpoints to the open web or uncontrolled resale of mailbox data.
                </p>
                <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <Link href="/signup" className="btn btn-primary px-9 py-3.5 text-xs uppercase tracking-[0.2em]">
                    Create Account
                    <KeyRound className="ml-2 h-4 w-4" strokeWidth={1.5} />
                  </Link>
                  <Link
                    href="/journey"
                    className="text-center text-sm text-neutral-500 underline-offset-4 transition hover:text-neutral-900 hover:underline sm:text-left"
                  >
                    Mail Protocol
                  </Link>
                </div>
              </div>
              <div className="col-span-12 flex items-center justify-center gap-5 sm:gap-8 lg:col-span-5 lg:items-end lg:justify-end lg:self-stretch lg:pb-3">
                <div className="surface-panel flex flex-wrap items-center justify-center gap-5 rounded-[2rem] p-7 sm:gap-8 sm:p-9">
                  <IsoBlock className="bg-rgb-red" delay={0} />
                  <IsoBlock className="bg-rgb-green" delay={2} />
                  <IsoBlock className="bg-rgb-blue" delay={4} />
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>

      <section id="correspondence" className="border-b border-neutral-200 bg-neutral-50">
        <div className="shell py-20 md:py-28">
          <div className="grid grid-cols-12 gap-x-6 gap-y-10 lg:gap-x-10">
            <div className="col-span-12 lg:col-span-5 lg:col-start-1">
              <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-neutral-500">Correspondence</p>
              <h2 className="mt-5 font-serif text-3xl leading-tight text-neutral-900 md:text-4xl lg:text-[2.75rem]">
                Confidentiality without compromise.
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-6 lg:col-start-7 lg:row-start-1 lg:self-end">
              <p className="leading-[1.8] text-neutral-600 lg:text-[1.05rem]">
                Addressing and message content remain inside the platform’s control plane: encrypted transit, verified sourcing,
                and intermediary handling replace ad hoc disclosure to list vendors or ungoverned marketing resale. Operations
                teams retain audit-friendly mail without treating every thread as a data product.
              </p>
            </div>
            <div
              ref={correspondenceGridRef}
              className="col-span-12 mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-8 lg:grid-cols-3 lg:gap-6"
              onMouseLeave={() => setOpenCorrespondencePreset(null)}
            >
              {(
                [
                  [
                    'Forms',
                    'Structured intake over TLS: submissions land in verified threads with clear field history and replies kept in one place instead of scattered across inboxes.',
                    'forms',
                    '/forms',
                  ],
                  [
                    'eDocuments',
                    'PDFs and packets stay bound to the thread for provenance, retrieval, and policy—without parallel file silos or ad hoc attachment chains.',
                    'edocuments',
                    '/edocuments',
                  ],
                  [
                    'Blockchain',
                    'Stablecoin settlement and programmable wallets embedded in the mail workflow—USDC for subscriptions, automated revenue sharing, and on-chain audit trails.',
                    'blockchain',
                    '/blockchain',
                  ],
                ] as const
              ).map(([title, body, preset, href], i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  onMouseEnter={() => setOpenCorrespondencePreset(preset)}
                  onFocusCapture={() => setOpenCorrespondencePreset(preset)}
                  onBlurCapture={clearCorrespondenceIfFocusLeft}
                >
                  <IllustrationHoverCard
                    title={title}
                    body={body}
                    preset={preset}
                    href={href}
                    isActive={openCorrespondencePreset === preset}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="practice" className="border-b border-neutral-200 bg-neutral-50" aria-labelledby="practice-heading">
        <div className="flex min-h-[100svh] flex-col justify-center py-20 md:py-28">
          <div className="shell">
            <div className="mx-auto max-w-3xl text-center">
              <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-neutral-500">Practice</p>
              <h2
                id="practice-heading"
                className="mt-5 font-serif text-[clamp(1.75rem,4vw,3rem)] font-medium leading-tight text-neutral-900"
              >
                FirstClassMail Delivers
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-neutral-600 md:text-lg">
                Notifications, payments, and security are the primary day-to-day surfaces. The diagram that follows shows how sessions
                move from the client through FirstClassMail to each office’s own mail endpoint—authenticated, routed, and released
                under policy rather than across an unmanaged internet path.
              </p>
            </div>

            <div
              ref={pillarGridRef}
              className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-3 md:gap-6 lg:gap-8"
              onMouseLeave={() => setOpenPillarTitle(null)}
            >
              {pillars.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  onMouseEnter={() => setOpenPillarTitle(p.title)}
                  onFocusCapture={() => setOpenPillarTitle(p.title)}
                  onBlurCapture={clearPillarIfFocusLeft}
                >
                  <IllustrationHoverCard
                    mode="pillar"
                    title={p.title}
                    body={p.body}
                    preset={p.illustration}
                    pillar={{ border: p.border, bar: p.accent }}
                    isActive={openPillarTitle === p.title}
                  />
                </motion.div>
              ))}
            </div>

            <div className="mx-auto mt-20 max-w-5xl border-t border-neutral-200 pt-20 md:mt-24 md:pt-24">
              <div className="mx-auto max-w-2xl text-center">
                <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-neutral-500">Message path</p>
                <h3 className="mt-4 font-serif text-2xl text-neutral-900 md:text-3xl">From users to our servers to the office</h3>
                <p className="mt-4 text-neutral-600">
                  The path is deliberately segmented: client, platform, and office mail server. Each hop applies encryption and
                  policy at the boundary; traffic is not treated as an open relay across the public internet to arbitrary
                  inboxes.
                </p>
              </div>
              <div className="mt-14 flex flex-col items-stretch gap-8 lg:flex-row lg:items-stretch lg:justify-center lg:gap-4">
                {mailPath.map((segment, i) => (
                  <Fragment key={segment.title}>
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.06 }}
                      className="flex w-full flex-1 flex-col rounded-2xl border border-neutral-200/90 bg-gradient-to-b from-white to-neutral-50/35 p-8 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(0,0,0,0.08)] transition-[border-color,box-shadow] duration-300 hover:border-neutral-300/90 hover:shadow-[0_4px_28px_-10px_rgba(0,0,0,0.1)] md:p-9 lg:min-w-0 lg:max-w-sm lg:items-start lg:text-left xl:max-w-none"
                    >
                      <div className="mx-auto w-full shrink-0 lg:mx-0">
                        <motion.div
                          aria-hidden
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.12 }}
                        >
                          <PathIllustration variant={segment.illustration} />
                        </motion.div>
                      </div>
                      <p className="mt-6 w-full font-mono text-[10px] uppercase tracking-[0.35em] text-neutral-500">{segment.step}</p>
                      <h4 className="mt-3 w-full text-center font-serif text-xl font-medium text-neutral-900 md:text-2xl lg:max-w-none lg:self-stretch">
                        {segment.title}
                      </h4>
                      <p className="mt-4 min-h-[84px] w-full text-sm leading-[1.65] text-neutral-600">{segment.body}</p>
                    </motion.div>
                    {i < mailPath.length - 1 && (
                      <div className="flex shrink-0 items-center justify-center py-0 lg:w-10 lg:py-0" aria-hidden>
                        <ArrowRight className="h-5 w-5 text-neutral-300 rotate-90 lg:rotate-0" strokeWidth={1.25} />
                      </div>
                    )}
                  </Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-neutral-200 bg-white" aria-labelledby="demo-heading">
        <div className="flex min-h-[85svh] flex-col justify-center py-20 md:py-28">
          <div className="shell">
            <div className="mx-auto max-w-3xl text-center">
              <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-neutral-500">Client Portal</p>
              <h2
                id="demo-heading"
                className="mt-5 font-serif text-[clamp(1.75rem,4vw,3rem)] font-medium text-neutral-900"
              >
                Mail Box Protocol
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-neutral-600">
                The operational layout reflects how professional mail is triaged: verified threads, transport posture, outbound
                status, and composition within policy—presented as the standard workflow teams use to review and release
                correspondence.
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="mx-auto mt-14 max-w-6xl"
            >
              <PortalProductDemo />
            </motion.div>
          </div>
        </div>
      </section>

      <section id="contact" className="border-b border-neutral-200 bg-neutral-50">
        <div className="shell py-20 md:py-28">
          <div className="mx-auto max-w-3xl rounded-2xl border border-neutral-200/90 bg-gradient-to-b from-white to-neutral-50/40 px-8 py-14 text-center shadow-[0_1px_2px_rgba(0,0,0,0.04),0_12px_40px_-12px_rgba(0,0,0,0.08)] md:px-14 md:py-16">
            <h2 className="font-serif text-3xl text-neutral-900 md:text-4xl">Enterprise Mail Carrier</h2>
            <p className="mx-auto mt-6 max-w-lg leading-relaxed text-neutral-600">
              Encrypted transit, verified recipients, and intermediary routing in one stack. Open the portal to provision accounts
              and run mail on FirstClassMail.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
              <a href={campaignAbsoluteUrl('/')} className="btn btn-primary px-11 py-3.5 text-xs uppercase tracking-[0.2em]">
                Enter portal
              </a>
              <Link
                href="/correspondence"
                className="rounded-full px-6 py-3 text-sm text-neutral-600 transition hover:bg-neutral-100 hover:text-neutral-900"
              >
                Correspondence
              </Link>
            </div>
          </div>
        </div>
      </section>

      <MarketingFooter />
    </div>
  )
}
