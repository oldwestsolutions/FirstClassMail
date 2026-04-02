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
            <p className="mt-2 font-mono text-xl text-neutral-900">{b}</p>
          </GlassCard>
        ))}
      </div>
      <GlassCard className="mt-8">
        <h3 className="font-serif text-lg text-neutral-900">DNS health</h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {['SPF', 'DKIM', 'DMARC', 'PTR', 'Blacklist', 'MX'].map((x) => (
            <StatusBadge key={x} variant="success">
              {x} · OK
            </StatusBadge>
          ))}
        </div>
      </GlassCard>
      <GlassCard className="mt-8">
        <h3 className="mb-4 font-serif text-lg text-neutral-900">Inbox provider trend</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={trend}>
              <CartesianGrid stroke="#e5e7eb" strokeDasharray="3 3" />
              <XAxis dataKey="d" stroke="#71717a" />
              <Tooltip contentStyle={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 12, boxShadow: '0 4px 12px rgba(0,0,0,0.06)' }} />
              <Line type="monotone" dataKey="g" stroke="#0d9488" dot={false} name="Gmail" />
              <Line type="monotone" dataKey="o" stroke="#1d4ed8" dot={false} name="Outlook" />
              <Line type="monotone" dataKey="y" stroke="#7c3aed" dot={false} name="Yahoo" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </GlassCard>
    </AdminShell>
  )
}
