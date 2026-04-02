'use client'

import { CampaignShell } from '@/components/campaign/CampaignShell'
import { GlassCard } from '@/components/shared/GlassCard'
import { StatusBadge } from '@/components/shared/StatusBadge'

export default function CampaignsManagerPage() {
  return (
    <CampaignShell title="Campaign manager">
      <div className="mb-6 flex justify-between gap-4">
        <h2 className="font-serif text-lg text-neutral-900">Active &amp; scheduled</h2>
        <button type="button" className="rounded-full bg-neutral-900 px-4 py-2 text-sm text-white hover:bg-neutral-800">
          New campaign
        </button>
      </div>
      <div className="space-y-4">
        {['MAPD Spring Awareness', 'D-SNP Education', 'PDP Switch Assist'].map((name, i) => (
          <GlassCard key={name}>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="font-medium text-neutral-900">{name}</h3>
                <p className="text-xs text-neutral-500">Carriers · UHC, Humana · AEP + OEP windows</p>
              </div>
              <StatusBadge variant={i === 2 ? 'warning' : 'teal'}>{i === 2 ? 'Paused' : 'Active'}</StatusBadge>
            </div>
          </GlassCard>
        ))}
      </div>
    </CampaignShell>
  )
}
