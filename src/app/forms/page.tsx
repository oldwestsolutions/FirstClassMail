'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, FileText, ListChecks, Shield, Workflow } from 'lucide-react'
import { MarketingHeader } from '@/components/marketing/MarketingHeader'
import { campaignAbsoluteUrl } from '@/lib/publicUrls'
import { MarketingFooter } from '@/components/marketing/MarketingFooter'
import { PortalMockMini } from '@/components/PortalMock'

export default function FormsPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-600">
      <MarketingHeader />

      <main>
        <section className="border-b border-neutral-200 bg-gradient-to-b from-neutral-50 to-white py-16 md:py-24 lg:py-28">
          <div className="shell">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-x-10 lg:gap-y-12">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="lg:col-span-7"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-neutral-500">Forms</p>
                <h1 className="mt-5 font-serif text-4xl font-medium leading-[1.1] text-neutral-900 md:text-5xl lg:text-[3.25rem]">
                  Intake that lands where your mail already lives.
                </h1>
                <p className="mt-8 max-w-2xl text-lg leading-relaxed text-neutral-600">
                  Forms on FirstClassMail are not anonymous landing pages or third-party widgets. Submissions arrive over TLS into
                  verified threads: field values, timestamps, and replies stay in one auditable chain with the rest of your
                  correspondence—suitable for professional intake, confirmations, and structured follow-up without duplicating
                  data across inboxes and spreadsheets.
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <a href={campaignAbsoluteUrl('/')} className="btn btn-primary px-8 py-3 text-xs uppercase tracking-[0.2em]">
                    Open portal
                    <ArrowRight className="ml-2 h-4 w-4" strokeWidth={1.5} />
                  </a>
                  <Link
                    href="/correspondence"
                    className="inline-flex items-center rounded-full border border-neutral-200 px-6 py-3 text-sm text-neutral-700 transition hover:border-neutral-400"
                  >
                    Correspondence overview
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.06 }}
                className="flex flex-col items-center justify-start gap-6 lg:col-span-5"
              >
                <div className="w-full max-w-[280px]">
                  <PortalMockMini preset="forms" />
                </div>
                <p className="max-w-xs text-center text-sm leading-relaxed text-neutral-500 lg:text-left">
                  Preview: form chrome, TLS posture, and thread-scoped replies—aligned with how teams triage mail in the portal.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="border-b border-neutral-200 bg-white py-20 md:py-28">
          <div className="shell">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-3xl text-neutral-900 md:text-4xl">Operational fit</h2>
              <p className="mt-6 text-lg leading-relaxed text-neutral-600">
                Design intake once, reuse it across offices where policy allows. Grid below summarizes how forms sit relative to
                transport, identity, and retention—without prescribing a single workflow for every firm.
              </p>
            </div>

            <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:gap-5">
              {[
                {
                  icon: Shield,
                  title: 'Transport alignment',
                  body: 'Submissions inherit the same TLS and routing assumptions as the rest of the platform—no separate “form vendor” path for sensitive content.',
                  span: 'sm:col-span-2 lg:col-span-4',
                },
                {
                  icon: ListChecks,
                  title: 'Structured fields',
                  body: 'Capture what you need for triage and compliance; responses remain tied to verified parties instead of anonymous browser sessions.',
                  span: 'lg:col-span-4',
                },
                {
                  icon: Workflow,
                  title: 'Thread continuity',
                  body: 'Replies and follow-ups stay in the thread, reducing handoff errors between intake, legal, and operations.',
                  span: 'lg:col-span-4',
                },
                {
                  icon: FileText,
                  title: 'Records posture',
                  body: 'Form history lives alongside mail for continuity and audit—subject to your organization’s retention rules.',
                  span: 'sm:col-span-2 lg:col-span-6',
                },
                {
                  icon: ArrowRight,
                  title: 'Next steps',
                  body: 'Pair with eDocuments and mailbox policy for end-to-end intake-to-file workflows where your practice requires it.',
                  span: 'sm:col-span-2 lg:col-span-6',
                },
              ].map((item, i) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className={`rounded-2xl border border-neutral-200 bg-neutral-50/80 p-7 shadow-sm ${item.span}`}
                >
                  <item.icon className="h-5 w-5 text-neutral-800" strokeWidth={1.25} />
                  <p className="mt-4 font-serif text-xl text-neutral-900">{item.title}</p>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600">{item.body}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <MarketingFooter />
    </div>
  )
}
