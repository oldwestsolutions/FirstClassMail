'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Search, Star, Trash2, MoreHorizontal, RefreshCw, Plus,
  Shield, Paperclip, Send, Reply, Forward, X,
} from 'lucide-react'
import { AdminShell } from '@/components/admin/AdminShell'

const emails = [
  { id: 1, from: 'Platform Monitor', sub: 'Server latency spike — US-East', body: 'Average latency on US-East (Virginia) cluster increased to 142ms at 14:32 UTC. Auto-scaling triggered and resolved within 3 minutes. No client-facing impact detected.\n\nCurrent latency: 28ms (normal)\nAffected pods: mail-worker-7, mail-worker-12', t: '2:42 PM', label: 'Infrastructure', avatar: 'PM', verified: true, attachments: ['latency_report.csv'] },
  { id: 2, from: 'Compliance Engine', sub: 'CMS audit batch #847 complete', body: 'Batch #847 compliance verification complete.\n\n847 / 847 recipients verified (100%)\nZK proofs generated and anchored on-chain\nAttestation hash: 0x4f8a...7b2c', t: '11:15 AM', label: 'Compliance', avatar: 'CE', verified: true, attachments: ['audit_847.pdf'] },
  { id: 3, from: 'Revenue Bot', sub: 'Weekly settlement — 312k USDC processed', body: 'Weekly USDC settlement has been processed.\n\nTotal: 312,480.00 USDC\nClients settled: 142\nFailed: 0\nCircle wallet balance: 4.82M USDC', t: '9:00 AM', label: 'Finance', avatar: 'RB', verified: true, attachments: [] },
  { id: 4, from: 'Meridian Health Group', sub: 'Campaign performance inquiry', body: 'Hi Admin Team,\n\nCould you provide a detailed breakdown of our Q1 campaign performance? Specifically interested in conversion rates by region and demographic segment.\n\nBest regards,\nSarah Chen\nMeridian Health Group', t: '4:18 PM', label: 'Clients', avatar: 'MH', verified: false, attachments: [] },
  { id: 5, from: 'Security Alert', sub: 'Unusual login attempt blocked', body: 'An unusual login attempt from IP 203.0.113.42 (geo: Unknown) was blocked by the WAF at 03:12 UTC.\n\nAttempted endpoint: /api/admin/auth\nAction taken: IP banned for 24h\nNo further action required.', t: '3:12 AM', label: 'Security', avatar: 'SA', verified: true, attachments: ['security_log.txt'] },
]

const labelColor: Record<string, string> = {
  Infrastructure: 'bg-orange-100 text-orange-700',
  Compliance: 'bg-emerald-100 text-emerald-700',
  Finance: 'bg-violet-100 text-violet-700',
  Clients: 'bg-blue-100 text-blue-700',
  Security: 'bg-red-100 text-red-700',
}

const MAX_CHARS = 2000

