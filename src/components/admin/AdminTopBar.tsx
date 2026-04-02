'use client'

import { Bell } from 'lucide-react'

export function AdminTopBar({ title }: { title: string }) {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between border-b border-neutral-200 bg-white/80 px-4 py-4 backdrop-blur-md lg:px-8">
      <h1 className="font-serif text-xl tracking-tight text-neutral-900 lg:text-2xl">{title}</h1>
      <button
        type="button"
        className="rounded-full p-2 text-neutral-400 transition hover:bg-neutral-100 hover:text-neutral-900"
        aria-label="Notifications"
      >
        <Bell className="h-5 w-5" strokeWidth={1.5} />
      </button>
    </header>
  )
}
