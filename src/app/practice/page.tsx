'use client'

import Link from 'next/link'
import { Fragment } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { MarketingHeader } from '@/components/marketing/MarketingHeader'
import { MarketingFooter } from '@/components/marketing/MarketingFooter'
import { PathIllustration, PillarIllustration } from '@/components/PracticeIllustrations'

const pillars = [
  {
    accent: 'bg-rgb-red',
    border: 'border-l-rgb-red',
    illustration: 'encrypted',
    title: 'Encrypted message transmission',
    body: 'All communication is securely encrypted end to end across our infrastructure, so conversations stay confidential and protected from unauthorized access.',
    extended:
      'Engineering teams treat transport and storage as a single surface: TLS to the edge, strict access around backends, and no casual duplication of message bodies into ungoverned tools.',
  },
  {
    accent: 'bg-rgb-green',
    border: 'border-l-rgb-green',
    illustration: 'verified',
    title: 'Verified sourcing',
    body: 'Users connect with confidence: identities are verified so you know you are speaking with the intended party—not an impersonator or wrong contact.',
    extended:
      'Operational teams define which relationships require verification before first delivery. That is how “who sent this” stays a matter of record instead of guesswork.',
  },
  {
    accent: 'bg-rgb-blue',
    border: 'border-l-rgb-blue',
    illustration: 'privacy',
    title: 'Privacy and simplicity',
    body: 'No doxxing-by-default, no selling of email addresses or message data to brokers. A professional third party manages communications so you stay in control.',
    extended:
      'Simplicity here means fewer parallel channels: one governed path for professional mail, instead of ad-hoc personal inboxes and forwarded chains that defeat policy.',
  },
] as const

const mailPath = [
  {
    title: 'Users',
    illustration: 'users',
    body: 'Senders and recipients use the client portal or API over TLS. Payloads are encrypted for transit so browsers, Wi‑Fi, and intermediaries along the path cannot read message content in the clear.',
  },
  {
    title: 'FirstClassMail',
    illustration: 'platform',
    body: 'Our servers terminate secure sessions, authenticate accounts, apply verified-sourcing rules, and queue routing. We sit in the middle as the controlled intermediary—threads and addresses are not sold to data brokers.',
  },
  {
    title: 'Business office mail',
    illustration: 'office',
    body: 'Outbound delivery connects to the recipient organization’s mail infrastructure—their office mail server or an approved endpoint—over encrypted channels, so staff receive messages inside their normal environment without exposing personal contact paths to public lists.',
  },
] as const

