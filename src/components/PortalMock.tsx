'use client'

import { CalendarClock, CheckCircle, FileText, Inbox, Mail, Send, Shield, Wallet } from 'lucide-react'

const shell =
  'overflow-hidden rounded-xl border border-neutral-200 bg-neutral-50 shadow-sm'

const panelShadow = 'shadow-[0_12px_40px_-14px_rgba(0,0,0,0.12)]'

/** Smaller mock-ups for Correspondence / Journey cards — same chrome as product preview */
export function PortalMockMini({ preset }: { preset: string }) {
  const base = `${shell} w-full max-w-[248px] text-left`

  switch (preset) {
    case 'encryption':
      return (
        <div className={`${base} flex min-h-[132px] flex-col`} aria-hidden>
          <div className="flex h-9 shrink-0 items-center justify-between gap-2 border-b border-neutral-200 bg-white px-2.5">
            <span className="flex min-w-0 items-center gap-1.5 font-mono text-[7px] uppercase tracking-widest text-neutral-500">
              <Mail className="h-3 w-3 shrink-0 text-neutral-700" strokeWidth={1.25} />
              Transmission
            </span>
            <span className="shrink-0 rounded-full bg-emerald-50 px-1.5 py-0.5 font-mono text-[7px] uppercase tracking-wider text-emerald-800">
              TLS
            </span>
          </div>
          <div className="flex min-h-[92px] flex-1 flex-col justify-between gap-2 p-2.5">
            <div className="rounded-md bg-white p-2 text-[9px] leading-snug text-neutral-600 ring-1 ring-neutral-100">
              <p className="font-mono text-[7px] uppercase tracking-wider text-neutral-400">In transit</p>
              <p className="mt-1 text-neutral-700">Payload encrypted; unreadable on the wire</p>
            </div>
            <div className="rounded-md border border-neutral-200 bg-white px-2 py-1.5 text-left font-mono text-[8px] leading-snug text-neutral-600">
              Encrypted payload
            </div>
          </div>
        </div>
      )
    case 'verified':
      return (
        <div className={`${base} flex min-h-[132px] flex-col`} aria-hidden>
          <div className="flex h-9 shrink-0 items-center justify-between gap-2 border-b border-neutral-200 bg-white px-2.5">
            <span className="font-mono text-[7px] uppercase tracking-widest text-neutral-500">Sourcing</span>
            <span className="shrink-0 rounded-full bg-neutral-100 px-1.5 py-0.5 font-mono text-[7px] uppercase tracking-wider text-neutral-700">
              Verified
            </span>
          </div>
          <div className="flex min-h-[92px] flex-1 flex-col justify-between gap-2 p-2.5">
            <div>
              <p className="font-serif text-[11px] leading-tight text-neutral-900">Riverside Legal</p>
              <p className="mt-1.5 flex items-center gap-1 text-[8px] text-emerald-700">
                <CheckCircle className="h-2.5 w-2.5 shrink-0" strokeWidth={1.5} />
                Identity match confirmed
              </p>
            </div>
            <p className="text-left font-mono text-[8px] leading-snug text-neutral-500">Intended recipient</p>
          </div>
        </div>
      )
    case 'no-brokerage':
      return (
        <div className={`${base} flex min-h-[132px] flex-col`} aria-hidden>
          <div className="flex h-9 shrink-0 items-center justify-between gap-2 border-b border-neutral-200 bg-white px-2.5">
            <span className="flex min-w-0 items-center gap-1.5 font-mono text-[7px] uppercase tracking-widest text-neutral-500">
              <Shield className="h-3 w-3 shrink-0 text-neutral-600" strokeWidth={1.25} />
              Policy
            </span>
            <span className="shrink-0 rounded-full bg-neutral-100 px-1.5 py-0.5 font-mono text-[7px] uppercase tracking-wider text-neutral-700">
              Private
            </span>
          </div>
          <div className="flex min-h-[92px] flex-1 flex-col justify-between gap-2 p-2.5">
            <span className="inline-block w-fit rounded-md border border-neutral-200 bg-white px-2 py-1 font-mono text-[8px] text-neutral-700">
              No broker resale
            </span>
            <p className="text-left text-[9px] leading-snug text-neutral-600">Addresses stay off marketing lists</p>
          </div>
        </div>
      )
    case 'forms':
      return (
        <div className={`${base} flex min-h-[132px] flex-col`} aria-hidden>
          <div className="flex h-9 shrink-0 items-center justify-between gap-2 border-b border-neutral-200 bg-white px-2.5">
            <span className="flex min-w-0 items-center gap-1.5 font-mono text-[7px] uppercase tracking-widest text-neutral-500">
              <FileText className="h-3 w-3 shrink-0 text-neutral-600" strokeWidth={1.25} />
              Forms
            </span>
            <span className="shrink-0 rounded bg-emerald-50 px-1.5 py-0.5 font-mono text-[7px] text-emerald-800">TLS</span>
          </div>
          <div className="flex min-h-[92px] flex-1 flex-col justify-between gap-2 p-2.5">
            <div className="space-y-1.5">
              <div className="h-1.5 rounded bg-neutral-200/90" />
              <div className="h-1.5 w-[92%] rounded bg-neutral-200/90" />
              <div className="h-1.5 w-3/4 rounded bg-neutral-200/90" />
            </div>
            <div className="rounded-md border border-neutral-200 bg-white px-2 py-1.5 text-left font-mono text-[8px] leading-snug text-neutral-600">
              Replies · one thread
            </div>
          </div>
        </div>
      )
    case 'edocuments':
      return (
        <div className={`${base} flex min-h-[132px] flex-col`} aria-hidden>
          <div className="flex h-9 shrink-0 items-center justify-between gap-2 border-b border-neutral-200 bg-white px-2.5">
            <span className="font-mono text-[8px] font-medium tracking-wide text-neutral-600">eDocuments</span>
            <span className="shrink-0 rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-[7px] text-neutral-700">PDF</span>
          </div>
          <div className="flex min-h-[92px] flex-1 flex-col justify-between gap-2 p-2.5">
            <div className="space-y-1.5">
              <div className="flex items-center gap-1.5 rounded border border-neutral-200 bg-white px-1.5 py-1">
                <div className="h-6 w-5 shrink-0 rounded-sm bg-neutral-200/80" />
                <div className="min-w-0 flex-1 space-y-1">
                  <div className="h-1.5 w-full rounded bg-neutral-200/90" />
                  <div className="h-1.5 w-2/3 rounded bg-neutral-200/80" />
                </div>
              </div>
            </div>
            <p className="text-left font-mono text-[8px] leading-snug text-neutral-500">Kept with the thread</p>
          </div>
        </div>
      )
    case 'stamps':
      return (
        <div className={`${base} flex min-h-[132px] flex-col`} aria-hidden>
          <div className="flex h-9 shrink-0 items-center justify-between gap-2 border-b border-neutral-200 bg-white px-2.5">
            <span className="flex min-w-0 items-center gap-1.5 font-mono text-[7px] uppercase tracking-widest text-neutral-500">
              <Mail className="h-3 w-3 shrink-0 text-neutral-700" strokeWidth={1.25} />
              Stamps
            </span>
            <span className="shrink-0 rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-[7px] text-neutral-700">Out</span>
          </div>
          <div className="flex min-h-[92px] flex-1 flex-col justify-between gap-2 p-2.5">
            <div className="rounded-md border border-dashed border-neutral-300 bg-white px-2 py-2 text-center">
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.15em] text-neutral-700">First-Class</p>
              <p className="mt-0.5 font-mono text-[7px] text-neutral-400">Postmark · applied</p>
            </div>
            <p className="text-left font-mono text-[8px] leading-snug text-neutral-500">Shows on send</p>
          </div>
        </div>
      )
    case 'mailbox':
      return (
        <div className={`${base} flex min-h-[132px] flex-col`} aria-hidden>
          <div className="flex h-9 shrink-0 items-center justify-between gap-2 border-b border-neutral-200 bg-white px-2.5">
            <span className="flex min-w-0 items-center gap-1.5 font-mono text-[7px] uppercase tracking-widest text-neutral-500">
              <Inbox className="h-3 w-3 shrink-0 text-neutral-600" strokeWidth={1.25} />
              Mailbox
            </span>
            <span className="shrink-0 rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-[7px] text-neutral-700">Inbox</span>
          </div>
          <div className="flex min-h-[92px] flex-1 flex-col justify-between gap-2 p-2.5">
            <div className="space-y-1.5">
              <div className="h-2 rounded bg-neutral-200/80" />
              <div className="h-2 w-4/5 rounded bg-neutral-200/80" />
            </div>
            <div className="rounded-md border border-neutral-200 bg-white px-2 py-1.5 text-left font-mono text-[8px] leading-snug text-neutral-600">
              <span className="text-neutral-400">Route · </span>
              Verified office thread
            </div>
          </div>
        </div>
      )
    case 'wallet':
      return (
        <div className={`${base} flex min-h-[132px] flex-col`} aria-hidden>
          <div className="flex h-9 shrink-0 items-center justify-between gap-2 border-b border-neutral-200 bg-white px-2.5">
            <span className="flex min-w-0 items-center gap-1.5 font-mono text-[7px] uppercase tracking-widest text-neutral-500">
              <Wallet className="h-3 w-3 shrink-0 text-neutral-700" strokeWidth={1.25} />
              Wallet
            </span>
            <span className="shrink-0 rounded bg-emerald-50 px-1.5 py-0.5 font-mono text-[7px] text-emerald-800">USDC</span>
          </div>
          <div className="flex min-h-[92px] flex-1 flex-col justify-between gap-2 p-2.5">
            <div className="flex items-baseline justify-between rounded-md border border-neutral-200 bg-white px-2 py-1.5">
              <span className="font-mono text-[8px] text-neutral-400">Balance</span>
              <span className="font-mono text-[10px] tabular-nums text-neutral-800">124.00</span>
            </div>
            <p className="text-left font-mono text-[8px] leading-snug text-neutral-500">Mailbox subscription · settled on-chain</p>
          </div>
        </div>
      )
    case 'calendar':
      return (
        <div className={`${base} flex min-h-[132px] flex-col`} aria-hidden>
          <div className="flex h-9 shrink-0 items-center justify-between gap-2 border-b border-neutral-200 bg-white px-2.5">
            <span className="flex min-w-0 items-center gap-1.5 font-mono text-[7px] uppercase tracking-widest text-neutral-500">
              <CalendarClock className="h-3 w-3 shrink-0 text-neutral-600" strokeWidth={1.25} />
              Calendar
            </span>
            <span className="shrink-0 rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-[7px] text-neutral-700">Week</span>
          </div>
          <div className="flex min-h-[92px] flex-1 flex-col justify-between gap-2 p-2.5">
            <div className="flex justify-between gap-0.5 font-mono text-[7px] text-neutral-400">
              {['M', 'T', 'W', 'T', 'F'].map((d, i) => (
                <span
                  key={i}
                  className={`flex h-5 w-5 shrink-0 items-center justify-center rounded ${i === 2 ? 'bg-neutral-900 text-white' : 'bg-neutral-100 text-neutral-500'}`}
                >
                  {d}
                </span>
              ))}
            </div>
            <div className="rounded-md border border-emerald-100 bg-emerald-50/80 px-2 py-1.5 text-left font-mono text-[8px] leading-snug text-emerald-900">
              Thu 2:00 · Confirmed in thread
            </div>
          </div>
        </div>
      )
    case 'journey-1':
      return (
        <div className={base} aria-hidden>
          <div className="border-b border-neutral-200 bg-white px-2.5 py-1.5">
            <span className="font-mono text-[7px] uppercase tracking-widest text-neutral-400">Encrypted</span>
          </div>
          <div className="p-2">
            <div className="flex gap-1">
              <span className="rounded bg-emerald-50 px-1 font-mono text-[7px] text-emerald-800">TLS</span>
              <span className="rounded bg-neutral-100 px-1 font-mono text-[7px] text-neutral-600">At rest</span>
            </div>
            <p className="mt-1.5 text-[9px] text-neutral-600">Ciphertext only—no clear payload on the wire</p>
          </div>
        </div>
      )
    case 'journey-2':
      return (
        <div className={base} aria-hidden>
          <div className="flex items-center justify-between border-b border-neutral-200 bg-white px-2.5 py-2">
            <span className="font-mono text-[7px] uppercase text-neutral-400">Sourcing</span>
            <CheckCircle className="h-3 w-3 text-emerald-600" strokeWidth={1.5} />
          </div>
          <div className="p-2.5 text-[9px] text-neutral-600">
            <p className="font-medium text-neutral-800">Intended recipient</p>
            <p className="mt-0.5">Verification before thread opens</p>
          </div>
        </div>
      )
    case 'journey-3':
      return (
        <div className={base} aria-hidden>
          <div className="border-b border-neutral-200 bg-white px-2.5 py-1.5 text-center">
            <span className="font-mono text-[7px] uppercase tracking-widest text-neutral-400">Intermediary</span>
          </div>
          <div className="flex items-center justify-center gap-1 py-2.5 text-[8px] text-neutral-600">
            <span className="rounded border border-neutral-200 bg-white px-1 py-0.5">You</span>
            <span className="text-neutral-300">—</span>
            <span className="rounded border border-neutral-900 bg-neutral-900 px-1 py-0.5 text-white">FCM</span>
            <span className="text-neutral-300">—</span>
            <span className="rounded border border-neutral-200 bg-white px-1 py-0.5">Office</span>
          </div>
        </div>
      )
    case 'journey-4':
      return (
        <div className={base} aria-hidden>
          <div className="flex items-center gap-2 border-b border-neutral-200 bg-white px-2.5 py-2">
            <Inbox className="h-3 w-3 text-neutral-600" strokeWidth={1.25} />
            <span className="font-mono text-[7px] uppercase tracking-widest text-neutral-400">Inbox</span>
          </div>
          <div className="p-2.5">
            <div className="rounded-md border border-neutral-200 bg-white p-2 text-[9px] text-neutral-700">
              <p className="font-mono text-[7px] uppercase text-neutral-400">Delivered</p>
              <p className="mt-0.5">Minimal exposure · footprint contained</p>
            </div>
          </div>
        </div>
      )
    default:
      return null
  }
}

