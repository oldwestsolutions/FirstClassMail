'use client'

import { useState } from 'react'
import { Upload, X, Image, FileVideo, FileText, Check, AlertCircle, ChevronDown, Monitor, Smartphone, Square } from 'lucide-react'
import { CampaignShell } from '@/components/campaign/CampaignShell'
import { GlassCard } from '@/components/shared/GlassCard'
import { motion } from 'framer-motion'

const adFormats = [
  { id: 'static', label: 'Static Image', desc: 'Single image ad — JPEG, PNG, WebP', icon: Image, formats: '.jpg, .png, .webp', maxSize: '30 MB' },
  { id: 'video', label: 'Video Ad', desc: 'Video content — MP4, MOV, WebM', icon: FileVideo, formats: '.mp4, .mov, .webm', maxSize: '1 GB' },
  { id: 'carousel', label: 'Carousel', desc: 'Multi-image slideshow — up to 10 slides', icon: Square, formats: '.jpg, .png', maxSize: '30 MB per slide' },
  { id: 'document', label: 'Document Ad', desc: 'PDF or interactive document', icon: FileText, formats: '.pdf, .html', maxSize: '100 MB' },
]

const platforms = [
  { id: 'meta', label: 'Meta / Facebook', checked: true },
  { id: 'instagram', label: 'Instagram', checked: true },
  { id: 'audience', label: 'Audience Network', checked: false },
  { id: 'google', label: 'Google Display', checked: false },
  { id: 'linkedin', label: 'LinkedIn', checked: false },
  { id: 'directmail', label: 'Direct Mail', checked: false },
]

const previousUploads = [
  { name: 'Carousel A — MAPD Spring', type: 'Carousel', size: '12.4 MB', status: 'Approved', date: 'Mar 30' },
  { name: 'Static hero B — D-SNP Education', type: 'Static Image', size: '2.1 MB', status: 'In Review', date: 'Mar 29' },
  { name: 'Video 15s C — Retargeting', type: 'Video Ad', size: '84.2 MB', status: 'Approved', date: 'Mar 28' },
  { name: 'Document — Medicare Guide', type: 'Document Ad', size: '5.8 MB', status: 'Approved', date: 'Mar 27' },
]

