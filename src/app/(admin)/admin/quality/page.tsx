'use client'

import { AdminShell } from '@/components/admin/AdminShell'
import { GlassCard } from '@/components/shared/GlassCard'
import { GaugeChart } from '@/components/admin/GaugeChart'
import { StatusBadge } from '@/components/shared/StatusBadge'

export default function AdminQualityPage() {
  return (
    <AdminShell title="Ad quality">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <GlassCard className="lg:col-span-1 flex flex-col items-center">
          <GaugeChart value={94} max={100} label="Overall score" />
          <p className="mt-2 text-sm text-emerald-600">Excellent</p>
        </GlassCard>
        <GlassCard className="lg:col-span-2">
          <h3 className="font-serif text-lg text-neutral-900">Dimensions</h3>
          <ul className="mt-4 space-y-2 text-sm text-neutral-500">
            <li>Verified audience match — 98%</li>
            <li>CMS compliance — 96%</li>
            <li>Creative quality — 89%</li>
            <li>Engagement — 91%</li>
            <li>Fraud detection — 99%</li>
          </ul>
        </GlassCard>
      </div>
      <GlassCard className="mt-8">
        <h3 className="font-serif text-lg text-neutral-900">Per carrier</h3>
        <table className="mt-4 w-full text-left text-sm">
          <thead className="text-xs text-neutral-500">
            <tr>
              <th className="py-2">Carrier</th>
              <th className="py-2">Score</th>
              <th className="py-2">Flags</th>
              <th className="py-2"> </th>
            </tr>
          </thead>
          <tbody className="text-neutral-600">
            {['UHC', 'Humana', 'Aetna'].map((c) => (
              <tr key={c} className="border-t border-neutral-200/70">
                <td className="py-3">{c}</td>
                <td className="py-3">94–96</td>
                <td className="py-3">0–2</td>
                <td className="py-3">
                  <StatusBadge variant="teal">Clear</StatusBadge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </GlassCard>
      <GlassCard className="mt-8">
        <h3 className="font-serif text-lg text-neutral-900">Flagged queue</h3>
        <div className="mt-4 flex flex-wrap gap-2">
          <button type="button" className="rounded-lg bg-emerald-600/20 px-3 py-1 text-xs text-emerald-600">
            Approve
          </button>
          <button type="button" className="rounded-lg bg-red-600/20 px-3 py-1 text-xs text-red-600">
            Reject
          </button>
        </div>
      </GlassCard>
    </AdminShell>
  )
}
