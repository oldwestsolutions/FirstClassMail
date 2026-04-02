'use client'

import { useMemo, useState } from 'react'
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { CampaignShell } from '@/components/campaign/CampaignShell'
import { GlassCard } from '@/components/shared/GlassCard'
import { DataTable } from '@/components/campaign/DataTable'

const series = Array.from({ length: 24 }, (_, i) => ({
  d: `W${i + 1}`,
  imp: 120000 + i * 2100,
  clk: 6200 + i * 90,
  conv: 180 + i * 4,
}))

const carriers = [
  { c: 'UHC', ctr: 4.2 },
  { c: 'Humana', ctr: 3.8 },
  { c: 'Aetna', ctr: 3.1 },
]

const zips = [
  { z: '33101', r: 5.4 },
  { z: '75201', r: 4.9 },
  { z: '30301', r: 4.1 },
]

const tableRows = Array.from({ length: 8 }, (_, i) => ({
  date: `2026-03-${String(24 + i).padStart(2, '0')}`,
  campaign: ['MAPD Spring', 'D-SNP Nurture', 'PDP Compare'][i % 3],
  carrier: ['UHC', 'Humana', 'Aetna'][i % 3],
  imp: (240000 + i * 1200).toLocaleString(),
  clk: (9200 + i * 40).toLocaleString(),
  ctr: `${(3.2 + i * 0.05).toFixed(2)}%`,
  conv: String(120 + i * 3),
  cr: `${(1.8 + i * 0.02).toFixed(2)}%`,
  spent: `${(4200 + i * 50).toFixed(2)}`,
  earned: `${(5100 + i * 60).toFixed(2)}`,
  net: `${(900 + i * 10).toFixed(2)}`,
}))

export default function CampaignAnalyticsPage() {
  const [metric, setMetric] = useState<'imp' | 'clk' | 'conv'>('imp')
  const columns = useMemo(
    () => [
      { key: 'date', label: 'Date' },
      { key: 'campaign', label: 'Campaign' },
      { key: 'carrier', label: 'Carrier' },
      { key: 'imp', label: 'Impressions' },
      { key: 'clk', label: 'Clicks' },
      { key: 'ctr', label: 'CTR %' },
      { key: 'conv', label: 'Conv' },
      { key: 'cr', label: 'Conv %' },
      { key: 'spent', label: 'USDC Spent' },
      { key: 'earned', label: 'USDC Earned' },
      { key: 'net', label: 'Net' },
    ],
    []
  )

  return (
    <CampaignShell title="Analytics">
      <div className="mb-6 flex flex-wrap items-center gap-3">
        {(['Last 7', 'Last 30', 'Last 90', 'Custom'] as const).map((r) => (
          <button
            key={r}
            type="button"
            className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-xs text-neutral-600 hover:bg-neutral-100"
          >
            {r}
          </button>
        ))}
        <select className="rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-2 text-xs text-neutral-900">
          <option>All plans</option>
          <option>MAPD</option>
          <option>PDP</option>
          <option>D-SNP</option>
        </select>
        <input
          placeholder="Zip"
          className="w-28 rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-2 text-xs text-neutral-900"
        />
        <select className="rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-2 text-xs text-neutral-900">
          <option>All carriers</option>
          <option>UnitedHealthcare</option>
          <option>Humana</option>
        </select>
        <button type="button" className="ml-auto rounded-full border border-neutral-200 px-4 py-2 text-xs text-neutral-700 hover:bg-neutral-50">
          Export CSV
        </button>
      </div>

      <GlassCard className="mb-8">
        <div className="mb-4 flex flex-wrap gap-2">
          {(['imp', 'clk', 'conv'] as const).map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => setMetric(m)}
              className={`rounded-full px-3 py-1 text-xs ${metric === m ? 'bg-neutral-900 text-white' : 'bg-neutral-50 text-neutral-500'}`}
            >
              {m === 'imp' ? 'Impressions' : m === 'clk' ? 'Clicks' : 'Conversions'}
            </button>
          ))}
        </div>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={series}>
              <CartesianGrid stroke="#e5e7eb" strokeDasharray="3 3" />
              <XAxis dataKey="d" stroke="#71717a" tick={{ fill: '#71717a', fontSize: 10 }} />
              <YAxis stroke="#71717a" tick={{ fill: '#71717a', fontSize: 10 }} />
              <Tooltip contentStyle={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 12, boxShadow: '0 4px 12px rgba(0,0,0,0.06)' }} />
              <Area type="monotone" dataKey={metric} stroke="#0d9488" fill="rgba(13,148,136,0.10)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </GlassCard>

      <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <GlassCard>
          <h3 className="mb-4 font-serif text-lg text-neutral-900">CTR by carrier</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={carriers} layout="vertical">
                <CartesianGrid stroke="#e5e7eb" strokeDasharray="3 3" />
                <XAxis type="number" stroke="#71717a" />
                <YAxis dataKey="c" type="category" stroke="#71717a" width={72} />
                <Tooltip contentStyle={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 12, boxShadow: '0 4px 12px rgba(0,0,0,0.06)' }} />
                <Bar dataKey="ctr" fill="#1d4ed8" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>
        <GlassCard>
          <h3 className="mb-4 font-serif text-lg text-neutral-900">Conversion rate by zip</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={zips}>
                <CartesianGrid stroke="#e5e7eb" strokeDasharray="3 3" />
                <XAxis dataKey="z" stroke="#71717a" />
                <YAxis stroke="#71717a" />
                <Tooltip contentStyle={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 12, boxShadow: '0 4px 12px rgba(0,0,0,0.06)' }} />
                <Bar dataKey="r" fill="#7c3aed" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>
      </div>

      <DataTable columns={columns} rows={tableRows as unknown as Record<string, React.ReactNode>[]} />
      <p className="mt-4 text-center text-xs text-neutral-500">Pagination · sortable columns (mock)</p>
    </CampaignShell>
  )
}
