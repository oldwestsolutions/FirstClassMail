'use client'

import {
  Area,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ComposedChart,
  Line,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { CampaignShell } from '@/components/campaign/CampaignShell'
import { KPICard } from '@/components/campaign/KPICard'
import { GlassCard } from '@/components/shared/GlassCard'
import {
  DollarSign,
  Target,
  TrendingUp,
  Megaphone,
  Users,
  Wallet,
  FileText,
  Clock,
  Globe,
  MousePointerClick,
  BarChart3,
  Zap,
} from 'lucide-react'

const performanceData = Array.from({ length: 30 }, (_, i) => {
  const t = i / 29
  return {
    day: `${i + 1}`,
    impressions: Math.round(380000 + 60000 * Math.sin(t * 4) + i * 2800),
    conversions: Math.round(1400 + 350 * Math.cos(t * 3) + i * 18),
  }
})

const metaCampaigns = [
  {
    name: 'Awareness — Q2 Broad Reach',
    platform: 'Meta',
    budgetSpent: 18400,
    budgetTotal: 25000,
    ctr: '2.4%',
    cpc: '$0.82',
    impressions: '3.2M',
  },
  {
    name: 'Retargeting — Cart Abandonment',
    platform: 'Instagram',
    budgetSpent: 9200,
    budgetTotal: 12000,
    ctr: '4.1%',
    cpc: '$0.54',
    impressions: '1.8M',
  },
  {
    name: 'Lookalike — High-Value Prospects',
    platform: 'Audience Network',
    budgetSpent: 6800,
    budgetTotal: 15000,
    ctr: '1.9%',
    cpc: '$1.12',
    impressions: '2.1M',
  },
  {
    name: 'Engagement — Medicare Open Enrollment',
    platform: 'Meta',
    budgetSpent: 14200,
    budgetTotal: 20000,
    ctr: '3.6%',
    cpc: '$0.68',
    impressions: '4.8M',
  },
]

const spendAllocationData = [
  { name: 'Meta', value: 40, color: '#2563eb' },
  { name: 'Google', value: 30, color: '#7c3aed' },
  { name: 'LinkedIn', value: 20, color: '#0891b2' },
  { name: 'Direct Mail', value: 10, color: '#0d9488' },
]

const audienceData = [
  { group: '18–24', pct: 12 },
  { group: '25–34', pct: 34 },
  { group: '35–44', pct: 28 },
  { group: '45–54', pct: 18 },
  { group: '55+', pct: 8 },
]

const activityFeed = [
  { text: "Meta campaign 'Q2 Awareness' reached 1M impressions", time: '2h ago', icon: Megaphone },
  { text: 'New audience segment created: High-Intent Medicare', time: '4h ago', icon: Users },
  { text: "Budget increased on 'Retargeting' campaign", time: '6h ago', icon: DollarSign },
  { text: 'Creative A/B test completed — Variant B won', time: '1d ago', icon: Target },
]

const channelComparisonData = [
  { channel: 'Meta', ctr: 3.2, cpc: 0.74, convRate: 4.8 },
  { channel: 'Google', ctr: 2.8, cpc: 1.12, convRate: 3.6 },
  { channel: 'LinkedIn', ctr: 1.6, cpc: 2.4, convRate: 2.1 },
]

const marketingKPIs = [
  { label: 'Click-Through Rate', value: '3.2%', icon: MousePointerClick },
  { label: 'Cost Per Lead', value: '$4.82', icon: DollarSign },
  { label: 'Audience Reach', value: '2.4M', icon: Globe },
  { label: 'Engagement Rate', value: '8.6%', icon: Zap },
  { label: 'Email Open Rate', value: '42.1%', icon: BarChart3 },
  { label: 'Revenue Growth', value: '+18.2%', icon: TrendingUp },
]

export default function CampaignDashboardPage() {
  return (
    <CampaignShell title="Intelligence">
      <div className="space-y-8">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <KPICard label="Total Ad Spend" value="$284,291.50" delta="+18.2% vs last period" tone="blue" />
          <KPICard label="Total Impressions" value="12.4M" delta="+22.1% vs last period" tone="violet" />
          <KPICard label="Conversions" value="48,291" delta="+15.8% vs last period" tone="teal" />
          <KPICard label="ROAS" value="4.2x" delta="+8.4% vs last period" tone="green" />
        </div>

        {/* Marketing Intelligence KPIs */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {marketingKPIs.map(({ label, value, icon: Icon }) => (
            <GlassCard key={label} hoverTilt>
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-50">
                  <Icon className="h-4 w-4 text-blue-600" strokeWidth={1.5} />
                </div>
              </div>
              <p className="mt-3 font-mono text-lg text-neutral-900">{value}</p>
              <p className="mt-0.5 text-[10px] text-neutral-500">{label}</p>
            </GlassCard>
          ))}
        </div>

        {/* Chart + Meta Ads Panel */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <GlassCard className="lg:col-span-2">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">Last 30 days</p>
            <h3 className="mt-1 font-serif text-lg text-neutral-900">Campaign Performance</h3>
            <div className="mt-4 h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={performanceData}>
                  <defs>
                    <linearGradient id="impGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#2563eb" stopOpacity={0.12} />
                      <stop offset="100%" stopColor="#2563eb" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid stroke="#e5e7eb" strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="day" stroke="#a1a1aa" tick={{ fill: '#71717a', fontSize: 11 }} />
                  <YAxis yAxisId="left" stroke="#a1a1aa" tick={{ fill: '#71717a', fontSize: 11 }} />
                  <YAxis yAxisId="right" orientation="right" stroke="#a1a1aa" tick={{ fill: '#71717a', fontSize: 11 }} />
                  <Tooltip
                    contentStyle={{
                      background: '#fff',
                      border: '1px solid #e5e7eb',
                      borderRadius: 12,
                      boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
                    }}
                    labelStyle={{ color: '#71717a' }}
                  />
                  <Area yAxisId="left" type="monotone" dataKey="impressions" stroke="#2563eb" fill="url(#impGrad)" strokeWidth={2} />
                  <Line yAxisId="right" type="monotone" dataKey="conversions" stroke="#7c3aed" strokeWidth={2} dot={false} />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </GlassCard>

          <GlassCard className="lg:col-span-1">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">Active campaigns</p>
            <h3 className="mt-1 font-serif text-lg text-neutral-900">Meta Ads Manager</h3>
            <ul className="mt-4 space-y-3">
              {metaCampaigns.map((c) => (
                <li key={c.name} className="rounded-xl border border-neutral-200/70 bg-neutral-50/50 p-3">
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-sm font-medium text-neutral-900">{c.name}</p>
                    <span className="shrink-0 rounded-full border border-blue-200 bg-blue-50 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-blue-600">
                      {c.platform}
                    </span>
                  </div>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-neutral-200">
                    <div
                      className="h-full rounded-full bg-blue-500"
                      style={{ width: `${(c.budgetSpent / c.budgetTotal) * 100}%` }}
                    />
                  </div>
                  <p className="mt-1.5 text-[11px] text-neutral-500">
                    ${c.budgetSpent.toLocaleString()} / ${c.budgetTotal.toLocaleString()} spent
                  </p>
                  <div className="mt-2 flex gap-4 text-[11px] text-neutral-500">
                    <span>CTR {c.ctr}</span>
                    <span>CPC {c.cpc}</span>
                    <span>{c.impressions} imp</span>
                  </div>
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <GlassCard>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">Allocation</p>
            <h3 className="mt-1 font-serif text-lg text-neutral-900">Ad Spend by Channel</h3>
            <div className="mt-4 h-56 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={spendAllocationData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={80}
                    paddingAngle={3}
                    dataKey="value"
                    stroke="none"
                  >
                    {spendAllocationData.map((entry) => (
                      <Cell key={entry.name} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      background: '#fff',
                      border: '1px solid #e5e7eb',
                      borderRadius: 12,
                      boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
                    }}
                    formatter={(value) => [`${value}%`, 'Share']}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-2 flex flex-wrap justify-center gap-x-4 gap-y-1">
              {spendAllocationData.map((d) => (
                <span key={d.name} className="flex items-center gap-1.5 text-xs text-neutral-600">
                  <span className="inline-block h-2 w-2 rounded-full" style={{ backgroundColor: d.color }} />
                  {d.name} ({d.value}%)
                </span>
              ))}
            </div>
          </GlassCard>

          <GlassCard>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">Demographics</p>
            <h3 className="mt-1 font-serif text-lg text-neutral-900">Audience Insights</h3>
            <ul className="mt-5 space-y-4">
              {audienceData.map((a) => (
                <li key={a.group}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-neutral-600">{a.group}</span>
                    <span className="font-mono text-xs text-neutral-900">{a.pct}%</span>
                  </div>
                  <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-neutral-200">
                    <div className="h-full rounded-full bg-gradient-to-r from-blue-500 to-violet-500" style={{ width: `${a.pct}%` }} />
                  </div>
                </li>
              ))}
            </ul>
          </GlassCard>

          <GlassCard>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">Activity</p>
            <h3 className="mt-1 font-serif text-lg text-neutral-900">Recent Activity</h3>
            <ul className="mt-4 space-y-4">
              {activityFeed.map((item, i) => {
                const Icon = item.icon
                return (
                  <li key={i} className="flex gap-3 border-b border-neutral-100 pb-3 last:border-0 last:pb-0">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-blue-200 bg-blue-50">
                      <Icon className="h-3.5 w-3.5 text-blue-600" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-sm text-neutral-900">{item.text}</p>
                      <p className="mt-0.5 flex items-center gap-1 text-xs text-neutral-500">
                        <Clock className="h-3 w-3" strokeWidth={1.5} />
                        {item.time}
                      </p>
                    </div>
                  </li>
                )
              })}
            </ul>
          </GlassCard>
        </div>

        {/* Third Row */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <GlassCard>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">Comparison</p>
            <h3 className="mt-1 font-serif text-lg text-neutral-900">Channel Performance</h3>
            <div className="mt-4 h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={channelComparisonData} barGap={4}>
                  <CartesianGrid stroke="#e5e7eb" strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="channel" stroke="#a1a1aa" tick={{ fill: '#71717a', fontSize: 11 }} />
                  <YAxis stroke="#a1a1aa" tick={{ fill: '#71717a', fontSize: 11 }} />
                  <Tooltip
                    contentStyle={{
                      background: '#fff',
                      border: '1px solid #e5e7eb',
                      borderRadius: 12,
                      boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
                    }}
                  />
                  <Bar dataKey="ctr" name="CTR %" fill="#2563eb" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="cpc" name="CPC $" fill="#7c3aed" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="convRate" name="Conv %" fill="#0891b2" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-3 flex justify-center gap-5">
              {[
                { label: 'CTR %', color: '#2563eb' },
                { label: 'CPC $', color: '#7c3aed' },
                { label: 'Conv %', color: '#0891b2' },
              ].map((l) => (
                <span key={l.label} className="flex items-center gap-1.5 text-xs text-neutral-600">
                  <span className="inline-block h-2 w-2 rounded-full" style={{ backgroundColor: l.color }} />
                  {l.label}
                </span>
              ))}
            </div>
          </GlassCard>

          <GlassCard>
            <div className="flex items-center gap-2">
              <Wallet className="h-4 w-4 text-neutral-400" strokeWidth={1.5} />
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">Billing</p>
            </div>
            <h3 className="mt-1 font-serif text-lg text-neutral-900">USDC Wallet &amp; Billing</h3>

            <div className="mt-5 space-y-4">
              <div>
                <p className="text-xs text-neutral-500">Available balance</p>
                <p className="mt-1 font-mono text-3xl text-neutral-900">84,291.50 <span className="text-lg text-neutral-400">USDC</span></p>
              </div>
              <div className="rounded-xl border border-neutral-200/70 bg-neutral-50/50 p-3 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-neutral-600">Pending ad charges</span>
                  <span className="font-mono text-neutral-900">12,400.00 USDC</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-neutral-600">Last billing cycle</span>
                  <span className="font-mono text-neutral-900">38,120.00 USDC</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-neutral-600">Billing period</span>
                  <span className="text-neutral-500">Mar 1 – Mar 31, 2026</span>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-2 sm:flex-row">
              <button
                type="button"
                className="flex flex-1 items-center justify-center gap-2 rounded-full bg-blue-600 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
              >
                <DollarSign className="h-4 w-4" strokeWidth={1.5} />
                Top up balance
              </button>
              <button
                type="button"
                className="flex flex-1 items-center justify-center gap-2 rounded-full border border-neutral-200 py-2.5 text-sm font-medium text-neutral-700 transition hover:bg-neutral-50"
              >
                <FileText className="h-4 w-4" strokeWidth={1.5} />
                View invoices
              </button>
            </div>
          </GlassCard>
        </div>
      </div>
    </CampaignShell>
  )
}
