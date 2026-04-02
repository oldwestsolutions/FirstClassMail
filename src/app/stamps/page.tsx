'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, BadgeCheck, Mail, Send, SlidersHorizontal } from 'lucide-react'
import { MarketingHeader } from '@/components/marketing/MarketingHeader'
import { campaignAbsoluteUrl } from '@/lib/publicUrls'
import { MarketingFooter } from '@/components/marketing/MarketingFooter'
import { PortalMockMini } from '@/components/PortalMock'

export default function StampsPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-600">
      <MarketingHeader />

      <main>
        <section className="border-b border-neutral-200 bg-gradient-to-b from-neutral-50 to-white py-16 md:py-24 lg:py-28">
          <div className="shell">
            <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-x-10 lg:gap-y-12">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="lg:col-span-7"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-neutral-500">Stamps</p>
                <h1 className="mt-5 font-serif text-4xl font-medium leading-[1.1] text-neutral-900 md:text-5xl lg:text-[3.25rem]">
                  Outbound class and intent, visible on send.
                </h1>
                <p className="mt-8 max-w-2xl text-lg leading-relaxed text-neutral-600">
                  Stamps are lightweight signals on outbound mail: service class, handling expectations, and postmark-style
                  metadata that stay visible in the thread. They support operational clarity—who sent what, under which policy—
                  without bolting on a separate tracking system outside verified correspondence.
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <a href={campaignAbsoluteUrl('/')} className="btn btn-primary px-8 py-3 text-xs uppercase tracking-[0.2em]">
                    Open portal
                    <ArrowRight className="ml-2 h-4 w-4" strokeWidth={1.5} />
                  </a>
                  <Link
                    href="/mailbox"
                    className="inline-flex items-center rounded-full border border-neutral-200 px-6 py-3 text-sm text-neutral-700 transition hover:border-neutral-400"
                  >
                    Mailbox product
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.06 }}
                className="flex flex-col items-center gap-6 lg:col-span-5 lg:items-end"
              >
                <div className="w-full max-w-[280px] lg:max-w-none">
                  <PortalMockMini preset="stamps" />
                </div>
                <p className="max-w-xs text-center text-sm leading-relaxed text-neutral-500 lg:text-right">
                  Preview: outbound stamp block and postmark line—shown at send time so downstream handling stays explicit.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="border-b border-neutral-200 bg-white py-20 md:py-28">
          <div className="shell">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start lg:gap-10">
              <div className="lg:col-span-5">
                <h2 className="font-serif text-3xl text-neutral-900 md:text-4xl">Why stamps exist</h2>
                <p className="mt-6 text-base leading-relaxed text-neutral-600">
                  Professional mail often needs more than a bare “Sent” flag. Stamps document class and intent in-line with the
                  message so recipients and intermediaries see the same operational picture—reducing ambiguity when mail is
                  escalated, forwarded under policy, or reviewed later.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7 lg:[grid-template-columns:repeat(7,minmax(0,1fr))]">
                {[
                  { icon: Mail, title: 'Thread-bound', body: 'Stamps render with the message in the verified thread, not as external badges.', span: 'sm:col-span-1 lg:col-span-3' },
                  { icon: Send, title: 'Outbound scope', body: 'Applied on send paths you authorize; consistent with mailbox and policy settings.', span: 'sm:col-span-1 lg:col-span-4' },
                  { icon: BadgeCheck, title: 'Audit-friendly', body: 'Visible metadata supports review without exporting mail to side systems.', span: 'sm:col-span-2 lg:col-span-4' },
                  { icon: SlidersHorizontal, title: 'Configurable', body: 'Teams map stamps to internal categories as policy allows.', span: 'sm:col-span-2 lg:col-span-3' },
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className={`rounded-2xl border border-neutral-200 bg-neutral-50 p-6 ${item.span}`}
                  >
                    <item.icon className="h-5 w-5 text-neutral-800" strokeWidth={1.25} />
                    <p className="mt-3 font-serif text-lg text-neutral-900">{item.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-600">{item.body}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <MarketingFooter />
    </div>
  )
}
