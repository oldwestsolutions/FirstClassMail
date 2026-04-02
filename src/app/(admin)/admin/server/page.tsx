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
        <h3 className="font-serif text-lg text-white">Network traffic (24h)</h3>
        <div className="mt-4 h-64">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={traffic}>
              <CartesianGrid stroke="rgba(255,255,255,0.06)" />
              <XAxis dataKey="h" stroke="#71717a" />
              <YAxis stroke="#71717a" />
              <Tooltip contentStyle={{ background: '#111', border: '1px solid rgba(255,255,255,0.1)' }} />
              <Area type="monotone" dataKey="in" stroke="#2dd4bf" fill="rgba(45,212,191,0.12)" />
              <Area type="monotone" dataKey="out" stroke="#60a5fa" fill="rgba(96,165,250,0.08)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </GlassCard>
      <GlassCard className="mt-8">
        <h3 className="font-mono text-sm text-neutral-400">Error log</h3>
        <pre className="mt-4 max-h-48 overflow-auto rounded-xl bg-black/60 p-4 text-xs text-emerald-400/90">
          {`[INFO] postfix/smtpd: connect from mta.example.com
[WARN] rspamd: metric adjusted (bulk)
[INFO] dovecot: imap-login: Login`}
        </pre>
      </GlassCard>
    </AdminShell>
  )
}