export default function CampaignUploadPage() {
  const [selectedFormat, setSelectedFormat] = useState('static')
  const [dragActive, setDragActive] = useState(false)
  const [files, setFiles] = useState<{ name: string; size: string; progress: number }[]>([])
  const [step, setStep] = useState(1)

  const addMockFile = () => {
    setFiles([
      ...files,
      { name: `ad_creative_${files.length + 1}.png`, size: '2.4 MB', progress: 100 },
    ])
  }

  return (
    <CampaignShell title="Upload">
      <div className="mx-auto max-w-5xl space-y-8">
        {/* Progress Steps */}
        <div className="flex items-center justify-center gap-0">
          {[
            { n: 1, label: 'Select Format' },
            { n: 2, label: 'Upload Creative' },
            { n: 3, label: 'Configure' },
            { n: 4, label: 'Review & Submit' },
          ].map(({ n, label }, i) => (
            <div key={n} className="flex items-center">
              <button
                type="button"
                onClick={() => setStep(n)}
                className="flex items-center gap-2"
              >
                <div className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium transition ${
                  step >= n
                    ? 'bg-blue-600 text-white'
                    : 'border border-neutral-300 bg-white text-neutral-400'
                }`}>
                  {step > n ? <Check className="h-4 w-4" /> : n}
                </div>
                <span className={`hidden text-sm sm:inline ${step >= n ? 'text-neutral-900 font-medium' : 'text-neutral-400'}`}>
                  {label}
                </span>
              </button>
              {i < 3 && (
                <div className={`mx-3 h-px w-8 sm:w-16 ${step > n ? 'bg-blue-500' : 'bg-neutral-200'}`} />
              )}
            </div>
          ))}
        </div>

        {/* Step 1: Format Selection */}
        {step === 1 && (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
            <h2 className="mb-2 font-serif text-xl text-neutral-900">Choose Ad Format</h2>
            <p className="mb-6 text-sm text-neutral-500">Select the type of advertisement you want to upload.</p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {adFormats.map((f) => {
                const Icon = f.icon
                const selected = selectedFormat === f.id
                return (
                  <button
                    key={f.id}
                    type="button"
                    onClick={() => setSelectedFormat(f.id)}
                    className={`rounded-2xl border-2 p-5 text-left transition ${
                      selected
                        ? 'border-blue-500 bg-blue-50/50 shadow-sm'
                        : 'border-neutral-200 bg-white hover:border-neutral-300 hover:shadow-sm'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                        selected ? 'bg-blue-100' : 'bg-neutral-100'
                      }`}>
                        <Icon className={`h-5 w-5 ${selected ? 'text-blue-600' : 'text-neutral-500'}`} strokeWidth={1.5} />
                      </div>
                      <div className="flex-1">
                        <p className={`font-medium ${selected ? 'text-blue-700' : 'text-neutral-900'}`}>{f.label}</p>
                        <p className="mt-0.5 text-xs text-neutral-500">{f.desc}</p>
                        <div className="mt-2 flex gap-3 text-[10px] text-neutral-400">
                          <span>Formats: {f.formats}</span>
                          <span>Max: {f.maxSize}</span>
                        </div>
                      </div>
                      {selected && (
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600">
                          <Check className="h-3.5 w-3.5 text-white" />
                        </div>
                      )}
                    </div>
                  </button>
                )
              })}
            </div>
            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="rounded-xl bg-blue-600 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
              >
                Continue
              </button>
            </div>
          </motion.div>
        )}

        {/* Step 2: Upload */}
        {step === 2 && (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
            <h2 className="mb-2 font-serif text-xl text-neutral-900">Upload Creative Files</h2>
            <p className="mb-6 text-sm text-neutral-500">
              Drag and drop your files or click to browse. {adFormats.find(f => f.id === selectedFormat)?.desc}
            </p>

            <div
              onDragOver={(e) => { e.preventDefault(); setDragActive(true) }}
              onDragLeave={() => setDragActive(false)}
              onDrop={(e) => { e.preventDefault(); setDragActive(false); addMockFile() }}
              onClick={addMockFile}
              className={`group cursor-pointer rounded-2xl border-2 border-dashed p-12 text-center transition ${
                dragActive
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-neutral-300 bg-neutral-50/50 hover:border-blue-400 hover:bg-blue-50/30'
              }`}
            >
              <div className="flex flex-col items-center">
                <div className={`mb-4 flex h-16 w-16 items-center justify-center rounded-2xl transition ${
                  dragActive ? 'bg-blue-100' : 'bg-white shadow-sm group-hover:bg-blue-50'
                }`}>
                  <Upload className={`h-7 w-7 ${dragActive ? 'text-blue-600' : 'text-neutral-400 group-hover:text-blue-500'}`} strokeWidth={1.5} />
                </div>
                <p className="text-sm font-medium text-neutral-700">
                  {dragActive ? 'Drop files here' : 'Click to upload or drag and drop'}
                </p>
                <p className="mt-1 text-xs text-neutral-400">
                  {adFormats.find(f => f.id === selectedFormat)?.formats} · Max {adFormats.find(f => f.id === selectedFormat)?.maxSize}
                </p>
              </div>
            </div>

            {files.length > 0 && (
              <div className="mt-4 space-y-2">
                {files.map((f, i) => (
                  <div key={i} className="flex items-center gap-3 rounded-xl border border-neutral-200 bg-white px-4 py-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50">
                      <Image className="h-5 w-5 text-blue-600" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="truncate text-sm font-medium text-neutral-900">{f.name}</p>
                      <p className="text-xs text-neutral-400">{f.size}</p>
                    </div>
                    {f.progress === 100 ? (
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100">
                        <Check className="h-3.5 w-3.5 text-emerald-600" />
                      </div>
                    ) : (
                      <div className="h-6 w-6 animate-spin rounded-full border-2 border-neutral-200 border-t-blue-600" />
                    )}
                    <button
                      type="button"
                      onClick={() => setFiles(files.filter((_, j) => j !== i))}
                      className="rounded p-1 text-neutral-400 hover:bg-neutral-100 hover:text-neutral-600"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-6 flex justify-between">
              <button type="button" onClick={() => setStep(1)} className="rounded-xl border border-neutral-200 px-6 py-2.5 text-sm text-neutral-700 hover:bg-neutral-50">
                Back
              </button>
              <button
                type="button"
                onClick={() => setStep(3)}
                disabled={files.length === 0}
                className="rounded-xl bg-blue-600 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700 disabled:opacity-40"
              >
                Continue
              </button>
            </div>
          </motion.div>
        )}

        {/* Step 3: Configure */}
        {step === 3 && (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
            <h2 className="mb-2 font-serif text-xl text-neutral-900">Configure Advertisement</h2>
            <p className="mb-6 text-sm text-neutral-500">Set up targeting, scheduling, and campaign details for your ad.</p>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <GlassCard>
                <h3 className="mb-4 text-sm font-medium text-neutral-900">Ad Details</h3>
                <div className="space-y-4">
                  <div>
                    <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-neutral-500">Ad Name</label>
                    <input className="w-full rounded-xl border border-neutral-200 bg-white px-3 py-2.5 text-sm text-neutral-900 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-100" placeholder="e.g., MAPD Spring Awareness" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-neutral-500">Campaign</label>
                    <div className="relative">
                      <select className="w-full appearance-none rounded-xl border border-neutral-200 bg-white px-3 py-2.5 pr-8 text-sm text-neutral-900 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-100">
                        <option>Select campaign…</option>
                        <option>MAPD Spring Awareness</option>
                        <option>D-SNP Education</option>
                        <option>Retargeting — Cart Abandonment</option>
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-neutral-500">Headline</label>
                    <input className="w-full rounded-xl border border-neutral-200 bg-white px-3 py-2.5 text-sm text-neutral-900 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-100" placeholder="Main headline text" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-neutral-500">Description</label>
                    <textarea className="h-20 w-full resize-none rounded-xl border border-neutral-200 bg-white px-3 py-2.5 text-sm text-neutral-900 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-100" placeholder="Ad description or body text…" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-neutral-500">Call to Action</label>
                    <div className="relative">
                      <select className="w-full appearance-none rounded-xl border border-neutral-200 bg-white px-3 py-2.5 pr-8 text-sm text-neutral-900 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-100">
                        <option>Learn More</option>
                        <option>Sign Up</option>
                        <option>Get Quote</option>
                        <option>Shop Now</option>
                        <option>Contact Us</option>
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-neutral-500">Destination URL</label>
                    <input className="w-full rounded-xl border border-neutral-200 bg-white px-3 py-2.5 text-sm text-neutral-900 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-100" placeholder="https://…" />
                  </div>
                </div>
              </GlassCard>

              <div className="space-y-6">
                <GlassCard>
                  <h3 className="mb-4 text-sm font-medium text-neutral-900">Target Platforms</h3>
                  <div className="space-y-2">
                    {platforms.map((p) => (
                      <label key={p.id} className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition hover:bg-neutral-50">
                        <input
                          type="checkbox"
                          defaultChecked={p.checked}
                          className="rounded border-neutral-300 text-blue-600 focus:ring-blue-200"
                        />
                        <span className="text-neutral-700">{p.label}</span>
                      </label>
                    ))}
                  </div>
                </GlassCard>

                <GlassCard>
                  <h3 className="mb-4 text-sm font-medium text-neutral-900">Preview</h3>
                  <div className="flex gap-2 mb-3">
                    {[
                      { icon: Monitor, label: 'Desktop' },
                      { icon: Smartphone, label: 'Mobile' },
                    ].map(({ icon: Icon, label }) => (
                      <button key={label} type="button" className="flex items-center gap-1.5 rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-xs text-neutral-600 transition hover:bg-neutral-100">
                        <Icon className="h-3.5 w-3.5" />
                        {label}
                      </button>
                    ))}
                  </div>
                  <div className="flex aspect-[16/9] items-center justify-center rounded-xl border border-neutral-200 bg-neutral-50">
                    <div className="text-center">
                      <Image className="mx-auto h-8 w-8 text-neutral-300" strokeWidth={1} />
                      <p className="mt-2 text-xs text-neutral-400">Ad preview will appear here</p>
                    </div>
                  </div>
                </GlassCard>

                <GlassCard>
                  <h3 className="mb-4 text-sm font-medium text-neutral-900">Schedule</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="mb-1 block text-xs text-neutral-500">Start Date</label>
                      <input type="date" className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-900 focus:border-blue-300 focus:outline-none" />
                    </div>
                    <div>
                      <label className="mb-1 block text-xs text-neutral-500">End Date</label>
                      <input type="date" className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-900 focus:border-blue-300 focus:outline-none" />
                    </div>
                  </div>
                  <div className="mt-3">
                    <label className="mb-1 block text-xs text-neutral-500">Daily Budget (USDC)</label>
                    <input className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-900 focus:border-blue-300 focus:outline-none" placeholder="e.g., 2,500" />
                  </div>
                </GlassCard>
              </div>
            </div>

            <div className="mt-6 flex justify-between">
              <button type="button" onClick={() => setStep(2)} className="rounded-xl border border-neutral-200 px-6 py-2.5 text-sm text-neutral-700 hover:bg-neutral-50">
                Back
              </button>
              <button type="button" onClick={() => setStep(4)} className="rounded-xl bg-blue-600 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700">
                Continue
              </button>
            </div>
          </motion.div>
        )}

        {/* Step 4: Review */}
        {step === 4 && (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
            <h2 className="mb-2 font-serif text-xl text-neutral-900">Review &amp; Submit</h2>
            <p className="mb-6 text-sm text-neutral-500">Review your advertisement before submitting for compliance review.</p>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <GlassCard>
                <h3 className="mb-3 text-sm font-medium text-neutral-900">Summary</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between border-b border-neutral-100 pb-2">
                    <span className="text-neutral-500">Format</span>
                    <span className="text-neutral-900">{adFormats.find(f => f.id === selectedFormat)?.label}</span>
                  </div>
                  <div className="flex justify-between border-b border-neutral-100 pb-2">
                    <span className="text-neutral-500">Files</span>
                    <span className="text-neutral-900">{files.length} file{files.length !== 1 ? 's' : ''}</span>
                  </div>
                  <div className="flex justify-between border-b border-neutral-100 pb-2">
                    <span className="text-neutral-500">Platforms</span>
                    <span className="text-neutral-900">Meta, Instagram</span>
                  </div>
                  <div className="flex justify-between border-b border-neutral-100 pb-2">
                    <span className="text-neutral-500">Estimated spend</span>
                    <span className="font-mono text-neutral-900">2,500 USDC/day</span>
                  </div>
                </div>
              </GlassCard>

              <GlassCard>
                <h3 className="mb-3 text-sm font-medium text-neutral-900">Compliance Check</h3>
                <div className="space-y-3">
                  {[
                    { label: 'Ad policy compliance', status: 'pass' },
                    { label: 'Creative specifications', status: 'pass' },
                    { label: 'CMS review required', status: 'pending' },
                    { label: 'ZK audience verification', status: 'pass' },
                  ].map((c) => (
                    <div key={c.label} className="flex items-center justify-between rounded-lg border border-neutral-100 bg-neutral-50/50 px-3 py-2.5">
                      <span className="text-sm text-neutral-700">{c.label}</span>
                      {c.status === 'pass' ? (
                        <div className="flex items-center gap-1 text-emerald-600">
                          <Check className="h-4 w-4" />
                          <span className="text-xs">Pass</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-1 text-amber-500">
                          <AlertCircle className="h-4 w-4" />
                          <span className="text-xs">Pending</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>

            <div className="mt-6 flex justify-between">
              <button type="button" onClick={() => setStep(3)} className="rounded-xl border border-neutral-200 px-6 py-2.5 text-sm text-neutral-700 hover:bg-neutral-50">
                Back
              </button>
              <button type="button" className="rounded-xl bg-blue-600 px-8 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700">
                Submit for Review
              </button>
            </div>
          </motion.div>
        )}

        {/* Previous Uploads */}
        <GlassCard>
          <h3 className="mb-4 font-serif text-lg text-neutral-900">Previous Uploads</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-neutral-200 text-xs uppercase text-neutral-400">
                  <th className="pb-3 font-medium">Name</th>
                  <th className="pb-3 font-medium">Type</th>
                  <th className="pb-3 font-medium">Size</th>
                  <th className="pb-3 font-medium">Status</th>
                  <th className="pb-3 font-medium">Date</th>
                </tr>
              </thead>
              <tbody>
                {previousUploads.map((u) => (
                  <tr key={u.name} className="border-b border-neutral-100">
                    <td className="py-3 font-medium text-neutral-900">{u.name}</td>
                    <td className="py-3 text-neutral-600">{u.type}</td>
                    <td className="py-3 text-neutral-500">{u.size}</td>
                    <td className="py-3">
                      <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${
                        u.status === 'Approved' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                      }`}>
                        {u.status}
                      </span>
                    </td>
                    <td className="py-3 text-neutral-500">{u.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </GlassCard>
      </div>
    </CampaignShell>
  )
}
