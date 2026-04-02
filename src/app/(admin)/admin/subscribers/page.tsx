'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Shield, ChevronRight, Building2, MapPin, Calendar, Mail, Phone } from 'lucide-react'
import { AdminShell } from '@/components/admin/AdminShell'

const registry = [
  { id: 1, name: 'Meridian Health Group', type: 'Healthcare', contact: 'Sarah Chen', email: 's.chen@meridianhealth.com', phone: '(305) 555-0142', location: 'Miami, FL', since: '2024-03-15', status: 'Active', verified: true, campaigns: 24, revenue: '$128,400', deliverability: '98.2%' },
  { id: 2, name: 'Atlas Financial Services', type: 'Finance', contact: 'Marcus Webb', email: 'm.webb@atlasfinancial.com', phone: '(212) 555-0198', location: 'New York, NY', since: '2024-06-01', status: 'Active', verified: true, campaigns: 18, revenue: '$104,200', deliverability: '97.8%' },
  { id: 3, name: 'Vertex Real Estate', type: 'Real Estate', contact: 'Linda Torres', email: 'l.torres@vertexre.com', phone: '(415) 555-0167', location: 'San Francisco, CA', since: '2024-08-22', status: 'Active', verified: true, campaigns: 15, revenue: '$87,600', deliverability: '96.4%' },
  { id: 4, name: 'Pinnacle Retail Co.', type: 'Retail', contact: 'James Park', email: 'j.park@pinnacleretail.com', phone: '(312) 555-0134', location: 'Chicago, IL', since: '2025-01-10', status: 'Active', verified: false, campaigns: 12, revenue: '$72,100', deliverability: '97.1%' },
  { id: 5, name: 'Summit Legal Partners', type: 'Legal', contact: 'Rachel Kim', email: 'r.kim@summitlegal.com', phone: '(202) 555-0189', location: 'Washington, DC', since: '2025-02-28', status: 'Active', verified: true, campaigns: 9, revenue: '$54,800', deliverability: '98.6%' },
  { id: 6, name: 'Bright Health Agents', type: 'Insurance', contact: 'David Nguyen', email: 'd.nguyen@brighthealth.com', phone: '(469) 555-0156', location: 'Dallas, TX', since: '2024-11-05', status: 'Inactive', verified: true, campaigns: 6, revenue: '$38,200', deliverability: '95.9%' },
  { id: 7, name: 'Coastal Media Group', type: 'Media', contact: 'Anna Petrova', email: 'a.petrova@coastalmedia.com', phone: '(310) 555-0178', location: 'Los Angeles, CA', since: '2025-04-12', status: 'Pending', verified: false, campaigns: 0, revenue: '$0', deliverability: '—' },
]

const statusColor: Record<string, string> = {
  Active: 'bg-emerald-100 text-emerald-700',
  Inactive: 'bg-neutral-100 text-neutral-600',
  Pending: 'bg-amber-100 text-amber-700',
}

const typeColor: Record<string, string> = {
  Healthcare: 'bg-blue-100 text-blue-700',
  Finance: 'bg-violet-100 text-violet-700',
  'Real Estate': 'bg-teal-100 text-teal-700',
  Retail: 'bg-orange-100 text-orange-700',
  Legal: 'bg-indigo-100 text-indigo-700',
  Insurance: 'bg-emerald-100 text-emerald-700',
  Media: 'bg-pink-100 text-pink-700',
}

export default function AdminRegistryPage() {
  const [expanded, setExpanded] = useState<number | null>(null)
  const [search, setSearch] = useState('')

  const filtered = registry.filter((r) =>
    r.name.toLowerCase().includes(search.toLowerCase()) || r.contact.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <AdminShell title="Registry">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm text-neutral-500">{registry.length} registered organizations</p>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-neutral-400" />
          <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search registry…" className="rounded-lg border border-neutral-200 bg-neutral-50 py-1.5 pl-8 pr-3 text-sm placeholder:text-neutral-400 focus:border-blue-300 focus:outline-none" />
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm">
        {filtered.map((r) => (
          <div key={r.id} className="border-b border-neutral-100 last:border-0">
            <button type="button" onClick={() => setExpanded(expanded === r.id ? null : r.id)} className="flex w-full items-center justify-between px-4 py-3 text-left transition hover:bg-neutral-50">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100 text-neutral-500">
                  <Building2 className="h-4 w-4" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-neutral-900">{r.name}</span>
                    {r.verified && <Shield className="h-3 w-3 text-blue-500" />}
                    <span className={`rounded-full px-1.5 py-0.5 text-[9px] font-medium ${statusColor[r.status]}`}>{r.status}</span>
                  </div>
                  <p className="text-xs text-neutral-500">{r.contact} · {r.type}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className={`hidden rounded-full px-2 py-0.5 text-[10px] font-medium sm:inline ${typeColor[r.type] ?? 'bg-neutral-100 text-neutral-600'}`}>{r.type}</span>
                <ChevronRight className={`h-4 w-4 text-neutral-400 transition ${expanded === r.id ? 'rotate-90' : ''}`} />
              </div>
            </button>
            <AnimatePresence>
              {expanded === r.id && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                  <div className="border-t border-neutral-100 bg-neutral-50/50 px-4 py-4">
                    <div className="grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-4">
                      <div className="flex items-center gap-2"><Mail className="h-3.5 w-3.5 text-neutral-400" /><div><p className="text-[10px] uppercase text-neutral-400">Email</p><p className="text-xs text-neutral-700">{r.email}</p></div></div>
                      <div className="flex items-center gap-2"><Phone className="h-3.5 w-3.5 text-neutral-400" /><div><p className="text-[10px] uppercase text-neutral-400">Phone</p><p className="text-xs text-neutral-700">{r.phone}</p></div></div>
                      <div className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-neutral-400" /><div><p className="text-[10px] uppercase text-neutral-400">Location</p><p className="text-xs text-neutral-700">{r.location}</p></div></div>
                      <div className="flex items-center gap-2"><Calendar className="h-3.5 w-3.5 text-neutral-400" /><div><p className="text-[10px] uppercase text-neutral-400">Member Since</p><p className="text-xs text-neutral-700">{r.since}</p></div></div>
                    </div>
                    <div className="mt-3 grid grid-cols-3 gap-3 rounded-lg border border-neutral-200 bg-white p-3">
                      <div className="text-center"><p className="font-mono text-lg text-neutral-900">{r.campaigns}</p><p className="text-[10px] text-neutral-500">Campaigns</p></div>
                      <div className="text-center"><p className="font-mono text-lg text-neutral-900">{r.revenue}</p><p className="text-[10px] text-neutral-500">Revenue</p></div>
                      <div className="text-center"><p className="font-mono text-lg text-neutral-900">{r.deliverability}</p><p className="text-[10px] text-neutral-500">Deliverability</p></div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </AdminShell>
  )
}
