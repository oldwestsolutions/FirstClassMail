'use client'

import { Megaphone, CreditCard, Mail, Settings } from 'lucide-react'
import { CampaignShell } from '@/components/campaign/CampaignShell'
import { GlassCard } from '@/components/shared/GlassCard'

const items = [
  { icon: Megaphone, color: 'text-blue-400', t: 'Campaign published · MAPD Spring', time: 'Mar 30, 14:02' },
  { icon: CreditCard, color: 'text-teal-400', t: 'USDC spend cap adjusted', time: 'Mar 29, 09:41' },
  { icon: Mail, color: 'text-violet-400', t: 'Verified thread — carrier approval', time: 'Mar 28, 16:18' },
  { icon: Settings, color: 'text-neutral-400', t: 'Export requested · analytics', time: 'Mar 27, 11:05' },
]

export default function CampaignHistoryPage() {
  return (
    <CampaignShell title="History">
      <div className="mb-6 flex flex-wrap gap-3">
        <select className="rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-xs text-white">
          <option>Last 30 days</option>
        </select>
        <select className="rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-xs text-white">
          <option>All activity</option>
          <option>Campaign</option>
          <option>Payment</option>
          <option>Message</option>
        </select>
      </div>
      <GlassCard>
        <ul className="space-y-6">
          {items.map((it, i) => (
            <li key={i} className="flex gap-4 border-b border-white/5 pb-6 last:border-0">
              <it.icon className={`h-5 w-5 shrink-0 ${it.color}`} />
              <div>
                <p className="text-white">{it.t}</p>
                <p className="text-xs text-neutral-500">{it.time}</p>
                <button type="button" className="mt-1 text-xs text-blue-400 hover:underline">
                  Details
                </button>
              </div>
            </li>
          ))}
        </ul>
      </GlassCard>
      <div className="mt-8 flex justify-end gap-3">
        <button type="button" className="rounded-xl border border-white/15 px-4 py-2 text-sm hover:bg-white/5">
          Download CSV
        </button>
        <button type="button" className="rounded-xl border border-white/15 px-4 py-2 text-sm hover:bg-white/5">
          Download PDF
        </button>
      </div>
    </CampaignShell>
  )
}
