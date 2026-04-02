'use client'

type PillarVariant = 'encrypted' | 'verified' | 'privacy'

export function PillarIllustration({ variant }: { variant: PillarVariant }) {
  const shell = 'w-full max-w-[250px] overflow-hidden rounded-xl border border-neutral-200 bg-neutral-50 shadow-sm'

  if (variant === 'encrypted') {
    return (
      <div className={shell} aria-hidden>
        <div className="flex items-center justify-between border-b border-neutral-200 bg-white px-2.5 py-2">
          <span className="font-mono text-[7px] uppercase tracking-[0.2em] text-neutral-500">Transmission</span>
          <span className="rounded bg-emerald-50 px-1.5 py-0.5 font-mono text-[7px] text-emerald-800">TLS</span>
        </div>
        <div className="min-h-[96px] space-y-1.5 p-2.5">
          <div className="h-2 rounded bg-neutral-200/80" />
          <div className="h-2 w-4/5 rounded bg-neutral-200/80" />
          <div className="rounded-md border border-neutral-200 bg-white px-2 py-1.5 font-mono text-[8px] leading-tight text-neutral-500">
            Encrypted payload
          </div>
        </div>
      </div>
    )
  }

  if (variant === 'verified') {
    return (
      <div className={shell} aria-hidden>
        <div className="flex items-center justify-between border-b border-neutral-200 bg-white px-2.5 py-2">
          <span className="font-mono text-[7px] uppercase tracking-[0.2em] text-neutral-500">Sourcing</span>
          <span className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-[7px] text-neutral-700">Verified</span>
        </div>
        <div className="min-h-[96px] space-y-2 p-2.5">
          <div className="rounded-md border border-neutral-200 bg-white p-2">
            <div className="h-2 w-3/5 rounded bg-neutral-200/80" />
            <div className="mt-1.5 h-1.5 w-2/5 rounded bg-emerald-200/80" />
          </div>
          <div className="h-px bg-neutral-200" />
          <div className="font-mono text-[8px] text-neutral-500">Identity match confirmed</div>
        </div>
      </div>
    )
  }

  return (
    <div className={shell} aria-hidden>
      <div className="flex items-center justify-between border-b border-neutral-200 bg-white px-2.5 py-2">
        <span className="font-mono text-[7px] uppercase tracking-[0.2em] text-neutral-500">Policy</span>
        <span className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-[7px] text-neutral-700">Private</span>
      </div>
      <div className="min-h-[96px] space-y-2 p-2.5">
        <div className="rounded-md border border-dashed border-neutral-200 bg-white px-2 py-1.5 font-mono text-[8px] text-neutral-500">
          No broker resale
        </div>
        <div className="h-1.5 w-4/5 rounded bg-neutral-200/80" />
        <div className="h-1.5 w-3/5 rounded bg-neutral-200/80" />
      </div>
    </div>
  )
}

