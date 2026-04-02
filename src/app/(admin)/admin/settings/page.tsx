'use client'

import { AdminShell } from '@/components/admin/AdminShell'
import { GlassCard } from '@/components/shared/GlassCard'

export default function AdminSettingsPage() {
  return (
    <AdminShell title="Settings">
      <GlassCard>
        <p className="text-neutral-400">Console preferences and feature flags (mock).</p>
      </GlassCard>
    </AdminShell>
  )
}
