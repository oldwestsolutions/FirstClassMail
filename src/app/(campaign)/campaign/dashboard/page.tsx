'use client'

import { Area, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, Line, ComposedChart } from 'recharts'
import { CampaignShell } from '@/components/campaign/CampaignShell'
import { KPICard } from '@/components/campaign/KPICard'
import { GlassCard } from '@/components/shared/GlassCard'
import { StatusBadge } from '@/components/shared/StatusBadge'

const chartData = Array.from({ length: 30 }, (_, i) => {
  const t = i / 29
  return {
    day: `${i + 1}`,
    impressions: Math.round(82000 + 22000 * Math.sin(t * 4) + i * 400),
    clicks: Math.round(4200 + 800 * Math.cos(t * 3) + i * 35),
  }
})

const campaigns = [
  { name: 'MAPD Q1 Awareness', carrier: 'UnitedHealthcare', imp: 92, usdc: '12,400', status: 'Active' as const },
  { name: 'D-SNP Retention', carrier: 'Humana', imp: 78, usdc: '8,920', status: 'Active' as const },
  { name: 'PDP Switch', carrier: 'Aetna', imp: 64, usdc: '5,100', status: 'Paused' as const },
]

export default function CampaignDashboardPage() {
  return (
    <CampaignShell title="Overview">
      <div className="space-y-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <KPICard label="Total Impressions" value="2,847,291" delta="+12.4% vs last period" tone="blue" />
          <KPICard label="Total Clicks" value="184,203" delta="+8.1% vs last period" tone="violet" />
          <KPICard label="Conversions" value="12,847" delta="+5.2% vs last period" tone="teal" />
          <KPICard label="USDC Earned" value="84,291.50" delta="+14.0% vs last period" tone="green" />
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
          <GlassCard className="lg:col-span-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">Last 30 days</p>
            <h3 className="mt-1 font-serif text-lg text-neutral-900">Impressions &amp; clicks</h3>
            <div className="mt-4 h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={chartData}>
                  <defs>
                    <linearGradient id="imp" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#0f172a" stopOpacity={0.12} />
                      <stop offset="100%" stopColor="#0f172a" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid stroke="#e5e7eb" strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="day" stroke="#a1a1aa" tick={{ fill: '#71717a', fontSize: 11 }} />
                  <YAxis stroke="#a1a1aa" tick={{ fill: '#71717a', fontSize: 11 }} />
                  <Tooltip
                    contentStyle={{
                      background: '#fff',
                      border: '1px solid #e5e7eb',
                      borderRadius: 12,
                      boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
                    }}
                    labelStyle={{ color: '#71717a' }}
                  />
                  <Area type="monotone" dataKey="impressions" stroke="#0f172a" fill="url(#imp)" strokeWidth={2} />
                  <Line type="monotone" dataKey="clicks" stroke="#7c3aed" strokeWidth={2} dot={false} />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </GlassCard>

          <GlassCard className="lg:col-span-2">
            <h3 className="font-serif text-lg text-neutral-900">Top campaigns</h3>
            <ul className="mt-4 space-y-4">
              {campaigns.map((c) => (
                <li key={c.name} className="rounded-xl border border-neutral-200/70 bg-neutral-50/50 p-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-sm font-medium text-neutral-900">{c.name}</p>
                      <p className="text-xs text-neutral-500">{c.carrier}</p>
                    </div>
                    <StatusBadge variant={c.status === 'Active' ? 'teal' : 'warning'}>{c.status}</StatusBadge>
                  </div>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-neutral-200">
                    <div className="h-full rounded-full bg-neutral-900" style={{ width: `${c.imp}%` }} />
                  </div>
                  <p className="mt-2 text-xs text-neutral-500">{c.usdc} USDC earned</p>
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <GlassCard>
            <h3 className="font-serif text-lg text-neutral-900">Recent inbox</h3>
            <ul className="mt-4 space-y-3">
              {[
                { subject: 'Carrier creative approved — UHC MAPD', from: 'Verified Ops', t: '2m ago', unread: true },
                { subject: 'ZK proof bundle ready for audit', from: 'Compliance', t: '1h ago', unread: true },
                { subject: 'Budget pacing on track', from: 'Finance Bot', t: '3h ago', unread: false },
              ].map((m, i) => (
                <li key={i} className="flex gap-3 border-b border-neutral-100 pb-3 last:border-0">
                  <span className="relative mt-1.5">
                    {m.unread && <span className="absolute -left-0.5 top-0 h-2 w-2 rounded-full bg-neutral-900" />}
                  </span>
                  <div>
                    <p className="text-sm text-neutral-900">{m.subject}</p>
                    <p className="text-xs text-neutral-500">
                      {m.from} · {m.t}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </GlassCard>

          <GlassCard>
            <h3 className="font-serif text-lg text-neutral-900">Active campaigns</h3>
            <div className="mt-4 space-y-4 text-sm">
              {['Open Enrollment Push', 'SNP Educational'].map((name) => (
                <div key={name}>
                  <div className="flex justify-between text-neutral-600">
                    <span>{name}</span>
                    <span className="font-mono text-xs text-neutral-900">$18.40 CPM</span>
                  </div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-neutral-200">
                    <div className="h-full w-[68%] rounded-full bg-neutral-900" />
                  </div>
                  <p className="mt-1 text-xs text-neutral-500">42 days remaining</p>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard>
            <h3 className="font-serif text-lg text-neutral-900">USDC wallet</h3>
            <p className="mt-2 font-mono text-3xl text-neutral-900">4,218.50</p>
            <p className="text-xs text-neutral-500">Available balance</p>
            <p className="mt-4 text-sm text-neutral-600">
              Pending payouts <span className="font-medium text-neutral-900">1,204.00 USDC</span>
            </p>
            <p className="text-xs text-neutral-500">Last payout Mar 28, 2026</p>
            <div className="mt-6 flex flex-col gap-2 sm:flex-row">
              <button
                type="button"
                className="flex-1 rounded-full bg-neutral-900 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-800"
              >
                Withdraw
              </button>
              <button
                type="button"
                className="flex-1 rounded-full border border-neutral-200 py-2.5 text-sm font-medium text-neutral-700 transition hover:bg-neutral-50"
              >
                Add funds
              </button>
            </div>
          </GlassCard>
        </div>
      </div>
    </CampaignShell>
  )
}
