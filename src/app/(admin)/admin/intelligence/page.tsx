'use client'

import { AdminShell } from '@/components/admin/AdminShell'
import { GlassCard } from '@/components/shared/GlassCard'

export default function AdminIntelligencePage() {
  return (
    <AdminShell title="Platform intelligence">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <GlassCard>
          <h3 className="font-serif text-lg text-white">Cross-tenant signals</h3>
          <p className="mt-4 text-sm text-neutral-400">
            Aggregated MAPD engagement up 6.1% WoW · Fraud attempts flat · ZK verification success 99.2%.
          </p>
        </GlassCard>
        <GlassCard>
          <h3 className="font-serif text-lg text-white">Forecast</h3>
          <p className="mt-4 text-sm text-neutral-400">Projected protocol fees next 30d · 842k USDC ±4%.</p>
        </GlassCard>
      </div>
    </AdminShell>
  )
}
