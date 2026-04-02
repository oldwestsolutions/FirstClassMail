'use client'

import { AdminShell } from '@/components/admin/AdminShell'
import { GlassCard } from '@/components/shared/GlassCard'
export default function AdminPayoutsPage() {
  return (
    <AdminShell title="USDC payouts">
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          ['Paid all-time', '12.4M USDC'],
          ['Pending queue', '42'],
          ['Avg per subscriber', '$18.20'],
          ['Next run', 'Apr 2'],
        ].map(([a, b]) => (
          <GlassCard key={a}>
            <p className="text-xs text-neutral-500">{a}</p>
            <p className="mt-2 font-mono text-lg text-neutral-900">{b}</p>
          </GlassCard>
        ))}
      </div>
      <GlassCard>
        <div className="mb-4 flex justify-between">
          <h3 className="font-serif text-lg text-neutral-900">Pending</h3>
          <button type="button" className="rounded-lg bg-emerald-600/20 px-3 py-1 text-xs text-emerald-700">
            Bulk approve
          </button>
        </div>
        <table className="w-full text-left text-sm">
          <thead className="text-xs text-neutral-500">
            <tr>
              <th className="py-2">Sub</th>
              <th className="py-2">Amount</th>
              <th className="py-2">Trigger</th>
              <th className="py-2"> </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-neutral-200/70">
              <td className="py-3 font-mono text-xs">sub_****291</td>
              <td className="py-3">420 USDC</td>
              <td className="py-3">Conversion</td>
              <td className="py-3">
                <button type="button" className="text-xs text-teal-700">
                  Approve
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </GlassCard>
      <GlassCard className="mt-8">
        <h3 className="font-serif text-lg text-neutral-900">Circle settings</h3>
        <p className="mt-4 text-sm text-neutral-500">Min threshold 50 USDC · Weekly · Paymaster enabled</p>
      </GlassCard>
    </AdminShell>
  )
}
