'use client'

import { Bell, LogOut } from 'lucide-react'

export function AdminTopBar({ title, onLogout }: { title: string; onLogout?: () => void }) {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between border-b border-neutral-200 bg-white/80 px-4 py-4 backdrop-blur-md lg:px-8">
      <h1 className="font-serif text-xl tracking-tight text-neutral-900 lg:text-2xl">{title}</h1>
      <div className="flex items-center gap-3">
        <button
          type="button"
          className="rounded-full p-2 text-neutral-400 transition hover:bg-neutral-100 hover:text-neutral-900"
          aria-label="Notifications"
        >
          <Bell className="h-5 w-5" strokeWidth={1.5} />
        </button>
        {onLogout && (
          <button
            type="button"
            onClick={onLogout}
            className="flex items-center gap-1.5 rounded-full border border-neutral-200 px-3 py-1.5 text-sm text-neutral-500 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600"
          >
            <LogOut className="h-4 w-4" strokeWidth={1.5} />
            <span className="hidden sm:inline">Logout</span>
          </button>
        )}
      </div>
    </header>
  )
}
