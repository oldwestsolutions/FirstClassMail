'use client'

import { ExternalLink } from 'lucide-react'
import { CampaignShell } from '@/components/campaign/CampaignShell'
import { GlassCard } from '@/components/shared/GlassCard'
import { StatusBadge } from '@/components/shared/StatusBadge'

export default function CampaignWalletPage() {
  return (
    <CampaignShell title="Wallet & Payments">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <GlassCard className="border-teal-500/20 shadow-sm">
          <p className="text-xs text-neutral-500">Circle USDC Wallet</p>
          <p className="mt-2 font-mono text-3xl text-neutral-900">4,218.50 USDC</p>
          <p className="mt-1 font-mono text-sm text-neutral-500">0x1a2b…3c4d</p>
          <span className="mt-3 inline-block rounded-full bg-emerald-500/20 px-2 py-0.5 text-xs text-emerald-600">Connected</span>
          <div className="mt-6 flex gap-2">
            <button type="button" className="flex-1 rounded-full bg-neutral-900 py-2 text-sm text-white hover:bg-neutral-800">
              Send USDC
            </button>
            <button type="button" className="flex-1 rounded-full border border-neutral-200 py-2 text-sm text-neutral-700 hover:bg-neutral-50">
              Receive
            </button>
          </div>
          <ul className="mt-6 space-y-2 border-t border-neutral-200 pt-4 text-xs text-neutral-500">
            <li className="flex justify-between">
              <span>+1,200 USDC</span>
              <span>Mar 28 · Confirmed</span>
            </li>
            <li className="flex justify-between">
              <span>-420 USDC</span>
              <span>Mar 27 · Confirmed</span>
            </li>
          </ul>
        </GlassCard>

        <GlassCard className="border-blue-500/20 shadow-sm">
          <p className="text-xs text-neutral-500">Coinbase Wallet</p>
          <button type="button" className="mt-4 w-full rounded-full border border-neutral-200 py-3 text-sm text-neutral-900 hover:bg-neutral-50">
            Connect Coinbase Wallet
          </button>
          <p className="mt-3 text-xs text-neutral-500">Fund campaigns directly from Coinbase.</p>
          <ul className="mt-4 list-inside list-disc space-y-1 text-xs text-neutral-500">
            <li>Instant USDC deposits</li>
            <li>Direct campaign funding</li>
            <li>Automatic payout receipt</li>
          </ul>
        </GlassCard>
      </div>

      <GlassCard className="mt-8">
        <h3 className="font-serif text-lg text-neutral-900">Full transaction history</h3>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead className="text-xs uppercase text-neutral-500">
              <tr>
                <th className="py-2">Date</th>
                <th className="py-2">Type</th>
                <th className="py-2">Amount</th>
                <th className="py-2">From/To</th>
                <th className="py-2">Status</th>
                <th className="py-2">Chain</th>
                <th className="py-2"> </th>
              </tr>
            </thead>
            <tbody className="text-neutral-600">
              {[
                ['Mar 30', 'Deposit', '+2,000', 'Circle → Treasury', 'Confirmed', 'Base'],
                ['Mar 29', 'Ad spend', '-420', 'Treasury → Exchange', 'Pending', 'Ethereum'],
              ].map(([a, b, c, d, e, f]) => (
                <tr key={a + b} className="border-t border-neutral-200/70">
                  <td className="py-3">{a}</td>
                  <td className="py-3">{b}</td>
                  <td className="py-3 font-mono">{c}</td>
                  <td className="py-3 text-xs">{d}</td>
                  <td className="py-3">
                    <StatusBadge variant={e === 'Confirmed' ? 'success' : 'warning'}>{e}</StatusBadge>
                  </td>
                  <td className="py-3">{f}</td>
                  <td className="py-3">
                    <ExternalLink className="h-4 w-4 text-neutral-500" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlassCard>
    </CampaignShell>
  )
}
