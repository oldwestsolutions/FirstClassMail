'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Layers, Cpu } from 'lucide-react'
import { MarketingHeader } from '@/components/marketing/MarketingHeader'

export default function PcpPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-600">
      <MarketingHeader />

      <main>
        <section className="border-b border-neutral-200 bg-gradient-to-b from-neutral-50 to-white py-16 md:py-24 lg:py-28">
          <div className="shell">
            <div className="mx-auto max-w-3xl">
              <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-neutral-500">Platform</p>
              <h1 className="mt-5 font-serif text-4xl font-medium leading-[1.1] text-neutral-900 md:text-5xl lg:text-[3.15rem]">
                Checkable Proofs
              </h1>
              <p className="mt-8 text-lg leading-relaxed text-neutral-600">
                Checkable proofs, in this sense, mean verifier-efficient proofs—most famously the probabilistically checkable proof (PCP)
                model: a verifier reads only a tiny random fragment yet gains high confidence that a statement holds, without
                replaying an entire computation. That pattern underpins modern succinct arguments and scalable integrity: complex
                claims can be validated with bounded work, which matters when platforms must audit mail and policy outcomes at
                scale.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/security" className="btn btn-primary px-8 py-3 text-xs uppercase tracking-[0.2em]">
                  Security overview
                  <ArrowRight className="ml-2 h-4 w-4" strokeWidth={1.5} />
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center rounded-full border border-neutral-200 px-6 py-3 text-sm text-neutral-700 transition hover:border-neutral-400"
                >
                  Pricing
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
                  icon: CheckCircle2,
                  title: 'Verifier efficiency',
                  body: 'Random spot-checks replace exhaustive re-execution when the statement is structured so errors are amplified—useful wherever audits must stay cheap at the edge.',
                },
                {
                  icon: Layers,
                  title: 'From PCPs to SNARKs',
                  body: 'Research stacks build practical systems atop PCP ideas: succinct arguments, recursive proofs, and layered verification pipelines for real infrastructure.',
                },
                {
                  icon: Cpu,
                  title: 'Product relevance',
                  body: 'FirstClassMail emphasizes verifiable sourcing and policy-governed delivery; checkable-proof thinking aligns with proving integrity and eligibility without naive “trust me” checkpoints.',
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
                This page orients teams on cryptographic building blocks. Roadmaps evolve with research and deployment constraints;
                consult your security and compliance stakeholders before relying on any single proof system in production.
              </p>
              <Link href="/zero-knowledge-proofs" className="mt-8 inline-block text-sm font-medium text-neutral-900 underline-offset-4 hover:underline">
                Next: Zero Knowledge
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
