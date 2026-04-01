'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Radio,
  Fingerprint,
  Building2,
  Inbox,
  Filter,
  ShieldCheck,
  Archive,
} from 'lucide-react'
import { MarketingHeader } from '@/components/marketing/MarketingHeader'
import { MarketingFooter } from '@/components/marketing/MarketingFooter'
import { PortalMockMini } from '@/components/PortalMock'
import { PathIllustration } from '@/components/PracticeIllustrations'

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

const pathSteps = [
  {
    step: 'Step 1',
    title: 'Automation',
    illustration: 'users' as const,
    icon: Filter,
    lead:
      'Inbound traffic terminates on TLS sessions at the platform edge. Before a thread is created, automated intake applies policy-aware sorting: classification by priority, destination, and channel rules your administrators define.',
    detail: [
      'Spam and abuse signals are evaluated at ingress—reputation checks, rate limits, and content heuristics reduce unsolicited and malicious mail before it reaches a verified thread. Legitimate traffic is not treated as an open relay: each hop is logged and bounded by session identity.',
      'Automation runs on FirstClassMail-operated infrastructure with consistent patching and capacity isolation. Processing is segmented so intake and sorting do not share uncontrolled execution paths with arbitrary internet workloads.',
    ],
  },
  {
    step: 'Step 2',
    title: 'Enforcement',
    illustration: 'platform' as const,
    icon: ShieldCheck,
    lead:
      'After authentication, messages are evaluated against sourcing and release policy. Email authentication expectations (alignment between envelope, header, and sending identity) and account-level rules are enforced before mail is forwarded or delivered downstream.',
    detail: [
      'Verification is not a one-time check: sessions and sending identities are revalidated against policy as mail moves through the queue. Messages that fail authentication or policy gates are held, rejected, or routed according to your configuration—not silently forwarded.',
      'Enforcement logic runs in the same governed environment as routing and audit logs, so operators can explain what happened to a message without reconstructing ad-hoc server hops across unmanaged hosts.',
    ],
  },
  {
    step: 'Step 3',
    title: 'Storage',
    illustration: 'office' as const,
    icon: Archive,
    lead:
      'Approved mail is handed off to the office mail endpoint over encrypted channels. Retention, archiving, and continuity are governed alongside the thread record so audit and retrieval stay aligned with how you already run mail.',
    detail: [
      'Storage posture is deliberate: records needed for continuity and compliance are retained under access control aligned to your organization—not duplicated into ungoverned tooling by default.',
      'The path remains three segments—client, platform, office—with encryption and policy applied at each boundary rather than treating the public internet as a single undifferentiated pipe.',
    ],
  },
] as const

const sectionShell = 'flex min-h-[100svh] flex-col justify-center border-b border-neutral-200 py-16 md:py-24'

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
                byte to confirmed receipt. Below, the <strong className="font-medium text-neutral-800">message path</strong>{' '}
                details how automation, enforcement, and storage work on platform infrastructure; then the four protocol phases
                summarize the same commitments from a product perspective.
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
                  Practice & surfaces
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

        {/* Message path — full-page sections */}
        <section className={`${sectionShell} bg-neutral-50`}>
          <div className="shell">
            <div className="mx-auto max-w-3xl text-center">
              <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-neutral-500">Message path</p>
              <h2 className="mt-4 font-serif text-3xl text-neutral-900 md:text-4xl lg:text-[2.75rem]">
                From users to our servers to the office
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-neutral-600">
                The path is deliberately segmented: client, platform, and office mail server. Each hop applies encryption and
                policy at the boundary; traffic is not treated as an open relay across the public internet to arbitrary inboxes.
                The three steps below are how that segmentation is operationalized—automation and filtering at intake,
                enforcement before release, and controlled handoff to your endpoint.
              </p>
            </div>
          </div>
        </section>

        {pathSteps.map((step, i) => (
          <section
            key={step.title}
            className={`${sectionShell} ${i % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}`}
            aria-labelledby={`path-step-${i}`}
          >
            <div className="shell">
              <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
                <div className={`lg:col-span-5 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className={`flex justify-center ${i % 2 === 1 ? 'lg:justify-end' : 'lg:justify-start'}`}>
                    <PathIllustration variant={step.illustration} />
                  </div>
                </div>
                <div className={`lg:col-span-7 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                    <step.icon className="h-3.5 w-3.5" strokeWidth={1.25} />
                    {step.step}
                  </div>
                  <h2 id={`path-step-${i}`} className="font-serif text-3xl text-neutral-900 md:text-4xl">
                    {step.title}
                  </h2>
                  <p className="mt-6 text-lg leading-relaxed text-neutral-700">{step.lead}</p>
                  {step.detail.map((para) => (
                    <p key={para.slice(0, 40)} className="mt-5 leading-relaxed text-neutral-600">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}

        <section className={`${sectionShell} bg-white`}>
          <div className="shell">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-center font-serif text-3xl text-neutral-900 md:text-4xl">Four protocol phases (product view)</h2>
              <p className="mx-auto mt-6 max-w-2xl text-center leading-relaxed text-neutral-600">
                The same guarantees appear again as stages you can brief to stakeholders: transmission, sourcing, intermediary
                governance, and delivery. Each stage below expands the narrative; mini mocks illustrate the idea in the UI
                language of the portal.
              </p>
            </div>
            <div className="mx-auto mt-16 space-y-24 md:space-y-32">
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
                    <h3 className="mt-4 font-serif text-3xl text-neutral-900 md:text-4xl">{stage.title}</h3>
                    <p className="mt-6 text-lg leading-relaxed text-neutral-700">{stage.lead}</p>
                    <p className="mt-5 leading-relaxed text-neutral-600">{stage.detail}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className={`${sectionShell} bg-neutral-50`}>
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
                    <div key={h} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                      <p className="font-serif text-lg text-neutral-900">{h}</p>
                      <p className="mt-2 text-sm leading-relaxed text-neutral-600">{b}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-neutral-200 bg-white py-16 md:py-20">
          <div className="shell">
            <div className="mx-auto flex max-w-3xl flex-col items-center rounded-[2rem] border border-neutral-200 bg-neutral-50 px-8 py-12 text-center shadow-sm md:px-14">
              <h2 className="font-serif text-2xl text-neutral-900 md:text-3xl">Operate inside this protocol</h2>
              <p className="mt-5 text-neutral-600">
                The live client portal implements the same stages and path. Sign in to send, receive, and audit correspondence
                against these expectations.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-5">
                <Link href="/portal" className="btn btn-primary px-10 py-3.5 text-xs uppercase tracking-[0.2em]">
                  Open portal
                </Link>
                <Link
                  href="/platform"
                  className="rounded-full px-6 py-3 text-sm text-neutral-600 hover:bg-white hover:text-neutral-900"
                >
                  Portal product tour
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
