'use client'

import { AdminShell } from '@/components/admin/AdminShell'
import { GlassCard } from '@/components/shared/GlassCard'

export default function AdminCarriersPage() {
  return (
    <AdminShell title="Medicare carriers">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {['UnitedHealthcare', 'Humana', 'Aetna', 'Cigna'].map((c) => (
          <GlassCard key={c}>
            <h3 className="font-medium text-neutral-900">{c}</h3>
            <p className="mt-2 text-sm text-neutral-500">Active campaigns · 12 · Contracts · verified</p>
          </GlassCard>
        ))}
      </div>
    </AdminShell>
  )
}
