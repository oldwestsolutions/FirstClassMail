'use client'

import { useState } from 'react'
import { Search, Star, Archive, Trash2, Reply, Forward, MoreHorizontal, Paperclip, Send, Shield, Clock, ChevronDown, Plus, Filter, RefreshCw } from 'lucide-react'
import { CampaignShell } from '@/components/campaign/CampaignShell'
import { motion, AnimatePresence } from 'framer-motion'

const folders = [
  { id: 'inbox', label: 'Inbox', n: 12, color: 'text-blue-600' },
  { id: 'starred', label: 'Starred', n: 3, color: 'text-amber-500' },
  { id: 'sent', label: 'Sent', n: 0, color: 'text-neutral-500' },
  { id: 'drafts', label: 'Drafts', n: 2, color: 'text-neutral-500' },
  { id: 'archive', label: 'Archive', n: 0, color: 'text-neutral-500' },
  { id: 'trash', label: 'Trash', n: 0, color: 'text-neutral-500' },
]

const labels = [
  { name: 'Campaigns', color: 'bg-blue-500' },
  { name: 'Compliance', color: 'bg-emerald-500' },
  { name: 'Finance', color: 'bg-violet-500' },
  { name: 'Carriers', color: 'bg-amber-500' },
]

const msgs = [
  {
    id: 1,
    from: 'Verified Carrier Ops',
    email: 'ops@carrier.verified',
    sub: 'Creative approved for MAPD carousel',
    prev: 'Your carousel creative has passed all policy checks and compliance verification. The creative is now live across all approved channels. Performance metrics will begin populating within 24 hours.',
    t: '10:42 AM',
    date: 'Today',
    unread: true,
    starred: true,
    label: 'Campaigns',
    avatar: 'CO',
    verified: true,
    attachments: ['creative_v3_final.png', 'compliance_report.pdf'],
  },
  {
    id: 2,
    from: 'Compliance Bot',
    email: 'compliance@firstclassmail.xyz',
    sub: 'ZK bundle ready for review',
    prev: 'A new zero-knowledge proof bundle is ready for your review. This bundle contains attestation proofs for 847 verified recipients in your latest campaign targeting Florida Medicare beneficiaries.',
    t: '2:18 PM',
    date: 'Yesterday',
    unread: true,
    starred: false,
    label: 'Compliance',
    avatar: 'CB',
    verified: true,
    attachments: ['zk_bundle_0x8f2a.proof'],
  },
  {
    id: 3,
    from: 'Finance Team',
    email: 'finance@firstclassmail.xyz',
    sub: 'Monthly USDC settlement complete',
    prev: 'Your March 2026 settlement has been processed. Total disbursement: 38,120.00 USDC. Transaction hash: 0x7a3b...4c2d. The funds have been credited to your connected Circle wallet.',
    t: '9:05 AM',
    date: 'Mar 30',
    unread: false,
    starred: false,
    label: 'Finance',
    avatar: 'FT',
    verified: false,
    attachments: [],
  },
  {
    id: 4,
    from: 'UnitedHealthcare Liaison',
    email: 'liaison@uhc.partner',
    sub: 'Q2 Co-branding guidelines updated',
    prev: 'Please review the updated co-branding guidelines for Q2 2026 campaigns. Key changes include updated color palette requirements and new disclaimer text for MAPD plan advertisements.',
    t: '4:30 PM',
    date: 'Mar 29',
    unread: false,
    starred: true,
    label: 'Carriers',
    avatar: 'UH',
    verified: true,
    attachments: ['q2_brand_guidelines.pdf'],
  },
  {
    id: 5,
    from: 'Campaign Analytics',
    email: 'analytics@firstclassmail.xyz',
    sub: 'Weekly performance digest — Week 13',
    prev: 'Your weekly campaign performance digest is ready. Highlights: Total impressions up 22% WoW, CTR improved to 3.8%, and your Retargeting campaign achieved a record 4.1% conversion rate.',
    t: '8:00 AM',
    date: 'Mar 28',
    unread: false,
    starred: false,
    label: 'Campaigns',
    avatar: 'CA',
    verified: false,
    attachments: [],
  },
]