export function PathIllustration({ variant }: { variant: string }) {
  const shell = 'w-full max-w-[250px] overflow-hidden rounded-xl border border-neutral-200 bg-neutral-50 shadow-sm'

  if (variant === 'users') {
    return (
      <div className={shell} aria-hidden>
        <div className="border-b border-neutral-200 bg-white px-2.5 py-2 font-mono text-[7px] uppercase tracking-[0.2em] text-neutral-500">
          Client
        </div>
        <div className="min-h-[108px] p-2.5">
          <div className="grid grid-cols-2 gap-1.5">
            <div className="h-8 rounded-md border border-neutral-200 bg-white" />
            <div className="h-8 rounded-md border border-neutral-200 bg-white" />
          </div>
          <div className="mt-2 rounded border border-emerald-100 bg-emerald-50 px-2 py-1 font-mono text-[8px] text-emerald-800">
            TLS session
          </div>
        </div>
      </div>
    )
  }

  if (variant === 'platform') {
    return (
      <div className={shell} aria-hidden>
        <div className="flex items-center justify-between border-b border-neutral-200 bg-white px-2.5 py-2">
          <span className="font-mono text-[7px] uppercase tracking-[0.2em] text-neutral-500">Enforcement</span>
          <span className="rounded bg-red-50 px-1.5 py-0.5 font-mono text-[7px] text-red-700">Policy</span>
        </div>
        <div className="min-h-[108px] space-y-1.5 p-2.5">
          <div className="flex items-center gap-1.5 rounded-md border border-neutral-200 bg-white px-2 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span className="font-mono text-[8px] text-neutral-600">SPF</span>
            <span className="ml-auto font-mono text-[7px] text-emerald-700">Pass</span>
          </div>
          <div className="flex items-center gap-1.5 rounded-md border border-neutral-200 bg-white px-2 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span className="font-mono text-[8px] text-neutral-600">DKIM</span>
            <span className="ml-auto font-mono text-[7px] text-emerald-700">Pass</span>
          </div>
          <div className="flex items-center gap-1.5 rounded-md border border-neutral-200 bg-white px-2 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span className="font-mono text-[8px] text-neutral-600">DMARC</span>
            <span className="ml-auto font-mono text-[7px] text-emerald-700">Enforce</span>
          </div>
        </div>
      </div>
    )
  }

  if (variant === 'delivery') {
    return (
      <div className={shell} aria-hidden>
        <div className="flex items-center justify-between border-b border-neutral-200 bg-white px-2.5 py-2">
          <span className="font-mono text-[7px] uppercase tracking-[0.2em] text-neutral-500">Delivery</span>
          <span className="rounded bg-emerald-50 px-1.5 py-0.5 font-mono text-[7px] text-emerald-800">TLS</span>
        </div>
        <div className="min-h-[108px] p-2.5">
          <div className="flex items-center justify-between gap-1.5">
            <div className="flex flex-col items-center">
              <div className="h-6 w-6 rounded-md border border-neutral-200 bg-white" />
              <span className="mt-1 font-mono text-[6px] text-neutral-400">Sender</span>
            </div>
            <div className="flex flex-1 items-center gap-0.5 px-1">
              <div className="h-px flex-1 bg-neutral-300" />
              <div className="rounded bg-blue-50 px-1 py-0.5 font-mono text-[6px] text-blue-700">FCM</div>
              <div className="h-px flex-1 bg-neutral-300" />
            </div>
            <div className="flex flex-col items-center">
              <div className="h-6 w-6 rounded-md border border-neutral-200 bg-white" />
              <span className="mt-1 font-mono text-[6px] text-neutral-400">Office</span>
            </div>
          </div>
          <div className="mt-2.5 space-y-1">
            <div className="flex items-center gap-1.5 rounded border border-emerald-100 bg-emerald-50 px-2 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span className="font-mono text-[7px] text-emerald-800">Encrypted transit</span>
            </div>
            <div className="flex items-center gap-1.5 rounded border border-neutral-200 bg-white px-2 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              <span className="font-mono text-[7px] text-neutral-600">Chain-of-custody logged</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={shell} aria-hidden>
      <div className="flex items-center justify-between border-b border-neutral-200 bg-white px-2.5 py-2">
        <span className="font-mono text-[7px] uppercase tracking-[0.2em] text-neutral-500">Archive</span>
        <span className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-[7px] text-neutral-700">Retained</span>
      </div>
      <div className="min-h-[108px] p-2.5">
        <div className="space-y-1.5">
          <div className="flex items-center gap-1.5 rounded-md border border-neutral-200 bg-white px-2 py-1.5">
            <div className="h-3 w-3 rounded-sm bg-neutral-200/80" />
            <div className="flex-1 space-y-1"><div className="h-1.5 w-3/4 rounded bg-neutral-200/80" /><div className="h-1 w-1/2 rounded bg-neutral-200/60" /></div>
          </div>
          <div className="flex items-center gap-1.5 rounded-md border border-neutral-200 bg-white px-2 py-1.5">
            <div className="h-3 w-3 rounded-sm bg-neutral-200/80" />
            <div className="flex-1 space-y-1"><div className="h-1.5 w-2/3 rounded bg-neutral-200/80" /><div className="h-1 w-2/5 rounded bg-neutral-200/60" /></div>
          </div>
        </div>
        <div className="mt-2 font-mono text-[8px] text-neutral-500">Audit-ready records</div>
      </div>
    </div>
  )
}
