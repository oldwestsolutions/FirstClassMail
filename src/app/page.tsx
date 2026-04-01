'use client'

import { useState } from 'react'
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Mail, ArrowRight, CheckCircle, Inbox, Send, FileInput, Warehouse } from 'lucide-react'
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
        className="h-full overflow-hidden rounded-3xl border border-neutral-800/90 bg-neutral-950"
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
        className={`absolute inset-0 rounded-2xl border border-white/15 ${className}`}
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
              className="fixed right-0 top-0 z-50 flex h-full w-[min(100%,22rem)] flex-col rounded-l-[2rem] border-l border-neutral-800 bg-neutral-950 shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-neutral-800/80 p-6">
                <span className="font-serif text-lg text-white">Menu</span>
                <button
                  type="button"
                  className="rounded-full p-2 text-neutral-500 transition hover:bg-neutral-900 hover:text-white"
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
                    className="rounded-2xl px-4 py-3.5 text-sm text-neutral-400 transition hover:bg-neutral-900 hover:text-white"
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

      <div className="border-b border-neutral-900/80 bg-black pb-4 pt-4 sm:pt-6">
        <div className="shell">
          <nav className="flex h-14 items-center justify-between rounded-full border border-neutral-800/90 bg-neutral-950/90 px-4 shadow-sm backdrop-blur-md sm:h-[3.75rem] sm:px-6 lg:px-8">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-neutral-700/80 bg-black">
                <Mail className="h-4 w-4 text-white" strokeWidth={1.25} />
              </div>
              <div>
                <span className="font-serif text-lg tracking-wide text-white md:text-xl">FirstClass Mail</span>
                <p className="hidden font-mono text-[10px] uppercase tracking-[0.35em] text-neutral-500 sm:block">
                  Digital post
                </p>
              </div>
            </Link>
            <div className="hidden items-center gap-8 lg:gap-10 md:flex">
              <Link href="#correspondence" className="text-sm text-neutral-400 transition hover:text-white">
                Correspondence
              </Link>
              <Link href="#journey" className="text-sm text-neutral-400 transition hover:text-white">
                The journey
              </Link>
              <Link href="#practice" className="text-sm text-neutral-400 transition hover:text-white">
                Practice
              </Link>
              <Link href="/portal" className="btn btn-primary px-6 py-2.5 text-xs uppercase tracking-widest">
                Portal
              </Link>
            </div>
            <button
              type="button"
              className="rounded-full p-2.5 text-neutral-400 transition hover:bg-neutral-900 hover:text-white md:hidden"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.25} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </nav>
        </div>
      </div>

      <header className="border-b border-neutral-900/80">
        <div className="shell py-16 md:py-24 lg:py-28">
          <div className="grid grid-cols-12 gap-x-6 gap-y-12 lg:gap-x-10 lg:gap-y-16">
            <div className="col-span-12 flex flex-col justify-end lg:col-span-7 lg:row-span-1">
              <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.4em] text-neutral-500">Internet correspondence</p>
              <h1 className="mb-8 max-w-[22ch] font-serif text-4xl font-medium leading-[1.08] text-white md:text-5xl lg:text-[3.5rem] xl:text-6xl">
                The way mail has always worked—now over the network.
              </h1>
              <p className="max-w-xl text-base leading-[1.75] text-neutral-500 md:text-lg">
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
                  className="text-center text-sm text-neutral-500 underline-offset-4 transition hover:text-white hover:underline sm:text-left"
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

      <section id="correspondence" className="border-b border-neutral-900/80 bg-neutral-950">
        <div className="shell py-20 md:py-28">
          <div className="grid grid-cols-12 gap-x-6 gap-y-10 lg:gap-x-10">
            <div className="col-span-12 lg:col-span-5 lg:col-start-1">
              <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-neutral-600">Correspondence</p>
              <h2 className="mt-5 font-serif text-3xl leading-tight text-white md:text-4xl lg:text-[2.75rem]">
                Not a metaphor—an office you never see.
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-6 lg:col-start-7 lg:row-start-1 lg:self-end">
              <p className="text-neutral-500 leading-[1.8] lg:text-[1.05rem]">
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
                  className="flex flex-col rounded-3xl border border-neutral-800/80 bg-black p-8 transition hover:border-neutral-700 md:p-9"
                >
                  <h3 className="font-serif text-xl text-white">{title}</h3>
                  <p className="mt-5 text-sm leading-relaxed text-neutral-500">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="journey" className="border-b border-neutral-900/80">
        <div className="shell py-20 md:py-28">
          <div className="grid grid-cols-12 gap-x-6 lg:gap-x-12">
            <div className="col-span-12 lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
              <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-neutral-600">The journey</p>
              <h2 className="mt-5 max-w-[14ch] font-serif text-3xl leading-tight text-white md:text-4xl">
                From hand to hand, in four beats.
              </h2>
              <div className="mt-10 hidden h-px w-16 rounded-full bg-neutral-800 lg:block" aria-hidden />
            </div>
            <div className="col-span-12 mt-12 grid gap-5 lg:col-span-8 lg:mt-0 lg:gap-6">
              {journey.map((step, i) => (
                <article
                  key={step.title}
                  className="grid grid-cols-12 gap-4 rounded-[1.75rem] border border-neutral-800/80 bg-neutral-950/50 p-6 sm:p-8 md:gap-6 md:p-10"
                >
                  <div className="col-span-12 flex items-start sm:col-span-2 md:col-span-2">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-neutral-800 bg-black font-mono text-xs text-neutral-500">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="col-span-12 sm:col-span-10 md:col-span-10">
                    <h3 className="font-serif text-2xl text-white">{step.title}</h3>
                    <p className="mt-4 text-neutral-500 leading-[1.8]">{step.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="practice" className="border-b border-neutral-900/80 bg-neutral-950">
        <div className="shell py-20 md:py-28">
          <div className="grid grid-cols-12">
            <div className="col-span-12 max-w-3xl">
              <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-neutral-600">In practice</p>
              <h2 className="mt-5 font-serif text-3xl text-white md:text-4xl">What FirstClass Mail holds for you.</h2>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-12 gap-5 lg:mt-20 lg:gap-6">
            {pillars.map((p) => (
              <div
                key={p.title}
                className={`col-span-12 flex flex-col overflow-hidden rounded-3xl border border-neutral-800/90 bg-black md:col-span-6 lg:col-span-4 ${p.border} border-l-[5px]`}
              >
                <div className={`h-1.5 w-full ${p.accent}`} aria-hidden />
                <div className="flex flex-1 flex-col p-8 md:p-9">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-neutral-800 bg-neutral-950">
                    <p.icon className="h-5 w-5 text-white" strokeWidth={1.25} />
                  </div>
                  <h3 className="mt-8 font-serif text-xl text-white">{p.title}</h3>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-neutral-500">{p.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-12 lg:mt-24">
            <div className="col-span-12">
              <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6 lg:gap-8">
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
                    <TiltCard className="p-8 md:p-9">
                      <step.icon className="h-5 w-5 text-neutral-400" strokeWidth={1.25} />
                      <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-600">Station {i + 1}</p>
                      <h3 className="mt-3 font-serif text-xl text-white">{step.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-neutral-500">{step.sub}</p>
                    </TiltCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-neutral-900/80">
        <div className="shell py-20 md:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl text-white md:text-4xl">Voices from the hall</h2>
          </div>
          <div className="mt-14 grid grid-cols-12 gap-5 lg:mt-16 lg:gap-8">
            {testimonials.map((t) => (
              <blockquote
                key={t.name}
                className="col-span-12 flex flex-col rounded-[1.75rem] border border-neutral-800/80 bg-neutral-950 p-9 md:col-span-6 md:p-10 lg:p-12"
              >
                <p className="font-serif text-lg leading-relaxed text-neutral-400 md:text-xl">&ldquo;{t.quote}&rdquo;</p>
                <footer className="mt-auto border-t border-neutral-800/80 pt-8">
                  <cite className="not-italic font-medium text-white">{t.name}</cite>
                  <p className="mt-1.5 text-sm text-neutral-600">{t.title}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="border-b border-neutral-900/80 bg-neutral-950">
        <div className="shell py-20 md:py-28">
          <div className="mx-auto max-w-3xl rounded-[2rem] border border-neutral-800/90 bg-black px-8 py-14 text-center md:px-14 md:py-16">
            <h2 className="font-serif text-3xl text-white md:text-4xl">Begin your file.</h2>
            <p className="mx-auto mt-6 max-w-lg text-neutral-500 leading-relaxed">
              The portal is where you open accounts, watch the queue, and confirm that what you sent arrived as intended.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
              <Link href="/portal" className="btn btn-primary px-11 py-3.5 text-xs uppercase tracking-[0.2em]">
                Enter portal
              </Link>
              <Link
                href="#correspondence"
                className="rounded-full px-6 py-3 text-sm text-neutral-500 transition hover:bg-neutral-900 hover:text-white"
              >
                Back to correspondence
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black py-16 md:py-20">
        <div className="shell">
          <div className="grid grid-cols-12 gap-10 lg:gap-12">
            <div className="col-span-12 md:col-span-6 lg:col-span-5">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-neutral-700/80">
                  <Mail className="h-4 w-4 text-white" strokeWidth={1.25} />
                </div>
                <span className="font-serif text-xl text-white">FirstClass Mail</span>
              </div>
              <p className="mt-8 max-w-md text-sm leading-[1.8] text-neutral-600">
                Digital handling for messages that deserve the same care as paper: addressing, sorting, holding, and proof of
                delivery—over the internet.
              </p>
            </div>
            <div className="col-span-6 md:col-span-3 lg:col-span-3 lg:col-start-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-700">Explore</p>
              <ul className="mt-5 space-y-3 text-sm text-neutral-600">
                <li>
                  <Link href="#journey" className="transition hover:text-white">
                    The journey
                  </Link>
                </li>
                <li>
                  <Link href="#practice" className="transition hover:text-white">
                    In practice
                  </Link>
                </li>
                <li>
                  <Link href="/portal" className="transition hover:text-white">
                    Portal
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-6 md:col-span-3 lg:col-span-2">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-700">Legal</p>
              <ul className="mt-5 space-y-3 text-sm text-neutral-700">
                <li>Privacy — soon</li>
                <li>Terms — soon</li>
              </ul>
            </div>
          </div>
          <div className="mt-14 flex flex-col items-start justify-between gap-4 rounded-2xl border border-neutral-900/80 bg-neutral-950/50 px-6 py-6 text-xs text-neutral-700 md:flex-row md:items-center md:px-8">
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
