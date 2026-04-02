'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Home,
  Mail,
  BookUser,
  HardDrive,
  Upload,
  LogOut,
  Search,
  Star,
  Trash2,
  Reply,
  Forward,
  Paperclip,
  Send,
  Shield,
  RefreshCw,
  Plus,
  Download,
  MoreHorizontal,
  Users,
  Image,
  FileVideo,
  Square,
  FileText,
  Check,
  AlertCircle,
  ChevronDown,
  ChevronRight,
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
  Wallet,
  CreditCard,
  ArrowUpRight,
  ArrowDownLeft,
  Link2,
  ExternalLink,
} from 'lucide-react'

/* ── DATA ───────────────────────────────────────────────────── */

const kpis = [
  { label: 'Ad Spend', value: '$284,291', delta: '+18.2%', icon: DollarSign, color: 'text-blue-600 bg-blue-50' },
  { label: 'Impressions', value: '12.4M', delta: '+22.1%', icon: Globe, color: 'text-violet-600 bg-violet-50' },
  { label: 'Conversions', value: '48,291', delta: '+15.8%', icon: Target, color: 'text-teal-600 bg-teal-50' },
  { label: 'ROAS', value: '4.2x', delta: '+8.4%', icon: TrendingUp, color: 'text-emerald-600 bg-emerald-50' },
]

const miniKPIs = [
  { label: 'CTR', value: '3.2%' },
  { label: 'CPL', value: '$4.82' },
  { label: 'Reach', value: '2.4M' },
  { label: 'Engage', value: '8.6%' },
  { label: 'Open %', value: '42.1%' },
  { label: 'Rev Δ', value: '+18.2%' },
]

const campaigns = [
  { name: 'Q2 Broad Reach', platform: 'Meta', pct: 73, ctr: '2.4%', imp: '3.2M' },
  { name: 'Cart Abandonment', platform: 'IG', pct: 76, ctr: '4.1%', imp: '1.8M' },
  { name: 'High-Value Lookalike', platform: 'AN', pct: 45, ctr: '1.9%', imp: '2.1M' },
  { name: 'Medicare Open Enroll', platform: 'Meta', pct: 71, ctr: '3.6%', imp: '4.8M' },
]

const channels = [
  { name: 'Meta', pct: 40, color: 'bg-blue-500' },
  { name: 'Google', pct: 30, color: 'bg-violet-500' },
  { name: 'LinkedIn', pct: 20, color: 'bg-cyan-500' },
  { name: 'Direct', pct: 10, color: 'bg-teal-500' },
]

const audience = [
  { g: '18–24', p: 12 }, { g: '25–34', p: 34 }, { g: '35–44', p: 28 }, { g: '45–54', p: 18 }, { g: '55+', p: 8 },
]

const feed = [
  { t: "Q2 Awareness hit 1M impressions", time: '2h', icon: Megaphone },
  { t: 'High-Intent Medicare segment created', time: '4h', icon: Users },
  { t: "Retargeting budget increased", time: '6h', icon: DollarSign },
  { t: 'A/B test — Variant B won', time: '1d', icon: Target },
]

const emails = [
  { id: 1, from: 'Verified Carrier Ops', sub: 'Creative approved for MAPD carousel', body: 'Your carousel creative has passed all policy checks and compliance verification. The creative is now live across all approved channels. Performance metrics will begin populating within 24 hours.\n\nAll targeting parameters have been validated against CMS guidelines. The ad set is compliant with Medicare marketing regulations for the current enrollment period.', t: '10:42 AM', label: 'Campaigns', avatar: 'CO', verified: true, attachments: ['creative_v3.png', 'compliance_report.pdf'] },
  { id: 2, from: 'Compliance Bot', sub: 'ZK bundle ready for review', body: 'A new zero-knowledge proof bundle is ready for your review. This bundle contains attestation proofs for 847 verified recipients in your latest campaign targeting Florida Medicare beneficiaries.\n\nBundle hash: 0x8f2a...9b3c\nVerification status: Pending your approval', t: '2:18 PM', label: 'Compliance', avatar: 'CB', verified: true, attachments: ['zk_bundle_0x8f2a.proof'] },
  { id: 3, from: 'Finance Team', sub: 'Monthly USDC settlement complete', body: 'Your March 2026 settlement has been processed.\n\nTotal disbursement: 38,120.00 USDC\nTransaction hash: 0x7a3b...4c2d\nThe funds have been credited to your connected Circle wallet.', t: '9:05 AM', label: 'Finance', avatar: 'FT', verified: false, attachments: [] },
  { id: 4, from: 'UHC Liaison', sub: 'Q2 Co-branding guidelines updated', body: 'Please review the updated co-branding guidelines for Q2 2026 campaigns. Key changes include updated color palette requirements and new disclaimer text for MAPD plan advertisements.', t: '4:30 PM', label: 'Carriers', avatar: 'UH', verified: true, attachments: ['q2_guidelines.pdf'] },
  { id: 5, from: 'Campaign Analytics', sub: 'Weekly performance digest — Week 13', body: 'Your weekly digest is ready. Highlights: Total impressions up 22% WoW, CTR improved to 3.8%, Retargeting campaign achieved 4.1% conversion rate.', t: '8:00 AM', label: 'Campaigns', avatar: 'CA', verified: false, attachments: [] },
]

const labelColor: Record<string, string> = { Campaigns: 'bg-blue-100 text-blue-700', Compliance: 'bg-emerald-100 text-emerald-700', Finance: 'bg-violet-100 text-violet-700', Carriers: 'bg-amber-100 text-amber-700' }

