'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Wallet, Coins, Share2, Building2, Smartphone } from 'lucide-react'
import { MarketingHeader } from '@/components/marketing/MarketingHeader'

const sections = [
  {
    icon: Coins,
    title: 'USDC mailbox payments',
    lead:
      'Users can pay for mailbox subscriptions in USDC—settlement on-chain, without routing through traditional card rails.',
    points: [
      'Reduces reliance on banks and card networks for recurring mailbox fees.',
      'Designed to avoid chargeback-driven churn common with card-based SaaS billing.',
      'Pricing and renewal logic can align with wallet balance and subscription tier in one place.',
    ],
  },
  {
    icon: Share2,
    title: 'Ad revenue sharing',
    lead:
      'Where advertising is part of the product surface, revenue can be split automatically and pushed to user wallets as small, frequent transfers.',
    points: [
      'Micropayment-friendly settlement so shares do not batch only at month-end.',
      'Can route through a programmable payments network built for high-throughput, low-value transfers—the same class of infrastructure often labeled CPN in integration docs.',
      'Keeps participants aligned: value flows to wallets as engagement generates yield, not only to platform accounts.',
    ],
  },
  {
    icon: Building2,
    title: 'Instant settlement for business clients',
    lead:
      'Professional organizations—law firms, clinics, and advisory practices—can settle correspondence and intake fees in seconds rather than waiting on ACH or invoice cycles.',
    points: [
      'Stablecoin settlement maps cleanly to fixed-fee or metered correspondence models.',
      'Reduces operational drag on accounts receivable for high-volume client communication.',
      'Pairs with verified sourcing so payment and identity context stay in the same controlled workflow.',
    ],
  },
  {
    icon: Smartphone,
    title: 'Programmable wallets in the mailbox',
    lead:
      'Each account can embed a USDC wallet directly inside the mailbox experience—full-width sections, clear balances, and actions without leaving the thread.',
    points: [
      'Wallet state lives next to encrypted threads so users see funds and messages in one professional context.',
      'Programmable rules can trigger top-ups, splits, or payouts from the same UI surface.',
      'Immersive layouts keep blockchain mechanics secondary to correspondence: money is a tool, not a distraction.',
    ],
  },
] as const

export default function BlockchainPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-600">
      <MarketingHeader />

      <main>
        <section className="border-b border-neutral-200 bg-gradient-to-b from-neutral-50 to-white">
          <div className="shell py-16 md:py-24 lg:py-28">
            <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:items-center lg:gap-12">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="lg:col-span-7"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-neutral-500">Blockchain</p>
                <h1 className="mt-5 font-serif text-4xl font-medium leading-[1.1] text-neutral-900 md:text-5xl lg:text-[3.25rem]">
                  Stablecoin infrastructure for professional mail.
                </h1>
                <p className="mt-8 max-w-2xl text-lg leading-relaxed text-neutral-600">
                  FirstClassMail layers programmable money on top of encrypted correspondence: USDC for subscriptions and fees,
                  automated revenue sharing through micropayment-capable rails, and embedded wallets so users never juggle a
                  separate crypto app to stay subscribed or get paid.
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Link href="/signup" className="btn btn-primary px-8 py-3 text-xs uppercase tracking-[0.2em]">
                    Create account
                    <ArrowRight className="ml-2 h-4 w-4" strokeWidth={1.5} />
                  </Link>
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
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.08 }}
                className="lg:col-span-5"
              >
                <div className="rounded-[2rem] border border-neutral-200 bg-white p-8 shadow-sm md:p-10">
                  <div className="flex items-center gap-3 border-b border-neutral-100 pb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-neutral-200 bg-neutral-50">
                      <Wallet className="h-5 w-5 text-neutral-800" strokeWidth={1.25} />
                    </div>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">Embedded layer</p>
                      <p className="font-serif text-lg text-neutral-900">Wallet + mailbox</p>
                    </div>
                  </div>
                  <ul className="mt-6 space-y-4 text-sm leading-relaxed text-neutral-600">
                    <li className="flex gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" aria-hidden />
                      USDC for subscriptions and business settlement—not speculative assets in the critical path.
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" aria-hidden />
                      Micropayment rails for ad share and small payouts without batching everything to wire transfers.
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" aria-hidden />
                      Full-page wallet surfaces inside the product so finance and correspondence stay unified.
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="border-b border-neutral-200 bg-white py-20 md:py-28">
          <div className="shell">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-3xl text-neutral-900 md:text-4xl">What the stack enables</h2>
              <p className="mt-6 text-lg leading-relaxed text-neutral-600">
                These capabilities are product features—not a whitepaper. They exist to make mailbox economics predictable for
                users and businesses that already trust verified, encrypted channels.
              </p>
            </div>

            <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-10 md:gap-12 lg:grid-cols-2">
              {sections.map((block, i) => (
                <motion.article
                  key={block.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="flex flex-col rounded-[1.75rem] border border-neutral-200 bg-neutral-50 p-8 shadow-sm md:p-10"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-neutral-200 bg-white">
                      <block.icon className="h-5 w-5 text-neutral-800" strokeWidth={1.25} />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl text-neutral-900 md:text-2xl">{block.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-neutral-600">{block.lead}</p>
                    </div>
                  </div>
                  <ul className="mt-8 space-y-3 border-t border-neutral-200/80 pt-8 text-sm leading-relaxed text-neutral-600">
                    {block.points.map((p) => (
                      <li key={p} className="flex gap-2.5">
                        <span className="mt-2 h-px w-3 shrink-0 bg-neutral-300" aria-hidden />
                        {p}
                      </li>
                    ))}
                  </ul>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-neutral-50 py-16 md:py-24">
          <div className="shell">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mx-auto max-w-3xl rounded-[2rem] border border-neutral-200 bg-white px-8 py-12 text-center shadow-sm md:px-14 md:py-16"
            >
              <h2 className="font-serif text-2xl text-neutral-900 md:text-3xl">Ready to combine mail and money?</h2>
              <p className="mt-5 text-neutral-600">
                Open the portal to explore wallet-enabled flows alongside encrypted threads and verified sourcing.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-5">
                <Link href="/portal" className="btn btn-primary px-10 py-3.5 text-xs uppercase tracking-[0.2em]">
                  Open portal
                  <ArrowRight className="ml-2 h-4 w-4" strokeWidth={1.5} />
                </Link>
                <Link href="/practice" className="rounded-full px-6 py-3 text-sm text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900">
                  Practice overview
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}
