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
import { PathIllustration, PillarIllustration } from '@/components/PracticeIllustrations'

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

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [headerHidden, setHeaderHidden] = useState(false)
  const lastScrollY = useRef(0)
  const ticking = useRef(false)

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
      accent: 'bg-rgb-red',
      border: 'border-l-rgb-red',
      illustration: 'encrypted',
      title: 'Encrypted message transmission',
      body: 'All communication is securely encrypted end to end across our infrastructure, so conversations stay confidential and protected from unauthorized access.',
    },
    {
      accent: 'bg-rgb-green',
      border: 'border-l-rgb-green',
      illustration: 'verified',
      title: 'Verified sourcing',
      body: 'Users connect with confidence: identities are verified so you know you are speaking with the intended party—not an impersonator or wrong contact.',
    },
    {
      accent: 'bg-rgb-blue',
      border: 'border-l-rgb-blue',
      illustration: 'privacy',
      title: 'Privacy and simplicity',
      body: 'No doxxing-by-default, no selling of email addresses or message data to brokers. A professional third party manages communications so you stay in control.',
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
                  ['Practice', '/practice'],
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
                <Link
                  href="/portal"
                  className="btn btn-primary mt-6 justify-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Client portal
                </Link>
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
                <span className="font-serif text-lg tracking-wide text-neutral-900 md:text-xl">FirstClass Mail</span>
                <p className="hidden font-mono text-[10px] uppercase tracking-[0.35em] text-neutral-500 sm:block">
                  Encrypted Transit
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
              <Link href="/practice" className="text-sm text-neutral-600 transition hover:text-neutral-900">
                Practice
              </Link>
              <Link href="/portal" className="btn btn-primary px-6 py-2.5 text-xs uppercase tracking-widest">
                Open portal
              </Link>
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
                  FirstClassMail provides secure, encrypted messaging so every conversation stays private. Connect directly with
                  exactly who you are looking for—verified sourcing ensures trust and authenticity. Reduce doxxing risk, avoid
                  email resale to data brokers, and rely on a professional third party to manage communications with simplicity,
                  safety, and reliability.
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
                    Messaging Protocol
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
                When you use FirstClassMail, you are not handing your email address or message content to list brokers. The
                service is built for encrypted transmission, verified sourcing, and a professional third party that manages
                communications—so you can focus on the conversation, not on exposure or resale.
              </p>
            </div>
            <div className="col-span-12 mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-8 lg:grid-cols-3 lg:gap-6">
              {(
                [
                  [
                    'Encryption first',
                    'TLS and strong encryption protect messages in transit; storage follows rigorous security practices so content stays private.',
                    'encryption',
                  ],
                  [
                    'Verified parties',
                    'Know you are connecting with the right person. Verified sourcing reduces impersonation and mistaken identity.',
                    'verified',
                  ],
                  [
                    'No data brokerage',
                    'We do not sell email addresses or message data to brokers. Your contact graph is not our product.',
                    'no-brokerage',
                  ],
                ] as const
              ).map(([title, body, preset]) => (
                <div
                  key={title}
                  className="relative flex flex-col rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm ring-1 ring-neutral-100 transition hover:border-neutral-300 hover:ring-neutral-200 md:p-9"
                >
                  <div className="flex justify-center md:justify-start">
                    <PortalMockMini preset={preset} />
                  </div>
                  <h3 className="mt-6 font-serif text-xl text-neutral-900">{title}</h3>
                  <p className="mt-5 text-sm leading-relaxed text-neutral-600">{body}</p>
                </div>
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
                Three pillars—encryption, verified sourcing, and privacy-first handling—define the platform. After the pillars,
                see how traffic moves from users through our servers to each business office’s mail system.
              </p>
            </div>

            <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-3 md:gap-6 lg:gap-8">
              {pillars.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className={`flex min-h-full flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm ${p.border} border-l-[5px]`}
                >
                  <div className={`h-1.5 w-full shrink-0 ${p.accent}`} aria-hidden />
                  <div className="flex flex-1 flex-col p-8 text-center md:p-10">
                    <div className="mx-auto">
                      <PillarIllustration variant={p.illustration} />
                    </div>
                    <h3 className="mt-8 font-serif text-xl text-neutral-900 md:text-2xl">{p.title}</h3>
                    <p className="mt-5 flex-1 text-left text-sm leading-[1.85] text-neutral-600">{p.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mx-auto mt-20 max-w-5xl border-t border-neutral-200 pt-20 md:mt-24 md:pt-24">
              <div className="mx-auto max-w-2xl text-center">
                <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-neutral-500">Message path</p>
                <h3 className="mt-4 font-serif text-2xl text-neutral-900 md:text-3xl">From users to our servers to the office</h3>
                <p className="mt-4 text-neutral-600">
                  Mail does not hop blindly across the open internet to random inboxes. It flows in three controlled segments: your
                  client, FirstClassMail, and the business office’s own mail server—each step encrypted and governed by policy.
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
                      className="flex w-full flex-1 flex-col rounded-3xl border border-neutral-200 bg-white p-8 text-center shadow-sm md:p-9 lg:min-w-0 lg:max-w-sm lg:text-left xl:max-w-none"
                    >
                      <div className="mx-auto shrink-0 lg:mx-0">
                        <PathIllustration variant={segment.illustration} />
                      </div>
                      <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.35em] text-neutral-500">{segment.step}</p>
                      <h4 className="mt-3 font-serif text-xl font-medium text-neutral-900 md:text-2xl">{segment.title}</h4>
                      <p className="mt-4 min-h-[84px] text-sm leading-[1.65] text-neutral-600">{segment.body}</p>
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
          <div className="mx-auto max-w-3xl rounded-[2rem] border border-neutral-200 bg-white px-8 py-14 text-center shadow-sm md:px-14 md:py-16">
            <h2 className="font-serif text-3xl text-neutral-900 md:text-4xl">Start secure messaging.</h2>
            <p className="mx-auto mt-6 max-w-lg leading-relaxed text-neutral-600">
              Open the client portal to create your account, send and receive over encrypted channels, and use verified sourcing
              for every connection—managed end to end by FirstClassMail.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
              <Link href="/portal" className="btn btn-primary px-11 py-3.5 text-xs uppercase tracking-[0.2em]">
                Enter portal
              </Link>
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
