'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, CalendarClock, ClipboardCheck, Bell, FileText } from 'lucide-react'
import { MarketingHeader } from '@/components/marketing/MarketingHeader'

export default function CalendarPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-600">
      <MarketingHeader />

      <main>
        <section className="border-b border-neutral-200 bg-gradient-to-b from-neutral-50 to-white py-16 md:py-24 lg:py-28">
          <div className="shell">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center lg:gap-10">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="lg:col-span-7"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-neutral-500">Calendar</p>
                <h1 className="mt-5 font-serif text-4xl font-medium leading-[1.1] text-neutral-900 md:text-5xl lg:text-[3.25rem]">
                  Scheduling and correspondence in one professional lane.
                </h1>
                <p className="mt-8 max-w-2xl text-lg leading-relaxed text-neutral-600">
                  Calendar on FirstClassMail treats time-bound touchpoints as first-class mail: invitations, confirmations,
                  reminders, and follow-ups stay inside verified threads with full retention—so scheduling does not fragment
                  across personal inboxes, SMS, and ad hoc tools.
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Link href="/portal" className="btn btn-primary px-8 py-3 text-xs uppercase tracking-[0.2em]">
                    Open portal
                    <ArrowRight className="ml-2 h-4 w-4" strokeWidth={1.5} />
                  </Link>
                  <Link
                    href="/mailbox"
                    className="inline-flex items-center rounded-full border border-neutral-200 px-6 py-3 text-sm text-neutral-700 transition hover:border-neutral-400"
                  >
                    Mailbox workflows
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
                  { icon: CalendarClock, title: 'Scheduling notices', body: 'Send invitations with verified thread context and clear time windows.' },
                  { icon: ClipboardCheck, title: 'Confirmation chain', body: 'Track accept, decline, and reschedule in one retained record.' },
                  { icon: Bell, title: 'Reminder discipline', body: 'Coordinate reminders without leaking personal channels.' },
                  { icon: FileText, title: 'Supporting material', body: 'Attach prep notes, forms, and outcomes beside the calendar event.' },
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
              <h2 className="font-serif text-3xl text-neutral-900 md:text-4xl">Calendar protocol flow</h2>
              <p className="mt-6 text-lg leading-relaxed text-neutral-600">
                From first outreach to post-event follow-up, each stage keeps participants aligned and the record complete.
              </p>
            </div>

            <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
              {[
                ['Pre-event', 'Share availability, intake requirements, and verification context before confirmation.'],
                ['Live coordination', 'Handle changes, location updates, and preparation notes in a governed thread.'],
                ['Post-event', 'Deliver summaries, billing context, and next steps through the same channel.'],
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
              <h2 className="font-serif text-2xl text-neutral-900 md:text-3xl">Standardize time-bound communication</h2>
              <p className="mt-5 text-neutral-600">
                Keep calendar-driven correspondence private, consistent, and auditable across teams and external parties.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-5">
                <Link href="/portal" className="btn btn-primary px-10 py-3.5 text-xs uppercase tracking-[0.2em]">
                  Open portal
                </Link>
                <Link href="/wallet" className="rounded-full px-6 py-3 text-sm text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900">
                  Wallet & settlement
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
