'use client'

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, BarChart, Bar, CartesianGrid } from 'recharts'
import { AdminShell } from '@/components/admin/AdminShell'
import { GlassCard } from '@/components/shared/GlassCard'
import { GaugeChart } from '@/components/admin/GaugeChart'

const revenue = Array.from({ length: 12 }, (_, i) => ({ m: `M${i + 1}`, v: 120000 + i * 8000 }))
const deliv = [
  { d: 'Gmail', r: 96.8 },
  { d: 'Outlook', r: 98.1 },
  { d: 'Yahoo', r: 97.2 },
]

export default function AdminDashboardPage() {
  return (
    <AdminShell title="Overview">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
        {[
          ['Active subscribers', '48,291'],
          ['Monthly revenue (USDC)', '1.24M'],
          ['Server uptime', '99.98%'],
          ['Deliverability', '97.3%'],
          ['Ad quality score', '94'],
          ['Pending payouts', '204k'],
        ].map(([a, b]) => (
          <GlassCard key={a}>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">{a}</p>
            <p className="mt-2 font-mono text-xl text-neutral-900">{b}</p>
          </GlassCard>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <GlassCard className="lg:col-span-2">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">Last 90 days</p>
          <h3 className="mt-1 font-serif text-lg text-neutral-900">Platform revenue</h3>
          <div className="mt-4 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={revenue}>
                <CartesianGrid stroke="#e5e7eb" strokeDasharray="3 3" />
                <XAxis dataKey="m" stroke="#a1a1aa" tick={{ fill: '#71717a', fontSize: 11 }} />
                <YAxis stroke="#a1a1aa" tick={{ fill: '#71717a', fontSize: 11 }} />
                <Tooltip contentStyle={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 12, boxShadow: '0 4px 12px rgba(0,0,0,0.06)' }} />
                <Line type="monotone" dataKey="v" stroke="#0f172a" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>
        <GlassCard>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">Infrastructure</p>
          <h3 className="mb-4 mt-1 font-serif text-lg text-neutral-900">Server load</h3>
          <div className="grid grid-cols-2 gap-4">
            <GaugeChart value={42} label="CPU" color="#0f172a" />
            <GaugeChart value={61} label="RAM" color="#1d4ed8" />
            <GaugeChart value={54} label="Disk" color="#7c3aed" />
            <GaugeChart value={38} label="BW" color="#0d9488" />
          </div>
        </GlassCard>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <GlassCard>
          <h3 className="font-serif text-lg text-neutral-900">Recent signups</h3>
          <ul className="mt-4 space-y-3 text-sm">
            {[
              { id: 'subscriber_9281', loc: 'FL', plan: 'MAPD' },
              { id: 'subscriber_9280', loc: 'TX', plan: 'PDP' },
            ].map((s) => (
              <li key={s.id} className="flex items-center justify-between rounded-xl border border-neutral-200/70 bg-neutral-50/50 px-3 py-2.5">
                <span className="font-mono text-xs text-neutral-700">{s.id}</span>
                <span className="text-xs text-neutral-500">{s.loc} · {s.plan}</span>
              </li>
            ))}
          </ul>
        </GlassCard>
        <GlassCard>
          <h3 className="font-serif text-lg text-neutral-900">Recent payouts</h3>
          <ul className="mt-4 space-y-3 text-sm">
            {[
              { batch: '#8821', amount: '420k USDC', status: 'Confirmed' },
              { batch: '#8820', amount: '118k USDC', status: 'Confirmed' },
            ].map((p) => (
              <li key={p.batch} className="flex items-center justify-between rounded-xl border border-neutral-200/70 bg-neutral-50/50 px-3 py-2.5">
                <span className="text-xs text-neutral-700">Batch {p.batch} · {p.amount}</span>
                <span className="inline-flex rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-medium text-emerald-700 ring-1 ring-emerald-600/20">{p.status}</span>
              </li>
            ))}
          </ul>
        </GlassCard>
        <GlassCard>
          <h3 className="font-serif text-lg text-neutral-900">Carrier campaigns</h3>
          <div className="mt-4 space-y-3">
            {[
              { name: 'UHC', count: 12 },
              { name: 'Humana', count: 9 },
              { name: 'Aetna', count: 7 },
            ].map((c) => (
              <div key={c.name} className="flex items-center justify-between rounded-xl border border-neutral-200/70 bg-neutral-50/50 px-3 py-2.5 text-sm">
                <span className="text-neutral-700">{c.name}</span>
                <span className="font-mono text-xs text-neutral-500">{c.count} active</span>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <GlassCard>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">Inbox providers</p>
          <h3 className="mb-4 mt-1 font-serif text-lg text-neutral-900">Deliverability by inbox</h3>
          <div className="h-52">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={deliv}>
                <CartesianGrid stroke="#e5e7eb" strokeDasharray="3 3" />
                <XAxis dataKey="d" stroke="#a1a1aa" tick={{ fill: '#71717a', fontSize: 11 }} />
                <YAxis stroke="#a1a1aa" tick={{ fill: '#71717a', fontSize: 11 }} domain={[90, 100]} />
                <Bar dataKey="r" fill="#0f172a" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>
        <GlassCard>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">Quality trend</p>
          <h3 className="mb-4 mt-1 font-serif text-lg text-neutral-900">Ad quality score</h3>
          <div className="h-52">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={Array.from({ length: 14 }, (_, i) => ({ d: i + 1, q: 92 + (i % 5) }))}>
                <CartesianGrid stroke="#e5e7eb" strokeDasharray="3 3" />
                <Line type="monotone" dataKey="q" stroke="#7c3aed" strokeWidth={2} dot={false} />
                <XAxis dataKey="d" stroke="#a1a1aa" tick={{ fill: '#71717a', fontSize: 11 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>
      </div>
    </AdminShell>
  )
}
