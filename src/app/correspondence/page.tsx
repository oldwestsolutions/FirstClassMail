'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Lock,
  Shield,
  UserCheck,
  Ban,
  FileKey,
  EyeOff,
  Server,
  CheckCircle2,
  Layers,
  Cpu,
  Binary,
  Workflow,
} from 'lucide-react'
import { MarketingHeader } from '@/components/marketing/MarketingHeader'
import { MarketingFooter } from '@/components/marketing/MarketingFooter'
import { PortalMockMini } from '@/components/PortalMock'

const sectionFull = 'flex min-h-[100svh] flex-col justify-center border-b border-neutral-200 py-16 md:py-24'

export default function CorrespondencePage() {
  return (
    <div className="min-h-screen bg-white text-neutral-600">
      <MarketingHeader />

      <main>
        <div className="border-b border-neutral-200 bg-gradient-to-b from-neutral-50 to-white">
          <div className="shell py-16 md:py-24 lg:py-28">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-x-10 lg:gap-y-0">
              <div className="lg:col-span-7">
                <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-neutral-500">Correspondence</p>
                <h1 className="mt-5 font-serif text-4xl font-medium leading-[1.1] text-neutral-900 md:text-5xl lg:text-[3.25rem]">
                  Confidentiality engineered into every layer.
                </h1>
                <p className="mt-8 max-w-2xl text-lg leading-relaxed text-neutral-600">
                  Correspondence on FirstClassMail is not a feed optimized for advertising—it is a controlled channel for
                  professional communication. Encryption, verified sourcing, and a refusal to monetize your contact graph are
                  foundational, not optional add-ons. The long-form sections below connect that product posture to three
                  cryptographic ideas—zero-knowledge proofs, checkable proofs, and homomorphic encryption—so technical and
                  compliance stakeholders share a common vocabulary.
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Link href="/portal" className="btn btn-primary px-8 py-3 text-xs uppercase tracking-[0.2em]">
                    Open portal
                    <ArrowRight className="ml-2 h-4 w-4" strokeWidth={1.5} />
                  </Link>
                  <Link
                    href="/journey"
                    className="inline-flex items-center rounded-full border border-neutral-200 px-6 py-3 text-sm text-neutral-700 transition hover:border-neutral-400 hover:text-neutral-900"
                  >
                    Follow The Journey
                  </Link>
                </div>
              </div>
              <div className="flex items-end justify-center lg:col-span-5 lg:justify-end">
                <div className="grid w-full max-w-md grid-cols-2 gap-3 sm:max-w-lg">
                  <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
                    <Lock className="h-5 w-5 text-neutral-800" strokeWidth={1.25} />
                    <p className="mt-3 font-serif text-lg text-neutral-900">Transit &amp; storage</p>
                    <p className="mt-2 text-xs leading-relaxed text-neutral-600">
                      Modern TLS between clients and our edge; disciplined practices for data at rest.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
                    <UserCheck className="h-5 w-5 text-neutral-800" strokeWidth={1.25} />
                    <p className="mt-3 font-serif text-lg text-neutral-900">Verified parties</p>
                    <p className="mt-2 text-xs leading-relaxed text-neutral-600">
                      Sourcing rules reduce mistaken identity and impersonation before a thread opens.
                    </p>
                  </div>
                  <div className="col-span-2 rounded-2xl border border-dashed border-neutral-300 bg-neutral-50/80 p-4">
                    <div className="flex items-start gap-3">
                      <Ban className="mt-0.5 h-5 w-5 shrink-0 text-neutral-700" strokeWidth={1.25} />
                      <div>
                        <p className="font-serif text-base text-neutral-900">No list brokerage</p>
                        <p className="mt-1 text-sm leading-relaxed text-neutral-600">
                          Your addresses and message metadata are not inventory for resale. That boundary is contractual and
                          cultural.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="border-b border-neutral-200 bg-white py-20 md:py-28">
          <div className="shell">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-3xl text-neutral-900 md:text-4xl">Three commitments that define the product</h2>
              <p className="mt-6 text-base leading-relaxed text-neutral-600 md:text-lg">
                Each commitment maps to concrete controls: transport security, identity assurance, and commercial restraint.
                Together they keep correspondence professional and defensible under scrutiny.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
              {(
                [
                  {
                    title: 'Encryption first',
                    body: 'TLS protects payloads between browsers, apps, and our infrastructure. Stored content follows strict access boundaries so casual disclosure is not the default failure mode.',
                    preset: 'encryption' as const,
                  },
                  {
                    title: 'Verified parties',
                    body: 'Threads are anchored to verified relationships where policy requires it—so “who is on the other end” is an answer the system is designed to support, not guess.',
                    preset: 'verified' as const,
                  },
                  {
                    title: 'No data brokerage',
                    body: 'We do not sell email addresses or message-derived profiles to data brokers. Your graph of professional contacts is not packaged as a side business.',
                    preset: 'no-brokerage' as const,
                  },
                ] as const
              ).map((item, i) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex flex-col rounded-3xl border border-neutral-200 bg-neutral-50 p-8 shadow-sm md:p-10"
                >
                  <div className="flex justify-center md:justify-start">
                    <PortalMockMini preset={item.preset} />
                  </div>
                  <h3 className="mt-8 text-center font-serif text-xl text-neutral-900 md:text-left">{item.title}</h3>
                  <p className="mt-5 text-center text-sm leading-[1.85] text-neutral-600 md:text-left">{item.body}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Zero Knowledge — full page */}
        <section id="zero-knowledge" className={`${sectionFull} bg-neutral-50`} aria-labelledby="heading-zk">
          <div className="shell">
            <div className="mx-auto max-w-3xl">
              <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-neutral-500">Cryptographic foundation</p>
              <h2 id="heading-zk" className="mt-4 font-serif text-3xl text-neutral-900 md:text-4xl lg:text-[2.75rem]">
                Zero knowledge
              </h2>
              <p className="mt-8 text-lg leading-relaxed text-neutral-700">
                In cryptography, <em className="not-italic text-neutral-800">zero knowledge</em> is a guarantee: a protocol can
                convince someone that a statement is true while revealing nothing beyond that fact. In practice, zero-knowledge{' '}
                <em className="not-italic text-neutral-800">proofs</em> are the usual mechanism—a prover convinces a verifier
                without transmitting the witness. For professional mail, that maps to attestations: show you may open a thread,
                satisfy policy, or reach an office—without publishing full credentials, graphs, or message bodies.
              </p>
              <p className="mt-6 leading-relaxed text-neutral-600">
                This is not a promise that every screen in the product is implemented as a zk-SNARK today. It is a design
                orientation: when eligibility, role, or matter context must be demonstrated, the preferred direction is
                proof-backed statements with minimal leakage—aligned with TLS, intermediary policy, and retention—not a
                substitute for them.
              </p>
            </div>
            <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
              {[
                {
                  icon: EyeOff,
                  title: 'Statement, not payload',
                  body: 'Zero-knowledge proofs carry validity of a claim—authorization, policy match, membership—while keeping plaintext and unnecessary attributes out of the transcript.',
                },
                {
                  icon: UserCheck,
                  title: 'Verified sourcing',
                  body: 'Eligibility proofs support verified sourcing: demonstrate permission to engage without exposing how your directory or graph was constructed.',
                },
                {
                  icon: Shield,
                  title: 'Composable checks',
                  body: 'Proofs can be batched or chained so organizations stack jurisdiction, role, or matter checks with bounded leakage and clearer audit semantics.',
                },
              ].map((item, i) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="rounded-2xl border border-neutral-200 bg-white p-7 shadow-sm"
                >
                  <item.icon className="h-5 w-5 text-neutral-800" strokeWidth={1.25} />
                  <h3 className="mt-4 font-serif text-xl text-neutral-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600">{item.body}</p>
                </motion.article>
              ))}
            </div>
            <p className="mx-auto mt-12 max-w-2xl text-center text-sm leading-relaxed text-neutral-600">
              Production use depends on proof system choice, circuit design, trusted setup or transparent alternatives, and verifier
              latency. FirstClassMail treats these as engineering and governance decisions alongside the baseline correspondence
              model—not marketing labels layered on top of it.
            </p>
          </div>
        </section>

        {/* Checkable proofs — full page */}
        <section id="checkable-proofs" className={`${sectionFull} bg-white`} aria-labelledby="heading-pcp">
          <div className="shell">
            <div className="mx-auto max-w-3xl">
              <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-neutral-500">Cryptographic foundation</p>
              <h2 id="heading-pcp" className="mt-4 font-serif text-3xl text-neutral-900 md:text-4xl lg:text-[2.75rem]">
                Checkable proofs
              </h2>
              <p className="mt-8 text-lg leading-relaxed text-neutral-700">
                Checkable proofs, in this sense, mean verifier-efficient proofs—most famously the probabilistically checkable proof
                (PCP) model: a verifier reads only a tiny random fragment yet gains high confidence that a statement holds, without
                replaying an entire computation. That pattern underpins modern succinct arguments and scalable integrity: complex
                claims can be validated with bounded work, which matters when platforms must audit mail and policy outcomes at
                scale.
              </p>
              <p className="mt-6 leading-relaxed text-neutral-600">
                For operators, the intuition is auditability without naively re-running every rule on every byte for every
                request. The correspondence product already emphasizes verifiable sourcing and policy-governed delivery; “checkable
                proof” thinking is the bridge between that product language and the research literature on PCPs, SNARKs, and layered
                verification pipelines.
              </p>
            </div>
            <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
              {[
                {
                  icon: CheckCircle2,
                  title: 'Verifier efficiency',
                  body: 'Random spot-checks replace exhaustive re-execution when the statement is structured so errors are amplified—useful wherever audits must stay cheap at the edge.',
                },
                {
                  icon: Layers,
                  title: 'From PCPs to SNARKs',
                  body: 'Research stacks build practical systems atop PCP ideas: succinct arguments, recursive proofs, and layered verification pipelines for real infrastructure.',
                },
                {
                  icon: Cpu,
                  title: 'Product relevance',
                  body: 'FirstClassMail emphasizes verifiable sourcing and policy-governed delivery; checkable-proof thinking aligns with proving integrity and eligibility without naive “trust me” checkpoints.',
                },
              ].map((item, i) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="rounded-2xl border border-neutral-200 bg-neutral-50 p-7 shadow-sm"
                >
                  <item.icon className="h-5 w-5 text-neutral-800" strokeWidth={1.25} />
                  <h3 className="mt-4 font-serif text-xl text-neutral-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600">{item.body}</p>
                </motion.article>
              ))}
            </div>
            <p className="mx-auto mt-12 max-w-2xl text-center text-sm leading-relaxed text-neutral-600">
              Roadmaps evolve with research and deployment constraints; consult security and compliance stakeholders before relying on
              any single proof system in production. The correspondence layer remains grounded in transport security, identity, and
              clear commercial boundaries first.
            </p>
          </div>
        </section>

        {/* Homomorphic encryption — full page */}
        <section id="homomorphic-encryption" className={`${sectionFull} bg-neutral-50`} aria-labelledby="heading-fhe">
          <div className="shell">
            <div className="mx-auto max-w-3xl">
              <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-neutral-500">Cryptographic foundation</p>
              <h2 id="heading-fhe" className="mt-4 font-serif text-3xl text-neutral-900 md:text-4xl lg:text-[2.75rem]">
                Homomorphic encryption
              </h2>
              <p className="mt-8 text-lg leading-relaxed text-neutral-700">
                Homomorphic encryption lets ciphertexts be combined and transformed so that decryption recovers the result of a
                computation—as if it had been done on plaintext. The fully homomorphic (FHE) setting supports arbitrary circuits;
                leveled or partial schemes often trade expressiveness for performance. For correspondence platforms, the promise is
                policy checks, analytics, or workflow steps that stay bound to encrypted mail: less pressure to “decrypt to analyze,”
                when engineering and key-management assumptions support it.
              </p>
              <p className="mt-6 leading-relaxed text-neutral-600">
                Adoption depends on performance budgets, regulatory posture, and threat models. FirstClassMail’s baseline remains
                strong transport security and verified sourcing; advanced homomorphic layers are evaluated against those operational
                realities rather than treated as a universal replacement for disciplined access control.
              </p>
            </div>
            <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
              {[
                {
                  icon: Lock,
                  title: 'Compute without exposure',
                  body: 'Homomorphic operations enable rich programs on ciphertexts; cost and latency remain the practical constraint—especially for full FHE.',
                },
                {
                  icon: Binary,
                  title: 'Keys and lifecycle',
                  body: 'Bootstrapping, key rotation, and hybrid designs (homomorphic layers plus traditional TLS) are first-order concerns for serious deployment.',
                },
                {
                  icon: Workflow,
                  title: 'Where it helps mail',
                  body: 'Batch triage, retention scoring, or compliance tagging can in principle run under encryption—reducing plaintext exposure in operator pipelines.',
                },
              ].map((item, i) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="rounded-2xl border border-neutral-200 bg-white p-7 shadow-sm"
                >
                  <item.icon className="h-5 w-5 text-neutral-800" strokeWidth={1.25} />
                  <h3 className="mt-4 font-serif text-xl text-neutral-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600">{item.body}</p>
                </motion.article>
              ))}
            </div>
            <div className="mx-auto mt-10 flex flex-wrap justify-center gap-4 text-sm">
              <Link href="/security" className="font-medium text-neutral-900 underline-offset-4 hover:underline">
                Security overview
              </Link>
              <span className="text-neutral-300" aria-hidden>
                ·
              </span>
              <Link href="/practice" className="font-medium text-neutral-900 underline-offset-4 hover:underline">
                Practice &amp; protocol
              </Link>
            </div>
          </div>
        </section>

        <section className="border-b border-neutral-200 bg-white py-20 md:py-28">
          <div className="shell">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-neutral-500">Architecture</p>
                <h2 className="mt-4 font-serif text-3xl text-neutral-900 md:text-4xl">Defense in depth, explained plainly</h2>
                <p className="mt-6 leading-relaxed text-neutral-600">
                  Security here is not a single checkbox. Transport encryption, access control around storage, and operational
                  discipline each address different failure modes—from passive eavesdropping to insider misuse to commercial
                  pressure to monetize metadata.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  {
                    icon: FileKey,
                    title: 'Ciphertext on the wire',
                    text: 'Intermediaries on the network path see encryption, not message bodies.',
                  },
                  {
                    icon: Server,
                    title: 'Controlled infrastructure',
                    text: 'Sessions terminate on systems governed by policy—not arbitrary third-party inboxes.',
                  },
                  {
                    icon: EyeOff,
                    title: 'Minimal exposure design',
                    text: 'Personal contact paths are not the default way threads are discovered.',
                  },
                  {
                    icon: Shield,
                    title: 'Brokerage off the table',
                    text: 'Revenue does not depend on reselling who emailed whom.',
                  },
                ].map((c) => (
                  <div
                    key={c.title}
                    className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 shadow-sm transition hover:border-neutral-300"
                  >
                    <c.icon className="h-5 w-5 text-neutral-800" strokeWidth={1.25} />
                    <p className="mt-4 font-serif text-lg text-neutral-900">{c.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-600">{c.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-neutral-200 bg-neutral-50 py-20 md:py-28">
          <div className="shell">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-center font-serif text-3xl text-neutral-900 md:text-4xl">What “professional correspondence” excludes</h2>
              <div className="mt-12 overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="border-b border-neutral-200 p-8 md:border-b-0 md:border-r">
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">We prioritize</p>
                    <ul className="mt-6 space-y-4 text-sm leading-relaxed text-neutral-700">
                      <li className="flex gap-3">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600" />
                        Encrypted channels and verified sourcing for high-stakes threads
                      </li>
                      <li className="flex gap-3">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600" />
                        Clear boundaries on how addresses and content are used commercially
                      </li>
                      <li className="flex gap-3">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600" />
                        A third party that manages the channel without turning users into the product
                      </li>
                    </ul>
                  </div>
                  <div className="p-8">
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">We do not treat as inventory</p>
                    <ul className="mt-6 space-y-4 text-sm leading-relaxed text-neutral-600">
                      <li className="flex gap-3">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-300" />
                        Email lists for resale to brokers or “lead enrichment” vendors
                      </li>
                      <li className="flex gap-3">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-300" />
                        Ambiguous provenance where identity should be verified
                      </li>
                      <li className="flex gap-3">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-300" />
                        Casual exposure of personal paths when policy demands containment
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-20">
          <div className="shell">
            <div className="mx-auto flex max-w-3xl flex-col items-center rounded-[2rem] border border-neutral-200 bg-neutral-50 px-8 py-12 text-center shadow-sm md:px-14">
              <h2 className="font-serif text-2xl text-neutral-900 md:text-3xl">Ready to align operations with these standards?</h2>
              <p className="mt-5 max-w-xl text-neutral-600">
                Open the client portal to work inside the same correspondence model described here—or return to the homepage for
                the full product narrative.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-5">
                <Link href="/portal" className="btn btn-primary px-10 py-3.5 text-xs uppercase tracking-[0.2em]">
                  Open portal
                </Link>
                <Link href="/" className="rounded-full px-6 py-3 text-sm text-neutral-600 transition hover:bg-neutral-100 hover:text-neutral-900">
                  Back to home
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
