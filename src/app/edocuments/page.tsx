'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, FileText, Lock, FolderOpen, History } from 'lucide-react'
import { MarketingHeader } from '@/components/marketing/MarketingHeader'
import { campaignAbsoluteUrl } from '@/lib/publicUrls'

export default function EdocumentsPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-600">
      <MarketingHeader />

      <main>
        <section className="border-b border-neutral-200 bg-gradient-to-b from-neutral-50 to-white py-16 md:py-24 lg:py-28">
          <div className="shell">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="lg:col-span-7"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-neutral-500">eDocuments</p>
                <h1 className="mt-5 font-serif text-4xl font-medium leading-[1.1] text-neutral-900 md:text-5xl lg:text-[3.25rem]">
                  Documents that stay with the thread.
                </h1>
                <p className="mt-8 max-w-2xl text-lg leading-relaxed text-neutral-600">
                  eDocuments on FirstClassMail ties files and structured records to verified correspondence—so exhibits,
                  intake packets, and office templates live in the same controlled channel as encrypted messaging, not in a
                  separate file silo with unclear provenance.
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <a href={campaignAbsoluteUrl('/')} className="btn btn-primary px-8 py-3 text-xs uppercase tracking-[0.2em]">
                    Open portal
                    <ArrowRight className="ml-2 h-4 w-4" strokeWidth={1.5} />
                  </a>
                  <Link
                    href="/security"
                    className="inline-flex items-center rounded-full border border-neutral-200 px-6 py-3 text-sm text-neutral-700 transition hover:border-neutral-400"
                  >
                    Security model
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
                  { icon: FileText, title: 'Thread-bound files', body: 'Attachments and packets stay associated with identity-verified threads.' },
                  { icon: Lock, title: 'Least exposure', body: 'Reduce ad-hoc email attachments and public download links by default.' },
                  { icon: FolderOpen, title: 'Office templates', body: 'Reuse firm- or practice-specific document sets where policy allows.' },
                  { icon: History, title: 'Retention-aware', body: 'Align document lifecycle with archiving and compliance posture.' },
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
              <h2 className="font-serif text-3xl text-neutral-900 md:text-4xl">Why it matters</h2>
              <p className="mt-6 text-lg leading-relaxed text-neutral-600">
                Professional communication fails when documents drift across inboxes and consumer file shares. eDocuments keeps
                the same bar as the rest of the platform: verified parties, encrypted transit, and a neutral intermediary—so
                what you send is what they receive.
              </p>
            </div>
            <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
              {[
                ['Version clarity', 'Reduce “which PDF is final?” confusion by anchoring files to thread state.'],
                ['Operational fit', 'Teams see documents where they already manage correspondence.'],
                ['Future-ready', 'Structured for deeper workflow automation as your practice grows.'],
              ].map(([title, body], i) => (
                <motion.article
                  key={title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="rounded-2xl border border-neutral-200 bg-neutral-50 p-7 text-left shadow-sm"
                >
                  <p className="font-serif text-xl text-neutral-900">{title}</p>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600">{body}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
