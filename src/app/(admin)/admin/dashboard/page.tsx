'use client'

import {
  Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis,
  BarChart, Bar, CartesianGrid,
} from 'recharts'
import { AdminShell } from '@/components/admin/AdminShell'
import { StatusBadge } from '@/components/shared/StatusBadge'

const revenueData = [
  { m: 'Jan', v: 82000 }, { m: 'Feb', v: 89000 }, { m: 'Mar', v: 95000 },
  { m: 'Apr', v: 104000 }, { m: 'May', v: 112000 }, { m: 'Jun', v: 108000 },
  { m: 'Jul', v: 119000 }, { m: 'Aug', v: 126000 }, { m: 'Sep', v: 131000 },
  { m: 'Oct', v: 138000 }, { m: 'Nov', v: 144000 }, { m: 'Dec', v: 152000 },
]

const delivData = [
  { d: 'Gmail', r: 96.8 }, { d: 'Outlook', r: 98.1 }, { d: 'Yahoo', r: 97.2 }, { d: 'Apple', r: 95.4 },
]

const topClients = [
  { name: 'Meridian Health', campaigns: 24, revenue: '$128k', score: 96 },
  { name: 'Atlas Financial', campaigns: 18, revenue: '$104k', score: 93 },
  { name: 'Vertex Real Estate', campaigns: 15, revenue: '$87k', score: 91 },
  { name: 'Pinnacle Retail', campaigns: 12, revenue: '$72k', score: 88 },
]

const revenueBreakdown = [
  { service: 'Email Campaigns', amount: '$420k', pct: 34 },
  { service: 'Direct Mail', amount: '$380k', pct: 31 },
  { service: 'Analytics & BI', amount: '$240k', pct: 19 },
  { service: 'Compliance', amount: '$200k', pct: 16 },
]

const payouts = [
  { batch: '#9042', amount: '84k', status: 'confirmed' as const },
  { batch: '#9041', amount: '127k', status: 'confirmed' as const },
  { batch: '#9040', amount: '56k', status: 'pending' as const },
  { batch: '#9039', amount: '93k', status: 'confirmed' as const },
]

