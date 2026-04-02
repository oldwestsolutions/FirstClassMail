'use client'

import { Bell, Settings } from 'lucide-react'

export function CampaignTopBar({ title }: { title: string }) {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between border-b border-neutral-200 bg-white/80 px-4 py-4 backdrop-blur-md lg:px-8">
      <h1 className="font-serif text-xl tracking-tight text-neutral-900 lg:text-2xl">{title}</h1>
      <div className="flex items-center gap-3">
        <div className="hidden items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1.5 sm:flex">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          <span className="font-mono text-sm tabular-nums text-neutral-700">4,218.50 USDC</span>
        </div>
        <button type="button" className="rounded-full p-2 text-neutral-400 transition hover:bg-neutral-100 hover:text-neutral-900" aria-label="Notifications">
          <Bell className="h-5 w-5" strokeWidth={1.5} />
        </button>
        <button type="button" className="rounded-full p-2 text-neutral-400 transition hover:bg-neutral-100 hover:text-neutral-900" aria-label="Settings">
          <Settings className="h-5 w-5" strokeWidth={1.5} />
        </button>
      </div>
    </header>
  )
}
