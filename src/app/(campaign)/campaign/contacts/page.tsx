'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CampaignShell } from '@/components/campaign/CampaignShell'
import { GlassCard } from '@/components/shared/GlassCard'
import { StatusBadge } from '@/components/shared/StatusBadge'
import { X } from 'lucide-react'

const contacts = [
  { id: 1, name: 'Alex Rivera', org: 'UnitedHealthcare', type: 'Carrier', ver: true, last: 'Mar 28' },
  { id: 2, name: 'Jordan Lee', org: 'Bright Health Agents', type: 'Agent', ver: true, last: 'Mar 26' },
]

export default function CampaignContactsPage() {
  const [view, setView] = useState<'card' | 'list'>('card')
  const [drawer, setDrawer] = useState<number | null>(null)

  return (
    <CampaignShell title="Contacts">
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <input placeholder="Search" className="rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm text-neutral-900" />
        <select className="rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm text-neutral-900">
          <option>All types</option>
          <option>Carrier</option>
          <option>Agent</option>
          <option>Subscriber</option>
        </select>
        <button type="button" className="rounded-full bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700">
          Add contact
        </button>
        <button type="button" className="rounded-full border border-neutral-200 px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50">
          Import CSV
        </button>
        <div className="ml-auto flex gap-2 text-xs">
          <button type="button" className={view === 'card' ? 'text-neutral-900' : 'text-neutral-500'} onClick={() => setView('card')}>
            Cards
          </button>
          <button type="button" className={view === 'list' ? 'text-neutral-900' : 'text-neutral-500'} onClick={() => setView('list')}>
            List
          </button>
        </div>
      </div>

      {view === 'card' ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {contacts.map((c) => (
            <GlassCard key={c.id}>
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-100 text-sm font-medium text-neutral-900">
                  {c.name
                    .split(' ')
                    .map((s) => s[0])
                    .join('')}
                </div>
                <StatusBadge variant="teal">{c.type}</StatusBadge>
              </div>
              <h3 className="mt-4 font-medium text-neutral-900">{c.name}</h3>
              <p className="text-xs text-neutral-500">{c.org}</p>
              <p className="mt-2 text-xs text-neutral-500">Last: {c.last}</p>
              <div className="mt-4 flex gap-2">
                <button type="button" className="flex-1 rounded-full border border-neutral-200 py-2 text-xs text-neutral-700">
                  Message
                </button>
                <button type="button" onClick={() => setDrawer(c.id)} className="flex-1 rounded-full bg-neutral-100 py-2 text-xs text-neutral-900">
                  Profile
                </button>
              </div>
            </GlassCard>
          ))}
        </div>
      ) : (
        <GlassCard>
          <table className="w-full text-left text-sm">
            <thead className="text-xs uppercase text-neutral-500">
              <tr>
                <th className="py-2">Name</th>
                <th className="py-2">Organization</th>
                <th className="py-2">Type</th>
                <th className="py-2">Verified</th>
                <th className="py-2">Last</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((c) => (
                <tr key={c.id} className="border-t border-neutral-200/70">
                  <td className="py-3 text-neutral-900">{c.name}</td>
                  <td className="py-3">{c.org}</td>
                  <td className="py-3">{c.type}</td>
                  <td className="py-3">{c.ver ? 'Yes' : 'No'}</td>
                  <td className="py-3">{c.last}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </GlassCard>
      )}

      <AnimatePresence>
        {drawer !== null && (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/40"
              onClick={() => setDrawer(null)}
              aria-label="Close"
            />
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.25 }}
              className="fixed right-0 top-0 z-50 h-full w-full max-w-md overflow-y-auto border-l border-neutral-200 bg-white p-6 shadow-2xl"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-xl text-neutral-900">Contact detail</h3>
                <button type="button" onClick={() => setDrawer(null)} className="text-neutral-500 hover:text-neutral-900">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <p className="mt-6 text-sm text-neutral-500">Verified credentials, message history, campaign associations, and USDC history (mock).</p>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </CampaignShell>
  )
}
