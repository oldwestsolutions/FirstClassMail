'use client'

import { useState } from 'react'
import { Search, ChevronRight, TrendingUp, DollarSign, Users, BarChart3, Shield } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { AdminShell } from '@/components/admin/AdminShell'

const accounts = [
  { id: 1, name: 'Meridian Health Group', plan: 'Enterprise', mrr: '$12,400', status: 'Active', campaigns: 24, sends: '2.4M', delivRate: '98.2%', compliance: 'Pass', nextBill: 'Apr 15', contact: 'Sarah Chen', email: 's.chen@meridianhealth.com' },
  { id: 2, name: 'Atlas Financial Services', plan: 'Enterprise', mrr: '$9,800', status: 'Active', campaigns: 18, sends: '1.8M', delivRate: '97.8%', compliance: 'Pass', nextBill: 'Apr 12', contact: 'Marcus Webb', email: 'm.webb@atlasfinancial.com' },
  { id: 3, name: 'Vertex Real Estate', plan: 'Professional', mrr: '$6,200', status: 'Active', campaigns: 15, sends: '1.2M', delivRate: '96.4%', compliance: 'Pass', nextBill: 'Apr 18', contact: 'Linda Torres', email: 'l.torres@vertexre.com' },
  { id: 4, name: 'Pinnacle Retail Co.', plan: 'Professional', mrr: '$4,800', status: 'Active', campaigns: 12, sends: '940K', delivRate: '97.1%', compliance: 'Review', nextBill: 'Apr 20', contact: 'James Park', email: 'j.park@pinnacleretail.com' },
  { id: 5, name: 'Summit Legal Partners', plan: 'Starter', mrr: '$2,400', status: 'Active', campaigns: 9, sends: '380K', delivRate: '98.6%', compliance: 'Pass', nextBill: 'Apr 8', contact: 'Rachel Kim', email: 'r.kim@summitlegal.com' },
  { id: 6, name: 'Bright Health Agents', plan: 'Professional', mrr: '$0', status: 'Churned', campaigns: 6, sends: '0', delivRate: '95.9%', compliance: 'N/A', nextBill: '—', contact: 'David Nguyen', email: 'd.nguyen@brighthealth.com' },
]

const planColor: Record<string, string> = { Enterprise: 'bg-violet-100 text-violet-700', Professional: 'bg-blue-100 text-blue-700', Starter: 'bg-teal-100 text-teal-700' }
const statusColor: Record<string, string> = { Active: 'bg-emerald-100 text-emerald-700', Churned: 'bg-red-100 text-red-700', Suspended: 'bg-amber-100 text-amber-700' }

export default function AdminAccountsPage() {
  const [expanded, setExpanded] = useState<number | null>(null)
  const [search, setSearch] = useState('')

  const totalMRR = accounts.filter(a => a.status === 'Active').reduce((sum, a) => sum + parseInt(a.mrr.replace(/[^0-9]/g, '') || '0'), 0)
  const activeCount = accounts.filter(a => a.status === 'Active').length
  const filtered = accounts.filter(a => a.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <AdminShell title="Accounts">
      {/* Summary KPIs */}
      <div className="mb-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          { label: 'Total MRR', value: `$${totalMRR.toLocaleString()}`, icon: DollarSign, color: 'text-emerald-600 bg-emerald-50' },
          { label: 'Active Accounts', value: activeCount.toString(), icon: Users, color: 'text-blue-600 bg-blue-50' },
          { label: 'Avg Deliverability', value: '97.3%', icon: BarChart3, color: 'text-violet-600 bg-violet-50' },
          { label: 'MRR Growth', value: '+8.4%', icon: TrendingUp, color: 'text-teal-600 bg-teal-50' },
        ].map((k) => { const I = k.icon; return (
          <div key={k.label} className="rounded-xl border border-neutral-200 bg-white p-3 shadow-sm">
            <div className={`mb-1 flex h-6 w-6 items-center justify-center rounded-md ${k.color}`}><I className="h-3 w-3" /></div>
            <p className="font-mono text-lg text-neutral-900">{k.value}</p>
            <p className="text-[10px] text-neutral-500">{k.label}</p>
          </div>
        )})}
      </div>

      <div className="mb-3 flex items-center justify-between">
        <p className="text-sm text-neutral-500">{accounts.length} accounts</p>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-neutral-400" />
          <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search accounts…" className="rounded-lg border border-neutral-200 bg-neutral-50 py-1.5 pl-8 pr-3 text-sm placeholder:text-neutral-400 focus:border-blue-300 focus:outline-none" />
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm">
        {filtered.map((a) => (
          <div key={a.id} className="border-b border-neutral-100 last:border-0">
            <button type="button" onClick={() => setExpanded(expanded === a.id ? null : a.id)} className="flex w-full items-center justify-between px-4 py-3 text-left transition hover:bg-neutral-50">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-100 text-xs font-medium text-neutral-600">{a.name.split(' ').map(w => w[0]).slice(0, 2).join('')}</div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-neutral-900">{a.name}</span>
                    <span className={`rounded-full px-1.5 py-0.5 text-[9px] font-medium ${planColor[a.plan] ?? 'bg-neutral-100 text-neutral-600'}`}>{a.plan}</span>
                    <span className={`rounded-full px-1.5 py-0.5 text-[9px] font-medium ${statusColor[a.status] ?? 'bg-neutral-100 text-neutral-600'}`}>{a.status}</span>
                  </div>
                  <p className="text-xs text-neutral-500">{a.contact} · MRR {a.mrr}</p>
                </div>
              </div>
              <ChevronRight className={`h-4 w-4 text-neutral-400 transition ${expanded === a.id ? 'rotate-90' : ''}`} />
            </button>
            <AnimatePresence>
              {expanded === a.id && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                  <div className="border-t border-neutral-100 bg-neutral-50/50 px-4 py-3">
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                      <div><p className="text-[10px] uppercase text-neutral-400">Campaigns</p><p className="font-mono text-xs text-neutral-900">{a.campaigns}</p></div>
                      <div><p className="text-[10px] uppercase text-neutral-400">Total Sends</p><p className="font-mono text-xs text-neutral-900">{a.sends}</p></div>
                      <div><p className="text-[10px] uppercase text-neutral-400">Deliverability</p><p className="font-mono text-xs text-neutral-900">{a.delivRate}</p></div>
                      <div><p className="text-[10px] uppercase text-neutral-400">Compliance</p><p className="text-xs text-neutral-900"><span className={`inline-flex items-center gap-1 ${a.compliance === 'Pass' ? 'text-emerald-600' : a.compliance === 'Review' ? 'text-amber-600' : 'text-neutral-500'}`}>{a.compliance === 'Pass' && <Shield className="h-3 w-3" />}{a.compliance}</span></p></div>
                      <div><p className="text-[10px] uppercase text-neutral-400">Contact Email</p><p className="text-xs text-neutral-700">{a.email}</p></div>
                      <div><p className="text-[10px] uppercase text-neutral-400">Next Billing</p><p className="text-xs text-neutral-700">{a.nextBill}</p></div>
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
