'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Mail, Wallet, CalendarDays } from 'lucide-react'
import { MarketingHeader } from '@/components/marketing/MarketingHeader'
import { MarketingFooter } from '@/components/marketing/MarketingFooter'
import { PathIllustration } from '@/components/PracticeIllustrations'
import { PortalMockMini } from '@/components/PortalMock'

const pillars = [
  {
    id: 'mailbox',
    title: 'Mailbox',
    icon: Mail,
    mockPreset: 'mailbox' as const,
    lead:
      'Structured intake and routing for professional correspondence—threads are organized by matter, channel, and policy so nothing important is lost in a generic inbox.',
    body: [
      'The mailbox is not a dump for every notification from every system. It is the surface where inbound and outbound mail is classified: by relationship, by urgency, and by the rules your practice sets for what counts as billable or privileged context. FirstClassMail keeps that structure consistent across devices so attorneys and staff see the same thread state whether they are at a desk or reviewing on the go.',
      'Routing ties messages to the right matter and the right reviewers. When mail arrives from unknown or high-risk sources, policy can require review before it joins a client thread—reducing the chance that phishing or misaddressed content pollutes your record. Search and retention align with how you already think about dockets and obligations rather than forcing a consumer-email mental model.',
    ],
  },
  {
    id: 'wallet',
    title: 'Wallet',
    icon: Wallet,
    mockPreset: 'wallet' as const,
    lead:
      'USDC-ready settlement rails for retainers, invoices, and trust operations—payments stay tied to the matters and agreements they belong to.',
    body: [
      'The wallet surface exists because legal work is not only messages; it is obligations, fees, and trust. FirstClassMail connects payment intent to the same identity and policy layer as mail, so you are not reconciling screenshots of transfers against unrelated spreadsheets. Settlement can follow the cadence your firm defines while preserving an auditable trail suitable for internal review and client transparency where policy allows.',
      'Operational detail—who authorized a transfer, which matter it applies to, and how it relates to engagement terms—can stay in one governed context instead of leaking across personal apps or unmanaged payment links.',
    ],
  },
  {
    id: 'calendar',
    title: 'Calendar',
    icon: CalendarDays,
    mockPreset: 'calendar' as const,
    lead:
      'Invitations, deadlines, and hearing dates coordinated with the same identity fabric as mail and billing—fewer missed handoffs between “email said X” and “calendar said Y.”',
    body: [
      'Calendar entries inherit the same authenticity expectations as correspondence: who invited whom, which matter the time applies to, and whether attendance is firm-wide or restricted. That reduces the class of mistakes where a client-facing event lives only in someone’s personal calendar while the rest of the team operates from another system of record.',
      'For practices that live in deadlines, the calendar is not decorative—it is part of how you demonstrate diligence. Integrating it with mailbox and wallet means time, money, and message can be understood together when you need to reconstruct what happened on a file.',
    ],
  },
] as const

const pathSegments = [
  {
    variant: 'users' as const,
    title: 'Client',
    subtitle: 'TLS session',
    copy:
      'Sessions start on the client with modern transport security. The device authenticates to FirstClassMail; traffic is not sprayed across arbitrary endpoints. That first hop establishes identity and channel before any content is accepted into platform processing.',
  },
  {
    variant: 'platform' as const,
    title: 'FirstClassMail',
    subtitle: 'Authenticate · Verify · Route',
    copy:
      'On the platform, mail is authenticated, verified against policy, and routed toward the correct organizational context. This is where intake automation, spam and abuse controls, and authentication enforcement run—before anything is released toward an office mail server.',
  },
  {
    variant: 'office' as const,
    title: 'Office endpoint',
    subtitle: 'Encrypted handoff',
    copy:
      'Approved mail is handed off to each office’s own mail endpoint over encrypted channels. The office remains the system of record you already trust; FirstClassMail does not replace it—it connects to it under policy rather than forwarding blindly across the open internet.',
  },
] as const

const sectionFull = 'flex min-h-[100svh] flex-col justify-center border-b border-neutral-200 py-16 md:py-24'

