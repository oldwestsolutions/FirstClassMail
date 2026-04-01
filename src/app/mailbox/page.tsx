'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Inbox, Archive, Filter, Clock } from 'lucide-react'
import { MarketingHeader } from '@/components/marketing/MarketingHeader'
import { MarketingFooter } from '@/components/marketing/MarketingFooter'

export default function MailboxPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-600">
      <MarketingHeader />

      <main>
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
                <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-neutral-500">Mailbox</p>
                <h1 className="mt-5 font-serif text-4xl font-medium leading-[1.1] text-neutral-900 md:text-5xl lg:text-[3.25rem]">
                  Professional mailbox operations, not just an inbox.
                </h1>
                <p className="mt-8 max-w-2xl text-lg leading-relaxed text-neutral-600">
                  The Mailbox layer on FirstClassMail handles intake, triage, and controlled delivery as one governed system.
                  Teams can separate inbound streams, maintain clear audit context, and route messages without exposing personal
                  addresses or losing policy continuity.
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Link href="/portal" className="btn btn-primary px-8 py-3 text-xs uppercase tracking-[0.2em]">
                    Open mailbox
                    <ArrowRight className="ml-2 h-4 w-4" strokeWidth={1.5} />
                  </Link>
                  <Link
                    href="/security"
                    className="inline-flex items-center rounded-full border border-neutral-200 px-6 py-3 text-sm text-neutral-700 transition hover:border-neutral-400"
                  >
                    Review security model
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
                  { icon: Inbox, title: 'Structured intake', body: 'Capture inbound mail through controlled channels.' },
                  { icon: Filter, title: 'Policy triage', body: 'Route by relationship, priority, and verification state.' },
                  { icon: Archive, title: 'Retention-aware', body: 'Maintain clear thread history with predictable access.' },
                  { icon: Clock, title: 'Operational cadence', body: 'Track handoffs and response windows with confidence.' },
                ].map((item) => (
                  <div key={item.title} className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
                    <item.icon className="h-5 w-5 text-neutral-800" strokeWidth={1.25} />
                    <p className="mt-3 font-serif text-lg text-neutral-900">{item.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-600">{item.body}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        <section className="border-b border-neutral-200 bg-white py-20 md:py-28">
          <div className="shell">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-3xl text-neutral-900 md:text-4xl">End-to-end mailbox workflow</h2>
              <p className="mt-6 text-lg leading-relaxed text-neutral-600">
                Mailbox behavior is designed for teams who need high signal and clear accountability from first receipt to final
                release.
              </p>
            </div>

            <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
              {[
                ['1. Intake', 'Receive messages via encrypted channels and normalize metadata for routing.'],
                ['2. Classify', 'Sort by thread ownership, urgency, and policy tier before assignment.'],
                ['3. Govern', 'Apply verification and release checks while preserving audit continuity.'],
                ['4. Deliver', 'Forward to the right office endpoint with minimal exposure and full context.'],
              ].map(([title, body], i) => (
                <motion.article
                  key={title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 shadow-sm"
                >
                  <p className="font-serif text-xl text-neutral-900">{title}</p>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600">{body}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-neutral-50 py-16 md:py-20">
          <div className="shell">
            <div className="mx-auto flex max-w-3xl flex-col items-center rounded-[2rem] border border-neutral-200 bg-white px-8 py-12 text-center shadow-sm md:px-14">
              <h2 className="font-serif text-2xl text-neutral-900 md:text-3xl">Run mailbox operations inside one system</h2>
              <p className="mt-5 text-neutral-600">
                Use dedicated mailbox routes with verified sourcing and policy gates instead of ad-hoc forwarding chains.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-5">
                <Link href="/portal" className="btn btn-primary px-10 py-3.5 text-xs uppercase tracking-[0.2em]">
                  Open portal
                </Link>
                <Link href="/appointments" className="rounded-full px-6 py-3 text-sm text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900">
                  See appointments
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
