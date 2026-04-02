'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { MarketingHeader } from '@/components/marketing/MarketingHeader'
import { MarketingFooter } from '@/components/marketing/MarketingFooter'
import { campaignAbsoluteUrl } from '@/lib/publicUrls'

const tiers = [
  {
    name: 'Starter',
    price: '29',
    period: '/mo',
    description: 'For individuals and small teams getting started with verified correspondence.',
    features: [
      '1 verified mailbox',
      'TLS-encrypted transit',
      'Basic identity verification',
      'Up to 500 messages/month',
      'Email support',
    ],
    cta: 'Get started',
    highlighted: false,
  },
  {
    name: 'Professional',
    price: '99',
    period: '/mo',
    description: 'For growing teams that need full correspondence governance and wallet integration.',
    features: [
      'Up to 10 verified mailboxes',
      'End-to-end encryption',
      'Zero-knowledge verification',
      'USDC wallet integration',
      'Unlimited messages',
      'Priority support',
      'Compliance audit logs',
    ],
    cta: 'Start free trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For organizations with advanced security, compliance, and volume requirements.',
    features: [
      'Unlimited mailboxes',
      'Dedicated infrastructure',
      'Custom SLA and uptime guarantees',
      'USDC settlement and payouts',
      'SSO and directory sync',
      'Dedicated account manager',
      'On-premise deployment option',
      'Custom API integrations',
    ],
    cta: 'Contact sales',
    highlighted: false,
  },
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
                Plans for every stage of growth.
              </h1>
              <p className="mt-8 text-lg leading-relaxed text-neutral-600">
                Start with verified correspondence and scale into enterprise-grade mail governance, wallet integration, and
                compliance tooling as your organization grows.
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-neutral-200 bg-white py-20 md:py-28">
          <div className="shell">
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3 md:gap-5 lg:gap-8">
              {tiers.map((tier, i) => (
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
                  <p className={`font-mono text-[10px] uppercase tracking-[0.2em] ${tier.highlighted ? 'text-neutral-400' : 'text-neutral-500'}`}>
                    {tier.name}
                  </p>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className={`font-serif text-4xl font-medium ${tier.highlighted ? 'text-white' : 'text-neutral-900'}`}>
                      {tier.price === 'Custom' ? '' : '$'}{tier.price}
                    </span>
                    {tier.period && (
                      <span className={`text-sm ${tier.highlighted ? 'text-neutral-400' : 'text-neutral-500'}`}>{tier.period}</span>
                    )}
                  </div>
                  <p className={`mt-4 text-sm leading-relaxed ${tier.highlighted ? 'text-neutral-400' : 'text-neutral-600'}`}>
                    {tier.description}
                  </p>
                  <ul className="mt-8 flex-1 space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm">
                        <CheckCircle
                          className={`mt-0.5 h-4 w-4 shrink-0 ${tier.highlighted ? 'text-emerald-400' : 'text-emerald-600'}`}
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
                        {tier.cta}
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
                        {tier.cta}
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
              <h2 className="font-serif text-2xl text-neutral-900 md:text-3xl">Need a custom plan?</h2>
              <p className="mt-5 text-neutral-600">
                We work with enterprises to build custom correspondence and compliance packages. Reach out for volume discounts, dedicated infrastructure, and tailored SLAs.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-5">
                <Link href="/#contact" className="btn btn-primary border border-neutral-900 bg-neutral-900 px-10 py-3.5 text-xs uppercase tracking-[0.2em] text-white hover:bg-neutral-800">
                  Contact sales
                  <ArrowRight className="ml-2 h-4 w-4" strokeWidth={1.5} />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <MarketingFooter />
    </div>
  )
}