export default function PracticePage() {
  return (
    <div className="min-h-screen bg-white text-neutral-600">
      <MarketingHeader />

      <main>
        <section className="border-b border-neutral-200 bg-white">
          <div className="shell py-16 md:py-24 lg:py-28">
            <div className="mx-auto max-w-4xl text-center">
              <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-neutral-500">Practice</p>
              <h1 className="mt-5 font-serif text-4xl font-medium leading-[1.12] text-neutral-900 md:text-5xl lg:text-[3.25rem]">
                FirstClassMail delivers
              </h1>
              <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-neutral-600">
                Mailbox, wallet, and calendar are the primary day-to-day surfaces. The sections below show how sessions move from
                the client through FirstClassMail to each office’s own mail endpoint—authenticated, routed, and released under
                policy rather than across an unmanaged internet path. Each surface is given a full page so you can align staffing,
                training, and governance with how the product actually behaves.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Link href="/portal" className="btn btn-primary px-8 py-3 text-xs uppercase tracking-[0.2em]">
                  Open portal
                  <ArrowRight className="ml-2 h-4 w-4" strokeWidth={1.5} />
                </Link>
                <Link
                  href="/journey"
                  className="inline-flex items-center rounded-full border border-neutral-200 px-6 py-3 text-sm text-neutral-700 transition hover:border-neutral-400"
                >
                  Mail protocol & path
                </Link>
              </div>
            </div>
          </div>
        </section>

        {pillars.map((pillar, i) => (
          <section
            key={pillar.id}
            id={pillar.id}
            className={`${sectionFull} ${i % 2 === 0 ? 'bg-neutral-50' : 'bg-white'}`}
            aria-labelledby={`pillar-${pillar.id}`}
          >
            <div className="shell">
              <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
                <div className={`lg:col-span-5 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className={`flex justify-center ${i % 2 === 1 ? 'lg:justify-end' : 'lg:justify-start'}`}>
                    <PortalMockMini preset={pillar.mockPreset} />
                  </div>
                </div>
                <div className={`lg:col-span-7 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                    <pillar.icon className="h-3.5 w-3.5" strokeWidth={1.25} />
                    Day-to-day surface
                  </div>
                  <h2 id={`pillar-${pillar.id}`} className="font-serif text-3xl text-neutral-900 md:text-4xl lg:text-[2.75rem]">
                    {pillar.title}
                  </h2>
                  <p className="mt-6 text-lg leading-relaxed text-neutral-700">{pillar.lead}</p>
                  {pillar.body.map((para) => (
                    <p key={para.slice(0, 48)} className="mt-5 leading-relaxed text-neutral-600">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}

        <section className={`${sectionFull} bg-neutral-900 text-neutral-300`}>
          <div className="shell">
            <div className="mx-auto max-w-3xl text-center">
              <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-neutral-500">Message path</p>
              <h2 className="mt-4 font-serif text-3xl text-white md:text-4xl">From client to platform to office</h2>
              <p className="mt-6 text-lg leading-relaxed text-neutral-400">
                The diagram is the same story as the Journey page: a segmented path with encryption and policy at each boundary.
                On the Practice view, the emphasis is how daily work—mail, money, and time—rides on that path instead of leaking
                across consumer tools and unmanaged forwards.
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
              {pathSegments.map((seg, j) => (
                <motion.article
                  key={seg.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.45, delay: j * 0.06 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="opacity-90 [&_.rounded-xl]:border-neutral-600 [&_.rounded-xl]:bg-neutral-800/50">
                    <PathIllustration variant={seg.variant} />
                  </div>
                  <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">{seg.subtitle}</p>
                  <h3 className="mt-2 font-serif text-xl text-white">{seg.title}</h3>
                  <p className="mt-4 max-w-sm text-sm leading-relaxed text-neutral-400">{seg.copy}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-neutral-200 bg-white py-16 md:py-20">
          <div className="shell">
            <div className="mx-auto flex max-w-3xl flex-col items-center rounded-[2rem] border border-neutral-200 bg-neutral-50 px-8 py-12 text-center shadow-sm md:px-14">
              <h2 className="font-serif text-2xl text-neutral-900 md:text-3xl">Put the practice surfaces to work</h2>
              <p className="mt-5 text-neutral-600">
                The portal unifies mailbox, wallet, and calendar with the same session and policy story described here.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-5">
                <Link href="/portal" className="btn btn-primary px-10 py-3.5 text-xs uppercase tracking-[0.2em]">
                  Open portal
                </Link>
                <Link
                  href="/platform"
                  className="rounded-full px-6 py-3 text-sm text-neutral-600 hover:bg-white hover:text-neutral-900"
                >
                  Product tour
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
