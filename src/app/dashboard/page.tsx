'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Brain,
  Mail,
  BookUser,
  FileText,
  Upload,
  LogOut,
  Search,
  Star,
  Archive,
  Trash2,
  Reply,
  Forward,
  Paperclip,
  Send,
  Shield,
  Filter,
  RefreshCw,
  Plus,
  FolderOpen,
  Download,
  MoreHorizontal,
  Grid,
  List,
  Users,
  Eye,
  Image,
  FileVideo,
  Square,
  Check,
  AlertCircle,
  ChevronDown,
  Monitor,
  Smartphone,
  X,
  TrendingUp,
  DollarSign,
  Globe,
  MousePointerClick,
  Zap,
  BarChart3,
  Target,
  Megaphone,
  Clock,
} from 'lucide-react'

/* ── Intelligence Data ──────────────────────────────────────── */

const kpis = [
  { label: 'Total Ad Spend', value: '$284,291', delta: '+18.2%', icon: DollarSign, color: 'text-blue-600 bg-blue-50' },
  { label: 'Impressions', value: '12.4M', delta: '+22.1%', icon: Globe, color: 'text-violet-600 bg-violet-50' },
  { label: 'Conversions', value: '48,291', delta: '+15.8%', icon: Target, color: 'text-teal-600 bg-teal-50' },
  { label: 'ROAS', value: '4.2x', delta: '+8.4%', icon: TrendingUp, color: 'text-emerald-600 bg-emerald-50' },
]

const miniKPIs = [
  { label: 'Click-Through Rate', value: '3.2%', icon: MousePointerClick },
  { label: 'Cost Per Lead', value: '$4.82', icon: DollarSign },
  { label: 'Audience Reach', value: '2.4M', icon: Globe },
  { label: 'Engagement Rate', value: '8.6%', icon: Zap },
  { label: 'Email Open Rate', value: '42.1%', icon: BarChart3 },
  { label: 'Revenue Growth', value: '+18.2%', icon: TrendingUp },
]

const campaigns = [
  { name: 'Awareness — Q2 Broad Reach', platform: 'Meta', spent: 18400, total: 25000, ctr: '2.4%', cpc: '$0.82', imp: '3.2M' },
  { name: 'Retargeting — Cart Abandonment', platform: 'Instagram', spent: 9200, total: 12000, ctr: '4.1%', cpc: '$0.54', imp: '1.8M' },
  { name: 'Lookalike — High-Value Prospects', platform: 'Audience Network', spent: 6800, total: 15000, ctr: '1.9%', cpc: '$1.12', imp: '2.1M' },
  { name: 'Engagement — Medicare Open Enrollment', platform: 'Meta', spent: 14200, total: 20000, ctr: '3.6%', cpc: '$0.68', imp: '4.8M' },
]

const channelAllocation = [
  { name: 'Meta', pct: 40, color: 'bg-blue-500' },
  { name: 'Google', pct: 30, color: 'bg-violet-500' },
  { name: 'LinkedIn', pct: 20, color: 'bg-cyan-500' },
  { name: 'Direct Mail', pct: 10, color: 'bg-teal-500' },
]

const audienceData = [
  { group: '18–24', pct: 12 },
  { group: '25–34', pct: 34 },
  { group: '35–44', pct: 28 },
  { group: '45–54', pct: 18 },
  { group: '55+', pct: 8 },
]

const activityFeed = [
  { text: "Meta campaign 'Q2 Awareness' reached 1M impressions", time: '2h ago', icon: Megaphone },
  { text: 'New audience segment created: High-Intent Medicare', time: '4h ago', icon: Users },
  { text: "Budget increased on 'Retargeting' campaign", time: '6h ago', icon: DollarSign },
  { text: 'Creative A/B test completed — Variant B won', time: '1d ago', icon: Target },
]

/* ── Mailbox Data ───────────────────────────────────────────── */

const mailFolders = [
  { id: 'inbox', label: 'Inbox', n: 12 },
  { id: 'starred', label: 'Starred', n: 3 },
  { id: 'sent', label: 'Sent', n: 0 },
  { id: 'drafts', label: 'Drafts', n: 2 },
  { id: 'archive', label: 'Archive', n: 0 },
  { id: 'trash', label: 'Trash', n: 0 },
]

const mailLabels = [
  { name: 'Campaigns', color: 'bg-blue-500' },
  { name: 'Compliance', color: 'bg-emerald-500' },
  { name: 'Finance', color: 'bg-violet-500' },
  { name: 'Carriers', color: 'bg-amber-500' },
]

const emails = [
  { id: 1, from: 'Verified Carrier Ops', email: 'ops@carrier.verified', sub: 'Creative approved for MAPD carousel', body: 'Your carousel creative has passed all policy checks and compliance verification. The creative is now live across all approved channels.', t: '10:42 AM', date: 'Today', unread: true, starred: true, label: 'Campaigns', avatar: 'CO', verified: true, attachments: ['creative_v3.png', 'report.pdf'] },
  { id: 2, from: 'Compliance Bot', email: 'compliance@fcm.xyz', sub: 'ZK bundle ready for review', body: 'A new zero-knowledge proof bundle is ready for your review. This bundle contains attestation proofs for 847 verified recipients.', t: '2:18 PM', date: 'Yesterday', unread: true, starred: false, label: 'Compliance', avatar: 'CB', verified: true, attachments: ['zk_bundle.proof'] },
  { id: 3, from: 'Finance Team', email: 'finance@fcm.xyz', sub: 'Monthly USDC settlement complete', body: 'Your March 2026 settlement has been processed. Total disbursement: 38,120.00 USDC. Transaction hash: 0x7a3b...4c2d.', t: '9:05 AM', date: 'Mar 30', unread: false, starred: false, label: 'Finance', avatar: 'FT', verified: false, attachments: [] },
  { id: 4, from: 'UHC Liaison', email: 'liaison@uhc.partner', sub: 'Q2 Co-branding guidelines updated', body: 'Please review the updated co-branding guidelines for Q2 2026 campaigns. Key changes include updated color palette requirements.', t: '4:30 PM', date: 'Mar 29', unread: false, starred: true, label: 'Carriers', avatar: 'UH', verified: true, attachments: ['guidelines.pdf'] },
  { id: 5, from: 'Campaign Analytics', email: 'analytics@fcm.xyz', sub: 'Weekly performance digest — Week 13', body: 'Your weekly campaign performance digest is ready. Highlights: Total impressions up 22% WoW, CTR improved to 3.8%.', t: '8:00 AM', date: 'Mar 28', unread: false, starred: false, label: 'Campaigns', avatar: 'CA', verified: false, attachments: [] },
]

