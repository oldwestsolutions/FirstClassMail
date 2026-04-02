'use client'

import { AdminShell } from '@/components/admin/AdminShell'
import { GlassCard } from '@/components/shared/GlassCard'
import { StatusBadge } from '@/components/shared/StatusBadge'
import { Lock } from 'lucide-react'

export default function AdminCompliancePage() {
  return (
    <AdminShell title="Compliance">
      <GlassCard>
        <p className="text-sm text-neutral-500">
          Overall score <span className="font-mono text-2xl text-neutral-900">98.2%</span> · Last audit Mar 15, 2026 · CMS guidelines v2026.1
        </p>
        <ul className="mt-6 space-y-3 text-sm">
          {['Opt-in verification', 'Medicare marketing rules', 'HIPAA posture', 'CAN-SPAM', 'TCPA'].map((x) => (
            <li key={x} className="flex items-center justify-between border-b border-neutral-200/70 py-2">
              <span>{x}</span>
              <StatusBadge variant="success">Verified</StatusBadge>
            </li>
          ))}
        </ul>
      </GlassCard>
      <GlassCard className="mt-8">
        <h3 className="font-serif text-lg text-neutral-900">Audit log</h3>
        <table className="mt-4 w-full text-left text-sm">
          <thead className="text-xs text-neutral-500">
            <tr>
              <th className="py-2">Time</th>
              <th className="py-2">Event</th>
              <th className="py-2">Actor</th>
              <th className="py-2"> </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-neutral-200/70 text-neutral-500">
              <td className="py-3">Mar 30 14:02</td>
              <td className="py-3">Policy export</td>
              <td className="py-3">admin@firstclassmail.xyz</td>
              <td className="py-3">
                <Lock className="inline h-4 w-4 text-neutral-500" /> immutable
              </td>
            </tr>
          </tbody>
        </table>
        <button type="button" className="mt-6 rounded-xl bg-neutral-900 px-4 py-2 text-sm text-white">
          Export compliance report
        </button>
      </GlassCard>
    </AdminShell>
  )
}
