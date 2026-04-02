'use client'

import { Bell, Settings } from 'lucide-react'

export function CampaignTopBar({ title }: { title: string }) {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between border-b border-white/10 bg-[#050508]/80 px-4 py-4 backdrop-blur-md lg:pl-72">
      <h1 className="font-serif text-xl text-white lg:text-2xl">{title}</h1>
      <div className="flex items-center gap-3">
        <div className="hidden items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-3 py-1.5 sm:flex">
          <span className="h-2 w-2 rounded-full bg-teal-400 shadow-[0_0_8px_rgba(45,212,191,0.8)]" />
          <span className="font-mono text-sm tabular-nums text-teal-200">4,218.50 USDC</span>
        </div>
        <button type="button" className="rounded-xl p-2 text-neutral-400 hover:bg-white/5 hover:text-white" aria-label="Notifications">
          <Bell className="h-5 w-5" />
        </button>
        <button type="button" className="rounded-xl p-2 text-neutral-400 hover:bg-white/5 hover:text-white" aria-label="Settings">
          <Settings className="h-5 w-5" />
        </button>
      </div>
    </header>
  )
}
