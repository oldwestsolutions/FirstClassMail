'use client'

import { Megaphone, CreditCard, Mail, Settings } from 'lucide-react'
import { CampaignShell } from '@/components/campaign/CampaignShell'
import { GlassCard } from '@/components/shared/GlassCard'

const items = [
  { icon: Megaphone, color: 'text-blue-700', t: 'Campaign published · MAPD Spring', time: 'Mar 30, 14:02' },
  { icon: CreditCard, color: 'text-neutral-900', t: 'USDC spend cap adjusted', time: 'Mar 29, 09:41' },
  { icon: Mail, color: 'text-violet-700', t: 'Verified thread — carrier approval', time: 'Mar 28, 16:18' },
  { icon: Settings, color: 'text-neutral-500', t: 'Export requested · analytics', time: 'Mar 27, 11:05' },
]

export default function CampaignHistoryPage() {
  return (
    <CampaignShell title="History">
      <div className="mb-6 flex flex-wrap gap-3">
        <select className="rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-2 text-xs text-neutral-900">
          <option>Last 30 days</option>
        </select>
        <select className="rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-2 text-xs text-neutral-900">
          <option>All activity</option>
          <option>Campaign</option>
          <option>Payment</option>
          <option>Message</option>
        </select>
      </div>
      <GlassCard>
        <ul className="space-y-6">
          {items.map((it, i) => (
            <li key={i} className="flex gap-4 border-b border-neutral-200/70 pb-6 last:border-0">
              <it.icon className={`h-5 w-5 shrink-0 ${it.color}`} />
              <div>
                <p className="text-neutral-900">{it.t}</p>
                <p className="text-xs text-neutral-500">{it.time}</p>
                <button type="button" className="mt-1 text-xs text-blue-700 hover:underline">
                  Details
                </button>
              </div>
            </li>
          ))}
        </ul>
      </GlassCard>
      <div className="mt-8 flex justify-end gap-3">
        <button type="button" className="rounded-full border border-neutral-200 px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50">
          Download CSV
        </button>
        <button type="button" className="rounded-full border border-neutral-200 px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50">
          Download PDF
        </button>
      </div>
    </CampaignShell>
  )
}
