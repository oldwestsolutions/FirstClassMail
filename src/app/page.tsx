'use client'

import { useState, useEffect, useRef } from 'react'
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import {
  Mail,
  ArrowRight,
  CheckCircle,
  Inbox,
  Send,
  FileInput,
  Warehouse,
  MapPin,
  BookOpen,
  Shield,
  LifeBuoy,
  Building2,
  FileText,
  LayoutDashboard,
} from 'lucide-react'
import Link from 'next/link'

function TiltCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 280, damping: 30 })
  const springY = useSpring(y, { stiffness: 280, damping: 30 })
  const rotateX = useTransform(springY, [-0.5, 0.5], ['5deg', '-5deg'])
  const rotateY = useTransform(springX, [-0.5, 0.5], ['-5deg', '5deg'])

  return (
    <motion.div
      className={`relative ${className}`}
      style={{ perspective: 1000, transformStyle: 'preserve-3d' }}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect()
        x.set((e.clientX - r.left) / r.width - 0.5)
        y.set((e.clientY - r.top) / r.height - 0.5)
      }}
      onMouseLeave={() => {
        x.set(0)
        y.set(0)
      }}
    >
      <motion.div
        className="h-full overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm"
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      >
        {children}
      </motion.div>
    </motion.div>
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

  const journey = [
    {
      step: '01',
      title: 'Collection',
      text: 'Someone leaves a note at the window—a form, a reply, a campaign. Each piece is dated and addressed before it goes anywhere.',
    },
    {
      step: '02',
      title: 'Sorting',
      text: 'Like letters under a clerk’s hand, messages are read for the essentials: who it is for, what it concerns, where it should go next.',
    },
    {
      step: '03',
      title: 'Holding',
      text: 'When the mail is heavy, it waits in the back room—orderly stacks, nothing lost—until the route is ready to carry it out.',
    },
    {
      step: '04',
      title: 'Delivery',
      text: 'Carriers take each item to its destination: an inbox, a team, a system that asked for it. Proof of arrival closes the loop.',
    },
  ]

  const pillars = [
    {
      accent: 'bg-rgb-red',
      border: 'border-l-rgb-red',
      icon: FileInput,
      title: 'What people send',
      body: 'Inquiries from your site, responses to campaigns, notes meant for a particular desk—the same variety as paper, only it travels as data.',
    },
    {
      accent: 'bg-rgb-green',
      border: 'border-l-rgb-green',
      icon: Warehouse,
      title: 'Where it waits',
      body: 'When volume surges, nothing is thrown away. Items sit in line, in order, until the path ahead is clear—just as a post office holds sacks until the truck leaves.',
    },
    {
      accent: 'bg-rgb-blue',
      border: 'border-l-rgb-blue',
      icon: Send,
      title: 'How it reaches the reader',
      body: 'Addressed mail finds the right box. Marketing and transactional notes follow the same discipline: one message, one recipient, one receipt.',
    },
  ]

  const testimonials = [
    {
      name: 'Claire Whitmore',
      title: 'Operations director',
      quote:
        'We stopped thinking about “integrations” and started thinking about mail: who sent it, where it sat, when it arrived. That clarity changed how we work.',
    },
    {
      name: 'Daniel Okonkwo',
      title: 'Marketing lead',
      quote:
        'Our sends used to collide with quiet hours and rate limits. Now they behave like scheduled post—batched, paced, and delivered when the reader is there.',
    },
  ]

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
                  ['Correspondence', '#correspondence'],
                  ['The journey', '#journey'],
                  ['Practice', '#practice'],
                  ['Contact', '#contact'],
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
                  Digital post
                </p>
              </div>
            </Link>
            <div className="hidden items-center gap-8 md:flex lg:gap-10">
              <Link href="#correspondence" className="text-sm text-neutral-600 transition hover:text-neutral-900">
                Correspondence
              </Link>
              <Link href="#journey" className="text-sm text-neutral-600 transition hover:text-neutral-900">
                The journey
              </Link>
              <Link href="#practice" className="text-sm text-neutral-600 transition hover:text-neutral-900">
                Practice
              </Link>
              <Link href="/portal" className="btn btn-primary px-6 py-2.5 text-xs uppercase tracking-widest">
                Portal
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

      {/* Reserve space for fixed header so content is not covered */}
      <div className="h-[5.75rem] sm:h-[6.5rem]" aria-hidden />

      <header className="border-b border-neutral-200">
        <div className="shell py-16 md:py-24 lg:py-28">
          <div className="grid grid-cols-12 gap-x-6 gap-y-12 lg:gap-x-10 lg:gap-y-16">
            <div className="col-span-12 flex flex-col justify-end lg:col-span-7 lg:row-span-1">
              <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.4em] text-neutral-500">Internet correspondence</p>
              <h1 className="mb-8 max-w-[22ch] font-serif text-4xl font-medium leading-[1.08] text-neutral-900 md:text-5xl lg:text-[3.5rem] xl:text-6xl">
                The way mail has always worked—now over the network.
              </h1>
              <p className="max-w-xl text-base leading-[1.75] text-neutral-600 md:text-lg">
                Paper or wire, the idea is unchanged: a message is written, addressed, handled with care, and brought to the
                right door. FirstClass Mail carries that sequence for everything you collect and send online.
              </p>
              <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link href="/portal" className="btn btn-primary px-9 py-3.5 text-xs uppercase tracking-[0.2em]">
                  Open portal
                  <ArrowRight className="ml-2 h-4 w-4" strokeWidth={1.5} />
                </Link>
                <Link
                  href="#journey"
                  className="text-center text-sm text-neutral-500 underline-offset-4 transition hover:text-neutral-900 hover:underline sm:text-left"
                >
                  Read how delivery works
                </Link>
              </div>
            </div>
            <div className="col-span-12 flex items-end justify-center gap-5 sm:gap-8 lg:col-span-5 lg:justify-end">
              <div className="surface-panel flex flex-wrap items-center justify-center gap-5 rounded-[2rem] p-8 sm:gap-8 sm:p-10">
                <IsoBlock className="bg-rgb-red" delay={0} />
                <IsoBlock className="bg-rgb-green" delay={2} />
                <IsoBlock className="bg-rgb-blue" delay={4} />
              </div>
            </div>
          </div>
        </div>
      </header>

      <section id="correspondence" className="border-b border-neutral-200 bg-neutral-50">
        <div className="shell py-20 md:py-28">
          <div className="grid grid-cols-12 gap-x-6 gap-y-10 lg:gap-x-10">
            <div className="col-span-12 lg:col-span-5 lg:col-start-1">
              <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-neutral-500">Correspondence</p>
              <h2 className="mt-5 font-serif text-3xl leading-tight text-neutral-900 md:text-4xl lg:text-[2.75rem]">
                Not a metaphor—an office you never see.
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-6 lg:col-start-7 lg:row-start-1 lg:self-end">
              <p className="leading-[1.8] text-neutral-600 lg:text-[1.05rem]">
                In the physical world, mail moves through rooms you do not visit: counters, sorting tables, holding areas,
                outgoing carts. On the internet, the same roles exist—only the rooms are machines. Someone still decides what is
                legitimate, what waits, and what goes out next.
              </p>
            </div>
            <div className="col-span-12 mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-8 lg:grid-cols-3 lg:gap-6">
              {[
                ['Inquiry', 'A visitor leaves a card—structured fields, plain language, a return path.'],
                ['Announcement', 'A note to many recipients, each addressed in turn, none treated as bulk without intent.'],
                ['Reply', 'An answer routed back along the thread it came from—continuity, not noise.'],
              ].map(([title, body]) => (
                <div
                  key={title}
                  className="flex flex-col rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm transition hover:border-neutral-300 md:p-9"
                >
                  <h3 className="font-serif text-xl text-neutral-900">{title}</h3>
                  <p className="mt-5 text-sm leading-relaxed text-neutral-600">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="journey"
        className="relative border-b border-neutral-200 bg-white"
        aria-labelledby="journey-heading"
      >
        <div className="flex min-h-[100svh] flex-col justify-center py-20 md:py-28">
          <div className="shell">
            <div className="mx-auto max-w-3xl text-center">
              <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-neutral-500">The journey</p>
              <h2
                id="journey-heading"
                className="mt-5 font-serif text-[clamp(1.75rem,4vw,3rem)] font-medium leading-[1.15] text-neutral-900"
              >
                From hand to hand, in four beats.
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-neutral-600 md:text-lg">
                Four symmetrical stages—each with a clear role—mirror how physical mail is received, classified, queued, and
                released. The same discipline applies to every message you route online.
              </p>
            </div>

            <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 xl:grid-cols-4 xl:gap-6">
              {journey.map((step, i) => (
                <motion.article
                  key={step.step}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="flex min-h-[320px] flex-col rounded-3xl border border-neutral-200 bg-neutral-50/90 p-8 text-center shadow-sm lg:min-h-[340px] lg:p-10"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-neutral-200 bg-white font-mono text-sm font-medium text-neutral-900 shadow-sm">
                    {step.step}
                  </div>
                  <h3 className="mt-8 font-serif text-xl text-neutral-900 md:text-2xl">{step.title}</h3>
                  <p className="mt-5 flex-1 text-left text-sm leading-[1.85] text-neutral-600 md:text-[0.95rem]">{step.text}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="practice" className="border-b border-neutral-200 bg-neutral-50" aria-labelledby="practice-heading">
        <div className="flex min-h-[100svh] flex-col justify-center py-20 md:py-28">
          <div className="shell">
            <div className="mx-auto max-w-3xl text-center">
              <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-neutral-500">In practice</p>
              <h2
                id="practice-heading"
                className="mt-5 font-serif text-[clamp(1.75rem,4vw,3rem)] font-medium leading-tight text-neutral-900"
              >
                What FirstClass Mail holds for you.
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-neutral-600 md:text-lg">
                Three capabilities cover ingestion, queueing, and delivery; three stations show how work moves through the
                house—aligned, evenly weighted, and easy to scan.
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
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-neutral-200 bg-neutral-50">
                      <p.icon className="h-6 w-6 text-neutral-900" strokeWidth={1.25} />
                    </div>
                    <h3 className="mt-8 font-serif text-xl text-neutral-900 md:text-2xl">{p.title}</h3>
                    <p className="mt-5 flex-1 text-left text-sm leading-[1.85] text-neutral-600">{p.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mx-auto mt-20 max-w-5xl border-t border-neutral-200 pt-20 md:mt-24 md:pt-24">
              <div className="mx-auto max-w-2xl text-center">
                <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-neutral-500">Processing stations</p>
                <h3 className="mt-4 font-serif text-2xl text-neutral-900 md:text-3xl">Collect, sort, release</h3>
                <p className="mt-4 text-neutral-600">
                  Three equal stations—same footprint, same clarity—map to how items enter, are classified, and leave for the
                  reader.
                </p>
              </div>
              <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6 lg:gap-10">
                {[
                  { title: 'Collect', sub: 'Windows for new mail', icon: Inbox, station: 'Station 1' },
                  { title: 'Sort', sub: 'Rules that read the address block', icon: Mail, station: 'Station 2' },
                  { title: 'Release', sub: 'When the route is open', icon: Send, station: 'Station 3' },
                ].map((step, i) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="flex h-full justify-center"
                  >
                    <TiltCard className="flex h-full min-h-[280px] w-full max-w-md flex-col p-8 md:p-10">
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-100">
                        <step.icon className="h-5 w-5 text-neutral-700" strokeWidth={1.25} />
                      </div>
                      <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.35em] text-neutral-500">{step.station}</p>
                      <h4 className="mt-3 font-serif text-xl text-neutral-900">{step.title}</h4>
                      <p className="mt-4 text-sm leading-relaxed text-neutral-600">{step.sub}</p>
                    </TiltCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="border-b border-neutral-200 bg-white"
        aria-labelledby="voices-heading"
      >
        <div className="flex min-h-[85svh] flex-col justify-center py-20 md:py-28">
          <div className="shell">
            <div className="mx-auto max-w-3xl text-center">
              <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-neutral-500">Testimonials</p>
              <h2 id="voices-heading" className="mt-5 font-serif text-[clamp(1.75rem,4vw,3rem)] font-medium text-neutral-900">
                Voices from the hall
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-neutral-600">
                Operators and marketers describe the same outcome: mail they can reason about—provenance, queue time, and
                arrival—without retraining the organization.
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
              {testimonials.map((t, i) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <blockquote className="flex min-h-[320px] flex-col rounded-3xl border border-neutral-200 bg-neutral-50 p-10 shadow-sm md:min-h-[340px] lg:p-12">
                    <p className="font-serif text-lg leading-[1.75] text-neutral-700 md:text-xl">&ldquo;{t.quote}&rdquo;</p>
                    <footer className="mt-auto border-t border-neutral-200 pt-10">
                      <cite className="not-italic text-base font-semibold text-neutral-900">{t.name}</cite>
                      <p className="mt-2 text-sm text-neutral-500">{t.title}</p>
                    </footer>
                  </blockquote>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="border-b border-neutral-200 bg-neutral-50">
        <div className="shell py-20 md:py-28">
          <div className="mx-auto max-w-3xl rounded-[2rem] border border-neutral-200 bg-white px-8 py-14 text-center shadow-sm md:px-14 md:py-16">
            <h2 className="font-serif text-3xl text-neutral-900 md:text-4xl">Begin your file.</h2>
            <p className="mx-auto mt-6 max-w-lg leading-relaxed text-neutral-600">
              The portal is where you open accounts, watch the queue, and confirm that what you sent arrived as intended.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
              <Link href="/portal" className="btn btn-primary px-11 py-3.5 text-xs uppercase tracking-[0.2em]">
                Enter portal
              </Link>
              <Link
                href="#correspondence"
                className="rounded-full px-6 py-3 text-sm text-neutral-600 transition hover:bg-neutral-100 hover:text-neutral-900"
              >
                Back to correspondence
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-neutral-200 bg-neutral-50">
        <div className="shell py-16 md:py-24">
          <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-3 lg:grid-cols-7 lg:gap-x-8 xl:gap-x-10">
            <div className="col-span-2 md:col-span-3 lg:col-span-2">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-neutral-200 bg-white shadow-sm">
                  <Mail className="h-4 w-4 text-neutral-900" strokeWidth={1.25} />
                </div>
                <span className="font-serif text-xl text-neutral-900">FirstClass Mail</span>
              </div>
              <p className="mt-6 max-w-sm text-sm leading-[1.85] text-neutral-600">
                Digital handling for messages that deserve the same care as paper: addressing, sorting, holding, and proof of
                delivery—over the internet.
              </p>
              <p className="mt-6 flex items-start gap-2.5 text-sm text-neutral-700">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-neutral-500" strokeWidth={1.5} aria-hidden />
                <span>Post, Texas</span>
              </p>
            </div>

            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">Product</p>
              <ul className="mt-5 space-y-3 text-sm text-neutral-600">
                <li>
                  <Link href="#correspondence" className="transition hover:text-neutral-900">
                    Correspondence
                  </Link>
                </li>
                <li>
                  <Link href="#journey" className="transition hover:text-neutral-900">
                    The journey
                  </Link>
                </li>
                <li>
                  <Link href="#practice" className="transition hover:text-neutral-900">
                    In practice
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="transition hover:text-neutral-900">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">Platform</p>
              <ul className="mt-5 space-y-3 text-sm text-neutral-600">
                <li>
                  <Link href="/portal" className="inline-flex items-center gap-2 transition hover:text-neutral-900">
                    <LayoutDashboard className="h-3.5 w-3.5 opacity-70" strokeWidth={1.5} aria-hidden />
                    Client portal
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard" className="inline-flex items-center gap-2 transition hover:text-neutral-900">
                    <FileText className="h-3.5 w-3.5 opacity-70" strokeWidth={1.5} aria-hidden />
                    Dashboard
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">Resources</p>
              <ul className="mt-5 space-y-3 text-sm text-neutral-600">
                <li>
                  <Link href="#practice" className="inline-flex items-center gap-2 transition hover:text-neutral-900">
                    <BookOpen className="h-3.5 w-3.5 opacity-70" strokeWidth={1.5} aria-hidden />
                    Documentation
                  </Link>
                </li>
                <li>
                  <a href="#contact" className="inline-flex items-center gap-2 transition hover:text-neutral-900">
                    <LifeBuoy className="h-3.5 w-3.5 opacity-70" strokeWidth={1.5} aria-hidden />
                    Help center
                  </a>
                </li>
                <li>
                  <span className="inline-flex items-center gap-2 text-neutral-400">
                    <Shield className="h-3.5 w-3.5 opacity-70" strokeWidth={1.5} aria-hidden />
                    Security overview
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">Company</p>
              <ul className="mt-5 space-y-3 text-sm text-neutral-600">
                <li>
                  <Link href="#correspondence" className="inline-flex items-center gap-2 transition hover:text-neutral-900">
                    <Building2 className="h-3.5 w-3.5 opacity-70" strokeWidth={1.5} aria-hidden />
                    About
                  </Link>
                </li>
                <li>
                  <span className="text-neutral-400">Careers — soon</span>
                </li>
                <li>
                  <Link href="#contact" className="transition hover:text-neutral-900">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">Legal</p>
              <ul className="mt-5 space-y-3 text-sm text-neutral-600">
                <li>
                  <span className="text-neutral-400">Privacy policy — soon</span>
                </li>
                <li>
                  <span className="text-neutral-400">Terms of service — soon</span>
                </li>
                <li>
                  <span className="text-neutral-400">Cookie policy — soon</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-neutral-200 pt-10 text-xs text-neutral-500 md:flex-row md:items-center">
            <p>&copy; {new Date().getFullYear()} FirstClass Mail. All rights reserved.</p>
            <p className="flex items-center gap-2">
              <CheckCircle className="h-3.5 w-3.5 text-neutral-400" strokeWidth={1.25} aria-hidden />
              Messages encrypted in transit
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