export default function CampaignInboxPage() {
  const [sel, setSel] = useState(1)
  const [activeFolder, setActiveFolder] = useState('inbox')
  const [composing, setComposing] = useState(false)
  const m = msgs.find((x) => x.id === sel) ?? msgs[0]

  const labelColor: Record<string, string> = {
    Campaigns: 'bg-blue-100 text-blue-700',
    Compliance: 'bg-emerald-100 text-emerald-700',
    Finance: 'bg-violet-100 text-violet-700',
    Carriers: 'bg-amber-100 text-amber-700',
  }

  return (
    <CampaignShell title="Mailbox">
      <div className="grid min-h-[78vh] grid-cols-1 gap-0 overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm lg:grid-cols-12">
        {/* Sidebar - Folders & Labels */}
        <div className="border-b border-neutral-200 bg-neutral-50/80 p-4 lg:col-span-2 lg:border-b-0 lg:border-r">
          <button
            type="button"
            onClick={() => setComposing(true)}
            className="mb-4 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-blue-700"
          >
            <Plus className="h-4 w-4" />
            Compose
          </button>

          <ul className="space-y-0.5 text-sm">
            {folders.map((f) => (
              <li key={f.id}>
                <button
                  type="button"
                  onClick={() => setActiveFolder(f.id)}
                  className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left transition ${
                    activeFolder === f.id
                      ? 'bg-blue-100/70 text-blue-700 font-medium'
                      : 'text-neutral-600 hover:bg-neutral-100'
                  }`}
                >
                  {f.label}
                  {f.n > 0 && (
                    <span className={`rounded-full px-1.5 py-0.5 text-[10px] font-medium ${
                      activeFolder === f.id ? 'bg-blue-600 text-white' : 'bg-neutral-200 text-neutral-600'
                    }`}>
                      {f.n}
                    </span>
                  )}
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-6 border-t border-neutral-200 pt-4">
            <p className="mb-2 px-3 text-[10px] font-medium uppercase tracking-wider text-neutral-400">Labels</p>
            <ul className="space-y-1">
              {labels.map((l) => (
                <li key={l.name} className="flex items-center gap-2 px-3 py-1.5 text-xs text-neutral-600">
                  <span className={`h-2 w-2 rounded-full ${l.color}`} />
                  {l.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Message List */}
        <div className="border-b border-neutral-200 lg:col-span-4 lg:border-b-0 lg:border-r">
          <div className="flex items-center gap-2 border-b border-neutral-200 px-4 py-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
              <input
                placeholder="Search mailbox…"
                className="w-full rounded-lg border border-neutral-200 bg-neutral-50 py-2 pl-9 pr-3 text-sm text-neutral-900 placeholder:text-neutral-400 transition focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-100"
              />
            </div>
            <button type="button" className="rounded-lg p-2 text-neutral-400 transition hover:bg-neutral-100 hover:text-neutral-600">
              <Filter className="h-4 w-4" />
            </button>
            <button type="button" className="rounded-lg p-2 text-neutral-400 transition hover:bg-neutral-100 hover:text-neutral-600">
              <RefreshCw className="h-4 w-4" />
            </button>
          </div>
          <ul className="max-h-[65vh] overflow-y-auto">
            {msgs.map((msg) => (
              <li key={msg.id}>
                <button
                  type="button"
                  onClick={() => setSel(msg.id)}
                  className={`w-full border-b border-neutral-100 px-4 py-3.5 text-left transition ${
                    sel === msg.id
                      ? 'bg-blue-50/70'
                      : msg.unread
                        ? 'bg-white hover:bg-neutral-50'
                        : 'bg-neutral-50/30 hover:bg-neutral-50'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-medium ${
                      sel === msg.id ? 'bg-blue-100 text-blue-700' : 'bg-neutral-100 text-neutral-600'
                    }`}>
                      {msg.avatar}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-1.5">
                          <span className={`truncate text-sm ${msg.unread ? 'font-semibold text-neutral-900' : 'text-neutral-700'}`}>
                            {msg.from}
                          </span>
                          {msg.verified && (
                            <Shield className="h-3 w-3 text-blue-500" strokeWidth={2} />
                          )}
                        </div>
                        <span className="shrink-0 text-[11px] text-neutral-400">{msg.t}</span>
                      </div>
                      <p className={`mt-0.5 truncate text-sm ${msg.unread ? 'font-medium text-neutral-800' : 'text-neutral-600'}`}>
                        {msg.sub}
                      </p>
                      <div className="mt-1 flex items-center gap-2">
                        <p className="truncate text-xs text-neutral-400">{msg.prev.slice(0, 60)}…</p>
                      </div>
                      <div className="mt-1.5 flex items-center gap-2">
                        {msg.label && (
                          <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${labelColor[msg.label]}`}>
                            {msg.label}
                          </span>
                        )}
                        {msg.attachments.length > 0 && (
                          <Paperclip className="h-3 w-3 text-neutral-400" />
                        )}
                        {msg.starred && (
                          <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                        )}
                      </div>
                    </div>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Message Detail */}
        <div className="flex flex-col lg:col-span-6">
          <div className="flex items-center justify-between border-b border-neutral-200 px-6 py-3">
            <div className="flex items-center gap-2">
              <button type="button" className="rounded-lg p-1.5 text-neutral-400 transition hover:bg-neutral-100 hover:text-neutral-700">
                <Archive className="h-4 w-4" />
              </button>
              <button type="button" className="rounded-lg p-1.5 text-neutral-400 transition hover:bg-neutral-100 hover:text-neutral-700">
                <Trash2 className="h-4 w-4" />
              </button>
              <button type="button" className="rounded-lg p-1.5 text-neutral-400 transition hover:bg-neutral-100 hover:text-neutral-700">
                <Star className={`h-4 w-4 ${m.starred ? 'fill-amber-400 text-amber-400' : ''}`} />
              </button>
            </div>
            <button type="button" className="rounded-lg p-1.5 text-neutral-400 transition hover:bg-neutral-100 hover:text-neutral-700">
              <MoreHorizontal className="h-4 w-4" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-5">
            <h2 className="font-serif text-xl text-neutral-900">{m.sub}</h2>

            <div className="mt-4 flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-medium text-blue-700">
                {m.avatar}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-neutral-900">{m.from}</span>
                  {m.verified && (
                    <span className="flex items-center gap-1 rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-medium text-blue-600">
                      <Shield className="h-3 w-3" strokeWidth={2} />
                      Verified
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-400">
                  <span>{m.email}</span>
                  <span>·</span>
                  <span>{m.date}, {m.t}</span>
                  <button type="button" className="ml-1">
                    <ChevronDown className="h-3 w-3" />
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-6 text-sm leading-relaxed text-neutral-700">
              <p>{m.prev}</p>
              <p className="mt-4 text-neutral-500">
                This message was delivered through the FirstClassMail encrypted transit network. All recipient data is verified through zero-knowledge proofs.
              </p>
            </div>

            {m.attachments.length > 0 && (
              <div className="mt-6 border-t border-neutral-100 pt-4">
                <p className="mb-2 text-xs font-medium text-neutral-500">{m.attachments.length} Attachment{m.attachments.length > 1 ? 's' : ''}</p>
                <div className="flex flex-wrap gap-2">
                  {m.attachments.map((a) => (
                    <div key={a} className="flex items-center gap-2 rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2 text-xs text-neutral-700 transition hover:bg-neutral-100">
                      <Paperclip className="h-3.5 w-3.5 text-neutral-400" />
                      {a}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-6 flex items-center gap-2 border-t border-neutral-100 pt-4 text-[10px] text-neutral-400">
              <Shield className="h-3 w-3" />
              <span>TLS verified · E2E optional · Encrypted transit</span>
            </div>
          </div>

          <div className="border-t border-neutral-200 px-6 py-4">
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                <button type="button" className="flex items-center gap-1.5 rounded-lg border border-neutral-200 px-3 py-2 text-xs text-neutral-600 transition hover:bg-neutral-50">
                  <Reply className="h-3.5 w-3.5" />
                  Reply
                </button>
                <button type="button" className="flex items-center gap-1.5 rounded-lg border border-neutral-200 px-3 py-2 text-xs text-neutral-600 transition hover:bg-neutral-50">
                  <Forward className="h-3.5 w-3.5" />
                  Forward
                </button>
              </div>
              <div className="flex-1">
                <input
                  className="w-full rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm text-neutral-900 placeholder:text-neutral-400 transition focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-100"
                  placeholder="Write a reply…"
                />
              </div>
              <button type="button" className="flex items-center gap-1.5 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700">
                <Send className="h-3.5 w-3.5" />
                Send
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Compose Modal */}
      <AnimatePresence>
        {composing && (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-neutral-900/20 backdrop-blur-sm"
              onClick={() => setComposing(false)}
              aria-label="Close"
            />
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed bottom-8 right-8 z-50 w-full max-w-lg overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-neutral-200 bg-neutral-50 px-4 py-3">
                <h3 className="text-sm font-medium text-neutral-900">New Message</h3>
                <button type="button" onClick={() => setComposing(false)} className="text-neutral-400 hover:text-neutral-700">✕</button>
              </div>
              <div className="space-y-0">
                <input className="w-full border-b border-neutral-100 px-4 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none" placeholder="To:" />
                <input className="w-full border-b border-neutral-100 px-4 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none" placeholder="Subject:" />
                <textarea className="h-48 w-full resize-none px-4 py-3 text-sm text-neutral-700 placeholder:text-neutral-400 focus:outline-none" placeholder="Write your message…" />
              </div>
              <div className="flex items-center justify-between border-t border-neutral-200 px-4 py-3">
                <div className="flex gap-2">
                  <button type="button" className="rounded-lg p-2 text-neutral-400 hover:bg-neutral-100 hover:text-neutral-600">
                    <Paperclip className="h-4 w-4" />
                  </button>
                </div>
                <button type="button" className="flex items-center gap-1.5 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
                  <Send className="h-3.5 w-3.5" />
                  Send
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </CampaignShell>
  )
}
