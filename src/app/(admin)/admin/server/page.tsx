'use client'

import {
  Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis,
} from 'recharts'
import { AdminShell } from '@/components/admin/AdminShell'
import { StatusBadge } from '@/components/shared/StatusBadge'

const traffic = Array.from({ length: 24 }, (_, i) => ({ h: `${i}:00`, inbound: 400 + Math.sin(i / 3) * 120 + i * 8, outbound: 320 + Math.cos(i / 4) * 80 + i * 6 }))

const servers = [
  { name: 'mail-01', region: 'Dallas, TX', status: 'Online', cpu: 38, ram: 52, disk: 44, queue: 1248, connections: 3902, uptime: '99.99%' },
  { name: 'mail-02', region: 'Newark, NJ', status: 'Online', cpu: 44, ram: 61, disk: 58, queue: 892, connections: 2841, uptime: '99.97%' },
  { name: 'mail-03', region: 'Frankfurt, DE', status: 'Degraded', cpu: 72, ram: 78, disk: 62, queue: 3420, connections: 4102, uptime: '99.84%' },
]

const services = [
  { name: 'Postfix (SMTP)', status: 'Running' },
  { name: 'Dovecot (IMAP)', status: 'Running' },
  { name: 'Rspamd (Filter)', status: 'Running' },
  { name: 'Node.js API', status: 'Running' },
  { name: 'MongoDB', status: 'Running' },
  { name: 'Redis Cache', status: 'Running' },
]

const logs = [
  { time: '14:32:18', level: 'WARN', msg: 'mail-03: queue depth exceeded 3000 threshold' },
  { time: '14:28:05', level: 'INFO', msg: 'mail-01: auto-scaling completed, 2 workers added' },
  { time: '14:15:42', level: 'INFO', msg: 'Rspamd: bulk metric adjusted for batch #849' },
  { time: '13:58:11', level: 'INFO', msg: 'mail-02: TLS certificate renewed (expires: 2027-04-01)' },
  { time: '13:42:30', level: 'WARN', msg: 'mail-03: latency spike 142ms (resolved)' },
]

const levelColor: Record<string, string> = { INFO: 'text-blue-600', WARN: 'text-amber-600', ERROR: 'text-red-600' }

export default function AdminMailServerPage() {
  return (
    <AdminShell title="Mail Server">
      <div className="grid auto-rows-min gap-3" style={{ gridTemplateColumns: 'repeat(12, 1fr)' }}>
        {/* Status banner */}
        <div className="col-span-12 flex items-center gap-3 rounded-xl border border-neutral-200 bg-white px-4 py-2.5 shadow-sm">
          <StatusBadge variant="warning">1 node degraded</StatusBadge>
          <span className="text-xs text-neutral-500">Last checked · just now</span>
          <div className="ml-auto flex gap-4 text-xs">
            <span className="text-neutral-500">Total Queue: <strong className="font-mono text-neutral-900">5,560</strong></span>
            <span className="text-neutral-500">Connections: <strong className="font-mono text-neutral-900">10,845</strong></span>
            <span className="text-neutral-500">Error Rate: <strong className="font-mono text-neutral-900">0.04%</strong></span>
          </div>
        </div>

        {/* Server Cards */}
        {servers.map((s) => (
          <div key={s.name} className="col-span-12 rounded-xl border border-neutral-200 bg-white p-3 shadow-sm sm:col-span-4">
            <div className="mb-2 flex items-center justify-between">
              <div>
                <p className="font-mono text-sm font-medium text-neutral-900">{s.name}</p>
                <p className="text-[10px] text-neutral-500">{s.region}</p>
              </div>
              <StatusBadge variant={s.status === 'Online' ? 'success' : 'warning'}>{s.status}</StatusBadge>
            </div>
            <div className="space-y-2">
              {[
                { label: 'CPU', value: s.cpu },
                { label: 'RAM', value: s.ram },
                { label: 'Disk', value: s.disk },
              ].map((m) => (
                <div key={m.label}>
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="text-neutral-500">{m.label}</span>
                    <span className={`font-mono ${m.value > 70 ? 'text-amber-600' : 'text-neutral-900'}`}>{m.value}%</span>
                  </div>
                  <div className="mt-0.5 h-1.5 overflow-hidden rounded-full bg-neutral-200">
                    <div className={`h-full rounded-full ${m.value > 70 ? 'bg-amber-500' : 'bg-blue-500'}`} style={{ width: `${m.value}%` }} />
                  </div>
                </div>
              ))}
              <div className="flex gap-4 border-t border-neutral-100 pt-2 text-[10px]">
                <span className="text-neutral-500">Queue <strong className="font-mono text-neutral-900">{s.queue.toLocaleString()}</strong></span>
                <span className="text-neutral-500">Conns <strong className="font-mono text-neutral-900">{s.connections.toLocaleString()}</strong></span>
                <span className="text-neutral-500">Up <strong className="font-mono text-neutral-900">{s.uptime}</strong></span>
              </div>
            </div>
          </div>
        ))}

        {/* Services */}
        <div className="col-span-12 rounded-xl border border-neutral-200 bg-white p-3 shadow-sm lg:col-span-4">
          <p className="mb-2 text-[10px] font-medium uppercase tracking-widest text-neutral-400">Services</p>
          <div className="space-y-1.5">
            {services.map((svc) => (
              <div key={svc.name} className="flex items-center justify-between rounded-lg border border-neutral-100 bg-neutral-50/50 px-2.5 py-1.5 text-xs">
                <span className="text-neutral-700">{svc.name}</span>
                <StatusBadge variant="success">{svc.status}</StatusBadge>
              </div>
            ))}
          </div>
        </div>

        {/* Network Traffic */}
        <div className="col-span-12 rounded-xl border border-neutral-200 bg-white p-3 shadow-sm lg:col-span-8">
          <p className="mb-2 text-[10px] font-medium uppercase tracking-widest text-neutral-400">Network Traffic (24h)</p>
          <div className="h-40">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={traffic}>
                <CartesianGrid stroke="#e5e7eb" strokeDasharray="3 3" />
                <XAxis dataKey="h" stroke="#a1a1aa" tick={{ fill: '#71717a', fontSize: 10 }} interval={3} />
                <YAxis stroke="#a1a1aa" tick={{ fill: '#71717a', fontSize: 10 }} />
                <Tooltip contentStyle={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 8 }} />
                <Area type="monotone" dataKey="inbound" stroke="#0d9488" fill="rgba(13,148,136,0.08)" />
                <Area type="monotone" dataKey="outbound" stroke="#2563eb" fill="rgba(37,99,235,0.06)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Logs */}
        <div className="col-span-12 rounded-xl border border-neutral-200 bg-white p-3 shadow-sm">
          <p className="mb-2 text-[10px] font-medium uppercase tracking-widest text-neutral-400">Recent Logs</p>
          <div className="space-y-1">
            {logs.map((l, i) => (
              <div key={i} className="flex items-start gap-3 rounded-lg px-2 py-1.5 text-xs hover:bg-neutral-50">
                <span className="shrink-0 font-mono text-neutral-400">{l.time}</span>
                <span className={`shrink-0 font-mono font-medium ${levelColor[l.level]}`}>{l.level}</span>
                <span className="text-neutral-700">{l.msg}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AdminShell>
  )
}
