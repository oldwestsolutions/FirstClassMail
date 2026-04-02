'use client'

import { useState } from 'react'
import { FileText, FolderOpen, Upload, Download, MoreHorizontal, Search, Grid, List, Star, Clock, Users, Shield, Eye, ChevronRight } from 'lucide-react'
import { CampaignShell } from '@/components/campaign/CampaignShell'
import { motion, AnimatePresence } from 'framer-motion'

const documentFolders = [
  { id: 'all', label: 'All Files', count: 24, icon: FolderOpen },
  { id: 'campaigns', label: 'Campaign Assets', count: 8, icon: FileText },
  { id: 'compliance', label: 'Compliance Docs', count: 6, icon: Shield },
  { id: 'reports', label: 'Reports', count: 5, icon: FileText },
  { id: 'shared', label: 'Shared with Me', count: 5, icon: Users },
]

const documents = [
  {
    id: 1,
    name: 'Q2 2026 Campaign Brief',
    type: 'PDF',
    size: '2.4 MB',
    modified: 'Apr 1, 2026',
    modifiedBy: 'You',
    starred: true,
    shared: 3,
    folder: 'campaigns',
    icon: '📄',
    status: 'Final',
  },
  {
    id: 2,
    name: 'MAPD Spring Creative Pack',
    type: 'ZIP',
    size: '48.2 MB',
    modified: 'Mar 30, 2026',
    modifiedBy: 'Design Team',
    starred: false,
    shared: 5,
    folder: 'campaigns',
    icon: '📦',
    status: 'In Review',
  },
  {
    id: 3,
    name: 'Compliance Attestation — March',
    type: 'PDF',
    size: '1.1 MB',
    modified: 'Mar 31, 2026',
    modifiedBy: 'Compliance Bot',
    starred: true,
    shared: 2,
    folder: 'compliance',
    icon: '🛡️',
    status: 'Verified',
  },
  {
    id: 4,
    name: 'ZK Proof Bundle — FL Medicare',
    type: 'PROOF',
    size: '0.8 MB',
    modified: 'Mar 29, 2026',
    modifiedBy: 'System',
    starred: false,
    shared: 0,
    folder: 'compliance',
    icon: '🔐',
    status: 'Verified',
  },
  {
    id: 5,
    name: 'Weekly Performance Report W13',
    type: 'PDF',
    size: '3.2 MB',
    modified: 'Mar 28, 2026',
    modifiedBy: 'Analytics',
    starred: false,
    shared: 4,
    folder: 'reports',
    icon: '📊',
    status: 'Final',
  },
  {
    id: 6,
    name: 'UHC Co-Branding Guidelines v2',
    type: 'PDF',
    size: '5.8 MB',
    modified: 'Mar 27, 2026',
    modifiedBy: 'UHC Liaison',
    starred: true,
    shared: 8,
    folder: 'shared',
    icon: '📋',
    status: 'Current',
  },
  {
    id: 7,
    name: 'Ad Spend Reconciliation — March',
    type: 'XLSX',
    size: '1.4 MB',
    modified: 'Mar 31, 2026',
    modifiedBy: 'Finance',
    starred: false,
    shared: 2,
    folder: 'reports',
    icon: '💰',
    status: 'Final',
  },
  {
    id: 8,
    name: 'D-SNP Education Landing Page',
    type: 'HTML',
    size: '0.3 MB',
    modified: 'Mar 26, 2026',
    modifiedBy: 'You',
    starred: false,
    shared: 3,
    folder: 'campaigns',
    icon: '🌐',
    status: 'Draft',
  },
]

const statusColor: Record<string, string> = {
  Final: 'bg-emerald-100 text-emerald-700',
  'In Review': 'bg-amber-100 text-amber-700',
  Verified: 'bg-blue-100 text-blue-700',
  Current: 'bg-teal-100 text-teal-700',
  Draft: 'bg-neutral-100 text-neutral-600',
}

