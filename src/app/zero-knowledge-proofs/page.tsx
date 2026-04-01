'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, EyeOff, UserCheck, Shield } from 'lucide-react'
import { MarketingHeader } from '@/components/marketing/MarketingHeader'

export default function ZeroKnowledgePage() {
  return (
    <div className="min-h-screen bg-white text-neutral-600">
      <MarketingHeader />

      <main>
        <section className="border-b border-neutral-200 bg-gradient-to-b from-neutral-50 to-white py-16 md:py-24 lg:py-28">
          <div className="shell">
            <div className="mx-auto max-w-3xl">
              <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-neutral-500">Platform</p>
              <h1 className="mt-5 font-serif text-4xl font-medium leading-[1.1] text-neutral-900 md:text-5xl lg:text-[3.15rem]">
                Zero Knowledge
              </h1>
              <p className="mt-8 text-lg leading-relaxed text-neutral-600">
                In cryptography, <em>zero knowledge</em> is a guarantee: a protocol can convince someone that a statement is true
                while revealing nothing beyond that fact. In practice, zero-knowledge <em>proofs</em> are the usual mechanism—a
                prover convinces a verifier without transmitting the witness. For professional mail, that maps to attestations:
                show you may open a thread, satisfy policy, or reach an office—without publishing full credentials, graphs, or
                message bodies.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/security" className="btn btn-primary px-8 py-3 text-xs uppercase tracking-[0.2em]">
                  Security overview
                  <ArrowRight className="ml-2 h-4 w-4" strokeWidth={1.5} />
                </Link>
                <Link
                  href="/journey"
                  className="inline-flex items-center rounded-full border border-neutral-200 px-6 py-3 text-sm text-neutral-700 transition hover:border-neutral-400"
                >
                  Messaging protocol
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
                  icon: EyeOff,
                  title: 'Statement, not payload',
                  body: 'Zero-knowledge proofs carry validity of a claim—authorization, policy match, membership—while keeping plaintext and unnecessary attributes out of the transcript.',
                },
                {
                  icon: UserCheck,
                  title: 'Verified sourcing',
                  body: 'Eligibility proofs support verified sourcing: demonstrate permission to engage without exposing how your directory or graph was constructed.',
                },
                {
                  icon: Shield,
                  title: 'Composable checks',
                  body: 'Proofs can be batched or chained so organizations stack jurisdiction, role, or matter checks with bounded leakage and clearer audit semantics.',
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
                Production use depends on proof system choice, circuit design, trusted setup or transparent alternatives, and verifier
                latency. FirstClassMail treats these as engineering and governance decisions alongside TLS, intermediary policy, and
                retention—not as a substitute for them.
              </p>
              <Link href="/fully-homomorphic-encryption" className="mt-8 inline-block text-sm font-medium text-neutral-900 underline-offset-4 hover:underline">
                Related: Homomorphic Encryption
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
