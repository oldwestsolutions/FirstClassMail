'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  CheckCircle,
  Lock,
  Route,
  ShieldCheck,
  Layers,
  Server,
  FileCheck,
} from 'lucide-react'
import { MarketingHeader } from '@/components/marketing/MarketingHeader'
import { MarketingFooter } from '@/components/marketing/MarketingFooter'
import { campaignAbsoluteUrl } from '@/lib/publicUrls'

const features = [
  {
    icon: Lock,
    title: 'Encrypted transit',
    body: 'Every message travels over TLS-secured channels between sender, intermediary, and office endpoint. Payload content is never exposed on the wire or in transit logs.',
  },
  {
    icon: ShieldCheck,
    title: 'Authentication enforcement',
    body: 'SPF, DKIM, and DMARC are validated at the boundary before any message is released. Unauthenticated traffic is held for review rather than delivered to the wrong place.',
  },
  {
    icon: Route,
    title: 'Policy-controlled routing',
    body: 'Routing decisions follow declared policy, not opportunistic relay. Each thread is assigned a verified destination and cleared through policy gates before forwarding.',
  },
  {
    icon: Layers,
    title: 'Chain-of-custody logging',
    body: 'Every delivery hop is recorded with timestamps and disposition codes. Audit trails are retained as first-class records alongside the messages themselves.',
  },
  {
    icon: Server,
    title: 'Office-endpoint delivery',
    body: 'Mail is routed directly to the receiving organization\'s own mail server rather than pooled in shared infrastructure. Footprint at the destination is minimal and controlled.',
  },
  {
    icon: FileCheck,
    title: 'Compliance-aligned release',
    body: 'Release gates can require compliance attestation—ZK-verified, CMS-aligned, or policy-scoped—before a message leaves the platform.',
  },
]

const path = [
  {
    label: 'Submission',
    desc: 'Sender composes inside the platform. Content is staged and queued for authentication checks before any outbound action is taken.',
  },
  {
    label: 'Authentication',
    desc: 'SPF, DKIM, and DMARC evaluated. Messages failing validation are quarantined; passing messages proceed to the routing layer.',
  },
  {
    label: 'Routing',
    desc: 'Policy engine assigns the verified destination and selects the appropriate delivery path. Custom rules can hold, forward, or escalate.',
  },
  {
    label: 'Transport',
    desc: 'Message transferred over mutual-TLS to the receiving endpoint. Handshake and delivery status recorded in the audit log.',
  },
  {
    label: 'Confirmation',
    desc: 'Delivery receipt written back to the thread. Sender sees confirmed status; any bounce or deferral triggers a policy-defined response.',
  },
]

export default function DeliveryPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-600">
      <MarketingHeader />

      <main>
        {/* Hero */}
        <section className="border-b border-neutral-200 bg-gradient-to-b from-neutral-50 to-white py-16 md:py-24 lg:py-28">
          <div className="shell">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center lg:gap-10">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="lg:col-span-7"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-neutral-500">Delivery</p>
                <h1 className="mt-5 font-serif text-4xl font-medium leading-[1.1] text-neutral-900 md:text-5xl lg:text-[3.25rem]">
                  Authenticated routing to verified endpoints.
                </h1>
                <p className="mt-8 max-w-2xl text-lg leading-relaxed text-neutral-600">
                  Delivery on FirstClassMail is not a best-effort relay. Messages are authenticated, policy-checked, and
                  forwarded over encrypted channels directly to the intended office mail endpoint—with a full chain-of-custody
                  record written at every hop.
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                    href={campaignAbsoluteUrl('/')}
                    className="btn btn-primary px-8 py-3 text-xs uppercase tracking-[0.2em]"
                  >
                    Open portal
                    <ArrowRight className="ml-2 h-4 w-4" strokeWidth={1.5} />
                  </a>
                  <Link
                    href="/journey"
                    className="inline-flex items-center rounded-full border border-neutral-200 px-6 py-3 text-sm text-neutral-700 transition hover:border-neutral-400"
                  >
                    Mail protocol
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.06 }}
                className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-5"
              >
                {[
                  { label: 'SPF', note: 'Sender policy verified' },
                  { label: 'DKIM', note: 'Signature authenticated' },
                  { label: 'DMARC', note: 'Policy enforced' },
                  { label: 'TLS', note: 'Transport encrypted' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-3 rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm"
                  >
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-neutral-900" strokeWidth={1.5} />
                    <div>
                      <p className="font-mono text-sm font-medium text-neutral-900">{item.label}</p>
                      <p className="mt-1 text-xs text-neutral-500">{item.note}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features grid */}
        <section className="border-b border-neutral-200 bg-white py-20 md:py-28">
          <div className="shell">
            <div className="mx-auto max-w-3xl text-center">
              <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-neutral-500">Infrastructure</p>
              <h2 className="mt-5 font-serif text-3xl text-neutral-900 md:text-4xl">
                Every layer of delivery, governed.
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600">
                Authentication, routing, transport, and confirmation are treated as discrete, auditable stages—not a
                single pass-through relay to an unverified destination.
              </p>
            </div>

            <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 shadow-sm"
                >
                  <f.icon className="h-5 w-5 text-neutral-800" strokeWidth={1.25} />
                  <p className="mt-4 font-serif text-xl text-neutral-900">{f.title}</p>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600">{f.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Delivery path */}
        <section className="border-b border-neutral-200 bg-neutral-50 py-20 md:py-28">
          <div className="shell">
            <div className="mx-auto max-w-3xl text-center">
              <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-neutral-500">Delivery path</p>
              <h2 className="mt-5 font-serif text-3xl text-neutral-900 md:text-4xl">
                From composition to confirmed receipt.
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-neutral-600">
                The path is segmented by design. Each stage applies an independent check before handing off to the
                next—no hop is assumed safe on the basis of the one before it.
              </p>
            </div>

            <div className="mx-auto mt-14 max-w-4xl">
              {path.map((step, i) => (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="relative flex gap-6 pb-8 last:pb-0"
                >
                  {/* Connector line */}
                  {i < path.length - 1 && (
                    <div className="absolute left-[1.125rem] top-9 h-full w-px bg-neutral-200" aria-hidden />
                  )}
                  {/* Step indicator */}
                  <div className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-neutral-200 bg-white shadow-sm">
                    <span className="font-mono text-[10px] text-neutral-500">{i + 1}</span>
                  </div>
                  <div className="min-w-0 pt-1.5">
                    <p className="font-serif text-lg text-neutral-900">{step.label}</p>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-600">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white py-16 md:py-24">
          <div className="shell">
            <div className="mx-auto flex max-w-3xl flex-col items-center rounded-[2rem] border border-neutral-200 bg-neutral-50 px-8 py-12 text-center shadow-sm md:px-14">
              <h2 className="font-serif text-2xl text-neutral-900 md:text-3xl">
                Predictable delivery under policy control.
              </h2>
              <p className="mt-5 max-w-lg text-neutral-600">
                Open the portal to configure authenticated delivery routes, set policy gates, and review chain-of-custody
                records for every outbound thread.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-5">
                <a
                  href={campaignAbsoluteUrl('/')}
                  className="btn btn-primary px-10 py-3.5 text-xs uppercase tracking-[0.2em]"
                >
                  Open portal
                  <ArrowRight className="ml-2 h-4 w-4" strokeWidth={1.5} />
                </a>
                <Link
                  href="/mailbox"
                  className="rounded-full px-6 py-3 text-sm text-neutral-600 transition hover:bg-neutral-100 hover:text-neutral-900"
                >
                  Mailbox overview
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <MarketingFooter />
    </div>
  )
}
