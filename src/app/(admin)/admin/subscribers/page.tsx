'use client'

import { AdminShell } from '@/components/admin/AdminShell'
import { GlassCard } from '@/components/shared/GlassCard'

export default function AdminSubscribersPage() {
  return (
    <AdminShell title="Subscribers">
      <GlassCard>
        <table className="w-full text-left text-sm">
          <thead className="text-xs uppercase text-neutral-500">
            <tr>
              <th className="py-2">ID</th>
              <th className="py-2">Plan</th>
              <th className="py-2">Region</th>
              <th className="py-2">Since</th>
            </tr>
          </thead>
          <tbody className="text-neutral-300">
            {['9281', '9280', '9279'].map((id) => (
              <tr key={id} className="border-t border-white/5">
                <td className="py-3 font-mono">{id}</td>
                <td className="py-3">MAPD</td>
                <td className="py-3">FL</td>
                <td className="py-3">2026-01-12</td>
              </tr>
            ))}
          </tbody>
        </table>
      </GlassCard>
    </AdminShell>
  )
}
