'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Lock, Binary, Workflow } from 'lucide-react'
import { MarketingHeader } from '@/components/marketing/MarketingHeader'

export default function FhePage() {
  return (
    <div className="min-h-screen bg-white text-neutral-600">
      <MarketingHeader />

      <main>
        <section className="border-b border-neutral-200 bg-gradient-to-b from-neutral-50 to-white py-16 md:py-24 lg:py-28">
          <div className="shell">
            <div className="mx-auto max-w-3xl">
              <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-neutral-500">Platform</p>
              <h1 className="mt-5 font-serif text-4xl font-medium leading-[1.1] text-neutral-900 md:text-5xl lg:text-[3.15rem]">
                Homomorphic Encryption
              </h1>
              <p className="mt-8 text-lg leading-relaxed text-neutral-600">
                Homomorphic encryption lets ciphertexts be combined and transformed so that decryption recovers the result of a
                computation—as if it had been done on plaintext. The fully homomorphic (FHE) setting supports arbitrary circuits;
                leveled or partial schemes often trade expressiveness for performance. For correspondence platforms, the promise is
                policy checks, analytics, or workflow steps that stay bound to encrypted mail: less pressure to “decrypt to
                analyze,” when engineering and key-management assumptions support it.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/security" className="btn btn-primary px-8 py-3 text-xs uppercase tracking-[0.2em]">
                  Security overview
                  <ArrowRight className="ml-2 h-4 w-4" strokeWidth={1.5} />
                </Link>
                <Link
                  href="/correspondence"
                  className="inline-flex items-center rounded-full border border-neutral-200 px-6 py-3 text-sm text-neutral-700 transition hover:border-neutral-400"
                >
                  Correspondence model
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-neutral-200 bg-white py-20 md:py-28">
          <div className="shell">
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 md:grid-cols-3">
              {[
                {
                  icon: Lock,
                  title: 'Compute without exposure',
                  body: 'Homomorphic operations enable rich programs on ciphertexts; cost and latency remain the practical constraint—especially for full FHE.',
                },
                {
                  icon: Binary,
                  title: 'Keys and lifecycle',
                  body: 'Bootstrapping, key rotation, and hybrid designs (homomorphic layers + traditional TLS) are first-order concerns for serious deployment.',
                },
                {
                  icon: Workflow,
                  title: 'Where it helps mail',
                  body: 'Batch triage, retention scoring, or compliance tagging can in principle run under encryption—reducing plaintext exposure in operator pipelines.',
                },
              ].map((item, i) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="rounded-2xl border border-neutral-200 bg-neutral-50 p-7 shadow-sm"
                >
                  <item.icon className="h-5 w-5 text-neutral-800" strokeWidth={1.25} />
                  <h2 className="mt-4 font-serif text-xl text-neutral-900">{item.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600">{item.body}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-neutral-50 py-16 md:py-20">
          <div className="shell">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm leading-relaxed text-neutral-600">
                Adoption depends on performance budgets, regulatory posture, and threat models. FirstClassMail’s baseline remains
                strong transport security and verified sourcing; advanced homomorphic layers are evaluated against those operational
                realities.
              </p>
              <Link href="/probabilistically-checkable-proofs" className="mt-8 inline-block text-sm font-medium text-neutral-900 underline-offset-4 hover:underline">
                Related: Checkable Proofs
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
