'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Radio, Fingerprint, Building2, Inbox } from 'lucide-react'
import { MarketingHeader } from '@/components/marketing/MarketingHeader'
import { PortalMockMini } from '@/components/PortalMock'

const stages = [
  {
    title: 'Encrypted transmission',
    lead: 'Every message is protected with modern encryption in transit and at rest, so content is not exposed to eavesdropping or casual interception.',
    detail:
      'From the first byte leaving your device, transport security is the baseline. Storage and replication follow policies that treat message bodies as sensitive assets—not convenient analytics fields.',
    preset: 'journey-1',
    icon: Radio,
  },
  {
    title: 'Verified sourcing',
    lead: 'Connections are built on verified identity and intent—you reach exactly who you are looking for, with authenticity you can rely on.',
    detail:
      'Verification is not a marketing slogan; it is a gate. Where policy requires it, threads do not open against arbitrary addresses—relationship and intent are established first.',
    preset: 'journey-2',
    icon: Fingerprint,
  },
  {
    title: 'Third-party management',
    lead: 'FirstClassMail acts as a professional intermediary: threads are handled through a neutral, controlled channel instead of leaking personal contact paths.',
    detail:
      'The platform sits between participants by design. That position is how correspondence stays governable—routing, retention, and release follow rules instead of ad-hoc forwarding chains.',
    preset: 'journey-3',
    icon: Building2,
  },
  {
    title: 'Private delivery',
    lead: 'Recipients receive communications without unnecessary exposure of personal details, reducing doxxing risk and keeping your footprint minimal.',
    detail:
      'Delivery means landing in the right organizational mail context with only what the policy allows exposed—not broadcasting identifiers across open directories or broker lists.',
    preset: 'journey-4',
    icon: Inbox,
  },
] as const

export default function JourneyPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-600">
      <MarketingHeader />

      <main>
        <div className="border-b border-neutral-200 bg-white">
          <div className="shell py-16 md:py-24 lg:py-28">
            <div className="mx-auto max-w-4xl text-center">
              <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-neutral-500">Mail Protocol</p>
              <h1 className="mt-5 font-serif text-4xl font-medium leading-[1.12] text-neutral-900 md:text-5xl lg:text-[3.25rem]">
                The four-stage protocol for secure professional delivery.
              </h1>
              <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-neutral-600">
                Each stage exists to keep communication private, authentic, and professionally managed—from the first encrypted
                byte to confirmed receipt—without exposing you to unnecessary risk. The sequence below is the same model
                summarized on the homepage, expanded for operators who need clarity before adoption.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Link href="/portal" className="btn btn-primary px-8 py-3 text-xs uppercase tracking-[0.2em]">
                  Open portal
                  <ArrowRight className="ml-2 h-4 w-4" strokeWidth={1.5} />
                </Link>
                <Link
                  href="/practice"
                  className="inline-flex items-center rounded-full border border-neutral-200 px-6 py-3 text-sm text-neutral-700 transition hover:border-neutral-400"
                >
                  See platform practice
                </Link>
              </div>
            </div>

            <div className="mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-4 md:gap-3">
              {stages.map((s, i) => (
                <div
                  key={s.title}
                  className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4 text-center shadow-sm md:p-5"
                >
                  <s.icon className="mx-auto h-6 w-6 text-neutral-700" strokeWidth={1.25} />
                  <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.15em] text-neutral-500">Stage {i + 1}</p>
                  <p className="mt-1 font-serif text-sm font-medium leading-snug text-neutral-900 md:text-base">{s.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <section className="border-b border-neutral-200 bg-neutral-50 py-20 md:py-28">
          <div className="shell space-y-24 md:space-y-32">
            {stages.map((stage, i) => (
              <motion.article
                key={stage.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10"
              >
                <div className={`lg:col-span-5 ${i % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className={`flex justify-center ${i % 2 === 1 ? 'lg:justify-end' : 'lg:justify-start'}`}>
                    <PortalMockMini preset={stage.preset} />
                  </div>
                </div>
                <div className={`lg:col-span-7 ${i % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-neutral-500">Mail Protocol · Phase {i + 1}</p>
                  <h2 className="mt-4 font-serif text-3xl text-neutral-900 md:text-4xl">{stage.title}</h2>
                  <p className="mt-6 text-lg leading-relaxed text-neutral-700">{stage.lead}</p>
                  <p className="mt-5 leading-relaxed text-neutral-600">{stage.detail}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="border-b border-neutral-200 bg-white py-20 md:py-28">
          <div className="shell">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-4">
                <h2 className="font-serif text-3xl text-neutral-900">How the stages connect</h2>
                <p className="mt-5 leading-relaxed text-neutral-600">
                  Stages are sequential in intent: you cannot claim verified delivery if transmission was ambiguous, or if sourcing
                  was never established. The grid is a checklist for governance and for anyone auditing how mail is handled.
                </p>
              </div>
              <div className="lg:col-span-8">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {[
                    ['Encrypted transmission', 'Establishes confidentiality on the path and in retention.'],
                    ['Verified sourcing', 'Ties threads to identity and intent before content flows freely.'],
                    ['Third-party management', 'Keeps routing under policy instead of personal forwarding.'],
                    ['Private delivery', 'Minimizes exposure at the organizational boundary.'],
                  ].map(([h, b]) => (
                    <div key={h} className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
                      <p className="font-serif text-lg text-neutral-900">{h}</p>
                      <p className="mt-2 text-sm leading-relaxed text-neutral-600">{b}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-neutral-50 py-16 md:py-20">
          <div className="shell">
            <div className="mx-auto flex max-w-3xl flex-col items-center rounded-[2rem] border border-neutral-200 bg-white px-8 py-12 text-center shadow-sm md:px-14">
              <h2 className="font-serif text-2xl text-neutral-900 md:text-3xl">Operate inside this protocol</h2>
              <p className="mt-5 text-neutral-600">
                The live client portal implements the same stages. Sign in to send, receive, and audit correspondence against
                these expectations.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-5">
                <Link href="/portal" className="btn btn-primary px-10 py-3.5 text-xs uppercase tracking-[0.2em]">
                  Open portal
                </Link>
                <Link href="/platform" className="rounded-full px-6 py-3 text-sm text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900">
                  Portal product tour
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

    </div>
  )
}
