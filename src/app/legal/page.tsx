'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { MarketingHeader } from '@/components/marketing/MarketingHeader'
import { MarketingFooter } from '@/components/marketing/MarketingFooter'

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-600">
      <MarketingHeader />

      <main>
        <section className="border-b border-neutral-200 bg-gradient-to-b from-neutral-50 to-white py-16 md:py-24 lg:py-28">
          <div className="shell">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="mx-auto max-w-4xl text-center"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-neutral-500">Legal</p>
              <h1 className="mt-5 font-serif text-4xl font-medium leading-[1.1] text-neutral-900 md:text-5xl">
                Policy center for FirstClassMail
              </h1>
              <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-neutral-600">
                This page tracks legal documents and policy releases for professional communication on the platform.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="bg-white py-20 md:py-28">
          <div className="shell">
            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-3">
              {[
                ['Privacy policy', 'Coming soon'],
                ['Terms of service', 'Coming soon'],
                ['Cookie policy', 'Coming soon'],
              ].map(([title, status], i) => (
                <motion.article
                  key={title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 text-center shadow-sm"
                >
                  <p className="font-serif text-xl text-neutral-900">{title}</p>
                  <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">{status}</p>
                </motion.article>
              ))}
            </div>

            <div className="mx-auto mt-12 max-w-4xl text-center">
              <Link href="/" className="text-sm text-neutral-500 underline-offset-4 hover:text-neutral-900 hover:underline">
                Back to home
              </Link>
            </div>
          </div>
        </section>
      </main>

      <MarketingFooter />
    </div>
  )
}
