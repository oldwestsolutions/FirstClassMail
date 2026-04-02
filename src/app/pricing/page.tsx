'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { MarketingHeader } from '@/components/marketing/MarketingHeader'
import { MarketingFooter } from '@/components/marketing/MarketingFooter'
import { campaignAbsoluteUrl } from '@/lib/publicUrls'

const creditBands = [
  {
    name: 'Launch',
    amount: '$500',
    note: 'Minimum opening balance',
    description: 'Ideal for testing creative, audience fit, and delivery before scaling spend.',
    includes: ['Prepaid advertising balance in your account', 'Campaign creation and scheduling', 'Spend deducted as delivery occurs', 'Top up at any time'],
    highlighted: false,
  },
  {
    name: 'Scale',
    amount: '$2,500',
    note: 'Most common for active advertisers',
    description: 'Sustained reach across channels with room to optimize pacing and creative rotation.',
    includes: ['Same model as Launch, higher available balance', 'Suitable for multi-campaign portfolios', 'Transparent ledger of charges against credit', 'Replenish when balance runs low'],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    amount: 'Custom',
    note: 'Volume and committed programs',
    description: 'For organizations that require negotiated terms, dedicated support, or higher committed media budgets.',
    includes: ['Custom prepaid or invoiced arrangements', 'Account management and planning support', 'Optional USDC settlement workflows', 'Tailored reporting and compliance alignment'],
    highlighted: false,
  },
] as const

const principles = [
  'You fund a prepaid advertising balance—not a flat subscription tied to media delivery.',
  'Charges accrue as your campaigns run, consistent with self-serve advertising platforms.',
  'Unused balance remains available until applied; you control when to add funds.',
  'Settlement may be offered in USDC where supported, in addition to standard payment methods.',
] as const

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-600">
      <MarketingHeader />

      <main>
        <section className="border-b border-neutral-200 bg-gradient-to-b from-neutral-50 to-white py-16 md:py-24 lg:py-28">
          <div className="shell">
            <div className="mx-auto max-w-3xl text-center">
              <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-neutral-500">Pricing</p>
              <h1 className="mt-5 font-serif text-4xl font-medium leading-[1.1] text-neutral-900 md:text-5xl lg:text-[3.25rem]">
                Prepaid advertising balance.
              </h1>
              <p className="mt-8 text-lg leading-relaxed text-neutral-600">
                Purchase media spend credit, run campaigns on FirstClassMail, and pay as your ads deliver. The model is
                straightforward: fund your account, advertise, and replenish when you are ready to continue—without
                bundling media delivery into unrelated subscription tiers.
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-neutral-200 bg-white py-12 md:py-16">
          <div className="shell">
            <div className="mx-auto max-w-2xl">
              <h2 className="text-center font-serif text-xl text-neutral-900 md:text-2xl">How it works</h2>
              <ul className="mt-8 space-y-4">
                {principles.map((line) => (
                  <li key={line} className="flex gap-3 text-sm leading-relaxed text-neutral-700 md:text-base">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-neutral-900" strokeWidth={1.5} aria-hidden />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="border-b border-neutral-200 bg-white py-20 md:py-28">
          <div className="shell">
            <p className="mx-auto mb-12 max-w-2xl text-center text-sm text-neutral-500">
              Representative opening balances. Final terms are confirmed at account setup.
            </p>
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3 md:gap-5 lg:gap-8">
              {creditBands.map((tier, i) => (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className={`flex flex-col rounded-[1.75rem] border p-8 shadow-sm md:p-9 ${
                    tier.highlighted
                      ? 'border-neutral-900 bg-neutral-900 text-neutral-300 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.25)]'
                      : 'border-neutral-200 bg-white'
                  }`}
                >
                  <p
                    className={`font-mono text-[10px] uppercase tracking-[0.2em] ${tier.highlighted ? 'text-neutral-400' : 'text-neutral-500'}`}
                  >
                    {tier.name}
                  </p>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className={`font-serif text-4xl font-medium ${tier.highlighted ? 'text-white' : 'text-neutral-900'}`}>
                      {tier.amount}
                    </span>
                  </div>
                  <p
                    className={`mt-2 font-mono text-[10px] uppercase tracking-wider ${tier.highlighted ? 'text-neutral-500' : 'text-neutral-400'}`}
                  >
                    {tier.note}
                  </p>
                  <p className={`mt-4 text-sm leading-relaxed ${tier.highlighted ? 'text-neutral-400' : 'text-neutral-600'}`}>
                    {tier.description}
                  </p>
                  <ul className="mt-8 flex-1 space-y-3">
                    {tier.includes.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm">
                        <CheckCircle
                          className={`mt-0.5 h-4 w-4 shrink-0 ${tier.highlighted ? 'text-neutral-400' : 'text-neutral-900'}`}
                          strokeWidth={1.5}
                        />
                        <span className={tier.highlighted ? 'text-neutral-300' : 'text-neutral-700'}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    {tier.name === 'Enterprise' ? (
                      <Link
                        href="/#contact"
                        className={`inline-flex h-12 w-full items-center justify-center gap-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                          tier.highlighted
                            ? 'bg-white text-neutral-900 hover:bg-neutral-100'
                            : 'border border-neutral-200 text-neutral-700 hover:bg-neutral-50'
                        }`}
                      >
                        Contact sales
                        <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                      </Link>
                    ) : (
                      <a
                        href={campaignAbsoluteUrl('/')}
                        className={`inline-flex h-12 w-full items-center justify-center gap-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                          tier.highlighted
                            ? 'bg-white text-neutral-900 hover:bg-neutral-100'
                            : 'bg-neutral-900 text-white hover:bg-neutral-800'
                        }`}
                      >
                        Open portal
                        <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                      </a>
                    )}
                  </div>
                </motion.div>
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
              <h2 className="font-serif text-2xl text-neutral-900 md:text-3xl">Questions about credit or settlement?</h2>
              <p className="mt-5 text-neutral-600">
                We can walk through minimums, USDC options, and how charges map to campaign delivery for your use case.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-5">
                <Link
                  href="/#contact"
                  className="btn btn-primary inline-flex items-center justify-center border border-neutral-900 bg-neutral-900 px-10 py-3.5 text-xs uppercase tracking-[0.2em] text-white hover:bg-neutral-800"
                >
                  Contact us
                  <ArrowRight className="ml-2 h-4 w-4" strokeWidth={1.5} />
                </Link>
                <a
                  href={campaignAbsoluteUrl('/')}
                  className="inline-flex items-center justify-center rounded-full border border-neutral-200 px-10 py-3.5 text-xs uppercase tracking-[0.2em] text-neutral-700 transition hover:bg-neutral-50"
                >
                  Fund &amp; advertise
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <MarketingFooter />
    </div>
  )
}