export default function AdminInboxPage() {
  const [openEmail, setOpenEmail] = useState<number | null>(null)
  const [replyText, setReplyText] = useState('')
  const [composing, setComposing] = useState(false)
  const [dotMenu, setDotMenu] = useState(false)

  const emailObj = emails.find((e) => e.id === openEmail)

  return (
    <AdminShell title="Mailbox">
      <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm">
        <div className="flex items-center gap-2 border-b border-neutral-200 px-4 py-2.5">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-neutral-400" />
            <input placeholder="Search…" className="w-full rounded-lg border border-neutral-200 bg-neutral-50 py-1.5 pl-8 pr-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-blue-300 focus:outline-none" />
          </div>
          <button type="button" title="Delete selected" className="rounded-lg p-1.5 text-neutral-400 transition hover:bg-neutral-100 hover:text-neutral-700"><Trash2 className="h-4 w-4" /></button>
          <button type="button" title="Star / Unstar" className="rounded-lg p-1.5 text-neutral-400 transition hover:bg-neutral-100 hover:text-amber-500"><Star className="h-4 w-4" /></button>
          <div className="relative">
            <button type="button" title="More actions" onClick={() => setDotMenu(!dotMenu)} className="rounded-lg p-1.5 text-neutral-400 transition hover:bg-neutral-100 hover:text-neutral-700"><MoreHorizontal className="h-4 w-4" /></button>
            {dotMenu && (
              <div className="absolute right-0 top-full z-20 mt-1 w-40 rounded-lg border border-neutral-200 bg-white py-1 shadow-lg">
                {['Mark all read', 'Archive selected', 'Report spam', 'Empty trash'].map((a) => (
                  <button key={a} type="button" onClick={() => setDotMenu(false)} className="block w-full px-3 py-1.5 text-left text-xs text-neutral-700 hover:bg-neutral-50">{a}</button>
                ))}
              </div>
            )}
          </div>
          <button type="button" title="Refresh" className="rounded-lg p-1.5 text-neutral-400 transition hover:bg-neutral-100 hover:text-neutral-700"><RefreshCw className="h-4 w-4" /></button>
          <button type="button" onClick={() => setComposing(true)} className="flex items-center gap-1.5 rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-blue-700"><Plus className="h-3.5 w-3.5" /> Compose</button>
        </div>

        <ul>
          {emails.map((msg) => (
            <li key={msg.id}>
              <button type="button" onClick={() => { setOpenEmail(msg.id); setReplyText('') }} className="flex w-full items-center gap-3 border-b border-neutral-100 px-4 py-3 text-left transition hover:bg-neutral-50">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-xs font-medium text-neutral-600">{msg.avatar}</div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5 truncate">
                      <span className="text-sm font-medium text-neutral-900">{msg.from}</span>
                      {msg.verified && <Shield className="h-3 w-3 shrink-0 text-blue-500" />}
                    </div>
                    <span className="shrink-0 text-[11px] text-neutral-400">{msg.t}</span>
                  </div>
                  <p className="truncate text-sm text-neutral-600">{msg.sub}</p>
                </div>
                <span className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-medium ${labelColor[msg.label] ?? 'bg-neutral-100 text-neutral-600'}`}>{msg.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Email Modal */}
      <AnimatePresence>
        {openEmail !== null && emailObj && (
          <>
            <motion.button type="button" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-neutral-900/30 backdrop-blur-sm" onClick={() => setOpenEmail(null)} aria-label="Close" />
            <motion.div initial={{ opacity: 0, y: 24, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 24, scale: 0.97 }} className="fixed inset-x-4 top-[10%] z-50 mx-auto flex max-h-[80vh] max-w-xl flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-2xl sm:inset-x-auto sm:w-full">
              <div className="flex items-center justify-between border-b border-neutral-200 px-5 py-3">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-xs font-medium text-blue-700">{emailObj.avatar}</div>
                  <div>
                    <div className="flex items-center gap-1.5"><span className="text-sm font-medium text-neutral-900">{emailObj.from}</span>{emailObj.verified && <Shield className="h-3 w-3 text-blue-500" />}</div>
                    <p className="text-[10px] text-neutral-400">{emailObj.t}</p>
                  </div>
                </div>
                <button type="button" onClick={() => setOpenEmail(null)} className="rounded-lg p-1.5 text-neutral-400 hover:bg-neutral-100"><X className="h-4 w-4" /></button>
              </div>
              <div className="flex-1 overflow-y-auto px-5 py-4">
                <h2 className="font-serif text-lg text-neutral-900">{emailObj.sub}</h2>
                <div className="mt-4 whitespace-pre-line text-sm leading-relaxed text-neutral-700">{emailObj.body}</div>
                {emailObj.attachments.length > 0 && (
                  <div className="mt-4 border-t border-neutral-100 pt-3">
                    <p className="mb-1.5 text-[10px] font-medium text-neutral-500">{emailObj.attachments.length} Attachment{emailObj.attachments.length > 1 ? 's' : ''}</p>
                    <div className="flex flex-wrap gap-1.5">{emailObj.attachments.map((a) => (<div key={a} className="flex items-center gap-1.5 rounded-lg border border-neutral-200 bg-neutral-50 px-2.5 py-1.5 text-[11px] text-neutral-700"><Paperclip className="h-3 w-3 text-neutral-400" />{a}</div>))}</div>
                  </div>
                )}
              </div>
              <div className="border-t border-neutral-200 px-5 py-3">
                <div className="relative">
                  <textarea value={replyText} onChange={(e) => { if (e.target.value.length <= MAX_CHARS) setReplyText(e.target.value) }} className="h-20 w-full resize-none rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-blue-300 focus:outline-none" placeholder="Write a reply…" />
                  <span className={`absolute bottom-2 right-2 text-[10px] ${replyText.length > MAX_CHARS * 0.9 ? 'text-red-500' : 'text-neutral-400'}`}>{replyText.length}/{MAX_CHARS}</span>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <div className="flex gap-1.5">
                    <button type="button" title="Attach file" className="rounded-lg p-1.5 text-neutral-400 hover:bg-neutral-100"><Paperclip className="h-4 w-4" /></button>
                    <button type="button" title="Reply" className="flex items-center gap-1 rounded-lg border border-neutral-200 px-2.5 py-1 text-xs text-neutral-600 hover:bg-neutral-50"><Reply className="h-3.5 w-3.5" /> Reply</button>
                    <button type="button" title="Forward" className="flex items-center gap-1 rounded-lg border border-neutral-200 px-2.5 py-1 text-xs text-neutral-600 hover:bg-neutral-50"><Forward className="h-3.5 w-3.5" /> Forward</button>
                  </div>
                  <button type="button" className="flex items-center gap-1.5 rounded-lg bg-blue-600 px-4 py-1.5 text-xs font-medium text-white hover:bg-blue-700"><Send className="h-3.5 w-3.5" /> Send</button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Compose Modal */}
      <AnimatePresence>
        {composing && (
          <>
            <motion.button type="button" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-neutral-900/20 backdrop-blur-sm" onClick={() => setComposing(false)} aria-label="Close" />
            <motion.div initial={{ opacity: 0, y: 40, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 40, scale: 0.95 }} className="fixed bottom-6 right-6 z-50 w-full max-w-md overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-2xl">
              <div className="flex items-center justify-between border-b border-neutral-200 bg-neutral-50 px-4 py-2.5"><h3 className="text-sm font-medium text-neutral-900">New Message</h3><button type="button" onClick={() => setComposing(false)} className="text-neutral-400 hover:text-neutral-700">✕</button></div>
              <input className="w-full border-b border-neutral-100 px-4 py-2 text-sm placeholder:text-neutral-400 focus:outline-none" placeholder="To:" />
              <input className="w-full border-b border-neutral-100 px-4 py-2 text-sm placeholder:text-neutral-400 focus:outline-none" placeholder="Subject:" />
              <textarea className="h-40 w-full resize-none px-4 py-2.5 text-sm placeholder:text-neutral-400 focus:outline-none" placeholder="Write your message…" maxLength={MAX_CHARS} />
              <div className="flex items-center justify-between border-t border-neutral-200 px-4 py-2.5">
                <button type="button" title="Attach file" className="rounded-lg p-1.5 text-neutral-400 hover:bg-neutral-100"><Paperclip className="h-4 w-4" /></button>
                <button type="button" className="flex items-center gap-1.5 rounded-lg bg-blue-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-blue-700"><Send className="h-3.5 w-3.5" /> Send</button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </AdminShell>
  )
}
