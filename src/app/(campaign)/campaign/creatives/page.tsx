'use client'

import { CampaignShell } from '@/components/campaign/CampaignShell'
import { GlassCard } from '@/components/shared/GlassCard'

export default function CampaignCreativesPage() {
  return (
    <CampaignShell title="Ad creatives">
      <div className="mb-6 flex justify-end">
        <button type="button" className="rounded-xl bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/15">
          Upload creative
        </button>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {['Carousel A', 'Static hero B', 'Video 15s C'].map((name) => (
          <GlassCard key={name}>
            <div className="aspect-video rounded-lg bg-gradient-to-br from-neutral-800 to-neutral-900" />
            <p className="mt-3 font-medium text-white">{name}</p>
            <p className="text-xs text-neutral-500">1080×1080 · CMS reviewed</p>
          </GlassCard>
        ))}
      </div>
    </CampaignShell>
  )
}
