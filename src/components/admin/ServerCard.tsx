'use client'

import { GlassCard } from '@/components/shared/GlassCard'
import { StatusBadge } from '@/components/shared/StatusBadge'

export function ServerCard({
  name,
  region,
  status,
  cpu,
  ram,
  storagePct,
  bandwidth,
  uptime,
  services,
}: {
  name: string
  region: string
  status: 'Online' | 'Warning' | 'Offline'
  cpu: number
  ram: number
  storagePct: number
  bandwidth: string
  uptime: string
  services: { name: string; ok: boolean }[]
}) {
  const st = status === 'Online' ? 'success' : status === 'Warning' ? 'warning' : 'error'
  return (
    <GlassCard>
      <div className="mb-4 flex items-start justify-between gap-2">
        <div>
          <h3 className="font-medium text-neutral-900">{name}</h3>
          <p className="text-xs text-neutral-500">{region}</p>
        </div>
        <StatusBadge variant={st}>{status}</StatusBadge>
      </div>
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <p className="text-neutral-500">CPU</p>
          <p className="font-mono text-neutral-900">{cpu}%</p>
        </div>
        <div>
          <p className="text-neutral-500">RAM</p>
          <p className="font-mono text-neutral-900">{ram}%</p>
        </div>
      </div>
      <div className="mt-3">
        <p className="text-xs text-neutral-500">Storage</p>
        <div className="mt-1 h-2 overflow-hidden rounded-full bg-neutral-200">
          <div className="h-full rounded-full bg-blue-500" style={{ width: `${storagePct}%` }} />
        </div>
      </div>
      <p className="mt-3 text-xs text-neutral-500">
        BW {bandwidth} · Up {uptime}
      </p>
      <ul className="mt-4 space-y-1 border-t border-neutral-200 pt-3 text-xs">
        {services.map((s) => (
          <li key={s.name} className="flex justify-between text-neutral-500">
            <span>{s.name}</span>
            <span className={s.ok ? 'text-emerald-600' : 'text-red-600'}>{s.ok ? '●' : '●'}</span>
          </li>
        ))}
      </ul>
    </GlassCard>
  )
}
