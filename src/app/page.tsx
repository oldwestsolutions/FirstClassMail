'use client'

import { useState } from 'react'
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import {
  Mail,
  Server,
  FormInput,
  Shield,
  Zap,
  Layers,
  ArrowRight,
  Users,
  BarChart3,
  CheckCircle,
  Radio,
  Inbox,
  Network,
} from 'lucide-react'
import Link from 'next/link'

function TiltCard({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 300, damping: 28 })
  const springY = useSpring(y, { stiffness: 300, damping: 28 })
  const rotateX = useTransform(springY, [-0.5, 0.5], ['7deg', '-7deg'])
  const rotateY = useTransform(springX, [-0.5, 0.5], ['-7deg', '7deg'])

  return (
    <motion.div
      className={`relative ${className}`}
      style={{ perspective: 1200, transformStyle: 'preserve-3d' }}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect()
        const px = (e.clientX - r.left) / r.width - 0.5
        const py = (e.clientY - r.top) / r.height - 0.5
        x.set(px)
        y.set(py)
      }}
      onMouseLeave={() => {
        x.set(0)
        y.set(0)
      }}
    >
      <motion.div
        className="h-full rounded-xl border border-zinc-800/80 bg-zinc-900/50 shadow-[0_24px_48px_-24px_rgba(0,0,0,0.8),inset_0_1px_0_0_rgba(255,182,18,0.08)] backdrop-blur-md"
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