export default function AdminDashboardPage() {
  return (
    <AdminShell title="Home">
      <div className="grid auto-rows-min gap-3" style={{ gridTemplateColumns: 'repeat(12, 1fr)' }}>
        {/* KPI row */}
        {[
          ['Active Clients', '2,847', '+12%'],
          ['Monthly Rev', '1.24M', '+8.4%'],
          ['Uptime', '99.98%', ''],
          ['Deliverability', '97.3%', '+0.6%'],
          ['Satisfaction', '94/100', '+2'],
          ['Pending Pay', '204k', ''],
        ].map(([label, value, delta]) => (
          <div key={label} className="col-span-4 rounded-xl border border-neutral-200 bg-white p-3 shadow-sm sm:col-span-2">
            <p className="font-mono text-lg text-neutral-900">{value}</p>
            <div className="flex items-center justify-between">
              <p className="text-[10px] text-neutral-500">{label}</p>
              {delta && <span className="text-[10px] font-medium text-emerald-600">{delta}</span>}
            </div>
          </div>
        ))}

        {/* Revenue Chart */}
        <div className="col-span-12 rounded-xl border border-neutral-200 bg-white p-3 shadow-sm lg:col-span-7">
          <p className="mb-1 text-[10px] font-medium uppercase tracking-widest text-neutral-400">Revenue — 12 months</p>
          <div className="h-44">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={revenueData}>
                <CartesianGrid stroke="#e5e7eb" strokeDasharray="3 3" />
                <XAxis dataKey="m" stroke="#a1a1aa" tick={{ fill: '#71717a', fontSize: 10 }} />
                <YAxis stroke="#a1a1aa" tick={{ fill: '#71717a', fontSize: 10 }} />
                <Tooltip contentStyle={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }} />
                <Line type="monotone" dataKey="v" stroke="#2563eb" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Revenue Breakdown */}
        <div className="col-span-12 rounded-xl border border-neutral-200 bg-white p-3 shadow-sm lg:col-span-5">
          <p className="mb-2 text-[10px] font-medium uppercase tracking-widest text-neutral-400">Revenue by Service</p>
          <div className="space-y-2.5">
            {revenueBreakdown.map((r) => (
              <div key={r.service}>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-neutral-600">{r.service}</span>
                  <span className="font-mono text-neutral-900">{r.amount}</span>
                </div>
                <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-neutral-200">
                  <div className="h-full rounded-full bg-gradient-to-r from-blue-500 to-teal-500" style={{ width: `${r.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Clients */}
        <div className="col-span-12 rounded-xl border border-neutral-200 bg-white p-3 shadow-sm lg:col-span-4">
          <p className="mb-2 text-[10px] font-medium uppercase tracking-widest text-neutral-400">Top Clients</p>
          <div className="space-y-2">
            {topClients.map((c) => (
              <div key={c.name} className="rounded-lg border border-neutral-100 bg-neutral-50/50 px-2.5 py-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-neutral-900">{c.name}</span>
                  <span className="font-mono text-[10px] text-neutral-500">{c.revenue}</span>
                </div>
                <div className="mt-1 flex items-center gap-2">
                  <div className="h-1 flex-1 overflow-hidden rounded-full bg-neutral-200"><div className="h-full rounded-full bg-gradient-to-r from-blue-500 to-violet-500" style={{ width: `${c.score}%` }} /></div>
                  <span className="font-mono text-[10px] text-neutral-400">{c.score}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Deliverability */}
        <div className="col-span-12 rounded-xl border border-neutral-200 bg-white p-3 shadow-sm lg:col-span-4">
          <p className="mb-2 text-[10px] font-medium uppercase tracking-widest text-neutral-400">Deliverability</p>
          <div className="h-36">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={delivData}>
                <CartesianGrid stroke="#e5e7eb" strokeDasharray="3 3" />
                <XAxis dataKey="d" stroke="#a1a1aa" tick={{ fill: '#71717a', fontSize: 10 }} />
                <YAxis stroke="#a1a1aa" tick={{ fill: '#71717a', fontSize: 10 }} domain={[90, 100]} />
                <Tooltip contentStyle={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 8 }} />
                <Bar dataKey="r" fill="#2563eb" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Operations + Payouts */}
        <div className="col-span-12 rounded-xl border border-neutral-200 bg-white p-3 shadow-sm lg:col-span-4">
          <p className="mb-2 text-[10px] font-medium uppercase tracking-widest text-neutral-400">Operations</p>
          <div className="space-y-1.5">
            {[
              { label: 'US-East (Virginia)', status: 'Online' },
              { label: 'US-West (Oregon)', status: 'Online' },
              { label: 'EU-Central (Frankfurt)', status: 'Degraded' },
            ].map((s) => (
              <div key={s.label} className="flex items-center justify-between rounded-lg border border-neutral-100 bg-neutral-50/50 px-2.5 py-1.5 text-xs">
                <span className="text-neutral-700">{s.label}</span>
                <StatusBadge variant={s.status === 'Online' ? 'success' : 'warning'}>{s.status}</StatusBadge>
              </div>
            ))}
            <div className="mt-2 border-t border-neutral-100 pt-2">
              <p className="mb-1.5 text-[10px] font-medium text-neutral-400">Recent Payouts</p>
              {payouts.map((p) => (
                <div key={p.batch} className="flex items-center justify-between py-1 text-[11px]">
                  <span className="text-neutral-600">Batch {p.batch} · <span className="font-mono">{p.amount} USDC</span></span>
                  <StatusBadge variant={p.status === 'confirmed' ? 'success' : 'warning'}>{p.status === 'confirmed' ? 'OK' : '…'}</StatusBadge>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AdminShell>
  )
}