export default function PracticePage() {
  return (
    <div className="min-h-screen bg-white text-neutral-600">
      <MarketingHeader />

      <main>
        <div className="border-b border-neutral-200 bg-gradient-to-br from-neutral-50 via-white to-neutral-50">
          <div className="shell py-16 md:py-24 lg:py-28">
            <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:items-end lg:gap-10">
              <div className="lg:col-span-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-neutral-500">Practice</p>
                <h1 className="mt-5 font-serif text-4xl font-medium leading-[1.1] text-neutral-900 md:text-5xl">
                  What the platform delivers in production.
                </h1>
                <p className="mt-8 max-w-xl text-lg leading-relaxed text-neutral-600">
                  Practice, on this site, means how promises become mechanics: three pillars you can brief to legal and IT, plus a
                  message path that shows where traffic flows before it reaches an office mailbox.
                </p>
                <div className="mt-10">
                  <Link href="/portal" className="btn btn-primary px-8 py-3 text-xs uppercase tracking-[0.2em]">
                    Open portal
                    <ArrowRight className="ml-2 h-4 w-4" strokeWidth={1.5} />
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:col-span-6">
                {pillars.map((p) => (
                  <div key={p.title} className={`rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm ${p.border} border-l-[4px]`}>
                    <PillarIllustration variant={p.illustration} />
                    <p className="mt-4 font-serif text-base text-neutral-900">{p.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <section className="border-b border-neutral-200 bg-white py-20 md:py-28">
          <div className="shell">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-3xl text-neutral-900 md:text-4xl">Three pillars, expanded for stakeholders</h2>
              <p className="mt-6 text-lg leading-relaxed text-neutral-600">
                Each pillar pairs a headline suitable for the homepage with operational detail suitable for security review.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-10 md:gap-12 lg:grid-cols-3">
              {pillars.map((p, i) => (
                <motion.article
                  key={p.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className={`flex flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-50 shadow-sm ${p.border} border-l-[5px]`}
                >
                  <div className={`h-1.5 w-full ${p.accent}`} aria-hidden />
                  <div className="flex flex-1 flex-col p-8 md:p-10">
                    <div className="mx-auto">
                      <PillarIllustration variant={p.illustration} />
                    </div>
                    <h3 className="mt-8 text-center font-serif text-xl text-neutral-900 md:text-2xl">{p.title}</h3>
                    <p className="mt-5 text-center text-sm leading-[1.85] text-neutral-700">{p.body}</p>
                    <p className="mt-6 border-t border-neutral-200 pt-6 text-left text-sm leading-relaxed text-neutral-600">
                      {p.extended}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-neutral-200 bg-neutral-50 py-20 md:py-28">
          <div className="shell">
            <div className="mx-auto max-w-2xl text-center">
              <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-neutral-500">Message path</p>
              <h2 className="mt-4 font-serif text-3xl text-neutral-900 md:text-4xl">From users to our servers to the office</h2>
              <p className="mt-6 text-lg leading-relaxed text-neutral-600">
                Mail does not hop blindly across the open internet to random inboxes. It flows in three controlled segments: your
                client, FirstClassMail, and the business office’s own mail server—each step encrypted and governed by policy.
              </p>
            </div>

            <div className="mt-16 flex flex-col gap-10 lg:flex-row lg:items-stretch lg:justify-center lg:gap-4">
              {mailPath.map((segment, i) => (
                <Fragment key={segment.title}>
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="flex w-full flex-1 flex-col rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm md:p-9 lg:min-w-0 lg:max-w-md lg:text-left"
                  >
                    <div className="mx-auto shrink-0 lg:mx-0">
                      <PathIllustration variant={segment.illustration} />
                    </div>
                    <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.35em] text-neutral-500">Segment {i + 1}</p>
                    <h3 className="mt-3 font-serif text-xl font-medium text-neutral-900 md:text-2xl">{segment.title}</h3>
                    <p className="mt-4 text-sm leading-[1.75] text-neutral-600">{segment.body}</p>
                  </motion.div>
                  {i < mailPath.length - 1 && (
                    <div className="flex shrink-0 items-center justify-center py-0 lg:w-10" aria-hidden>
                      <ChevronRight className="h-5 w-5 rotate-90 text-neutral-300 lg:rotate-0" strokeWidth={1.25} />
                    </div>
                  )}
                </Fragment>
              ))}
            </div>

            <div className="mx-auto mt-16 max-w-4xl rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm md:p-10">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
                {[
                  ['Session layer', 'TLS-terminated sessions and authenticated identities.'],
                  ['Policy layer', 'Verified sourcing and routing rules before release.'],
                  ['Delivery layer', 'Encrypted handoff to the office mail endpoint.'],
                ].map(([t, d]) => (
                  <div key={t}>
                    <p className="font-serif text-lg text-neutral-900">{t}</p>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-600">{d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-20">
          <div className="shell">
            <div className="mx-auto flex max-w-3xl flex-col items-center rounded-[2rem] border border-neutral-200 bg-neutral-50 px-8 py-12 text-center shadow-sm md:px-14">
              <h2 className="font-serif text-2xl text-neutral-900 md:text-3xl">See the same model in the live portal</h2>
              <p className="mt-5 text-neutral-600">
                Product screens mirror these pillars and path—mailboxes, verified threads, and outbound status live in one client.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href="/platform" className="btn btn-primary px-10 py-3.5 text-xs uppercase tracking-[0.2em]">
                  Portal product tour
                </Link>
                <Link href="/correspondence" className="rounded-full px-6 py-3 text-sm text-neutral-600 hover:bg-white hover:text-neutral-900">
                  Correspondence principles
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <MarketingFooter />
    </div>
  )
}
