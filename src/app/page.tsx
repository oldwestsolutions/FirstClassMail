'use client'

import { useState } from 'react'
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import {
  Mail,
  ArrowRight,
  CheckCircle,
  Inbox,
  Send,
  FileInput,
  Warehouse,
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
        className="h-full border border-neutral-800 bg-black"
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
        className={`absolute inset-0 border border-white/15 ${className}`}
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

  const journey = [
    {
      title: 'Collection',
      text: 'Someone leaves a note at the window—a form, a reply, a campaign. Each piece is dated and addressed before it goes anywhere.',
    },
    {
      title: 'Sorting',
      text: 'Like letters under a clerk’s hand, messages are read for the essentials: who it is for, what it concerns, where it should go next.',
    },
    {
      title: 'Holding',
      text: 'When the mail is heavy, it waits in the back room—orderly stacks, nothing lost—until the route is ready to carry it out.',
    },
    {
      title: 'Delivery',
      text: 'Carriers take each item to its destination: an inbox, a team, a system that asked for it. Proof of arrival closes the loop.',
    },
  ]

  const pillars = [
    {
      border: 'border-l-rgb-red',
      icon: FileInput,
      title: 'What people send',
      body: 'Inquiries from your site, responses to campaigns, notes meant for a particular desk—the same variety as paper, only it travels as data.',
    },
    {
      border: 'border-l-rgb-green',
      icon: Warehouse,
      title: 'Where it waits',
      body: 'When volume surges, nothing is thrown away. Items sit in line, in order, until the path ahead is clear—just as a post office holds sacks until the truck leaves.',
    },
    {
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
    <div className="min-h-screen bg-black text-neutral-300">
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/80"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            />
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.28 }}
              className="fixed right-0 top-0 z-50 flex h-full w-[min(100%,20rem)] flex-col border-l border-neutral-800 bg-black"
            >
              <div className="flex items-center justify-between border-b border-neutral-800 p-5">
                <span className="font-serif text-lg text-white">Menu</span>
                <button
                  type="button"
                  className="rounded-sm p-2 text-neutral-500 hover:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <nav className="flex flex-col gap-1 p-4">
                {[
                  ['Correspondence', '#correspondence'],
                  ['The journey', '#journey'],
                  ['Practice', '#practice'],
                  ['Contact', '#contact'],
                ].map(([label, href]) => (
                  <Link
                    key={href}
                    href={href}
                    className="rounded-sm px-4 py-3 text-sm text-neutral-400 transition hover:bg-neutral-950 hover:text-white"
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

      <nav className="sticky top-0 z-50 border-b border-neutral-900 bg-black">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-[4.5rem] lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center border border-neutral-700 bg-black">
              <Mail className="h-4 w-4 text-white" strokeWidth={1.25} />
            </div>
            <div>
              <span className="font-serif text-lg tracking-wide text-white md:text-xl">FirstClass Mail</span>
              <p className="hidden font-mono text-[10px] uppercase tracking-[0.35em] text-neutral-500 sm:block">
                Digital post
              </p>
            </div>
          </Link>
          <div className="hidden items-center gap-10 md:flex">
            <Link href="#correspondence" className="text-sm text-neutral-400 transition hover:text-white">
              Correspondence
            </Link>
            <Link href="#journey" className="text-sm text-neutral-400 transition hover:text-white">
              The journey
            </Link>
            <Link href="#practice" className="text-sm text-neutral-400 transition hover:text-white">
              Practice
            </Link>
            <Link href="/portal" className="btn btn-primary px-5 py-2 text-xs uppercase tracking-widest">
              Portal
            </Link>
          </div>
          <button
            type="button"
            className="p-2 text-neutral-400 hover:text-white md:hidden"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.25} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      <header className="border-b border-neutral-900">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28 lg:px-8">
          <div className="grid items-end gap-16 lg:grid-cols-[1fr_auto] lg:gap-12">
            <div>
              <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.4em] text-neutral-500">Internet correspondence</p>
              <h1 className="mb-8 max-w-xl font-serif text-4xl font-medium leading-[1.1] text-white md:text-5xl lg:text-6xl">
                The way mail has always worked—now over the network.
              </h1>
              <p className="max-w-md text-base leading-relaxed text-neutral-500 md:text-lg">
                Paper or wire, the idea is unchanged: a message is written, addressed, handled with care, and brought to the right
                door. FirstClass Mail carries that sequence for everything you collect and send online.
              </p>
              <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link href="/portal" className="btn btn-primary px-8 py-3 text-xs uppercase tracking-[0.2em]">
                  Open portal
                  <ArrowRight className="ml-2 h-4 w-4" strokeWidth={1.5} />
                </Link>
                <Link
                  href="#journey"
                  className="text-center text-sm text-neutral-500 underline-offset-4 hover:text-white hover:underline sm:text-left"
                >
                  Read how delivery works
                </Link>
              </div>
            </div>
            <div className="flex justify-center gap-6 lg:justify-end lg:pb-2">
              <IsoBlock className="bg-rgb-red" delay={0} />
              <IsoBlock className="bg-rgb-green" delay={2} />
              <IsoBlock className="bg-rgb-blue" delay={4} />
            </div>
          </div>
        </div>
      </header>

      <section id="correspondence" className="border-b border-neutral-900">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-24 lg:px-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-neutral-600">Correspondence</p>
          <h2 className="mt-4 max-w-2xl font-serif text-3xl text-white md:text-4xl">Not a metaphor—an office you never see.</h2>
          <p className="mt-6 max-w-2xl text-neutral-500 leading-relaxed">
            In the physical world, mail moves through rooms you do not visit: counters, sorting tables, holding areas, outgoing
            carts. On the internet, the same roles exist—only the rooms are machines. Someone still decides what is legitimate,
            what waits, and what goes out next.
          </p>
          <div className="mt-16 grid gap-px bg-neutral-900 md:grid-cols-3">
            {[
              ['Inquiry', 'A visitor leaves a card—structured fields, plain language, a return path.'],
              ['Announcement', 'A note to many recipients, each addressed in turn, none treated as bulk without intent.'],
              ['Reply', 'An answer routed back along the thread it came from—continuity, not noise.'],
            ].map(([title, body]) => (
              <div key={title} className="bg-black p-8 md:p-10">
                <h3 className="font-serif text-xl text-white">{title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-neutral-500">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="journey" className="border-b border-neutral-900">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-24 lg:px-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-neutral-600">The journey</p>
          <h2 className="mt-4 max-w-xl font-serif text-3xl text-white md:text-4xl">From hand to hand, in four beats.</h2>
          <div className="mt-16 space-y-12">
            {journey.map((step, i) => (
              <div key={step.title} className="flex flex-col gap-6 border-b border-neutral-900 pb-12 last:border-0 last:pb-0 md:flex-row md:items-start md:gap-16">
                <span className="font-mono text-xs text-neutral-600">{String(i + 1).padStart(2, '0')}</span>
                <div className="md:max-w-lg">
                  <h3 className="font-serif text-2xl text-white">{step.title}</h3>
                  <p className="mt-4 text-neutral-500 leading-relaxed">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="practice" className="border-b border-neutral-900">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-24 lg:px-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-neutral-600">In practice</p>
          <h2 className="mt-4 max-w-xl font-serif text-3xl text-white md:text-4xl">What FirstClass Mail holds for you.</h2>
          <div className="mt-16 grid gap-8 md:grid-cols-3 md:gap-6">
            {pillars.map((p) => (
              <div key={p.title} className={`border border-neutral-800 border-l-4 ${p.border} bg-black p-8`}>
                <p.icon className="h-5 w-5 text-white" strokeWidth={1.25} />
                <h3 className="mt-6 font-serif text-xl text-white">{p.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-neutral-500">{p.body}</p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-20 max-w-4xl">
            <div className="grid gap-6 md:grid-cols-3">
              {[
                { title: 'Collect', sub: 'Windows for new mail', icon: Inbox },
                { title: 'Sort', sub: 'Rules that read the address block', icon: Mail },
                { title: 'Release', sub: 'When the route is open', icon: Send },
              ].map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                >
                  <TiltCard className="p-8">
                    <step.icon className="h-5 w-5 text-neutral-400" strokeWidth={1.25} />
                    <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-600">Station {i + 1}</p>
                    <h3 className="mt-2 font-serif text-lg text-white">{step.title}</h3>
                    <p className="mt-3 text-sm text-neutral-500">{step.sub}</p>
                  </TiltCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-neutral-900">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-24 lg:px-8">
          <h2 className="text-center font-serif text-2xl text-white md:text-3xl">Voices from the hall</h2>
          <div className="mt-16 grid gap-px bg-neutral-900 md:grid-cols-2">
            {testimonials.map((t) => (
              <blockquote key={t.name} className="bg-black p-10 md:p-12">
                <p className="font-serif text-lg leading-relaxed text-neutral-400">&ldquo;{t.quote}&rdquo;</p>
                <footer className="mt-8 border-t border-neutral-900 pt-8">
                  <cite className="not-italic font-medium text-white">{t.name}</cite>
                  <p className="mt-1 text-sm text-neutral-600">{t.title}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="border-b border-neutral-900 bg-neutral-950">
        <div className="mx-auto max-w-6xl px-5 py-20 text-center md:py-24 lg:px-8">
          <h2 className="font-serif text-3xl text-white md:text-4xl">Begin your file.</h2>
          <p className="mx-auto mt-6 max-w-lg text-neutral-500">
            The portal is where you open accounts, watch the queue, and confirm that what you sent arrived as intended.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/portal" className="btn btn-primary px-10 py-3 text-xs uppercase tracking-[0.2em]">
              Enter portal
            </Link>
            <Link href="#correspondence" className="text-sm text-neutral-500 hover:text-white">
              Back to correspondence
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-black py-16">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <div className="flex flex-col gap-12 md:flex-row md:justify-between">
            <div className="max-w-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center border border-neutral-700">
                  <Mail className="h-4 w-4 text-white" strokeWidth={1.25} />
                </div>
                <span className="font-serif text-lg text-white">FirstClass Mail</span>
              </div>
              <p className="mt-6 text-sm leading-relaxed text-neutral-600">
                Digital handling for messages that deserve the same care as paper: addressing, sorting, holding, and proof of
                delivery—over the internet.
              </p>
            </div>
            <div className="flex gap-16 text-sm text-neutral-600">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-700">Explore</p>
                <ul className="mt-4 space-y-3">
                  <li>
                    <Link href="#journey" className="hover:text-white">
                      The journey
                    </Link>
                  </li>
                  <li>
                    <Link href="#practice" className="hover:text-white">
                      In practice
                    </Link>
                  </li>
                  <li>
                    <Link href="/portal" className="hover:text-white">
                      Portal
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-700">Legal</p>
                <ul className="mt-4 space-y-3">
                  <li>
                    <span className="text-neutral-700">Privacy — soon</span>
                  </li>
                  <li>
                    <span className="text-neutral-700">Terms — soon</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-neutral-900 pt-8 text-xs text-neutral-700 md:flex-row md:items-center">
            <p>&copy; {new Date().getFullYear()} FirstClass Mail. All rights reserved.</p>
            <p className="flex items-center gap-2">
              <CheckCircle className="h-3.5 w-3.5 text-neutral-600" strokeWidth={1.25} />
              Messages encrypted in transit
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
