'use client'

import {
  Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis,
  BarChart, Bar, CartesianGrid,
} from 'recharts'
import { AdminShell } from '@/components/admin/AdminShell'
import { GlassCard } from '@/components/shared/GlassCard'
import { GaugeChart } from '@/components/admin/GaugeChart'
import { StatusBadge } from '@/components/shared/StatusBadge'

const revenueData = [
  { m: 'Jan', v: 82000 }, { m: 'Feb', v: 89000 }, { m: 'Mar', v: 95000 },
  { m: 'Apr', v: 104000 }, { m: 'May', v: 112000 }, { m: 'Jun', v: 108000 },
  { m: 'Jul', v: 119000 }, { m: 'Aug', v: 126000 }, { m: 'Sep', v: 131000 },
  { m: 'Oct', v: 138000 }, { m: 'Nov', v: 144000 }, { m: 'Dec', v: 152000 },
]

const delivData = [
  { d: 'Gmail', r: 96.8 },
  { d: 'Outlook', r: 98.1 },
  { d: 'Yahoo', r: 97.2 },
  { d: 'Apple Mail', r: 95.4 },
]

const topClients = [
  { name: 'Meridian Health Group', industry: 'Healthcare', campaigns: 24, revenue: '$128k', score: 96 },
  { name: 'Atlas Financial', industry: 'Finance', campaigns: 18, revenue: '$104k', score: 93 },
  { name: 'Vertex Real Estate', industry: 'Real Estate', campaigns: 15, revenue: '$87k', score: 91 },
  { name: 'Pinnacle Retail Co.', industry: 'Retail', campaigns: 12, revenue: '$72k', score: 88 },
  { name: 'Summit Legal Partners', industry: 'Legal', campaigns: 9, revenue: '$54k', score: 85 },
]

const revenueBreakdown = [
  { service: 'Email campaigns', amount: '$420k', pct: 34 },
  { service: 'Direct mail', amount: '$380k', pct: 31 },
  { service: 'Analytics & BI', amount: '$240k', pct: 19 },
  { service: 'Compliance services', amount: '$200k', pct: 16 },
]

const payouts = [
  { batch: '#9042', amount: '84k USDC', status: 'confirmed' as const },
  { batch: '#9041', amount: '127k USDC', status: 'confirmed' as const },
  { batch: '#9040', amount: '56k USDC', status: 'pending' as const },
  { batch: '#9039', amount: '93k USDC', status: 'confirmed' as const },
  { batch: '#9038', amount: '41k USDC', status: 'pending' as const },
]

