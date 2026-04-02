'use client'

import { useState } from 'react'
import { Search, Shield } from 'lucide-react'
import { CampaignShell } from '@/components/campaign/CampaignShell'
import { GlassCard } from '@/components/shared/GlassCard'

const folders = [
  { id: 'inbox', label: 'Inbox', n: 12 },
  { id: 'sent', label: 'Sent', n: 0 },
  { id: 'ver', label: 'Verified Threads', n: 4 },
  { id: 'car', label: 'Carrier Messages', n: 2 },
  { id: 'arch', label: 'Archived', n: 0 },
  { id: 'trash', label: 'Trash', n: 0 },
]

const msgs = [
  { id: 1, from: 'Verified Carrier Ops', sub: 'Creative approved for MAPD carousel', prev: 'Policy checks passed…', t: '10:42a', unread: true },
  { id: 2, from: 'Compliance Bot', sub: 'ZK bundle ready for review', prev: 'Attached attestation…', t: 'Yesterday', unread: true },
]

export default function CampaignInboxPage() {
  const [sel, setSel] = useState(1)
  const m = msgs.find((x) => x.id === sel) ?? msgs[0]

  return (
    <CampaignShell title="Inbox">
      <div className="grid min-h-[70vh] grid-cols-1 gap-4 lg:grid-cols-12">
        <GlassCard className="lg:col-span-2">
          <ul className="space-y-1 text-sm">
            {folders.map((f) => (
              <li key={f.id}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between rounded-lg px-2 py-2 text-left text-neutral-600 hover:bg-neutral-50"
                >
                  {f.label}
                  {f.n > 0 && <span className="text-xs text-neutral-900">{f.n}</span>}
                </button>
              </li>
            ))}
          </ul>
        </GlassCard>
        <GlassCard className="lg:col-span-4">
          <div className="mb-3 flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" />
              <input
                placeholder="Search"
                className="w-full rounded-xl border border-neutral-200 bg-neutral-50 py-2 pl-9 pr-3 text-sm text-neutral-900"
              />
            </div>
          </div>
          <ul className="space-y-1">
            {msgs.map((msg) => (
              <li key={msg.id}>
                <button
                  type="button"
                  onClick={() => setSel(msg.id)}
                  className={`w-full rounded-l-lg border-l-2 py-3 pl-3 text-left text-sm ${
                    sel === msg.id ? 'border-neutral-900 bg-neutral-50 text-neutral-900' : 'border-transparent text-neutral-500 hover:bg-neutral-50/50'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Shield className="h-3.5 w-3.5 text-neutral-900" />
                    <span className="font-medium">{msg.from}</span>
                  </div>
                  <p className="mt-0.5 truncate text-xs text-neutral-500">{msg.sub}</p>
                  <p className="text-[10px] text-neutral-600">{msg.t}</p>
                </button>
              </li>
            ))}
          </ul>
        </GlassCard>
        <GlassCard className="lg:col-span-6 flex flex-col">
          <div className="mb-4 flex items-start justify-between gap-4">
            <div>
              <p className="text-xs text-neutral-500">From · verified</p>
              <h2 className="flex items-center gap-2 font-serif text-xl text-neutral-900">
                {m.from}
                <span className="rounded bg-teal-500/20 px-2 py-0.5 text-[10px] font-sans text-neutral-900">ZK</span>
              </h2>
              <p className="mt-1 text-sm text-neutral-500">{m.sub}</p>
            </div>
            <div className="text-right text-[10px] text-neutral-500">
              <p>TLS verified</p>
              <p>Encryption · E2E optional</p>
            </div>
          </div>
          <div className="flex-1 rounded-xl border border-neutral-200/70 bg-neutral-50 p-4 text-sm leading-relaxed text-neutral-600">
            {m.prev} Full message body would render here with CMS-safe formatting and audit hash footer.
          </div>
          <div className="mt-4 flex gap-2 border-t border-neutral-200 pt-4">
            <input className="flex-1 rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm text-neutral-900" placeholder="Reply…" />
            <button type="button" className="rounded-full bg-neutral-900 px-4 py-2 text-sm text-white hover:bg-neutral-800">
              Send
            </button>
          </div>
        </GlassCard>
      </div>
    </CampaignShell>
  )
}
