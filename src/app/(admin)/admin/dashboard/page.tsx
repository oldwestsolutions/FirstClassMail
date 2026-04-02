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
            <p className="text-xs text-neutral-500">{a}</p>
            <p className="mt-2 font-mono text-xl text-white">{b}</p>
          </GlassCard>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <GlassCard className="lg:col-span-2">
          <h3 className="font-serif text-lg text-white">Platform revenue (90 days)</h3>
          <div className="mt-4 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={revenue}>
                <CartesianGrid stroke="rgba(255,255,255,0.06)" />
                <XAxis dataKey="m" stroke="#71717a" />
                <YAxis stroke="#71717a" />
                <Tooltip contentStyle={{ background: '#111', border: '1px solid rgba(255,255,255,0.1)' }} />
                <Line type="monotone" dataKey="v" stroke="#fbbf24" dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>
        <GlassCard>
          <h3 className="mb-4 font-serif text-lg text-white">Server load</h3>
          <div className="grid grid-cols-2 gap-4">
            <GaugeChart value={42} label="CPU" color="#fbbf24" />
            <GaugeChart value={61} label="RAM" color="#60a5fa" />
            <GaugeChart value={54} label="Disk" color="#a78bfa" />
            <GaugeChart value={38} label="BW" color="#2dd4bf" />
          </div>
        </GlassCard>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <GlassCard>
          <h3 className="font-serif text-lg text-white">Recent signups</h3>
          <ul className="mt-4 space-y-2 text-sm text-neutral-400">
            <li>subscriber_9281 · FL · MAPD</li>
            <li>subscriber_9280 · TX · PDP</li>
          </ul>
        </GlassCard>
        <GlassCard>
          <h3 className="font-serif text-lg text-white">Recent payouts</h3>
          <ul className="mt-4 space-y-2 text-sm text-neutral-400">
            <li>Batch #8821 · 420k USDC · Confirmed</li>
            <li>Batch #8820 · 118k USDC · Confirmed</li>
          </ul>
        </GlassCard>
        <GlassCard>
          <h3 className="font-serif text-lg text-white">Carrier campaigns</h3>
          <p className="mt-4 text-sm text-neutral-400">UHC · 12 active · Humana · 9 · Aetna · 7</p>
        </GlassCard>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <GlassCard>
          <h3 className="mb-4 font-serif text-lg text-white">Deliverability by inbox</h3>
          <div className="h-52">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={deliv}>
                <CartesianGrid stroke="rgba(255,255,255,0.06)" />
                <XAxis dataKey="d" stroke="#71717a" />
                <YAxis stroke="#71717a" domain={[90, 100]} />
                <Bar dataKey="r" fill="#2dd4bf" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>
        <GlassCard>
          <h3 className="mb-4 font-serif text-lg text-white">Ad quality trend</h3>
          <div className="h-52">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={Array.from({ length: 14 }, (_, i) => ({ d: i + 1, q: 92 + (i % 5) }))}>
                <Line type="monotone" dataKey="q" stroke="#a78bfa" dot={false} />
                <XAxis dataKey="d" hide />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>
      </div>
    </AdminShell>
  )
}
