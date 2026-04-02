'use client'

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { AdminShell } from '@/components/admin/AdminShell'
import { GlassCard } from '@/components/shared/GlassCard'

const stack = [
  { s: 'Carrier ads', a: 420, b: 180, c: 90, d: 40, e: 20 },
  { s: 'Agent fees', a: 120, b: 60, c: 30, d: 10, e: 5 },
]

export default function AdminEarningsPage() {
  return (
    <AdminShell title="Earnings">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[
          ['All-time revenue', '18.4M USDC'],
          ['This month', '1.24M USDC'],
          ['This week', '312k USDC'],
          ['Protocol fees', '842k USDC'],
          ['Pending settlement', '204k USDC'],
          ['ARPS', '$25.60 USDC'],
        ].map(([a, b]) => (
          <GlassCard key={a}>
            <p className="text-xs text-neutral-500">{a}</p>
            <p className="mt-2 font-mono text-xl text-white">{b}</p>
          </GlassCard>
        ))}
      </div>
      <GlassCard className="mt-8">
        <h3 className="font-serif text-lg text-white">Revenue breakdown</h3>
        <div className="mt-4 h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={stack}>
              <CartesianGrid stroke="rgba(255,255,255,0.06)" />
              <XAxis dataKey="s" stroke="#71717a" />
              <YAxis stroke="#71717a" />
              <Tooltip contentStyle={{ background: '#111', border: '1px solid rgba(255,255,255,0.1)' }} />
              <Bar dataKey="a" stackId="x" fill="#2dd4bf" />
              <Bar dataKey="b" stackId="x" fill="#60a5fa" />
              <Bar dataKey="c" stackId="x" fill="#a78bfa" />
              <Bar dataKey="d" stackId="x" fill="#fbbf24" />
              <Bar dataKey="e" stackId="x" fill="#64748b" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </GlassCard>
      <GlassCard className="mt-8">
        <h3 className="font-serif text-lg text-white">Circle treasury</h3>
        <p className="mt-4 font-mono text-2xl text-teal-300">4.82M USDC</p>
        <button type="button" className="mt-4 rounded-xl border border-white/15 px-4 py-2 text-sm hover:bg-white/5">
          Withdraw to bank (mock)
        </button>
      </GlassCard>
    </AdminShell>
  )
}
