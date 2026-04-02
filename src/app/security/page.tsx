'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Lock, Shield, Fingerprint, EyeOff } from 'lucide-react'
import { MarketingHeader } from '@/components/marketing/MarketingHeader'
import { campaignAbsoluteUrl } from '@/lib/publicUrls'

export default function SecurityPage() {
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
                <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-neutral-500">Security</p>
                <h1 className="mt-5 font-serif text-4xl font-medium leading-[1.1] text-neutral-900 md:text-5xl lg:text-[3.25rem]">
                  Security by architecture, not by disclaimer.
                </h1>
                <p className="mt-8 max-w-2xl text-lg leading-relaxed text-neutral-600">
                  FirstClassMail combines encrypted transmission, verified sourcing, and controlled intermediary handling into
                  one cohesive security model. The goal is practical: preserve confidentiality, reduce impersonation risk, and keep
                  professional communication out of data brokerage loops.
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
                    Review mailbox operations
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
                  { icon: Lock, title: 'Encrypted channels', body: 'TLS and secure transport from sender to platform edge.' },
                  { icon: Fingerprint, title: 'Verified sourcing', body: 'Identity and intent checks before sensitive threads open.' },
                  { icon: Shield, title: 'Policy governance', body: 'Controlled intermediary routing, not open forwarding sprawl.' },
                  { icon: EyeOff, title: 'Exposure minimization', body: 'Reduce unnecessary contact-path visibility by design.' },
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
              <h2 className="font-serif text-3xl text-neutral-900 md:text-4xl">Four security layers in practice</h2>
              <p className="mt-6 text-lg leading-relaxed text-neutral-600">
                Controls are layered so no single failure mode defines outcome quality.
              </p>
            </div>

            <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
              {[
                ['Transport layer', 'Protect data in motion across clients, networks, and platform ingress points.'],
                ['Identity layer', 'Establish relationship confidence with verification workflows before routing release.'],
                ['Governance layer', 'Enforce intermediary policy controls for handling, retention, and delivery decisions.'],
                ['Exposure layer', 'Limit visible contact metadata and avoid resale pathways by commercial design.'],
              ].map(([title, body], i) => (
                <motion.article
                  key={title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="rounded-2xl border border-neutral-200 bg-neutral-50 p-7 shadow-sm"
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
              <h2 className="font-serif text-2xl text-neutral-900 md:text-3xl">Security that supports operations</h2>
              <p className="mt-5 text-neutral-600">
                Use secure defaults without adding workflow friction for legal, operations, and client-facing teams.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-5">
                <a href={campaignAbsoluteUrl('/')} className="btn btn-primary px-10 py-3.5 text-xs uppercase tracking-[0.2em]">
                  Open portal
                </a>
                <Link href="/calendar" className="rounded-full px-6 py-3 text-sm text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900">
                  View calendar
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

    </div>
  )
}
