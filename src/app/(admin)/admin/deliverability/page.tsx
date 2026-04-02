'use client'

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, CartesianGrid } from 'recharts'
import { AdminShell } from '@/components/admin/AdminShell'
import { GlassCard } from '@/components/shared/GlassCard'
import { StatusBadge } from '@/components/shared/StatusBadge'

const trend = Array.from({ length: 30 }, (_, i) => ({ d: i + 1, g: 96 + (i % 3), o: 97 + (i % 2), y: 96.5 + (i % 4) * 0.1 }))

export default function AdminDeliverabilityPage() {
  return (
    <AdminShell title="Deliverability">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
        {[
          ['Overall', '97.3%'],
          ['Gmail', '96.8%'],
          ['Outlook', '98.1%'],
          ['Yahoo', '97.2%'],
          ['Spam complaints', '0.04%'],
          ['Bounce', '1.2%'],
        ].map(([a, b]) => (
          <GlassCard key={a}>
            <p className="text-xs text-neutral-500">{a}</p>
            <p className="mt-2 font-mono text-xl text-white">{b}</p>
          </GlassCard>
        ))}
      </div>
      <GlassCard className="mt-8">
        <h3 className="font-serif text-lg text-white">DNS health</h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {['SPF', 'DKIM', 'DMARC', 'PTR', 'Blacklist', 'MX'].map((x) => (
            <StatusBadge key={x} variant="success">
              {x} · OK
            </StatusBadge>
          ))}
        </div>
      </GlassCard>
      <GlassCard className="mt-8">
        <h3 className="mb-4 font-serif text-lg text-white">Inbox provider trend</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={trend}>
              <CartesianGrid stroke="rgba(255,255,255,0.06)" />
              <XAxis dataKey="d" stroke="#71717a" />
              <Tooltip contentStyle={{ background: '#111', border: '1px solid rgba(255,255,255,0.1)' }} />
              <Line type="monotone" dataKey="g" stroke="#2dd4bf" dot={false} name="Gmail" />
              <Line type="monotone" dataKey="o" stroke="#60a5fa" dot={false} name="Outlook" />
              <Line type="monotone" dataKey="y" stroke="#a78bfa" dot={false} name="Yahoo" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </GlassCard>
    </AdminShell>
  )
}