const contacts = [
  { id: 1, name: 'Alex Rivera', org: 'UnitedHealthcare', role: 'Campaign Manager', email: 'a.rivera@uhc.com', type: 'Carrier', verified: true, conversions: 1248, leads: 3420, ctr: '4.2%', spend: '$42,100' },
  { id: 2, name: 'Jordan Lee', org: 'Bright Health Agents', role: 'Account Executive', email: 'j.lee@brighthealth.com', type: 'Agent', verified: true, conversions: 892, leads: 2180, ctr: '3.8%', spend: '$28,400' },
  { id: 3, name: 'Morgan Chen', org: 'Humana', role: 'Compliance Officer', email: 'm.chen@humana.com', type: 'Carrier', verified: true, conversions: 1560, leads: 4100, ctr: '3.1%', spend: '$51,200' },
  { id: 4, name: 'Taylor Kim', org: 'Aetna Marketing', role: 'Creative Director', email: 't.kim@aetna.com', type: 'Partner', verified: false, conversions: 420, leads: 1240, ctr: '2.9%', spend: '$18,600' },
  { id: 5, name: 'Casey Johnson', org: 'FirstClassMail', role: 'Support', email: 'c.johnson@fcm.xyz', type: 'Internal', verified: true, conversions: 0, leads: 0, ctr: '—', spend: '—' },
  { id: 6, name: 'Reese Patel', org: 'Cigna Health', role: 'VP Marketing', email: 'r.patel@cigna.com', type: 'Carrier', verified: true, conversions: 2100, leads: 5800, ctr: '4.8%', spend: '$68,300' },
  { id: 7, name: 'Drew Sanders', org: 'Molina Healthcare', role: 'Media Buyer', email: 'd.sanders@molina.com', type: 'Agent', verified: false, conversions: 310, leads: 980, ctr: '2.4%', spend: '$12,400' },
]

const typeColor: Record<string, string> = { Carrier: 'bg-blue-100 text-blue-700', Agent: 'bg-emerald-100 text-emerald-700', Partner: 'bg-violet-100 text-violet-700', Internal: 'bg-neutral-100 text-neutral-600' }

const files = [
  { id: 1, name: 'Q2 Campaign Brief', type: 'PDF', size: '2.4 MB', mod: 'Apr 1', icon: '📄', status: 'Final' },
  { id: 2, name: 'MAPD Creative Pack', type: 'ZIP', size: '48 MB', mod: 'Mar 30', icon: '📦', status: 'Review' },
  { id: 3, name: 'Compliance Attestation', type: 'PDF', size: '1.1 MB', mod: 'Mar 31', icon: '🛡️', status: 'Verified' },
  { id: 4, name: 'ZK Proof Bundle', type: 'PROOF', size: '0.8 MB', mod: 'Mar 29', icon: '🔐', status: 'Verified' },
  { id: 5, name: 'Performance Report W13', type: 'PDF', size: '3.2 MB', mod: 'Mar 28', icon: '📊', status: 'Final' },
  { id: 6, name: 'UHC Brand Guide v2', type: 'PDF', size: '5.8 MB', mod: 'Mar 27', icon: '📋', status: 'Current' },
]

const fStatus: Record<string, string> = { Final: 'bg-emerald-100 text-emerald-700', Review: 'bg-amber-100 text-amber-700', Verified: 'bg-blue-100 text-blue-700', Current: 'bg-teal-100 text-teal-700' }

const adFormats = [
  { id: 'static', label: 'Image', icon: Image, ext: '.jpg .png .webp', max: '30MB' },
  { id: 'video', label: 'Video', icon: FileVideo, ext: '.mp4 .mov', max: '1GB' },
  { id: 'carousel', label: 'Carousel', icon: Square, ext: '.jpg .png', max: '30MB/slide' },
  { id: 'doc', label: 'Document', icon: FileText, ext: '.pdf .html', max: '100MB' },
]

const MAX_CHARS = 2000

/* ── COMPONENT ──────────────────────────────────────────────── */