const labelColors: Record<string, string> = {
  Campaigns: 'bg-blue-100 text-blue-700',
  Compliance: 'bg-emerald-100 text-emerald-700',
  Finance: 'bg-violet-100 text-violet-700',
  Carriers: 'bg-amber-100 text-amber-700',
}

/* ── Contacts Data ──────────────────────────────────────────── */

const contacts = [
  { id: 1, name: 'Alex Rivera', org: 'UnitedHealthcare', role: 'Campaign Manager', email: 'a.rivera@uhc.com', type: 'Carrier', verified: true, last: 'Mar 28', avatar: 'AR' },
  { id: 2, name: 'Jordan Lee', org: 'Bright Health Agents', role: 'Account Executive', email: 'j.lee@brighthealth.com', type: 'Agent', verified: true, last: 'Mar 26', avatar: 'JL' },
  { id: 3, name: 'Morgan Chen', org: 'Humana', role: 'Compliance Officer', email: 'm.chen@humana.com', type: 'Carrier', verified: true, last: 'Mar 25', avatar: 'MC' },
  { id: 4, name: 'Taylor Kim', org: 'Aetna Marketing', role: 'Creative Director', email: 't.kim@aetna.com', type: 'Partner', verified: false, last: 'Mar 24', avatar: 'TK' },
  { id: 5, name: 'Casey Johnson', org: 'FirstClassMail', role: 'Support', email: 'c.johnson@fcm.xyz', type: 'Internal', verified: true, last: 'Mar 23', avatar: 'CJ' },
]

const contactTypes: Record<string, string> = {
  Carrier: 'bg-blue-100 text-blue-700',
  Agent: 'bg-emerald-100 text-emerald-700',
  Partner: 'bg-violet-100 text-violet-700',
  Internal: 'bg-neutral-100 text-neutral-600',
}

/* ── Documents Data ─────────────────────────────────────────── */

const docFolders = [
  { id: 'all', label: 'All Files', count: 24 },
  { id: 'campaigns', label: 'Campaign Assets', count: 8 },
  { id: 'compliance', label: 'Compliance', count: 6 },
  { id: 'reports', label: 'Reports', count: 5 },
  { id: 'shared', label: 'Shared with Me', count: 5 },
]

const documents = [
  { id: 1, name: 'Q2 2026 Campaign Brief', type: 'PDF', size: '2.4 MB', modified: 'Apr 1', by: 'You', starred: true, folder: 'campaigns', icon: '📄', status: 'Final' },
  { id: 2, name: 'MAPD Spring Creative Pack', type: 'ZIP', size: '48.2 MB', modified: 'Mar 30', by: 'Design', starred: false, folder: 'campaigns', icon: '📦', status: 'In Review' },
  { id: 3, name: 'Compliance Attestation — March', type: 'PDF', size: '1.1 MB', modified: 'Mar 31', by: 'System', starred: true, folder: 'compliance', icon: '🛡️', status: 'Verified' },
  { id: 4, name: 'ZK Proof Bundle — FL Medicare', type: 'PROOF', size: '0.8 MB', modified: 'Mar 29', by: 'System', starred: false, folder: 'compliance', icon: '🔐', status: 'Verified' },
  { id: 5, name: 'Weekly Performance Report W13', type: 'PDF', size: '3.2 MB', modified: 'Mar 28', by: 'Analytics', starred: false, folder: 'reports', icon: '📊', status: 'Final' },
  { id: 6, name: 'UHC Co-Branding Guidelines v2', type: 'PDF', size: '5.8 MB', modified: 'Mar 27', by: 'UHC', starred: true, folder: 'shared', icon: '📋', status: 'Current' },
]

const docStatus: Record<string, string> = {
  Final: 'bg-emerald-100 text-emerald-700',
  'In Review': 'bg-amber-100 text-amber-700',
  Verified: 'bg-blue-100 text-blue-700',
  Current: 'bg-teal-100 text-teal-700',
  Draft: 'bg-neutral-100 text-neutral-600',
}

/* ── Upload Data ────────────────────────────────────────────── */

const adFormats = [
  { id: 'static', label: 'Static Image', desc: 'Single image — JPEG, PNG, WebP', icon: Image, formats: '.jpg, .png, .webp', maxSize: '30 MB' },
  { id: 'video', label: 'Video Ad', desc: 'Video — MP4, MOV, WebM', icon: FileVideo, formats: '.mp4, .mov, .webm', maxSize: '1 GB' },
  { id: 'carousel', label: 'Carousel', desc: 'Multi-image — up to 10 slides', icon: Square, formats: '.jpg, .png', maxSize: '30 MB/slide' },
  { id: 'document', label: 'Document Ad', desc: 'PDF or interactive document', icon: FileText, formats: '.pdf, .html', maxSize: '100 MB' },
]

const uploadPlatforms = [
  { id: 'meta', label: 'Meta / Facebook', on: true },
  { id: 'instagram', label: 'Instagram', on: true },
  { id: 'audience', label: 'Audience Network', on: false },
  { id: 'google', label: 'Google Display', on: false },
  { id: 'linkedin', label: 'LinkedIn', on: false },
]

const prevUploads = [
  { name: 'Carousel A — MAPD Spring', type: 'Carousel', size: '12.4 MB', status: 'Approved', date: 'Mar 30' },
  { name: 'Static hero B — D-SNP', type: 'Static', size: '2.1 MB', status: 'In Review', date: 'Mar 29' },
  { name: 'Video 15s C — Retargeting', type: 'Video', size: '84.2 MB', status: 'Approved', date: 'Mar 28' },
]

