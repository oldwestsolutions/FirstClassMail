'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Inbox, LayoutDashboard, Shield, Send, Mail } from 'lucide-react'
import { MarketingHeader } from '@/components/marketing/MarketingHeader'
import { MarketingFooter } from '@/components/marketing/MarketingFooter'
import { PortalProductDemo } from '@/components/PortalMock'

export default function PlatformPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-600">
      <MarketingHeader />

      <main>
        <div className="border-b border-neutral-200 bg-white">
          <div className="shell py-16 md:py-24 lg:py-28">
            <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:items-center lg:gap-12">
              <div className="lg:col-span-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-neutral-500">Client portal</p>
                <h1 className="mt-5 font-serif text-4xl font-medium leading-[1.1] text-neutral-900 md:text-5xl">
                  One surface for mailboxes, threads, and outbound status.
                </h1>
                <p className="mt-8 text-lg leading-relaxed text-neutral-600">
                  The portal is where correspondence becomes tangible: you see which mailbox is active, whether a thread is
                  verified, how TLS applies to the session, and how outbound messages left the platform toward an office server.
                  It is the operational counterpart to the policy language on Correspondence and The Journey.
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Link href="/portal" className="btn btn-primary px-8 py-3 text-xs uppercase tracking-[0.2em]">
                    Sign in to portal
                    <ArrowRight className="ml-2 h-4 w-4" strokeWidth={1.5} />
                  </Link>
                  <Link
                    href="/practice"
                    className="inline-flex items-center rounded-full border border-neutral-200 px-6 py-3 text-sm text-neutral-700 transition hover:border-neutral-400"
                  >
                    Platform practice
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-6">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Inbox, label: 'Mailboxes', text: 'Inbox and Sent stay in one chrome—no context switching across ad hoc tools.' },
                    { icon: Shield, label: 'Trust chips', text: 'TLS and verification appear where operators expect them—not buried in settings.' },
                    { icon: Send, label: 'Outbound', text: 'Sent view shows release toward verified endpoints without broker handoff.' },
                    { icon: LayoutDashboard, label: 'Operational clarity', text: 'Status lines summarize delivery without exposing unnecessary personal paths.' },
                  ].map((c) => (
                    <div key={c.label} className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5 shadow-sm">
                      <c.icon className="h-5 w-5 text-neutral-800" strokeWidth={1.25} />
                      <p className="mt-3 font-serif text-base text-neutral-900">{c.label}</p>
                      <p className="mt-2 text-xs leading-relaxed text-neutral-600">{c.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="border-b border-neutral-200 bg-neutral-50 py-20 md:py-28">
          <div className="shell">
            <div className="mx-auto max-w-3xl text-center">
              <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-neutral-500">Product preview</p>
              <h2 className="mt-5 font-serif text-[clamp(1.75rem,4vw,2.75rem)] font-medium text-neutral-900">
                How the client portal behaves
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-600">
                A simplified, static mock-up of the real UI: mailboxes, a verified thread, encrypted traffic indicators, and a
                compose strip—so you can see how correspondence is organized before you sign in.
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="mx-auto mt-14 max-w-6xl"
            >
              <PortalProductDemo />
            </motion.div>
          </div>
        </section>

        <section className="border-b border-neutral-200 bg-white py-20 md:py-28">
          <div className="shell">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
              <div className="lg:col-span-5">
                <h2 className="font-serif text-3xl text-neutral-900 md:text-4xl">Why two views matter</h2>
                <p className="mt-6 leading-relaxed text-neutral-600">
                  Thread view emphasizes inbound collaboration with a verified counterparty. Sent view emphasizes outbound
                  obligations—what left your control, toward which office endpoint, and with what status. Teams review both when
                  auditing professional correspondence.
                </p>
              </div>
              <div className="lg:col-span-7">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">Thread view</p>
                    <p className="mt-3 font-serif text-xl text-neutral-900">Collaboration with context</p>
                    <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                      Policy chips and thread headers tell you whether sourcing was checked before messages accumulated—critical
                      when disputes arise about who said what, when.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">Sent view</p>
                    <p className="mt-3 font-serif text-xl text-neutral-900">Outbound accountability</p>
                    <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                      Outbound-only badges and delivery language make it obvious what crossed the boundary toward the office mail
                      server—without exposing addresses to brokers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-neutral-50 py-20 md:py-28">
          <div className="shell">
            <div className="mx-auto max-w-5xl rounded-[2rem] border border-neutral-200 bg-white p-10 shadow-sm md:p-14">
              <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
                <div className="md:col-span-1">
                  <Mail className="h-8 w-8 text-neutral-800" strokeWidth={1.25} />
                  <p className="mt-6 font-serif text-2xl text-neutral-900">From overview to live session</p>
                </div>
                <div className="md:col-span-2 space-y-6 text-sm leading-relaxed text-neutral-600">
                  <p>
                    The previews above are illustrative. After authentication, the same chrome connects to your real mailboxes,
                    routing rules, and organization-specific endpoints—still under TLS, still without selling your contact graph.
                  </p>
                  <p>
                    If you are evaluating FirstClassMail.xyz for a team, pair this page with{' '}
                    <Link href="/correspondence" className="text-neutral-900 underline underline-offset-4 hover:no-underline">
                      Correspondence
                    </Link>{' '}
                    and{' '}
                    <Link href="/journey" className="text-neutral-900 underline underline-offset-4 hover:no-underline">
                      The Journey
                    </Link>{' '}
                    so policy owners and engineers read the same story.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <MarketingFooter />
    </div>
  )
}