export default function DashboardPage() {
  const [tab, setTab] = useState('home')
  const [openEmail, setOpenEmail] = useState<number | null>(null)
  const [replyText, setReplyText] = useState('')
  const [composing, setComposing] = useState(false)
  const [expandedContact, setExpandedContact] = useState<number | null>(null)
  const [uploadFormat, setUploadFormat] = useState('static')
  const [uploadStep, setUploadStep] = useState(1)
  const [uploadFiles, setUploadFiles] = useState<{ name: string; size: string }[]>([])
  const [dragActive, setDragActive] = useState(false)
  const [showLogout, setShowLogout] = useState(false)
  const [dotMenu, setDotMenu] = useState(false)
  const [dropboxConnected, setDropboxConnected] = useState(false)

  const tabs = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'mailbox', label: 'Mailbox', icon: Mail },
    { id: 'contacts', label: 'Contacts', icon: BookUser },
    { id: 'files', label: 'Files', icon: HardDrive },
    { id: 'upload', label: 'Upload', icon: Upload },
  ]

  const emailObj = emails.find((e) => e.id === openEmail)

  const doLogout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('fcm_campaign_session')
      window.location.href = 'https://campaign.firstclassmail.xyz'
    }
  }

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-neutral-50/80">
      {/* Header */}
      <header className="z-30 flex shrink-0 items-center justify-between border-b border-neutral-200 bg-white/80 px-4 py-2.5 backdrop-blur-md sm:px-6">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-neutral-200 bg-neutral-50">
            <Mail className="h-3.5 w-3.5 text-blue-600" strokeWidth={1.25} />
          </div>
          <span className="font-serif text-base tracking-wide text-neutral-900">FirstClassMail</span>
        </div>
        <div className="flex items-center gap-2.5">
          <button type="button" onClick={() => setTab('balance')} className="hidden cursor-pointer items-center gap-1.5 rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 transition hover:border-blue-300 hover:bg-blue-50 sm:flex" title="Manage balance">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span className="font-mono text-xs tabular-nums text-neutral-700">4,218.50 USDC</span>
          </button>
          <button type="button" onClick={() => setShowLogout(true)} className="flex items-center gap-1.5 rounded-full border border-neutral-200 px-2.5 py-1 text-xs text-neutral-500 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600">
            <LogOut className="h-3.5 w-3.5" strokeWidth={1.5} />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>
      </header>

      <div className="flex min-h-0 flex-1">
        {/* Sidebar */}
        <nav className="hidden w-48 shrink-0 border-r border-neutral-200 bg-white p-3 lg:block">
          {tabs.map((t) => (
            <button key={t.id} type="button" onClick={() => setTab(t.id)} className={`mb-0.5 flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm transition ${tab === t.id ? 'bg-blue-50 font-medium text-blue-700' : 'text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900'}`}>
              <t.icon className="h-4 w-4" strokeWidth={1.5} />
              {t.label}
            </button>
          ))}
        </nav>

        {/* Mobile tabs */}
        <div className="flex shrink-0 border-b border-neutral-200 bg-white px-2 lg:hidden">
          {tabs.map((t) => (
            <button key={t.id} type="button" onClick={() => setTab(t.id)} className={`flex items-center gap-1.5 px-3 py-2.5 text-xs transition ${tab === t.id ? 'border-b-2 border-blue-600 font-medium text-blue-700' : 'text-neutral-500'}`}>
              <t.icon className="h-3.5 w-3.5" />
              {t.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-5">
          {/* ━━━ HOME ━━━ */}
          {tab === 'home' && (
            <div className="grid h-full auto-rows-min gap-3" style={{ gridTemplateColumns: 'repeat(12, 1fr)' }}>
              {/* KPI row */}
              {kpis.map((k) => { const I = k.icon; return (
                <div key={k.label} className="col-span-6 rounded-xl border border-neutral-200 bg-white p-3 shadow-sm sm:col-span-3">
                  <div className="flex items-center justify-between">
                    <div className={`flex h-6 w-6 items-center justify-center rounded-md ${k.color}`}><I className="h-3 w-3" /></div>
                    <span className="text-[10px] font-medium text-emerald-600">{k.delta}</span>
                  </div>
                  <p className="mt-1.5 font-mono text-xl text-neutral-900">{k.value}</p>
                  <p className="text-[10px] text-neutral-500">{k.label}</p>
                </div>
              )})}

              {/* Mini KPIs */}
              {miniKPIs.map((m) => (
                <div key={m.label} className="col-span-4 rounded-lg border border-neutral-200 bg-white px-2.5 py-2 shadow-sm sm:col-span-2">
                  <p className="font-mono text-sm text-neutral-900">{m.value}</p>
                  <p className="text-[9px] uppercase tracking-wide text-neutral-400">{m.label}</p>
                </div>
              ))}

              {/* Active Campaigns */}
              <div className="col-span-12 rounded-xl border border-neutral-200 bg-white p-3 shadow-sm lg:col-span-5">
                <p className="mb-2 text-[10px] font-medium uppercase tracking-widest text-neutral-400">Active Campaigns</p>
                <div className="space-y-2">
                  {campaigns.map((c) => (
                    <div key={c.name} className="group relative rounded-lg border border-neutral-100 bg-neutral-50/50 px-2.5 py-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium text-neutral-900">{c.name}</span>
                        <span className="rounded bg-blue-50 px-1.5 py-0.5 text-[9px] font-medium text-blue-600">{c.platform}</span>
                      </div>
                      <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-neutral-200"><div className="h-full rounded-full bg-blue-500" style={{ width: `${c.pct}%` }} /></div>
                      <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-white/95 opacity-0 transition group-hover:opacity-100">
                        <div className="flex gap-4 text-[10px] text-neutral-600">
                          <span>CTR <strong>{c.ctr}</strong></span>
                          <span>Imp <strong>{c.imp}</strong></span>
                          <span>Budget <strong>{c.pct}%</strong> used</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Channels + Audience stacked */}
              <div className="col-span-12 space-y-3 lg:col-span-3">
                <div className="rounded-xl border border-neutral-200 bg-white p-3 shadow-sm">
                  <p className="mb-2 text-[10px] font-medium uppercase tracking-widest text-neutral-400">Channel Mix</p>
                  {channels.map((ch) => (
                    <div key={ch.name} className="mb-1.5 flex items-center gap-2">
                      <span className="w-12 text-[10px] text-neutral-600">{ch.name}</span>
                      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-neutral-200"><div className={`h-full rounded-full ${ch.color}`} style={{ width: `${ch.pct}%` }} /></div>
                      <span className="w-7 text-right font-mono text-[10px] text-neutral-900">{ch.pct}%</span>
                    </div>
                  ))}
                </div>
                <div className="rounded-xl border border-neutral-200 bg-white p-3 shadow-sm">
                  <p className="mb-2 text-[10px] font-medium uppercase tracking-widest text-neutral-400">Demographics</p>
                  {audience.map((a) => (
                    <div key={a.g} className="mb-1.5 flex items-center gap-2">
                      <span className="w-10 text-[10px] text-neutral-600">{a.g}</span>
                      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-neutral-200"><div className="h-full rounded-full bg-gradient-to-r from-blue-500 to-violet-500" style={{ width: `${a.p}%` }} /></div>
                      <span className="w-7 text-right font-mono text-[10px] text-neutral-900">{a.p}%</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Activity */}
              <div className="col-span-12 rounded-xl border border-neutral-200 bg-white p-3 shadow-sm lg:col-span-4">
                <p className="mb-2 text-[10px] font-medium uppercase tracking-widest text-neutral-400">Activity</p>
                <ul className="space-y-2">
                  {feed.map((f, i) => { const I = f.icon; return (
                    <li key={i} className="flex gap-2">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-50"><I className="h-3 w-3 text-blue-600" /></div>
                      <div className="min-w-0">
                        <p className="truncate text-xs text-neutral-800">{f.t}</p>
                        <p className="text-[10px] text-neutral-400">{f.time} ago</p>
                      </div>
                    </li>
                  )})}
                </ul>
              </div>
            </div>
          )}

          {/* ━━━ MAILBOX ━━━ */}
          {tab === 'mailbox' && (
            <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm">
              {/* Toolbar */}
              <div className="flex items-center gap-2 border-b border-neutral-200 px-4 py-2.5">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-neutral-400" />
                  <input placeholder="Search…" className="w-full rounded-lg border border-neutral-200 bg-neutral-50 py-1.5 pl-8 pr-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-blue-300 focus:outline-none" />
                </div>
                <button type="button" title="Delete selected" className="rounded-lg p-1.5 text-neutral-400 transition hover:bg-neutral-100 hover:text-neutral-700"><Trash2 className="h-4 w-4" /></button>
                <button type="button" title="Star / Unstar" className="rounded-lg p-1.5 text-neutral-400 transition hover:bg-neutral-100 hover:text-amber-500"><Star className="h-4 w-4" /></button>
                <div className="relative">
                  <button type="button" title="More actions" onClick={() => setDotMenu(!dotMenu)} className="rounded-lg p-1.5 text-neutral-400 transition hover:bg-neutral-100 hover:text-neutral-700"><MoreHorizontal className="h-4 w-4" /></button>
                  {dotMenu && (
                    <div className="absolute right-0 top-full z-20 mt-1 w-40 rounded-lg border border-neutral-200 bg-white py-1 shadow-lg">
                      {['Mark all read', 'Archive selected', 'Report spam', 'Empty trash'].map((a) => (
                        <button key={a} type="button" onClick={() => setDotMenu(false)} className="block w-full px-3 py-1.5 text-left text-xs text-neutral-700 hover:bg-neutral-50">{a}</button>
                      ))}
                    </div>
                  )}
                </div>
                <button type="button" title="Refresh" className="rounded-lg p-1.5 text-neutral-400 transition hover:bg-neutral-100 hover:text-neutral-700"><RefreshCw className="h-4 w-4" /></button>
                <button type="button" onClick={() => setComposing(true)} className="flex items-center gap-1.5 rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-blue-700"><Plus className="h-3.5 w-3.5" /> Compose</button>
              </div>

              {/* Message List */}
              <ul>
                {emails.map((msg) => (
                  <li key={msg.id}>
                    <button type="button" onClick={() => { setOpenEmail(msg.id); setReplyText('') }} className="flex w-full items-center gap-3 border-b border-neutral-100 px-4 py-3 text-left transition hover:bg-neutral-50">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-xs font-medium text-neutral-600">{msg.avatar}</div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-1.5 truncate">
                            <span className="text-sm font-medium text-neutral-900">{msg.from}</span>
                            {msg.verified && <Shield className="h-3 w-3 shrink-0 text-blue-500" />}
                          </div>
                          <span className="shrink-0 text-[11px] text-neutral-400">{msg.t}</span>
                        </div>
                        <p className="truncate text-sm text-neutral-600">{msg.sub}</p>
                      </div>
                      <span className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-medium ${labelColor[msg.label]}`}>{msg.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* ━━━ CONTACTS ━━━ */}
          {tab === 'contacts' && (
            <div>
              <div className="mb-4 flex items-center justify-between">
                <h1 className="font-serif text-xl text-neutral-900">Contacts</h1>
                <div className="flex items-center gap-2">
                  <input placeholder="Search…" className="rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-sm placeholder:text-neutral-400 focus:border-blue-300 focus:outline-none" />
                  <button type="button" className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-blue-700">Add</button>
                </div>
              </div>
              <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm">
                {contacts.map((c) => (
                  <div key={c.id} className="border-b border-neutral-100 last:border-0">
                    <button type="button" onClick={() => setExpandedContact(expandedContact === c.id ? null : c.id)} className="flex w-full items-center justify-between px-4 py-3 text-left transition hover:bg-neutral-50">
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-xs font-medium text-blue-700">{c.name.split(' ').map(w => w[0]).join('')}</div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="text-sm font-medium text-neutral-900">{c.name}</span>
                            {c.verified && <Shield className="h-3 w-3 text-blue-500" />}
                            <span className={`rounded-full px-1.5 py-0.5 text-[9px] font-medium ${typeColor[c.type]}`}>{c.type}</span>
                          </div>
                          <p className="text-xs text-neutral-500">{c.org}</p>
                        </div>
                      </div>
                      <ChevronRight className={`h-4 w-4 text-neutral-400 transition ${expandedContact === c.id ? 'rotate-90' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {expandedContact === c.id && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                          <div className="border-t border-neutral-100 bg-neutral-50/50 px-4 py-3">
                            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                              <div><p className="text-[10px] uppercase text-neutral-400">Role</p><p className="text-xs text-neutral-900">{c.role}</p></div>
                              <div><p className="text-[10px] uppercase text-neutral-400">Email</p><p className="text-xs text-neutral-700">{c.email}</p></div>
                              <div><p className="text-[10px] uppercase text-neutral-400">Conversions</p><p className="font-mono text-xs text-neutral-900">{c.conversions.toLocaleString()}</p></div>
                              <div><p className="text-[10px] uppercase text-neutral-400">Leads</p><p className="font-mono text-xs text-neutral-900">{c.leads.toLocaleString()}</p></div>
                              <div><p className="text-[10px] uppercase text-neutral-400">CTR</p><p className="font-mono text-xs text-neutral-900">{c.ctr}</p></div>
                              <div><p className="text-[10px] uppercase text-neutral-400">Ad Spend</p><p className="font-mono text-xs text-neutral-900">{c.spend}</p></div>
                            </div>
                            <div className="mt-3 flex gap-2">
                              <button type="button" className="rounded-lg border border-neutral-200 px-3 py-1.5 text-xs text-neutral-700 hover:bg-neutral-100">Message</button>
                              <button type="button" className="rounded-lg bg-blue-50 px-3 py-1.5 text-xs text-blue-700 hover:bg-blue-100">View Campaigns</button>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ━━━ FILES ━━━ */}
          {tab === 'files' && (
            <div>
              <div className="mb-4 flex items-center justify-between">
                <h1 className="font-serif text-xl text-neutral-900">Files</h1>
                <div className="flex items-center gap-2">
                  <button type="button" onClick={() => setDropboxConnected(!dropboxConnected)} className={`flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium transition ${dropboxConnected ? 'border-blue-200 bg-blue-50 text-blue-700' : 'border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50'}`}>
                    <Link2 className="h-3.5 w-3.5" />
                    {dropboxConnected ? 'Dropbox Connected' : 'Connect Dropbox'}
                  </button>
                  <button type="button" className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-blue-700"><Upload className="mr-1 inline h-3.5 w-3.5" /> Upload</button>
                </div>
              </div>
              {dropboxConnected && (
                <div className="mb-4 flex items-center gap-2 rounded-lg border border-blue-200 bg-blue-50 px-3 py-2 text-xs text-blue-700">
                  <Check className="h-4 w-4" />
                  <span>Synced with Dropbox · Last sync: 2 min ago</span>
                  <button type="button" className="ml-auto text-blue-500 hover:text-blue-700"><RefreshCw className="h-3.5 w-3.5" /></button>
                </div>
              )}
              <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm">
                <table className="w-full text-left text-sm">
                  <thead><tr className="border-b border-neutral-200 bg-neutral-50 text-xs uppercase text-neutral-400"><th className="px-4 py-2.5">Name</th><th className="px-4 py-2.5">Status</th><th className="px-4 py-2.5">Modified</th><th className="px-4 py-2.5">Size</th><th className="px-4 py-2.5" /></tr></thead>
                  <tbody>
                    {files.map((f) => (
                      <tr key={f.id} className="group border-b border-neutral-100 hover:bg-neutral-50">
                        <td className="px-4 py-2.5"><div className="flex items-center gap-2"><span>{f.icon}</span><span className="font-medium text-neutral-900">{f.name}</span><span className="text-[10px] text-neutral-400">{f.type}</span></div></td>
                        <td className="px-4 py-2.5"><span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${fStatus[f.status]}`}>{f.status}</span></td>
                        <td className="px-4 py-2.5 text-xs text-neutral-500">{f.mod}</td>
                        <td className="px-4 py-2.5 text-xs text-neutral-500">{f.size}</td>
                        <td className="px-4 py-2.5"><button type="button" className="rounded p-1 text-neutral-400 opacity-0 transition hover:bg-neutral-100 group-hover:opacity-100"><Download className="h-3.5 w-3.5" /></button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ━━━ UPLOAD ━━━ */}
          {tab === 'upload' && (
            <div className="mx-auto max-w-3xl space-y-5">
              <div className="flex items-center justify-center gap-0">
                {[{ n: 1, l: 'Format' }, { n: 2, l: 'Upload' }, { n: 3, l: 'Configure' }, { n: 4, l: 'Review' }].map(({ n, l }, i) => (
                  <div key={n} className="flex items-center">
                    <button type="button" onClick={() => setUploadStep(n)} className="flex items-center gap-1.5">
                      <div className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-medium ${uploadStep >= n ? 'bg-blue-600 text-white' : 'border border-neutral-300 bg-white text-neutral-400'}`}>{uploadStep > n ? <Check className="h-3.5 w-3.5" /> : n}</div>
                      <span className={`hidden text-xs sm:inline ${uploadStep >= n ? 'font-medium text-neutral-900' : 'text-neutral-400'}`}>{l}</span>
                    </button>
                    {i < 3 && <div className={`mx-2 h-px w-6 sm:w-12 ${uploadStep > n ? 'bg-blue-500' : 'bg-neutral-200'}`} />}
                  </div>
                ))}
              </div>

              {uploadStep === 1 && (
                <>
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {adFormats.map((f) => { const I = f.icon; const sel = uploadFormat === f.id; return (
                      <button key={f.id} type="button" onClick={() => setUploadFormat(f.id)} className={`rounded-xl border-2 p-3 text-center transition ${sel ? 'border-blue-500 bg-blue-50/50' : 'border-neutral-200 bg-white hover:border-neutral-300'}`}>
                        <div className={`mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-lg ${sel ? 'bg-blue-100' : 'bg-neutral-100'}`}><I className={`h-5 w-5 ${sel ? 'text-blue-600' : 'text-neutral-500'}`} /></div>
                        <p className={`text-xs font-medium ${sel ? 'text-blue-700' : 'text-neutral-900'}`}>{f.label}</p>
                        <p className="mt-0.5 text-[9px] text-neutral-400">{f.ext}</p>
                        <p className="text-[9px] text-neutral-400">Max {f.max}</p>
                      </button>
                    )})}
                  </div>
                  <div className="flex justify-end"><button type="button" onClick={() => setUploadStep(2)} className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700">Continue</button></div>
                </>
              )}

              {uploadStep === 2 && (
                <>
                  <div onClick={() => setUploadFiles([...uploadFiles, { name: `creative_${uploadFiles.length + 1}.png`, size: '2.4 MB' }])} onDragOver={(e) => { e.preventDefault(); setDragActive(true) }} onDragLeave={() => setDragActive(false)} onDrop={(e) => { e.preventDefault(); setDragActive(false); setUploadFiles([...uploadFiles, { name: `creative_${uploadFiles.length + 1}.png`, size: '2.4 MB' }]) }} className={`cursor-pointer rounded-xl border-2 border-dashed p-8 text-center transition ${dragActive ? 'border-blue-500 bg-blue-50' : 'border-neutral-300 bg-neutral-50/50 hover:border-blue-400'}`}>
                    <Upload className={`mx-auto h-8 w-8 ${dragActive ? 'text-blue-600' : 'text-neutral-400'}`} />
                    <p className="mt-2 text-sm text-neutral-700">{dragActive ? 'Drop here' : 'Click or drag files'}</p>
                  </div>
                  {uploadFiles.length > 0 && <div className="space-y-1.5">{uploadFiles.map((f, i) => (<div key={i} className="flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-3 py-2"><Image className="h-4 w-4 text-blue-600" /><span className="flex-1 text-xs text-neutral-900">{f.name}</span><span className="text-[10px] text-neutral-400">{f.size}</span><Check className="h-4 w-4 text-emerald-600" /><button type="button" onClick={() => setUploadFiles(uploadFiles.filter((_, j) => j !== i))} className="text-neutral-400 hover:text-neutral-700"><X className="h-3.5 w-3.5" /></button></div>))}</div>}
                  <div className="flex justify-between">
                    <button type="button" onClick={() => setUploadStep(1)} className="rounded-lg border border-neutral-200 px-5 py-2 text-sm text-neutral-700">Back</button>
                    <button type="button" onClick={() => setUploadStep(3)} disabled={!uploadFiles.length} className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-40">Continue</button>
                  </div>
                </>
              )}

              {uploadStep === 3 && (
                <>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-3 rounded-xl border border-neutral-200 bg-white p-4">
                      <h3 className="text-xs font-medium text-neutral-900">Ad Details</h3>
                      <input className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm focus:border-blue-300 focus:outline-none" placeholder="Ad Name" />
                      <input className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm focus:border-blue-300 focus:outline-none" placeholder="Headline" />
                      <textarea className="h-16 w-full resize-none rounded-lg border border-neutral-200 px-3 py-2 text-sm focus:border-blue-300 focus:outline-none" placeholder="Description…" />
                      <input className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm focus:border-blue-300 focus:outline-none" placeholder="https://…" />
                    </div>
                    <div className="space-y-3">
                      <div className="rounded-xl border border-neutral-200 bg-white p-4">
                        <h3 className="mb-2 text-xs font-medium text-neutral-900">Platforms</h3>
                        {['Meta / Facebook', 'Instagram', 'Google Display', 'LinkedIn'].map((p, i) => (
                          <label key={p} className="flex items-center gap-2 py-1 text-xs"><input type="checkbox" defaultChecked={i < 2} className="rounded border-neutral-300 text-blue-600" />{p}</label>
                        ))}
                      </div>
                      <div className="rounded-xl border border-neutral-200 bg-white p-4">
                        <h3 className="mb-2 text-xs font-medium text-neutral-900">Schedule & Budget</h3>
                        <div className="grid grid-cols-2 gap-2">
                          <div><label className="text-[10px] text-neutral-500">Start</label><input type="date" className="w-full rounded-lg border border-neutral-200 px-2 py-1.5 text-xs" /></div>
                          <div><label className="text-[10px] text-neutral-500">End</label><input type="date" className="w-full rounded-lg border border-neutral-200 px-2 py-1.5 text-xs" /></div>
                        </div>
                        <div className="mt-2"><label className="text-[10px] text-neutral-500">Daily USDC</label><input className="w-full rounded-lg border border-neutral-200 px-2 py-1.5 text-xs" placeholder="2,500" /></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <button type="button" onClick={() => setUploadStep(2)} className="rounded-lg border border-neutral-200 px-5 py-2 text-sm text-neutral-700">Back</button>
                    <button type="button" onClick={() => setUploadStep(4)} className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700">Continue</button>
                  </div>
                </>
              )}

              {uploadStep === 4 && (
                <>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-xl border border-neutral-200 bg-white p-4">
                      <h3 className="mb-2 text-xs font-medium text-neutral-900">Summary</h3>
                      {[['Format', adFormats.find(f => f.id === uploadFormat)?.label ?? ''], ['Files', `${uploadFiles.length}`], ['Platforms', 'Meta, Instagram'], ['Budget', '2,500 USDC/day']].map(([k, v]) => (
                        <div key={k} className="flex justify-between border-b border-neutral-100 py-1.5 text-xs last:border-0"><span className="text-neutral-500">{k}</span><span className="text-neutral-900">{v}</span></div>
                      ))}
                    </div>
                    <div className="rounded-xl border border-neutral-200 bg-white p-4">
                      <h3 className="mb-2 text-xs font-medium text-neutral-900">Compliance</h3>
                      {[{ l: 'Ad policy', s: true }, { l: 'Creative specs', s: true }, { l: 'CMS review', s: false }, { l: 'ZK verification', s: true }].map((c) => (
                        <div key={c.l} className="flex items-center justify-between py-1.5 text-xs"><span className="text-neutral-700">{c.l}</span>{c.s ? <Check className="h-4 w-4 text-emerald-600" /> : <AlertCircle className="h-4 w-4 text-amber-500" />}</div>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <button type="button" onClick={() => setUploadStep(3)} className="rounded-lg border border-neutral-200 px-5 py-2 text-sm text-neutral-700">Back</button>
                    <button type="button" className="rounded-lg bg-blue-600 px-6 py-2 text-sm font-medium text-white hover:bg-blue-700">Submit for Review</button>
                  </div>
                </>
              )}
            </div>
          )}

          {/* ━━━ BALANCE ━━━ */}
          {tab === 'balance' && (
            <div className="mx-auto max-w-2xl space-y-5">
              <h1 className="font-serif text-xl text-neutral-900">Balance & Ad Spend</h1>
              <div className="rounded-2xl border border-neutral-200 bg-white p-6 text-center shadow-sm">
                <p className="text-xs uppercase tracking-wider text-neutral-400">Available Balance</p>
                <p className="mt-2 font-mono text-4xl text-neutral-900">4,218.50 <span className="text-lg text-neutral-400">USDC</span></p>
                <div className="mt-1 flex items-center justify-center gap-1 text-xs text-emerald-600"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Connected</div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <button type="button" className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 text-sm font-medium text-white hover:bg-blue-700"><ArrowDownLeft className="h-4 w-4" /> Add Funds</button>
                <button type="button" className="flex items-center justify-center gap-2 rounded-xl border border-neutral-200 py-3 text-sm font-medium text-neutral-700 hover:bg-neutral-50"><ArrowUpRight className="h-4 w-4" /> Withdraw</button>
              </div>
              <div className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
                <h3 className="mb-3 text-xs font-medium text-neutral-900">Recent Transactions</h3>
                {[
                  { desc: 'Deposit — Circle', amt: '+2,000 USDC', date: 'Mar 30', type: 'in' },
                  { desc: 'Ad spend — Meta Q2', amt: '-420 USDC', date: 'Mar 29', type: 'out' },
                  { desc: 'Deposit — Coinbase', amt: '+5,000 USDC', date: 'Mar 25', type: 'in' },
                  { desc: 'Ad spend — Retargeting', amt: '-1,200 USDC', date: 'Mar 24', type: 'out' },
                ].map((tx) => (
                  <div key={tx.desc + tx.date} className="flex items-center justify-between border-b border-neutral-100 py-2.5 last:border-0">
                    <div className="flex items-center gap-2">
                      <div className={`flex h-7 w-7 items-center justify-center rounded-full ${tx.type === 'in' ? 'bg-emerald-50' : 'bg-red-50'}`}>
                        {tx.type === 'in' ? <ArrowDownLeft className="h-3.5 w-3.5 text-emerald-600" /> : <ArrowUpRight className="h-3.5 w-3.5 text-red-500" />}
                      </div>
                      <div><p className="text-xs text-neutral-900">{tx.desc}</p><p className="text-[10px] text-neutral-400">{tx.date}</p></div>
                    </div>
                    <span className={`font-mono text-xs ${tx.type === 'in' ? 'text-emerald-600' : 'text-red-500'}`}>{tx.amt}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>
      </div>

      {/* ── MODALS ──────────────────────────────────────────────── */}

      {/* Email Modal */}
      <AnimatePresence>
        {openEmail !== null && emailObj && (
          <>
            <motion.button type="button" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-neutral-900/30 backdrop-blur-sm" onClick={() => setOpenEmail(null)} aria-label="Close" />
            <motion.div initial={{ opacity: 0, y: 24, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 24, scale: 0.97 }} className="fixed inset-x-4 top-[10%] z-50 mx-auto flex max-h-[80vh] max-w-xl flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-2xl sm:inset-x-auto sm:w-full">
              <div className="flex items-center justify-between border-b border-neutral-200 px-5 py-3">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-xs font-medium text-blue-700">{emailObj.avatar}</div>
                  <div>
                    <div className="flex items-center gap-1.5"><span className="text-sm font-medium text-neutral-900">{emailObj.from}</span>{emailObj.verified && <Shield className="h-3 w-3 text-blue-500" />}</div>
                    <p className="text-[10px] text-neutral-400">{emailObj.t}</p>
                  </div>
                </div>
                <button type="button" onClick={() => setOpenEmail(null)} className="rounded-lg p-1.5 text-neutral-400 hover:bg-neutral-100"><X className="h-4 w-4" /></button>
              </div>
              <div className="flex-1 overflow-y-auto px-5 py-4">
                <h2 className="font-serif text-lg text-neutral-900">{emailObj.sub}</h2>
                <div className="mt-4 whitespace-pre-line text-sm leading-relaxed text-neutral-700">{emailObj.body}</div>
                {emailObj.attachments.length > 0 && (
                  <div className="mt-4 border-t border-neutral-100 pt-3">
                    <p className="mb-1.5 text-[10px] font-medium text-neutral-500">{emailObj.attachments.length} Attachment{emailObj.attachments.length > 1 ? 's' : ''}</p>
                    <div className="flex flex-wrap gap-1.5">{emailObj.attachments.map((a) => (<div key={a} className="flex items-center gap-1.5 rounded-lg border border-neutral-200 bg-neutral-50 px-2.5 py-1.5 text-[11px] text-neutral-700"><Paperclip className="h-3 w-3 text-neutral-400" />{a}</div>))}</div>
                  </div>
                )}
              </div>
              <div className="border-t border-neutral-200 px-5 py-3">
                <div className="relative">
                  <textarea value={replyText} onChange={(e) => { if (e.target.value.length <= MAX_CHARS) setReplyText(e.target.value) }} className="h-20 w-full resize-none rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-blue-300 focus:outline-none" placeholder="Write a reply…" />
                  <span className={`absolute bottom-2 right-2 text-[10px] ${replyText.length > MAX_CHARS * 0.9 ? 'text-red-500' : 'text-neutral-400'}`}>{replyText.length}/{MAX_CHARS}</span>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <div className="flex gap-1.5">
                    <button type="button" title="Attach file" className="rounded-lg p-1.5 text-neutral-400 hover:bg-neutral-100"><Paperclip className="h-4 w-4" /></button>
                    <button type="button" title="Reply" className="flex items-center gap-1 rounded-lg border border-neutral-200 px-2.5 py-1 text-xs text-neutral-600 hover:bg-neutral-50"><Reply className="h-3.5 w-3.5" /> Reply</button>
                    <button type="button" title="Forward" className="flex items-center gap-1 rounded-lg border border-neutral-200 px-2.5 py-1 text-xs text-neutral-600 hover:bg-neutral-50"><Forward className="h-3.5 w-3.5" /> Forward</button>
                  </div>
                  <button type="button" className="flex items-center gap-1.5 rounded-lg bg-blue-600 px-4 py-1.5 text-xs font-medium text-white hover:bg-blue-700"><Send className="h-3.5 w-3.5" /> Send</button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Compose Modal */}
      <AnimatePresence>
        {composing && (
          <>
            <motion.button type="button" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-neutral-900/20 backdrop-blur-sm" onClick={() => setComposing(false)} aria-label="Close" />
            <motion.div initial={{ opacity: 0, y: 40, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 40, scale: 0.95 }} className="fixed bottom-6 right-6 z-50 w-full max-w-md overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-2xl">
              <div className="flex items-center justify-between border-b border-neutral-200 bg-neutral-50 px-4 py-2.5"><h3 className="text-sm font-medium text-neutral-900">New Message</h3><button type="button" onClick={() => setComposing(false)} className="text-neutral-400 hover:text-neutral-700">✕</button></div>
              <input className="w-full border-b border-neutral-100 px-4 py-2 text-sm placeholder:text-neutral-400 focus:outline-none" placeholder="To:" />
              <input className="w-full border-b border-neutral-100 px-4 py-2 text-sm placeholder:text-neutral-400 focus:outline-none" placeholder="Subject:" />
              <textarea className="h-40 w-full resize-none px-4 py-2.5 text-sm placeholder:text-neutral-400 focus:outline-none" placeholder="Write your message…" maxLength={MAX_CHARS} />
              <div className="flex items-center justify-between border-t border-neutral-200 px-4 py-2.5">
                <button type="button" title="Attach file" className="rounded-lg p-1.5 text-neutral-400 hover:bg-neutral-100"><Paperclip className="h-4 w-4" /></button>
                <button type="button" className="flex items-center gap-1.5 rounded-lg bg-blue-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-blue-700"><Send className="h-3.5 w-3.5" /> Send</button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Logout Modal */}
      <AnimatePresence>
        {showLogout && (
          <>
            <motion.button type="button" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-neutral-900/30 backdrop-blur-sm" onClick={() => setShowLogout(false)} aria-label="Close" />
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="fixed left-1/2 top-1/2 z-50 w-full max-w-sm -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-neutral-200 bg-white p-6 shadow-2xl">
              <h3 className="font-serif text-lg text-neutral-900">Confirm Logout</h3>
              <p className="mt-2 text-sm text-neutral-500">Are you sure you want to sign out? You'll be redirected to the login page.</p>
              <div className="mt-6 flex gap-3">
                <button type="button" onClick={() => setShowLogout(false)} className="flex-1 rounded-lg border border-neutral-200 py-2.5 text-sm text-neutral-700 hover:bg-neutral-50">Cancel</button>
                <button type="button" onClick={doLogout} className="flex-1 rounded-lg bg-red-600 py-2.5 text-sm font-medium text-white hover:bg-red-700">Logout</button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
