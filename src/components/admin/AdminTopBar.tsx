'use client'

import { Bell } from 'lucide-react'

export function AdminTopBar({ title }: { title: string }) {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between border-b border-white/10 bg-[#070708]/90 px-4 py-4 backdrop-blur-md lg:pl-72">
      <h1 className="font-serif text-xl text-white lg:text-2xl">{title}</h1>
      <button type="button" className="rounded-xl p-2 text-neutral-400 hover:bg-white/5 hover:text-white" aria-label="Notifications">
        <Bell className="h-5 w-5" />
      </button>
    </header>
  )
}