export default function HomePage() {
  const [activeFeature, setActiveFeature] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const features = [
    {
      icon: FormInput,
      title: 'Webforms & inbound endpoints',
      description:
        'Drop-in forms and HTTP endpoints that turn traffic into structured messages—validated, deduped, and ready for your stack.',
      benefits: ['Embeddable forms', 'Schema validation', 'Spam resistance', 'Webhook-friendly'],
    },
    {
      icon: Users,
      title: 'Lead capture & routing',
      description:
        'Route leads to teams, CRM hooks, or Slack—rules, scoring, and ownership so nothing sits in a dead inbox.',
      benefits: ['Rules & filters', 'CRM / API handoff', 'Team routing', 'Audit trail'],
    },
    {
      icon: Layers,
      title: 'Email buffering & delivery',
      description:
        'Queue marketing and transactional mail with retries, backoff, and visibility—your server smooths spikes so recipients see consistent delivery.',
      benefits: ['Buffered queue', 'Retries & DLQ', 'Throughput control', 'Delivery metrics'],
    },
  ]

  const pipeline = [
    {
      icon: Network,
      title: 'Edge ingress',
      text: 'TLS-terminated intake, rate limits, and payload checks before anything hits your queue.',
    },
    {
      icon: Inbox,
      title: 'Normalize & enrich',
      text: 'Normalize fields, attach metadata, and fan out to CRM, email, or custom workers.',
    },
    {
      icon: BarChart3,
      title: 'Observe & act',
      text: 'Dashboards for volume, failures, and lead quality—alerts when pipelines drift.',
    },
  ]

  const stats = [
    { label: 'Messages staged / day', value: '2M+' },
    { label: 'Webforms live', value: '18k+' },
    { label: 'Queues monitored', value: '12k+' },
    { label: 'Platform uptime', value: '99.99%' },
  ]

  const testimonials = [
    {
      name: 'Jordan Ellis',
      title: 'Growth lead, B2B SaaS',
      quote:
        'We replaced a pile of Zapier glue with FirstClass Mail—forms land in one queue, we buffer bursts, and the team finally trusts lead SLAs.',
    },
    {
      name: 'Priya Nandakumar',
      title: 'Head of Marketing Ops',
      quote:
        'Campaign emails used to trip ISP limits. Buffering and pacing through their server keeps our domain warm and replies flowing.',
    },
  ]

  return (
    <div className="min-h-screen bg-steel-black text-zinc-100">
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            />
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.28 }}
              className="fixed right-0 top-0 z-50 flex h-full w-[min(100%,20rem)] flex-col border-l border-zinc-800 bg-zinc-950 shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-zinc-800 p-4">
                <span className="font-serif font-bold text-white">Menu</span>
                <button
                  type="button"
                  className="rounded-lg p-2 text-zinc-400 hover:bg-zinc-900 hover:text-gold-400"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <nav className="flex flex-col gap-1 p-4">
                {[
                  ['Product', '#product'],
                  ['Pipeline', '#pipeline'],
                  ['About', '#about'],
                  ['Contact', '#contact'],
                ].map(([label, href]) => (
                  <Link
                    key={href}
                    href={href}
                    className="rounded-lg px-4 py-3 text-zinc-300 transition hover:bg-zinc-900 hover:text-gold-400"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
                <Link
                  href="/portal"
                  className="btn btn-accent mt-4 justify-center py-3"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Client portal
                </Link>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      <nav className="sticky top-0 z-50 border-b border-zinc-800/80 bg-black/60 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 md:h-20">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-lg border border-gold-500/40 bg-gradient-to-br from-zinc-900 to-black shadow-[0_0_24px_-4px_rgba(255,182,18,0.35)]">
              <Mail className="h-5 w-5 text-gold-400" />
            </div>
            <div>
              <span className="font-serif text-lg font-bold tracking-tight text-white md:text-xl">
                FirstClass Mail
              </span>
              <p className="-mt-0.5 hidden text-[11px] font-mono uppercase tracking-widest text-gold-500/90 sm:block">
                Inbound mail & SaaS
              </p>
            </div>
          </Link>
          <div className="hidden items-center gap-8 md:flex">
            <Link href="#product" className="text-sm font-medium text-zinc-300 transition hover:text-gold-400">
              Product
            </Link>
            <Link href="#pipeline" className="text-sm font-medium text-zinc-300 transition hover:text-gold-400">
              Pipeline
            </Link>
            <Link href="#about" className="text-sm font-medium text-zinc-300 transition hover:text-gold-400">
              About
            </Link>
            <Link href="/portal" className="btn btn-accent px-5 py-2.5 text-sm">
              Client portal
            </Link>
          </div>
          <button
            type="button"
            className="rounded-lg p-2 text-zinc-300 transition hover:bg-zinc-900 hover:text-gold-400 md:hidden"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      <section className="hero-web3 hero-gradient relative px-4 pb-20 pt-12 sm:px-6 md:pb-28 md:pt-16 lg:px-8">
        <div className="hero-grid" aria-hidden />
        <div className="hero-glow" aria-hidden />
        <motion.div
          className="pointer-events-none absolute right-[10%] top-32 hidden h-64 w-64 rounded-full border border-gold-500/20 md:block"
          animate={{ rotate: 360 }}
          transition={{ duration: 48, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="pointer-events-none absolute left-[5%] top-48 h-40 w-40 rounded-2xl border border-gold-500/15 bg-gold-500/5 blur-sm"
          style={{ rotateX: 12, rotateY: -8 }}
          animate={{ y: [0, -16, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <div className="mb-6 flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-zinc-900/80 px-4 py-2 font-mono text-xs font-medium uppercase tracking-[0.2em] text-gold-400 shadow-[0_0_32px_-8px_rgba(255,182,18,0.4)]">
                <Zap className="h-3.5 w-3.5" />
                SaaS mail fabric
              </span>
            </div>
            <h1 className="mb-6 font-serif text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Webforms, leads & mail
              <br />
              <span className="text-gradient">over the internet</span>
            </h1>
            <p className="mx-auto mb-10 max-w-3xl text-base leading-relaxed text-zinc-400 md:text-xl">
              FirstClass Mail is server infrastructure for inbound messages: capture leads from webforms, buffer marketing and
              transactional email, and fan out to your CRM, data warehouse, or inbox—with observability built for operators.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row sm:gap-5">
              <Link href="/portal" className="btn btn-accent px-8 py-3.5 text-base">
                Open client portal
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="#product" className="btn btn-secondary px-8 py-3.5 text-base">
                Explore the stack
              </Link>
            </div>
          </motion.div>

          <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-3">
            {[
              { title: 'Ingress', sub: 'Forms · POST · JSON' },
              { title: 'Buffer', sub: 'Queues · pacing · retries' },
              { title: 'Deliver', sub: 'Email · APIs · webhooks' },
            ].map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.1 }}
              >
                <TiltCard className="p-6 md:p-8">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-gold-500/80">Layer {i + 1}</div>
                  <h3 className="mt-2 font-serif text-xl font-semibold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm text-zinc-400">{step.sub}</p>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-800 bg-zinc-950/80 py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center md:mb-14">
            <h2 className="font-serif text-2xl font-bold text-white md:text-4xl">Throughput you can read on a dashboard</h2>
            <p className="mx-auto mt-3 max-w-2xl text-zinc-400">
              Built for teams that treat inbound mail like a product—measurable, reroutable, and safe at scale.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-5 text-center shadow-inner md:p-8"
              >
                <div className="font-serif text-2xl font-bold text-gold-400 md:text-4xl">{stat.value}</div>
                <div className="mt-1 text-xs font-medium text-zinc-500 md:text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="product" className="mesh-gradient border-t border-zinc-800 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center md:mb-16">
            <h2 className="font-serif text-2xl font-bold text-white md:text-4xl">Everything before the inbox</h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-zinc-400">
              Webforms and APIs on the front, marketing and transactional mail on the wire—buffered through a SaaS control plane
              so your team ships campaigns without melting SMTP limits.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className={`cursor-pointer rounded-xl border p-6 transition-all duration-300 md:p-10 ${
                  activeFeature === index
                    ? 'border-gold-500/50 bg-zinc-900/70 shadow-[0_0_40px_-12px_rgba(255,182,18,0.35)]'
                    : 'border-zinc-800 bg-zinc-900/30 hover:border-zinc-700 hover:shadow-lg'
                }`}
                onClick={() => setActiveFeature(index)}
                onKeyDown={(e) => e.key === 'Enter' && setActiveFeature(index)}
                role="button"
                tabIndex={0}
              >
                <div className="mb-5 flex flex-col items-start gap-4 md:flex-row md:items-center">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-gold-500/25 bg-black/40 shadow-[inset_0_1px_0_0_rgba(255,182,18,0.15)]">
                    <feature.icon className="h-7 w-7 text-gold-400" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-white md:text-2xl">{feature.title}</h3>
                </div>
                <p className="mb-6 leading-relaxed text-zinc-400">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center text-zinc-300">
                      <CheckCircle className="mr-3 h-5 w-5 shrink-0 text-gold-500" />
                      <span className="text-sm font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="pipeline" className="border-t border-zinc-800 bg-black py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col gap-4 text-center md:mb-16">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-gold-500/90">Pipeline</span>
            <h2 className="font-serif text-2xl font-bold text-white md:text-4xl">How messages move through the server</h2>
            <p className="mx-auto max-w-2xl text-zinc-400">
              A single SaaS plane for ingress, normalization, and delivery—so marketing and product teams share one source of
              truth.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {pipeline.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-gradient-to-b from-zinc-900/80 to-black p-8"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500/10 text-gold-400">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">{item.text}</p>
                <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gold-500/10 blur-2xl" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="border-t border-zinc-800 bg-zinc-950 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center md:mb-14">
            <h2 className="font-serif text-2xl font-bold text-white md:text-3xl">Operators, not postage</h2>
            <p className="mx-auto mt-3 max-w-2xl text-zinc-400">
              Compliance-minded defaults for data handling, encryption in transit, and tenant isolation—so your pipeline stays
              auditable while you iterate on growth experiments.
            </p>
          </div>
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            <div className="flex gap-4 rounded-xl border border-zinc-800 bg-zinc-900/40 p-6">
              <Shield className="h-10 w-10 shrink-0 text-gold-500" />
              <div>
                <h3 className="font-serif font-semibold text-white">Security & tenancy</h3>
                <p className="mt-2 text-sm text-zinc-400">
                  Keys, tokens, and per-tenant queues—least privilege for every form and mail stream you run.
                </p>
              </div>
            </div>
            <div className="flex gap-4 rounded-xl border border-zinc-800 bg-zinc-900/40 p-6">
              <Server className="h-10 w-10 shrink-0 text-gold-500" />
              <div>
                <h3 className="font-serif font-semibold text-white">SaaS operations</h3>
                <p className="mt-2 text-sm text-zinc-400">
                  Multi-region-friendly architecture with the knobs operators expect—limits, alerts, and replay.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-800 bg-black py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center md:mb-12">
            <h2 className="font-serif text-2xl font-bold text-white md:text-3xl">Teams shipping with buffered mail</h2>
            <p className="mt-3 text-zinc-400">From growth teams to platform engineers—one ingress plane for the internet&apos;s messages.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {testimonials.map((t, index) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8"
              >
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold-500/30 bg-black font-semibold text-gold-400">
                    {t.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{t.name}</h4>
                    <p className="text-sm text-zinc-500">{t.title}</p>
                  </div>
                </div>
                <blockquote className="leading-relaxed text-zinc-400">&ldquo;{t.quote}&rdquo;</blockquote>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative overflow-hidden border-t border-gold-500/20 bg-gradient-to-br from-zinc-950 via-black to-zinc-950 py-16 md:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,182,18,0.12),transparent_55%)]" />
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <Radio className="mx-auto mb-4 h-10 w-10 text-gold-500" />
          <h2 className="font-serif text-2xl font-bold text-white md:text-4xl">Ready to route your internet mail?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
            Spin up webforms, connect your SMTP and marketing tools, and let the server buffer delivery while you scale.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/portal" className="btn btn-accent px-10 py-4 text-base">
              Client portal
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link href="#product" className="btn btn-secondary px-10 py-4 text-base">
              View product
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-800 bg-black py-12 text-white md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
            <div className="lg:col-span-1">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-gold-500/40 bg-zinc-900">
                  <Mail className="h-5 w-5 text-gold-400" />
                </div>
                <div>
                  <span className="font-serif text-lg font-bold">FirstClass Mail</span>
                  <p className="text-xs text-zinc-500">Inbound SaaS mail</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-zinc-500">
                Server infrastructure for webforms, lead capture, marketing and transactional email buffering, and delivery
                observability—messages over the internet, orchestrated for you.
              </p>
            </div>
            <div>
              <h3 className="mb-4 font-serif text-sm font-semibold uppercase tracking-wider text-zinc-400">Product</h3>
              <ul className="space-y-2 text-sm text-zinc-500">
                <li>
                  <Link href="#product" className="transition hover:text-gold-400">
                    Webforms & API
                  </Link>
                </li>
                <li>
                  <Link href="#product" className="transition hover:text-gold-400">
                    Lead routing
                  </Link>
                </li>
                <li>
                  <Link href="#product" className="transition hover:text-gold-400">
                    Email buffering
                  </Link>
                </li>
                <li>
                  <Link href="#pipeline" className="transition hover:text-gold-400">
                    Delivery & webhooks
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-serif text-sm font-semibold uppercase tracking-wider text-zinc-400">Support</h3>
              <ul className="space-y-2 text-sm text-zinc-500">
                <li>
                  <Link href="#contact" className="transition hover:text-gold-400">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/portal" className="transition hover:text-gold-400">
                    Client portal
                  </Link>
                </li>
                <li>
                  <span className="cursor-default">Status &amp; docs — soon</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-serif text-sm font-semibold uppercase tracking-wider text-zinc-400">Legal</h3>
              <ul className="space-y-2 text-sm text-zinc-500">
                <li>
                  <Link href="#about" className="transition hover:text-gold-400">
                    Security overview
                  </Link>
                </li>
                <li>
                  <span className="cursor-default">Privacy — soon</span>
                </li>
                <li>
                  <span className="cursor-default">Terms — soon</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-10 border-t border-zinc-800 pt-8">
            <div className="flex flex-col items-center justify-between gap-4 text-sm text-zinc-600 md:flex-row">
              <p>&copy; {new Date().getFullYear()} FirstClass Mail. All rights reserved.</p>
              <div className="flex flex-wrap items-center justify-center gap-6">
                <span className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-gold-600/80" />
                  Encryption in transit
                </span>
                <span className="flex items-center gap-2">
                  <Server className="h-4 w-4 text-gold-600/80" />
                  Tenant-isolated queues
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