/* ── COMPONENT ──────────────────────────────────────────────── */

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('intelligence')
  const [selEmail, setSelEmail] = useState(1)
  const [mailFolder, setMailFolder] = useState('inbox')
  const [composing, setComposing] = useState(false)
  const [contactView, setContactView] = useState<'card' | 'list'>('card')
  const [docFolder, setDocFolder] = useState('all')
  const [docView, setDocView] = useState<'list' | 'grid'>('list')
  const [docSearch, setDocSearch] = useState('')
  const [uploadFormat, setUploadFormat] = useState('static')
  const [uploadStep, setUploadStep] = useState(1)
  const [uploadFiles, setUploadFiles] = useState<{ name: string; size: string }[]>([])
  const [dragActive, setDragActive] = useState(false)

  const tabs = [
    { id: 'intelligence', label: 'Intelligence', icon: Brain },
    { id: 'mailbox', label: 'Mailbox', icon: Mail },
    { id: 'contacts', label: 'Contacts', icon: BookUser },
    { id: 'documents', label: 'Documents', icon: FileText },
    { id: 'upload', label: 'Upload', icon: Upload },
  ]

  const currentEmail = emails.find((e) => e.id === selEmail) ?? emails[0]
  const filteredDocs = documents.filter((d) => {
    const matchFolder = docFolder === 'all' || d.folder === docFolder
    const matchSearch = !docSearch || d.name.toLowerCase().includes(docSearch.toLowerCase())
    return matchFolder && matchSearch
  })

  return (
    <div className="min-h-screen bg-neutral-50/80">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-neutral-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-neutral-200 bg-neutral-50">
              <Mail className="h-4 w-4 text-blue-600" strokeWidth={1.25} />
            </div>
            <span className="font-serif text-lg tracking-wide text-neutral-900">FirstClassMail</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1.5 sm:flex">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span className="font-mono text-sm tabular-nums text-neutral-700">4,218.50 USDC</span>
            </div>
            <button
              type="button"
              className="flex items-center gap-1.5 rounded-full border border-neutral-200 px-3 py-1.5 text-sm text-neutral-500 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600"
            >
              <LogOut className="h-4 w-4" strokeWidth={1.5} />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[220px_1fr]">
          {/* Sidebar Navigation */}
          <nav className="space-y-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`flex w-full items-center gap-3 rounded-xl px-4 py-2.5 text-left text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'bg-blue-50 font-medium text-blue-700'
                    : 'text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900'
                }`}
              >
                <tab.icon className="h-4.5 w-4.5" strokeWidth={1.5} />
                {tab.label}
              </button>
            ))}
          </nav>

          {/* Main Content */}
          <div className="min-w-0">
            <AnimatePresence mode="wait">
              {/* ━━━ INTELLIGENCE TAB ━━━ */}
              {activeTab === 'intelligence' && (
                <motion.div key="intelligence" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} className="space-y-6">
                  <h1 className="font-serif text-2xl text-neutral-900">Intelligence</h1>

                  {/* KPI Cards */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                    {kpis.map((k) => {
                      const Icon = k.icon
                      return (
                        <div key={k.label} className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition hover:shadow-md">
                          <div className="flex items-center gap-2">
                            <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${k.color}`}>
                              <Icon className="h-4 w-4" strokeWidth={1.5} />
                            </div>
                          </div>
                          <p className="mt-3 font-mono text-2xl text-neutral-900">{k.value}</p>
                          <div className="mt-1 flex items-center justify-between">
                            <p className="text-xs text-neutral-500">{k.label}</p>
                            <span className="text-xs font-medium text-emerald-600">{k.delta}</span>
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  {/* Mini KPIs */}
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
                    {miniKPIs.map(({ label, value, icon: Icon }) => (
                      <div key={label} className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
                        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50">
                          <Icon className="h-3.5 w-3.5 text-blue-600" strokeWidth={1.5} />
                        </div>
                        <p className="mt-2 font-mono text-lg text-neutral-900">{value}</p>
                        <p className="text-[10px] text-neutral-500">{label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Campaigns + Channel Allocation */}
                  <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
                      <h3 className="mb-1 font-serif text-lg text-neutral-900">Active Campaigns</h3>
                      <p className="mb-4 text-[10px] uppercase tracking-widest text-neutral-400">Meta Ads Manager</p>
                      <ul className="space-y-3">
                        {campaigns.map((c) => (
                          <li key={c.name} className="rounded-xl border border-neutral-100 bg-neutral-50/50 p-3">
                            <div className="flex items-start justify-between gap-2">
                              <p className="text-sm font-medium text-neutral-900">{c.name}</p>
                              <span className="shrink-0 rounded-full border border-blue-200 bg-blue-50 px-2 py-0.5 text-[10px] font-medium text-blue-600">{c.platform}</span>
                            </div>
                            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-neutral-200">
                              <div className="h-full rounded-full bg-blue-500" style={{ width: `${(c.spent / c.total) * 100}%` }} />
                            </div>
                            <p className="mt-1.5 text-[11px] text-neutral-500">${c.spent.toLocaleString()} / ${c.total.toLocaleString()}</p>
                            <div className="mt-1 flex gap-4 text-[11px] text-neutral-400">
                              <span>CTR {c.ctr}</span><span>CPC {c.cpc}</span><span>{c.imp} imp</span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-6">
                      <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
                        <h3 className="mb-4 font-serif text-lg text-neutral-900">Channel Allocation</h3>
                        {channelAllocation.map((ch) => (
                          <div key={ch.name} className="mb-3">
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-neutral-600">{ch.name}</span>
                              <span className="font-mono text-xs text-neutral-900">{ch.pct}%</span>
                            </div>
                            <div className="mt-1 h-2 overflow-hidden rounded-full bg-neutral-200">
                              <div className={`h-full rounded-full ${ch.color}`} style={{ width: `${ch.pct}%` }} />
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
                        <h3 className="mb-4 font-serif text-lg text-neutral-900">Audience Demographics</h3>
                        {audienceData.map((a) => (
                          <div key={a.group} className="mb-3">
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-neutral-600">{a.group}</span>
                              <span className="font-mono text-xs text-neutral-900">{a.pct}%</span>
                            </div>
                            <div className="mt-1 h-2 overflow-hidden rounded-full bg-neutral-200">
                              <div className="h-full rounded-full bg-gradient-to-r from-blue-500 to-violet-500" style={{ width: `${a.pct}%` }} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Activity Feed */}
                  <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
                    <h3 className="mb-4 font-serif text-lg text-neutral-900">Recent Activity</h3>
                    <ul className="space-y-4">
                      {activityFeed.map((item, i) => {
                        const Icon = item.icon
                        return (
                          <li key={i} className="flex gap-3 border-b border-neutral-100 pb-3 last:border-0 last:pb-0">
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-blue-200 bg-blue-50">
                              <Icon className="h-3.5 w-3.5 text-blue-600" strokeWidth={1.5} />
                            </div>
                            <div>
                              <p className="text-sm text-neutral-900">{item.text}</p>
                              <p className="mt-0.5 flex items-center gap-1 text-xs text-neutral-400">
                                <Clock className="h-3 w-3" /> {item.time}
                              </p>
                            </div>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </motion.div>
              )}

              {/* ━━━ MAILBOX TAB ━━━ */}
              {activeTab === 'mailbox' && (
                <motion.div key="mailbox" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
                  <div className="grid min-h-[78vh] grid-cols-1 gap-0 overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm lg:grid-cols-12">
                    {/* Folders */}
                    <div className="border-b border-neutral-200 bg-neutral-50/80 p-4 lg:col-span-2 lg:border-b-0 lg:border-r">
                      <button type="button" onClick={() => setComposing(true)} className="mb-4 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-blue-700">
                        <Plus className="h-4 w-4" /> Compose
                      </button>
                      <ul className="space-y-0.5 text-sm">
                        {mailFolders.map((f) => (
                          <li key={f.id}>
                            <button type="button" onClick={() => setMailFolder(f.id)} className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left transition ${mailFolder === f.id ? 'bg-blue-100/70 font-medium text-blue-700' : 'text-neutral-600 hover:bg-neutral-100'}`}>
                              {f.label}
                              {f.n > 0 && <span className={`rounded-full px-1.5 py-0.5 text-[10px] font-medium ${mailFolder === f.id ? 'bg-blue-600 text-white' : 'bg-neutral-200 text-neutral-600'}`}>{f.n}</span>}
                            </button>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 border-t border-neutral-200 pt-4">
                        <p className="mb-2 px-3 text-[10px] font-medium uppercase tracking-wider text-neutral-400">Labels</p>
                        <ul className="space-y-1">
                          {mailLabels.map((l) => (
                            <li key={l.name} className="flex items-center gap-2 px-3 py-1.5 text-xs text-neutral-600">
                              <span className={`h-2 w-2 rounded-full ${l.color}`} /> {l.name}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Message List */}
                    <div className="border-b border-neutral-200 lg:col-span-4 lg:border-b-0 lg:border-r">
                      <div className="flex items-center gap-2 border-b border-neutral-200 px-4 py-3">
                        <div className="relative flex-1">
                          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
                          <input placeholder="Search mailbox…" className="w-full rounded-lg border border-neutral-200 bg-neutral-50 py-2 pl-9 pr-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-100" />
                        </div>
                        <button type="button" className="rounded-lg p-2 text-neutral-400 hover:bg-neutral-100"><Filter className="h-4 w-4" /></button>
                        <button type="button" className="rounded-lg p-2 text-neutral-400 hover:bg-neutral-100"><RefreshCw className="h-4 w-4" /></button>
                      </div>
                      <ul className="max-h-[65vh] overflow-y-auto">
                        {emails.map((msg) => (
                          <li key={msg.id}>
                            <button type="button" onClick={() => setSelEmail(msg.id)} className={`w-full border-b border-neutral-100 px-4 py-3.5 text-left transition ${selEmail === msg.id ? 'bg-blue-50/70' : msg.unread ? 'bg-white hover:bg-neutral-50' : 'bg-neutral-50/30 hover:bg-neutral-50'}`}>
                              <div className="flex items-start gap-3">
                                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-medium ${selEmail === msg.id ? 'bg-blue-100 text-blue-700' : 'bg-neutral-100 text-neutral-600'}`}>{msg.avatar}</div>
                                <div className="min-w-0 flex-1">
                                  <div className="flex items-center justify-between gap-2">
                                    <div className="flex items-center gap-1.5">
                                      <span className={`truncate text-sm ${msg.unread ? 'font-semibold text-neutral-900' : 'text-neutral-700'}`}>{msg.from}</span>
                                      {msg.verified && <Shield className="h-3 w-3 text-blue-500" strokeWidth={2} />}
                                    </div>
                                    <span className="shrink-0 text-[11px] text-neutral-400">{msg.t}</span>
                                  </div>
                                  <p className={`mt-0.5 truncate text-sm ${msg.unread ? 'font-medium text-neutral-800' : 'text-neutral-600'}`}>{msg.sub}</p>
                                  <div className="mt-1.5 flex items-center gap-2">
                                    {msg.label && <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${labelColors[msg.label]}`}>{msg.label}</span>}
                                    {msg.attachments.length > 0 && <Paperclip className="h-3 w-3 text-neutral-400" />}
                                    {msg.starred && <Star className="h-3 w-3 fill-amber-400 text-amber-400" />}
                                  </div>
                                </div>
                              </div>
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Message Detail */}
                    <div className="flex flex-col lg:col-span-6">
                      <div className="flex items-center justify-between border-b border-neutral-200 px-6 py-3">
                        <div className="flex items-center gap-2">
                          <button type="button" className="rounded-lg p-1.5 text-neutral-400 hover:bg-neutral-100"><Archive className="h-4 w-4" /></button>
                          <button type="button" className="rounded-lg p-1.5 text-neutral-400 hover:bg-neutral-100"><Trash2 className="h-4 w-4" /></button>
                          <button type="button" className="rounded-lg p-1.5 text-neutral-400 hover:bg-neutral-100"><Star className={`h-4 w-4 ${currentEmail.starred ? 'fill-amber-400 text-amber-400' : ''}`} /></button>
                        </div>
                        <button type="button" className="rounded-lg p-1.5 text-neutral-400 hover:bg-neutral-100"><MoreHorizontal className="h-4 w-4" /></button>
                      </div>
                      <div className="flex-1 overflow-y-auto px-6 py-5">
                        <h2 className="font-serif text-xl text-neutral-900">{currentEmail.sub}</h2>
                        <div className="mt-4 flex items-start gap-3">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-medium text-blue-700">{currentEmail.avatar}</div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-medium text-neutral-900">{currentEmail.from}</span>
                              {currentEmail.verified && <span className="flex items-center gap-1 rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-medium text-blue-600"><Shield className="h-3 w-3" /> Verified</span>}
                            </div>
                            <p className="text-xs text-neutral-400">{currentEmail.email} · {currentEmail.date}, {currentEmail.t}</p>
                          </div>
                        </div>
                        <div className="mt-6 text-sm leading-relaxed text-neutral-700">
                          <p>{currentEmail.body}</p>
                          <p className="mt-4 text-neutral-500">Delivered through FirstClassMail encrypted transit. All recipient data is ZK-verified.</p>
                        </div>
                        {currentEmail.attachments.length > 0 && (
                          <div className="mt-6 border-t border-neutral-100 pt-4">
                            <p className="mb-2 text-xs font-medium text-neutral-500">{currentEmail.attachments.length} Attachment{currentEmail.attachments.length > 1 ? 's' : ''}</p>
                            <div className="flex flex-wrap gap-2">
                              {currentEmail.attachments.map((a) => (
                                <div key={a} className="flex items-center gap-2 rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2 text-xs text-neutral-700 hover:bg-neutral-100">
                                  <Paperclip className="h-3.5 w-3.5 text-neutral-400" /> {a}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="border-t border-neutral-200 px-6 py-4">
                        <div className="flex items-center gap-2">
                          <button type="button" className="flex items-center gap-1.5 rounded-lg border border-neutral-200 px-3 py-2 text-xs text-neutral-600 hover:bg-neutral-50"><Reply className="h-3.5 w-3.5" /> Reply</button>
                          <button type="button" className="flex items-center gap-1.5 rounded-lg border border-neutral-200 px-3 py-2 text-xs text-neutral-600 hover:bg-neutral-50"><Forward className="h-3.5 w-3.5" /> Forward</button>
                          <input className="flex-1 rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-100" placeholder="Write a reply…" />
                          <button type="button" className="flex items-center gap-1.5 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"><Send className="h-3.5 w-3.5" /> Send</button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Compose Modal */}
                  <AnimatePresence>
                    {composing && (
                      <>
                        <motion.button type="button" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-neutral-900/20 backdrop-blur-sm" onClick={() => setComposing(false)} aria-label="Close" />
                        <motion.div initial={{ opacity: 0, y: 40, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 40, scale: 0.95 }} className="fixed bottom-8 right-8 z-50 w-full max-w-lg overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-2xl">
                          <div className="flex items-center justify-between border-b border-neutral-200 bg-neutral-50 px-4 py-3">
                            <h3 className="text-sm font-medium text-neutral-900">New Message</h3>
                            <button type="button" onClick={() => setComposing(false)} className="text-neutral-400 hover:text-neutral-700">✕</button>
                          </div>
                          <div className="space-y-0">
                            <input className="w-full border-b border-neutral-100 px-4 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none" placeholder="To:" />
                            <input className="w-full border-b border-neutral-100 px-4 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none" placeholder="Subject:" />
                            <textarea className="h-48 w-full resize-none px-4 py-3 text-sm text-neutral-700 placeholder:text-neutral-400 focus:outline-none" placeholder="Write your message…" />
                          </div>
                          <div className="flex items-center justify-between border-t border-neutral-200 px-4 py-3">
                            <button type="button" className="rounded-lg p-2 text-neutral-400 hover:bg-neutral-100"><Paperclip className="h-4 w-4" /></button>
                            <button type="button" className="flex items-center gap-1.5 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"><Send className="h-3.5 w-3.5" /> Send</button>
                          </div>
                        </motion.div>
                      </>
                    )}
                  </AnimatePresence>
                </motion.div>
              )}

              {/* ━━━ CONTACTS TAB ━━━ */}
              {activeTab === 'contacts' && (
                <motion.div key="contacts" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
                  <div className="mb-6 flex flex-wrap items-center gap-3">
                    <h1 className="font-serif text-2xl text-neutral-900">Contacts</h1>
                    <div className="ml-auto flex items-center gap-2">
                      <input placeholder="Search contacts…" className="rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-blue-300 focus:outline-none" />
                      <select className="rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm text-neutral-900">
                        <option>All types</option><option>Carrier</option><option>Agent</option><option>Partner</option><option>Internal</option>
                      </select>
                      <button type="button" className="rounded-full bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700">Add contact</button>
                      <div className="flex rounded-lg border border-neutral-200 bg-neutral-50 p-0.5">
                        <button type="button" onClick={() => setContactView('card')} className={`rounded-md p-1.5 ${contactView === 'card' ? 'bg-white text-neutral-900 shadow-sm' : 'text-neutral-400'}`}><Grid className="h-4 w-4" /></button>
                        <button type="button" onClick={() => setContactView('list')} className={`rounded-md p-1.5 ${contactView === 'list' ? 'bg-white text-neutral-900 shadow-sm' : 'text-neutral-400'}`}><List className="h-4 w-4" /></button>
                      </div>
                    </div>
                  </div>

                  {contactView === 'card' ? (
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                      {contacts.map((c) => (
                        <div key={c.id} className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition hover:shadow-md">
                          <div className="flex items-start justify-between">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-sm font-medium text-blue-700">{c.avatar}</div>
                            <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${contactTypes[c.type]}`}>{c.type}</span>
                          </div>
                          <h3 className="mt-4 font-medium text-neutral-900">{c.name}</h3>
                          <p className="text-xs text-neutral-500">{c.role} · {c.org}</p>
                          <p className="mt-1 text-xs text-neutral-400">{c.email}</p>
                          {c.verified && <div className="mt-2 flex items-center gap-1 text-[10px] text-blue-600"><Shield className="h-3 w-3" /> Verified</div>}
                          <div className="mt-4 flex gap-2">
                            <button type="button" className="flex-1 rounded-full border border-neutral-200 py-2 text-xs text-neutral-700 hover:bg-neutral-50">Message</button>
                            <button type="button" className="flex-1 rounded-full bg-blue-50 py-2 text-xs text-blue-700 hover:bg-blue-100">Profile</button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
                      <table className="w-full text-left text-sm">
                        <thead className="border-b border-neutral-200 bg-neutral-50 text-xs uppercase text-neutral-400">
                          <tr><th className="px-4 py-3">Name</th><th className="px-4 py-3">Organization</th><th className="px-4 py-3">Role</th><th className="px-4 py-3">Type</th><th className="px-4 py-3">Last Active</th></tr>
                        </thead>
                        <tbody>
                          {contacts.map((c) => (
                            <tr key={c.id} className="border-b border-neutral-100 hover:bg-neutral-50">
                              <td className="px-4 py-3"><div className="flex items-center gap-2"><div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-xs font-medium text-blue-700">{c.avatar}</div><span className="text-neutral-900">{c.name}</span>{c.verified && <Shield className="h-3 w-3 text-blue-500" />}</div></td>
                              <td className="px-4 py-3 text-neutral-600">{c.org}</td>
                              <td className="px-4 py-3 text-neutral-600">{c.role}</td>
                              <td className="px-4 py-3"><span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${contactTypes[c.type]}`}>{c.type}</span></td>
                              <td className="px-4 py-3 text-neutral-500">{c.last}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </motion.div>
              )}

              {/* ━━━ DOCUMENTS TAB ━━━ */}
              {activeTab === 'documents' && (
                <motion.div key="documents" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
                  <div className="grid min-h-[78vh] grid-cols-1 gap-0 overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm lg:grid-cols-12">
                    <div className="border-b border-neutral-200 bg-neutral-50/80 p-4 lg:col-span-3 lg:border-b-0 lg:border-r">
                      <button type="button" className="mb-4 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-blue-700"><Upload className="h-4 w-4" /> Upload File</button>
                      <ul className="space-y-0.5 text-sm">
                        {docFolders.map((f) => (
                          <li key={f.id}>
                            <button type="button" onClick={() => setDocFolder(f.id)} className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left transition ${docFolder === f.id ? 'bg-blue-100/70 font-medium text-blue-700' : 'text-neutral-600 hover:bg-neutral-100'}`}>
                              <div className="flex items-center gap-2"><FolderOpen className="h-4 w-4" strokeWidth={1.5} /> {f.label}</div>
                              <span className="text-xs text-neutral-400">{f.count}</span>
                            </button>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 rounded-xl bg-white p-3 shadow-sm">
                        <p className="text-xs font-medium text-neutral-700">Storage</p>
                        <div className="mt-2 h-2 overflow-hidden rounded-full bg-neutral-200"><div className="h-full w-[34%] rounded-full bg-gradient-to-r from-blue-500 to-violet-500" /></div>
                        <p className="mt-1.5 text-[10px] text-neutral-500">63.2 MB of 500 MB</p>
                      </div>
                    </div>
                    <div className="flex flex-col lg:col-span-9">
                      <div className="flex items-center gap-3 border-b border-neutral-200 px-5 py-3">
                        <div className="relative flex-1">
                          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
                          <input value={docSearch} onChange={(e) => setDocSearch(e.target.value)} placeholder="Search documents…" className="w-full rounded-lg border border-neutral-200 bg-neutral-50 py-2 pl-9 pr-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-100" />
                        </div>
                        <div className="flex rounded-lg border border-neutral-200 bg-neutral-50 p-0.5">
                          <button type="button" onClick={() => setDocView('list')} className={`rounded-md p-1.5 ${docView === 'list' ? 'bg-white text-neutral-900 shadow-sm' : 'text-neutral-400'}`}><List className="h-4 w-4" /></button>
                          <button type="button" onClick={() => setDocView('grid')} className={`rounded-md p-1.5 ${docView === 'grid' ? 'bg-white text-neutral-900 shadow-sm' : 'text-neutral-400'}`}><Grid className="h-4 w-4" /></button>
                        </div>
                      </div>
                      <div className="flex-1 overflow-y-auto p-5">
                        {docView === 'list' ? (
                          <table className="w-full text-left text-sm">
                            <thead><tr className="border-b border-neutral-200 text-xs uppercase text-neutral-400"><th className="pb-3">Name</th><th className="pb-3">Status</th><th className="pb-3">Modified</th><th className="pb-3">Size</th><th className="pb-3" /></tr></thead>
                            <tbody>
                              {filteredDocs.map((d) => (
                                <tr key={d.id} className="group border-b border-neutral-100 hover:bg-blue-50/30">
                                  <td className="py-3"><div className="flex items-center gap-3"><span className="text-lg">{d.icon}</span><div><div className="flex items-center gap-1.5"><span className="font-medium text-neutral-900">{d.name}</span>{d.starred && <Star className="h-3 w-3 fill-amber-400 text-amber-400" />}</div><span className="text-[10px] text-neutral-400">{d.type}</span></div></div></td>
                                  <td className="py-3"><span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${docStatus[d.status]}`}>{d.status}</span></td>
                                  <td className="py-3"><p className="text-xs text-neutral-600">{d.modified}</p><p className="text-[10px] text-neutral-400">{d.by}</p></td>
                                  <td className="py-3 text-xs text-neutral-500">{d.size}</td>
                                  <td className="py-3"><div className="flex gap-1 opacity-0 group-hover:opacity-100"><button type="button" className="rounded p-1 text-neutral-400 hover:bg-neutral-100"><Download className="h-3.5 w-3.5" /></button><button type="button" className="rounded p-1 text-neutral-400 hover:bg-neutral-100"><Eye className="h-3.5 w-3.5" /></button></div></td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        ) : (
                          <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                            {filteredDocs.map((d) => (
                              <div key={d.id} className="rounded-xl border border-neutral-200 bg-white p-4 transition hover:border-blue-200 hover:shadow-md">
                                <div className="flex items-start justify-between"><span className="text-2xl">{d.icon}</span>{d.starred && <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />}</div>
                                <p className="mt-3 truncate text-sm font-medium text-neutral-900">{d.name}</p>
                                <p className="mt-0.5 text-[10px] text-neutral-400">{d.type} · {d.size}</p>
                                <div className="mt-3 flex items-center justify-between"><span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${docStatus[d.status]}`}>{d.status}</span><span className="text-[10px] text-neutral-400">{d.modified}</span></div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* ━━━ UPLOAD TAB ━━━ */}
              {activeTab === 'upload' && (
                <motion.div key="upload" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} className="mx-auto max-w-4xl space-y-8">
                  {/* Steps */}
                  <div className="flex items-center justify-center gap-0">
                    {[{ n: 1, l: 'Format' }, { n: 2, l: 'Upload' }, { n: 3, l: 'Configure' }, { n: 4, l: 'Review' }].map(({ n, l }, i) => (
                      <div key={n} className="flex items-center">
                        <button type="button" onClick={() => setUploadStep(n)} className="flex items-center gap-2">
                          <div className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium ${uploadStep >= n ? 'bg-blue-600 text-white' : 'border border-neutral-300 bg-white text-neutral-400'}`}>{uploadStep > n ? <Check className="h-4 w-4" /> : n}</div>
                          <span className={`hidden text-sm sm:inline ${uploadStep >= n ? 'font-medium text-neutral-900' : 'text-neutral-400'}`}>{l}</span>
                        </button>
                        {i < 3 && <div className={`mx-3 h-px w-8 sm:w-16 ${uploadStep > n ? 'bg-blue-500' : 'bg-neutral-200'}`} />}
                      </div>
                    ))}
                  </div>

                  {uploadStep === 1 && (
                    <>
                      <div>
                        <h2 className="font-serif text-xl text-neutral-900">Choose Ad Format</h2>
                        <p className="mt-1 text-sm text-neutral-500">Select the type of advertisement you want to upload.</p>
                      </div>
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {adFormats.map((f) => {
                          const Icon = f.icon; const sel = uploadFormat === f.id
                          return (
                            <button key={f.id} type="button" onClick={() => setUploadFormat(f.id)} className={`rounded-2xl border-2 p-5 text-left transition ${sel ? 'border-blue-500 bg-blue-50/50 shadow-sm' : 'border-neutral-200 bg-white hover:border-neutral-300'}`}>
                              <div className="flex items-start gap-3">
                                <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${sel ? 'bg-blue-100' : 'bg-neutral-100'}`}><Icon className={`h-5 w-5 ${sel ? 'text-blue-600' : 'text-neutral-500'}`} /></div>
                                <div className="flex-1">
                                  <p className={`font-medium ${sel ? 'text-blue-700' : 'text-neutral-900'}`}>{f.label}</p>
                                  <p className="mt-0.5 text-xs text-neutral-500">{f.desc}</p>
                                  <p className="mt-2 text-[10px] text-neutral-400">Formats: {f.formats} · Max: {f.maxSize}</p>
                                </div>
                                {sel && <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600"><Check className="h-3.5 w-3.5 text-white" /></div>}
                              </div>
                            </button>
                          )
                        })}
                      </div>
                      <div className="flex justify-end"><button type="button" onClick={() => setUploadStep(2)} className="rounded-xl bg-blue-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-blue-700">Continue</button></div>
                    </>
                  )}

                  {uploadStep === 2 && (
                    <>
                      <div>
                        <h2 className="font-serif text-xl text-neutral-900">Upload Creative Files</h2>
                        <p className="mt-1 text-sm text-neutral-500">Drag and drop your files or click to browse.</p>
                      </div>
                      <div
                        onDragOver={(e) => { e.preventDefault(); setDragActive(true) }}
                        onDragLeave={() => setDragActive(false)}
                        onDrop={(e) => { e.preventDefault(); setDragActive(false); setUploadFiles([...uploadFiles, { name: `creative_${uploadFiles.length + 1}.png`, size: '2.4 MB' }]) }}
                        onClick={() => setUploadFiles([...uploadFiles, { name: `creative_${uploadFiles.length + 1}.png`, size: '2.4 MB' }])}
                        className={`group cursor-pointer rounded-2xl border-2 border-dashed p-12 text-center transition ${dragActive ? 'border-blue-500 bg-blue-50' : 'border-neutral-300 bg-neutral-50/50 hover:border-blue-400'}`}
                      >
                        <div className="flex flex-col items-center">
                          <div className={`mb-4 flex h-16 w-16 items-center justify-center rounded-2xl ${dragActive ? 'bg-blue-100' : 'bg-white shadow-sm'}`}><Upload className={`h-7 w-7 ${dragActive ? 'text-blue-600' : 'text-neutral-400'}`} /></div>
                          <p className="text-sm font-medium text-neutral-700">{dragActive ? 'Drop files here' : 'Click to upload or drag and drop'}</p>
                          <p className="mt-1 text-xs text-neutral-400">{adFormats.find(f => f.id === uploadFormat)?.formats}</p>
                        </div>
                      </div>
                      {uploadFiles.length > 0 && (
                        <div className="space-y-2">
                          {uploadFiles.map((f, i) => (
                            <div key={i} className="flex items-center gap-3 rounded-xl border border-neutral-200 bg-white px-4 py-3">
                              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50"><Image className="h-5 w-5 text-blue-600" /></div>
                              <div className="flex-1"><p className="text-sm font-medium text-neutral-900">{f.name}</p><p className="text-xs text-neutral-400">{f.size}</p></div>
                              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100"><Check className="h-3.5 w-3.5 text-emerald-600" /></div>
                              <button type="button" onClick={() => setUploadFiles(uploadFiles.filter((_, j) => j !== i))} className="rounded p-1 text-neutral-400 hover:bg-neutral-100"><X className="h-4 w-4" /></button>
                            </div>
                          ))}
                        </div>
                      )}
                      <div className="flex justify-between">
                        <button type="button" onClick={() => setUploadStep(1)} className="rounded-xl border border-neutral-200 px-6 py-2.5 text-sm text-neutral-700 hover:bg-neutral-50">Back</button>
                        <button type="button" onClick={() => setUploadStep(3)} disabled={uploadFiles.length === 0} className="rounded-xl bg-blue-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-40">Continue</button>
                      </div>
                    </>
                  )}

                  {uploadStep === 3 && (
                    <>
                      <h2 className="font-serif text-xl text-neutral-900">Configure Advertisement</h2>
                      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                        <div className="space-y-4 rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
                          <h3 className="text-sm font-medium text-neutral-900">Ad Details</h3>
                          <div><label className="mb-1 block text-xs font-medium uppercase tracking-wider text-neutral-500">Ad Name</label><input className="w-full rounded-xl border border-neutral-200 bg-white px-3 py-2.5 text-sm focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-100" placeholder="e.g., MAPD Spring Awareness" /></div>
                          <div><label className="mb-1 block text-xs font-medium uppercase tracking-wider text-neutral-500">Headline</label><input className="w-full rounded-xl border border-neutral-200 bg-white px-3 py-2.5 text-sm focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-100" placeholder="Main headline" /></div>
                          <div><label className="mb-1 block text-xs font-medium uppercase tracking-wider text-neutral-500">Description</label><textarea className="h-20 w-full resize-none rounded-xl border border-neutral-200 bg-white px-3 py-2.5 text-sm focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-100" placeholder="Ad description…" /></div>
                          <div><label className="mb-1 block text-xs font-medium uppercase tracking-wider text-neutral-500">Destination URL</label><input className="w-full rounded-xl border border-neutral-200 bg-white px-3 py-2.5 text-sm focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-100" placeholder="https://…" /></div>
                        </div>
                        <div className="space-y-6">
                          <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
                            <h3 className="mb-3 text-sm font-medium text-neutral-900">Target Platforms</h3>
                            {uploadPlatforms.map((p) => (
                              <label key={p.id} className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm hover:bg-neutral-50">
                                <input type="checkbox" defaultChecked={p.on} className="rounded border-neutral-300 text-blue-600 focus:ring-blue-200" />
                                <span className="text-neutral-700">{p.label}</span>
                              </label>
                            ))}
                          </div>
                          <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
                            <h3 className="mb-3 text-sm font-medium text-neutral-900">Schedule</h3>
                            <div className="grid grid-cols-2 gap-3">
                              <div><label className="mb-1 block text-xs text-neutral-500">Start</label><input type="date" className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm focus:border-blue-300 focus:outline-none" /></div>
                              <div><label className="mb-1 block text-xs text-neutral-500">End</label><input type="date" className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm focus:border-blue-300 focus:outline-none" /></div>
                            </div>
                            <div className="mt-3"><label className="mb-1 block text-xs text-neutral-500">Daily Budget (USDC)</label><input className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm focus:border-blue-300 focus:outline-none" placeholder="2,500" /></div>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <button type="button" onClick={() => setUploadStep(2)} className="rounded-xl border border-neutral-200 px-6 py-2.5 text-sm text-neutral-700 hover:bg-neutral-50">Back</button>
                        <button type="button" onClick={() => setUploadStep(4)} className="rounded-xl bg-blue-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-blue-700">Continue</button>
                      </div>
                    </>
                  )}

                  {uploadStep === 4 && (
                    <>
                      <h2 className="font-serif text-xl text-neutral-900">Review &amp; Submit</h2>
                      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                        <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
                          <h3 className="mb-3 text-sm font-medium text-neutral-900">Summary</h3>
                          <div className="space-y-3 text-sm">
                            {[['Format', adFormats.find(f => f.id === uploadFormat)?.label ?? ''], ['Files', `${uploadFiles.length} file${uploadFiles.length !== 1 ? 's' : ''}`], ['Platforms', 'Meta, Instagram'], ['Est. spend', '2,500 USDC/day']].map(([k, v]) => (
                              <div key={k} className="flex justify-between border-b border-neutral-100 pb-2"><span className="text-neutral-500">{k}</span><span className="text-neutral-900">{v}</span></div>
                            ))}
                          </div>
                        </div>
                        <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
                          <h3 className="mb-3 text-sm font-medium text-neutral-900">Compliance Check</h3>
                          {[{ l: 'Ad policy', s: 'pass' }, { l: 'Creative specs', s: 'pass' }, { l: 'CMS review', s: 'pending' }, { l: 'ZK verification', s: 'pass' }].map((c) => (
                            <div key={c.l} className="mb-2 flex items-center justify-between rounded-lg border border-neutral-100 bg-neutral-50/50 px-3 py-2.5 text-sm">
                              <span className="text-neutral-700">{c.l}</span>
                              {c.s === 'pass' ? <div className="flex items-center gap-1 text-emerald-600"><Check className="h-4 w-4" /><span className="text-xs">Pass</span></div> : <div className="flex items-center gap-1 text-amber-500"><AlertCircle className="h-4 w-4" /><span className="text-xs">Pending</span></div>}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <button type="button" onClick={() => setUploadStep(3)} className="rounded-xl border border-neutral-200 px-6 py-2.5 text-sm text-neutral-700 hover:bg-neutral-50">Back</button>
                        <button type="button" className="rounded-xl bg-blue-600 px-8 py-2.5 text-sm font-medium text-white hover:bg-blue-700">Submit for Review</button>
                      </div>
                    </>
                  )}

                  {/* Previous Uploads */}
                  <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
                    <h3 className="mb-4 font-serif text-lg text-neutral-900">Previous Uploads</h3>
                    <table className="w-full text-left text-sm">
                      <thead><tr className="border-b border-neutral-200 text-xs uppercase text-neutral-400"><th className="pb-3">Name</th><th className="pb-3">Type</th><th className="pb-3">Size</th><th className="pb-3">Status</th><th className="pb-3">Date</th></tr></thead>
                      <tbody>
                        {prevUploads.map((u) => (
                          <tr key={u.name} className="border-b border-neutral-100">
                            <td className="py-3 font-medium text-neutral-900">{u.name}</td>
                            <td className="py-3 text-neutral-600">{u.type}</td>
                            <td className="py-3 text-neutral-500">{u.size}</td>
                            <td className="py-3"><span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${u.status === 'Approved' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>{u.status}</span></td>
                            <td className="py-3 text-neutral-500">{u.date}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}