function PortalThreadViewMock() {
  return (
    <div className={`${shell} ${panelShadow}`}>
      <div className="flex items-center justify-between gap-2 border-b border-neutral-200 bg-white px-2.5 py-2 sm:px-3">
        <div className="flex min-w-0 items-center gap-2">
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-neutral-200 bg-neutral-50">
            <Mail className="h-3.5 w-3.5 text-neutral-800" strokeWidth={1.25} />
          </div>
          <div className="min-w-0 text-left">
            <p className="truncate font-serif text-xs text-neutral-900">Client portal</p>
            <p className="truncate font-mono text-[9px] uppercase tracking-[0.2em] text-neutral-400">Preview</p>
          </div>
        </div>
        <div className="flex shrink-0 flex-wrap items-center justify-end gap-1.5">
          <span className="rounded-full bg-emerald-50 px-2 py-0.5 font-mono text-[8px] uppercase tracking-wider text-emerald-800">
            TLS
          </span>
          <span className="rounded-full bg-neutral-100 px-2 py-0.5 font-mono text-[8px] uppercase tracking-wider text-neutral-700">
            Verified thread
          </span>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row sm:min-h-[200px]">
        <nav
          className="flex w-full border-b border-neutral-200 bg-white sm:w-[7.25rem] sm:shrink-0 sm:border-b-0 sm:border-r"
          aria-label="Thread view mailbox navigation"
        >
          <div className="flex w-full gap-1 p-2 sm:flex-col sm:gap-0">
            <p className="hidden pb-1.5 font-mono text-[8px] uppercase tracking-widest text-neutral-400 sm:block">Mailboxes</p>
            <div className="flex flex-1 items-center rounded-md bg-neutral-100 px-2 py-2 text-left text-[11px] font-medium text-neutral-900 sm:flex-none">
              <Inbox className="mr-1.5 h-3.5 w-3.5 shrink-0 opacity-70" strokeWidth={1.25} aria-hidden />
              Inbox
            </div>
            <div className="flex flex-1 items-center rounded-md px-2 py-2 text-left text-[11px] text-neutral-500 sm:flex-none">
              <Send className="mr-1.5 h-3.5 w-3.5 shrink-0 opacity-70" strokeWidth={1.25} aria-hidden />
              Sent
            </div>
          </div>
        </nav>
        <div className="flex min-w-0 flex-1 flex-col bg-white p-2.5 sm:p-3">
          <div className="border-b border-neutral-100 pb-2.5 text-left">
            <p className="font-serif text-sm text-neutral-900 sm:text-base">Riverside Legal</p>
            <p className="mt-0.5 text-[10px] text-neutral-500 sm:text-[11px]">Recipient verified · Routed to office mail server</p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              <span className="inline-flex items-center gap-1 rounded border border-neutral-200 bg-neutral-50 px-1.5 py-0.5 text-[8px] text-neutral-600 sm:text-[9px]">
                <Shield className="h-2.5 w-2.5 text-neutral-500" strokeWidth={1.5} aria-hidden />
                End-to-end policy
              </span>
              <span className="inline-flex items-center gap-1 rounded border border-neutral-200 bg-neutral-50 px-1.5 py-0.5 text-[8px] text-neutral-600 sm:text-[9px]">
                <CheckCircle className="h-2.5 w-2.5 text-emerald-600" strokeWidth={1.5} aria-hidden />
                Sourcing checked
              </span>
            </div>
          </div>
          <div className="mt-2.5 flex flex-1 flex-col gap-2 text-left">
            <div className="rounded-lg bg-neutral-50 p-2 text-[11px] text-neutral-700 sm:p-2.5 sm:text-xs">
              <p className="mb-1 font-mono text-[8px] uppercase tracking-wider text-neutral-400 sm:text-[9px]">You · encrypted</p>
              <p className="leading-relaxed">Following up on the filing timeline we discussed last week.</p>
            </div>
            <div className="rounded-lg border border-neutral-200 p-2 text-[11px] text-neutral-700 sm:p-2.5 sm:text-xs">
              <p className="mb-1 font-mono text-[8px] uppercase tracking-wider text-neutral-400 sm:text-[9px]">Office · delivered</p>
              <p className="leading-relaxed">We can confirm receipt on our side. Next steps are in the attachment.</p>
            </div>
          </div>
          <div className="mt-3 flex items-end gap-2 rounded-xl border border-dashed border-neutral-200 bg-neutral-50/80 p-2">
            <div className="min-h-[34px] flex-1 rounded-lg border border-neutral-200 bg-white px-2 py-1.5 text-[11px] text-neutral-400 sm:min-h-[36px] sm:px-2.5 sm:py-2 sm:text-xs">
              Write a reply…
            </div>
            <span className="btn btn-primary pointer-events-none shrink-0 px-2.5 py-2 text-[8px] uppercase tracking-widest opacity-90 sm:px-3 sm:text-[9px]">
              Send
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

function PortalSentViewMock() {
  return (
    <div className={`${shell} ${panelShadow}`}>
      <div className="flex items-center justify-between gap-2 border-b border-neutral-200 bg-white px-2.5 py-2 sm:px-3">
        <div className="flex min-w-0 items-center gap-2">
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-neutral-200 bg-neutral-50">
            <Mail className="h-3.5 w-3.5 text-neutral-800" strokeWidth={1.25} />
          </div>
          <div className="min-w-0 text-left">
            <p className="truncate font-serif text-xs text-neutral-900">Client portal</p>
            <p className="truncate font-mono text-[9px] uppercase tracking-[0.2em] text-neutral-400">Preview</p>
          </div>
        </div>
        <div className="flex shrink-0 flex-wrap items-center justify-end gap-1.5">
          <span className="rounded-full bg-emerald-50 px-2 py-0.5 font-mono text-[8px] uppercase tracking-wider text-emerald-800">
            TLS
          </span>
          <span className="rounded-full bg-neutral-100 px-2 py-0.5 font-mono text-[8px] uppercase tracking-wider text-neutral-700">
            Outbound
          </span>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row sm:min-h-[200px]">
        <nav
          className="flex w-full border-b border-neutral-200 bg-white sm:w-[7.25rem] sm:shrink-0 sm:border-b-0 sm:border-r"
          aria-label="Sent view mailbox navigation"
        >
          <div className="flex w-full gap-1 p-2 sm:flex-col sm:gap-0">
            <p className="hidden pb-1.5 font-mono text-[8px] uppercase tracking-widest text-neutral-400 sm:block">Mailboxes</p>
            <div className="flex flex-1 items-center rounded-md px-2 py-2 text-left text-[11px] text-neutral-500 sm:flex-none">
              <Inbox className="mr-1.5 h-3.5 w-3.5 shrink-0 opacity-70" strokeWidth={1.25} aria-hidden />
              Inbox
            </div>
            <div className="flex flex-1 items-center rounded-md bg-neutral-100 px-2 py-2 text-left text-[11px] font-medium text-neutral-900 sm:flex-none">
              <Send className="mr-1.5 h-3.5 w-3.5 shrink-0 opacity-70" strokeWidth={1.25} aria-hidden />
              Sent
            </div>
          </div>
        </nav>
        <div className="flex min-w-0 flex-1 flex-col bg-white p-2.5 sm:p-3">
          <div className="border-b border-neutral-100 pb-2.5 text-left">
            <p className="font-serif text-sm text-neutral-900 sm:text-base">Summit Accounting</p>
            <p className="mt-0.5 text-[10px] text-neutral-500 sm:text-[11px]">Sent · TLS to office endpoint</p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              <span className="inline-flex items-center gap-1 rounded border border-neutral-200 bg-neutral-50 px-1.5 py-0.5 text-[8px] text-neutral-600 sm:text-[9px]">
                <Send className="h-2.5 w-2.5 text-neutral-500" strokeWidth={1.5} aria-hidden />
                Outbound only
              </span>
              <span className="inline-flex items-center gap-1 rounded border border-neutral-200 bg-neutral-50 px-1.5 py-0.5 text-[8px] text-neutral-600 sm:text-[9px]">
                <CheckCircle className="h-2.5 w-2.5 text-emerald-600" strokeWidth={1.5} aria-hidden />
                Queued then released
              </span>
            </div>
          </div>
          <div className="mt-2.5 flex flex-1 flex-col gap-2 text-left">
            <div className="rounded-lg border border-neutral-200 bg-white p-2 text-[11px] text-neutral-700 sm:p-2.5 sm:text-xs">
              <p className="mb-1 font-mono text-[8px] uppercase tracking-wider text-neutral-400 sm:text-[9px]">You · sent</p>
              <p className="leading-relaxed">Please find the revised engagement letter attached for countersignature.</p>
            </div>
            <div className="rounded-lg bg-neutral-50 p-2 text-[11px] text-neutral-600 sm:p-2.5 sm:text-xs">
              <p className="mb-1 font-mono text-[8px] uppercase tracking-wider text-neutral-400 sm:text-[9px]">Status</p>
              <p className="leading-relaxed">Delivered to verified office mail server · no broker handoff</p>
            </div>
          </div>
          <div className="mt-3 flex items-end gap-2 rounded-xl border border-dashed border-neutral-200 bg-neutral-50/80 p-2">
            <div className="min-h-[34px] flex-1 rounded-lg border border-neutral-200 bg-white px-2 py-1.5 text-[11px] text-neutral-400 sm:min-h-[36px] sm:px-2.5 sm:py-2 sm:text-xs">
              New message…
            </div>
            <span className="btn btn-primary pointer-events-none shrink-0 px-2.5 py-2 text-[8px] uppercase tracking-widest opacity-90 sm:px-3 sm:text-[9px]">
              Send
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

/** Client portal demo: thread + sent mocks side by side — section copy lives in page */
export function PortalProductDemo() {
  return (
    <div className="mx-auto w-full max-w-6xl">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-6 xl:gap-8">
        <div className="min-w-0">
          <p className="mb-3 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">Thread view</p>
          <PortalThreadViewMock />
        </div>
        <div className="min-w-0">
          <p className="mb-3 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">Sent view</p>
          <PortalSentViewMock />
        </div>
      </div>
    </div>
  )
}
