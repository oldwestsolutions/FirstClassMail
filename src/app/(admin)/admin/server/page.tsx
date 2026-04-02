'use client'

import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { AdminShell } from '@/components/admin/AdminShell'
import { ServerCard } from '@/components/admin/ServerCard'
import { GlassCard } from '@/components/shared/GlassCard'
import { StatusBadge } from '@/components/shared/StatusBadge'

const traffic = Array.from({ length: 24 }, (_, i) => ({ h: i, in: 400 + i * 12, out: 320 + i * 9 }))

const servers = [
  { name: 'mail-01', region: 'Dallas, TX', status: 'Online' as const, cpu: 38, ram: 52, storagePct: 44, bandwidth: '2.1 TB/mo', uptime: '99.99%' },
  { name: 'api-02', region: 'Newark, NJ', status: 'Online' as const, cpu: 44, ram: 61, storagePct: 58, bandwidth: '3.4 TB/mo', uptime: '99.97%' },
]

const svc = (ok: boolean) => [
  { name: 'Postfix', ok },
  { name: 'Dovecot', ok },
  { name: 'Rspamd', ok },
  { name: 'Node.js API', ok },
  { name: 'MongoDB', ok },
  { name: 'Redis', ok },
]

export default function AdminServerPage() {
  return (
    <AdminShell title="Server health">
      <div className="mb-6 flex items-center gap-3">
        <StatusBadge variant="success">All systems operational</StatusBadge>
        <span className="text-xs text-neutral-500">Last checked · just now</span>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {servers.map((s) => (
          <ServerCard
            key={s.name}
            {...s}
            services={svc(true)}
          />
        ))}
      </div>
      <GlassCard className="mt-8">
        <h3 className="font-serif text-lg text-neutral-900">Network traffic (24h)</h3>
        <div className="mt-4 h-64">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={traffic}>
              <CartesianGrid stroke="#e5e7eb" strokeDasharray="3 3" />
              <XAxis dataKey="h" stroke="#71717a" />
              <YAxis stroke="#71717a" />
              <Tooltip contentStyle={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 12, boxShadow: '0 4px 12px rgba(0,0,0,0.06)' }} />
              <Area type="monotone" dataKey="in" stroke="#0d9488" fill="rgba(13,148,136,0.08)" />
              <Area type="monotone" dataKey="out" stroke="#1d4ed8" fill="rgba(29,78,216,0.06)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </GlassCard>
      <GlassCard className="mt-8">
        <h3 className="font-mono text-sm text-neutral-500">Error log</h3>
        <pre className="mt-4 max-h-48 overflow-auto rounded-xl bg-neutral-100 p-4 text-xs text-emerald-600">
          {`[INFO] postfix/smtpd: connect from mta.example.com
[WARN] rspamd: metric adjusted (bulk)
[INFO] dovecot: imap-login: Login`}
        </pre>
      </GlassCard>
    </AdminShell>
  )
}