export default function AdminDashboardPage() {
  return (
    <AdminShell title="Overview">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
        {[
          ['Active Clients', '2,847'],
          ['Monthly Revenue (USDC)', '1.24M'],
          ['Platform Uptime', '99.98%'],
          ['Email Deliverability', '97.3%'],
          ['Client Satisfaction', '94/100'],
          ['Pending Payouts', '204k'],
        ].map(([label, value]) => (
          <GlassCard key={label}>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">{label}</p>
            <p className="mt-2 font-mono text-xl text-neutral-900">{value}</p>
          </GlassCard>
        ))}
      </div>

      {/* Row 2 — Revenue Chart + Server Health */}
      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <GlassCard className="lg:col-span-2">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">Trailing period</p>
          <h3 className="mt-1 font-serif text-lg text-neutral-900">Platform revenue — 12 months</h3>
          <div className="mt-4 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={revenueData}>
                <CartesianGrid stroke="#e5e7eb" strokeDasharray="3 3" />
                <XAxis dataKey="m" stroke="#a1a1aa" tick={{ fill: '#71717a', fontSize: 11 }} />
                <YAxis stroke="#a1a1aa" tick={{ fill: '#71717a', fontSize: 11 }} />
                <Tooltip
                  contentStyle={{
                    background: '#fff',
                    border: '1px solid #e5e7eb',
                    borderRadius: 12,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
                  }}
                />
                <Line type="monotone" dataKey="v" stroke="#2563eb" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>

        <GlassCard>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">Infrastructure</p>
          <h3 className="mb-4 mt-1 font-serif text-lg text-neutral-900">Infrastructure health</h3>
          <div className="grid grid-cols-2 gap-4">
            <GaugeChart value={42} label="CPU" color="#2563eb" />
            <GaugeChart value={61} label="RAM" color="#1d4ed8" />
            <GaugeChart value={54} label="Disk" color="#7c3aed" />
            <GaugeChart value={38} label="Bandwidth" color="#0d9488" />
          </div>
        </GlassCard>
      </div>

      {/* Row 3 — Client Performance, Revenue Breakdown, Office Operations */}
      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Top Performing Clients */}
        <GlassCard>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">Client metrics</p>
          <h3 className="mt-1 font-serif text-lg text-neutral-900">Top performing clients</h3>
          <div className="mt-4 space-y-3">
            {topClients.map((c) => (
              <div
                key={c.name}
                className="rounded-xl border border-neutral-200/70 bg-neutral-50/50 px-3 py-2.5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-neutral-900">{c.name}</span>
                  <span className="font-mono text-xs text-neutral-500">{c.revenue}</span>
                </div>
                <div className="mt-1 flex items-center justify-between text-xs text-neutral-500">
                  <span>{c.industry} · {c.campaigns} campaigns</span>
                  <span className="font-mono">{c.score}/100</span>
                </div>
                <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-neutral-200">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-blue-500 to-violet-500 transition-all"
                    style={{ width: `${c.score}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Revenue Breakdown */}
        <GlassCard>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">Earnings split</p>
          <h3 className="mt-1 font-serif text-lg text-neutral-900">Revenue by service</h3>
          <div className="mt-4 space-y-4">
            {revenueBreakdown.map((r) => (
              <div key={r.service}>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-neutral-700">{r.service}</span>
                  <span className="font-mono text-sm text-neutral-900">{r.amount}</span>
                </div>
                <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-neutral-200">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-blue-500 to-teal-500 transition-all"
                    style={{ width: `${r.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Office Operations */}
        <GlassCard>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">Operations</p>
          <h3 className="mt-1 font-serif text-lg text-neutral-900">Office operations</h3>
          <div className="mt-4 space-y-3">
            {[
              {
                label: 'Server locations',
                items: [
                  { name: 'US-East (Virginia)', status: 'Online' },
                  { name: 'US-West (Oregon)', status: 'Online' },
                  { name: 'EU-Central (Frankfurt)', status: 'Degraded' },
                ],
              },
            ].map((section) => (
              <div key={section.label} className="space-y-2">
                {section.items.map((s) => (
                  <div
                    key={s.name}
                    className="flex items-center justify-between rounded-xl border border-neutral-200/70 bg-neutral-50/50 px-3 py-2.5"
                  >
                    <span className="text-xs text-neutral-700">{s.name}</span>
                    <StatusBadge variant={s.status === 'Online' ? 'success' : 'warning'}>
                      {s.status}
                    </StatusBadge>
                  </div>
                ))}
              </div>
            ))}
            <div className="space-y-2 pt-1">
              {[
                { label: 'Mail queue depth', value: '1,248' },
                { label: 'Active connections', value: '3,902' },
                { label: 'Error rate (24h)', value: '0.04%' },
              ].map((m) => (
                <div
                  key={m.label}
                  className="flex items-center justify-between rounded-xl border border-neutral-200/70 bg-neutral-50/50 px-3 py-2.5"
                >
                  <span className="text-xs text-neutral-600">{m.label}</span>
                  <span className="font-mono text-xs text-neutral-900">{m.value}</span>
                </div>
              ))}
            </div>
          </div>
        </GlassCard>
      </div>

      {/* Row 4 — Deliverability Chart + Recent Payouts */}
      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <GlassCard>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">Inbox providers</p>
          <h3 className="mb-4 mt-1 font-serif text-lg text-neutral-900">Deliverability by inbox provider</h3>
          <div className="h-52">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={delivData}>
                <CartesianGrid stroke="#e5e7eb" strokeDasharray="3 3" />
                <XAxis dataKey="d" stroke="#a1a1aa" tick={{ fill: '#71717a', fontSize: 11 }} />
                <YAxis stroke="#a1a1aa" tick={{ fill: '#71717a', fontSize: 11 }} domain={[90, 100]} />
                <Tooltip
                  contentStyle={{
                    background: '#fff',
                    border: '1px solid #e5e7eb',
                    borderRadius: 12,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
                  }}
                />
                <Bar dataKey="r" fill="#2563eb" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>

        <GlassCard>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">Disbursements</p>
          <h3 className="mb-4 mt-1 font-serif text-lg text-neutral-900">Recent payouts</h3>
          <ul className="space-y-3 text-sm">
            {payouts.map((p) => (
              <li
                key={p.batch}
                className="flex items-center justify-between rounded-xl border border-neutral-200/70 bg-neutral-50/50 px-3 py-2.5"
              >
                <span className="text-xs text-neutral-700">
                  Batch {p.batch} · <span className="font-mono">{p.amount}</span>
                </span>
                <StatusBadge variant={p.status === 'confirmed' ? 'success' : 'warning'}>
                  {p.status === 'confirmed' ? 'Confirmed' : 'Pending'}
                </StatusBadge>
              </li>
            ))}
          </ul>
        </GlassCard>
      </div>
    </AdminShell>
  )
}