export default function CampaignDocumentsPage() {
  const [view, setView] = useState<'grid' | 'list'>('list')
  const [activeFolder, setActiveFolder] = useState('all')
  const [preview, setPreview] = useState<number | null>(null)
  const [search, setSearch] = useState('')

  const filtered = documents.filter((d) => {
    const matchFolder = activeFolder === 'all' || d.folder === activeFolder
    const matchSearch = !search || d.name.toLowerCase().includes(search.toLowerCase())
    return matchFolder && matchSearch
  })

  return (
    <CampaignShell title="Documents">
      <div className="grid min-h-[78vh] grid-cols-1 gap-0 overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm lg:grid-cols-12">
        {/* Sidebar */}
        <div className="border-b border-neutral-200 bg-neutral-50/80 p-4 lg:col-span-3 lg:border-b-0 lg:border-r">
          <button
            type="button"
            className="mb-4 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-blue-700"
          >
            <Upload className="h-4 w-4" />
            Upload File
          </button>

          <ul className="space-y-0.5 text-sm">
            {documentFolders.map((f) => {
              const Icon = f.icon
              return (
                <li key={f.id}>
                  <button
                    type="button"
                    onClick={() => setActiveFolder(f.id)}
                    className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left transition ${
                      activeFolder === f.id
                        ? 'bg-blue-100/70 text-blue-700 font-medium'
                        : 'text-neutral-600 hover:bg-neutral-100'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon className="h-4 w-4" strokeWidth={1.5} />
                      {f.label}
                    </div>
                    <span className="text-xs text-neutral-400">{f.count}</span>
                  </button>
                </li>
              )
            })}
          </ul>

          <div className="mt-6 border-t border-neutral-200 pt-4">
            <div className="rounded-xl bg-white p-3 shadow-sm">
              <p className="text-xs font-medium text-neutral-700">Storage Used</p>
              <div className="mt-2 h-2 overflow-hidden rounded-full bg-neutral-200">
                <div className="h-full w-[34%] rounded-full bg-gradient-to-r from-blue-500 to-violet-500" />
              </div>
              <p className="mt-1.5 text-[10px] text-neutral-500">63.2 MB of 500 MB</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:col-span-9">
          {/* Toolbar */}
          <div className="flex items-center gap-3 border-b border-neutral-200 px-5 py-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search documents…"
                className="w-full rounded-lg border border-neutral-200 bg-neutral-50 py-2 pl-9 pr-3 text-sm text-neutral-900 placeholder:text-neutral-400 transition focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-100"
              />
            </div>
            <div className="flex rounded-lg border border-neutral-200 bg-neutral-50 p-0.5">
              <button
                type="button"
                onClick={() => setView('list')}
                className={`rounded-md p-1.5 transition ${view === 'list' ? 'bg-white text-neutral-900 shadow-sm' : 'text-neutral-400 hover:text-neutral-600'}`}
              >
                <List className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => setView('grid')}
                className={`rounded-md p-1.5 transition ${view === 'grid' ? 'bg-white text-neutral-900 shadow-sm' : 'text-neutral-400 hover:text-neutral-600'}`}
              >
                <Grid className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* File List / Grid */}
          <div className="flex-1 overflow-y-auto p-5">
            {view === 'list' ? (
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-neutral-200 text-xs uppercase text-neutral-400">
                    <th className="pb-3 font-medium">Name</th>
                    <th className="pb-3 font-medium">Status</th>
                    <th className="pb-3 font-medium">Modified</th>
                    <th className="pb-3 font-medium">Size</th>
                    <th className="pb-3 font-medium">Shared</th>
                    <th className="pb-3 font-medium" />
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((doc) => (
                    <tr
                      key={doc.id}
                      className="group border-b border-neutral-100 transition hover:bg-blue-50/30 cursor-pointer"
                      onClick={() => setPreview(doc.id)}
                    >
                      <td className="py-3">
                        <div className="flex items-center gap-3">
                          <span className="text-lg">{doc.icon}</span>
                          <div>
                            <div className="flex items-center gap-1.5">
                              <span className="font-medium text-neutral-900">{doc.name}</span>
                              {doc.starred && <Star className="h-3 w-3 fill-amber-400 text-amber-400" />}
                            </div>
                            <span className="text-[10px] text-neutral-400">{doc.type}</span>
                          </div>
                        </div>
                      </td>
                      <td className="py-3">
                        <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${statusColor[doc.status]}`}>
                          {doc.status}
                        </span>
                      </td>
                      <td className="py-3">
                        <div>
                          <p className="text-xs text-neutral-600">{doc.modified}</p>
                          <p className="text-[10px] text-neutral-400">{doc.modifiedBy}</p>
                        </div>
                      </td>
                      <td className="py-3 text-xs text-neutral-500">{doc.size}</td>
                      <td className="py-3">
                        {doc.shared > 0 && (
                          <div className="flex items-center gap-1 text-xs text-neutral-500">
                            <Users className="h-3 w-3" />
                            {doc.shared}
                          </div>
                        )}
                      </td>
                      <td className="py-3">
                        <div className="flex items-center gap-1 opacity-0 transition group-hover:opacity-100">
                          <button type="button" className="rounded p-1 text-neutral-400 hover:bg-neutral-100 hover:text-neutral-600">
                            <Download className="h-3.5 w-3.5" />
                          </button>
                          <button type="button" className="rounded p-1 text-neutral-400 hover:bg-neutral-100 hover:text-neutral-600">
                            <Eye className="h-3.5 w-3.5" />
                          </button>
                          <button type="button" className="rounded p-1 text-neutral-400 hover:bg-neutral-100 hover:text-neutral-600">
                            <MoreHorizontal className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-4">
                {filtered.map((doc) => (
                  <button
                    key={doc.id}
                    type="button"
                    onClick={() => setPreview(doc.id)}
                    className="group rounded-xl border border-neutral-200 bg-white p-4 text-left transition hover:border-blue-200 hover:shadow-md"
                  >
                    <div className="flex items-start justify-between">
                      <span className="text-2xl">{doc.icon}</span>
                      {doc.starred && <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />}
                    </div>
                    <p className="mt-3 truncate text-sm font-medium text-neutral-900">{doc.name}</p>
                    <p className="mt-0.5 text-[10px] text-neutral-400">{doc.type} · {doc.size}</p>
                    <div className="mt-3 flex items-center justify-between">
                      <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${statusColor[doc.status]}`}>
                        {doc.status}
                      </span>
                      <span className="text-[10px] text-neutral-400">{doc.modified}</span>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Preview Drawer */}
      <AnimatePresence>
        {preview !== null && (() => {
          const doc = documents.find(d => d.id === preview)
          if (!doc) return null
          return (
            <>
              <motion.button
                type="button"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 bg-neutral-900/20 backdrop-blur-sm"
                onClick={() => setPreview(null)}
                aria-label="Close"
              />
              <motion.aside
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'tween', duration: 0.25 }}
                className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col border-l border-neutral-200 bg-white shadow-2xl"
              >
                <div className="flex items-center justify-between border-b border-neutral-200 px-6 py-4">
                  <h3 className="font-serif text-lg text-neutral-900">Document Details</h3>
                  <button type="button" onClick={() => setPreview(null)} className="text-neutral-400 hover:text-neutral-700">✕</button>
                </div>
                <div className="flex-1 overflow-y-auto px-6 py-5">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{doc.icon}</span>
                    <div>
                      <h4 className="font-medium text-neutral-900">{doc.name}</h4>
                      <p className="text-xs text-neutral-500">{doc.type} · {doc.size}</p>
                    </div>
                  </div>

                  <div className="mt-6 space-y-4">
                    <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
                      <span className="text-xs text-neutral-500">Status</span>
                      <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${statusColor[doc.status]}`}>{doc.status}</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
                      <span className="text-xs text-neutral-500">Modified</span>
                      <span className="text-xs text-neutral-700">{doc.modified}</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
                      <span className="text-xs text-neutral-500">Modified by</span>
                      <span className="text-xs text-neutral-700">{doc.modifiedBy}</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
                      <span className="text-xs text-neutral-500">Shared with</span>
                      <span className="text-xs text-neutral-700">{doc.shared} people</span>
                    </div>
                  </div>

                  <div className="mt-6 rounded-xl bg-neutral-50 p-4">
                    <div className="flex aspect-[4/3] items-center justify-center rounded-lg border border-neutral-200 bg-white">
                      <span className="text-4xl">{doc.icon}</span>
                    </div>
                    <p className="mt-2 text-center text-xs text-neutral-400">Preview</p>
                  </div>
                </div>
                <div className="flex gap-2 border-t border-neutral-200 px-6 py-4">
                  <button type="button" className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-blue-600 py-2.5 text-sm font-medium text-white hover:bg-blue-700">
                    <Download className="h-4 w-4" />
                    Download
                  </button>
                  <button type="button" className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-neutral-200 py-2.5 text-sm text-neutral-700 hover:bg-neutral-50">
                    <Users className="h-4 w-4" />
                    Share
                  </button>
                </div>
              </motion.aside>
            </>
          )
        })()}
      </AnimatePresence>
    </CampaignShell>
  )
}
