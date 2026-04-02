'use client'

import { Pie, PieChart, Cell, ResponsiveContainer } from 'recharts'
import { CampaignShell } from '@/components/campaign/CampaignShell'
import { GlassCard } from '@/components/shared/GlassCard'
import { StatusBadge } from '@/components/shared/StatusBadge'

const byCarrier = [
  { name: 'UHC', value: 42 },
  { name: 'Humana', value: 33 },
  { name: 'Aetna', value: 25 },
]
const COLORS = ['#2dd4bf', '#60a5fa', '#a78bfa']

export default function CampaignSpendingPage() {
  return (
    <CampaignShell title="Ad Spend">
      <GlassCard className="mb-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div>
            <p className="text-xs text-neutral-500">Total budget</p>
            <p className="font-mono text-2xl text-white">250,000 USDC</p>
          </div>
          <div>
            <p className="text-xs text-neutral-500">Spent</p>
            <p className="font-mono text-2xl text-teal-300">84,291.50 USDC</p>
          </div>
          <div>
            <p className="text-xs text-neutral-500">Remaining</p>
            <p className="font-mono text-2xl text-white">165,708.50 USDC</p>
          </div>
        </div>
        <div className="mt-6 h-3 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-[33.7%] rounded-full bg-gradient-to-r from-teal-500 to-blue-500" />
        </div>
      </GlassCard>

      <div className="mb-8 overflow-x-auto rounded-xl border border-white/10">
        <table className="w-full min-w-[800px] text-left text-sm">
          <thead className="border-b border-white/10 bg-white/[0.03] text-xs uppercase text-neutral-500">
            <tr>
              <th className="px-4 py-3">Campaign</th>
              <th className="px-4 py-3">Carrier</th>
              <th className="px-4 py-3">Budget</th>
              <th className="px-4 py-3">Spent</th>
              <th className="px-4 py-3">Remaining</th>
              <th className="px-4 py-3">Daily cap</th>
              <th className="px-4 py-3">Pacing</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3"> </th>
            </tr>
          </thead>
          <tbody>
            {['MAPD Spring', 'D-SNP Nurture'].map((name, i) => (
              <tr key={name} className="border-b border-white/5 hover:bg-white/[0.04]">
                <td className="px-4 py-3 text-white">{name}</td>
                <td className="px-4 py-3">{i === 0 ? 'UHC' : 'Humana'}</td>
                <td className="px-4 py-3 font-mono">80,000</td>
                <td className="px-4 py-3 font-mono text-teal-300">28,400</td>
                <td className="px-4 py-3 font-mono">51,600</td>
                <td className="px-4 py-3 font-mono">2,500</td>
                <td className="px-4 py-3">
                  <div className="h-2 w-24 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-[64%] rounded-full bg-teal-500" />
                  </div>
                </td>
                <td className="px-4 py-3">
                  <StatusBadge variant="teal">Active</StatusBadge>
                </td>
                <td className="px-4 py-3">
                  <button type="button" className="text-xs text-blue-400 hover:underline">
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mb-8 flex flex-wrap gap-4">
        <button type="button" className="rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-3 text-sm font-medium text-white">
          Add campaign budget
        </button>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <GlassCard>
          <h3 className="font-serif text-lg text-white">Allocation by carrier</h3>
          <div className="mt-4 h-56">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={byCarrier} dataKey="value" nameKey="name" outerRadius={80} label>
                  {byCarrier.map((_, i) => (
                    <Cell key={i} fill={COLORS[i]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>
        <GlassCard>
          <h3 className="font-serif text-lg text-white">Spend history</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              ['Mar 30', 'Daily cap draw — MAPD', '-2,400', '182,108'],
              ['Mar 29', 'Payout fee', '-12.50', '184,508'],
            ].map(([d, desc, amt, bal]) => (
              <li key={d + desc} className="flex justify-between border-b border-white/5 py-2 text-neutral-400">
                <span>
                  {d} · {desc}
                </span>
                <span className="font-mono text-white">
                  {amt} · bal {bal}
                </span>
              </li>
            ))}
          </ul>
        </GlassCard>
      </div>
    </CampaignShell>
  )
}
