'use client'

import { AdminShell } from '@/components/admin/AdminShell'
import { GlassCard } from '@/components/shared/GlassCard'
import { GaugeChart } from '@/components/admin/GaugeChart'

export default function AdminPlatformPage() {
  return (
    <AdminShell title="Platform health">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <GlassCard>
          <h3 className="text-sm text-neutral-500">API latency p99</h3>
          <p className="mt-2 font-mono text-3xl text-white">118ms</p>
        </GlassCard>
        <GlassCard>
          <h3 className="text-sm text-neutral-500">Queue depth</h3>
          <p className="mt-2 font-mono text-3xl text-teal-300">420</p>
        </GlassCard>
        <GlassCard>
          <h3 className="text-sm text-neutral-500">Failed jobs (24h)</h3>
          <p className="mt-2 font-mono text-3xl text-amber-300">3</p>
        </GlassCard>
      </div>
      <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
        <GaugeChart value={88} label="App tier" />
        <GaugeChart value={72} label="Workers" color="#60a5fa" />
        <GaugeChart value={91} label="Cache hit" color="#a78bfa" />
        <GaugeChart value={67} label="DB load" color="#fbbf24" />
      </div>
    </AdminShell>
  )
}
