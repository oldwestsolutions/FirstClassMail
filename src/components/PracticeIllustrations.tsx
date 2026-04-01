'use client'

type PillarVariant = 'encrypted' | 'verified' | 'privacy'
type PathVariant = 'users' | 'platform' | 'office'

export function PillarIllustration({ variant }: { variant: PillarVariant }) {
  const shell = 'w-full max-w-[250px] overflow-hidden rounded-xl border border-neutral-200 bg-neutral-50 shadow-sm'

  if (variant === 'encrypted') {
    return (
      <div className={shell} aria-hidden>
        <div className="flex items-center justify-between border-b border-neutral-200 bg-white px-2.5 py-2">
          <span className="font-mono text-[7px] uppercase tracking-[0.2em] text-neutral-500">Transmission</span>
          <span className="rounded bg-emerald-50 px-1.5 py-0.5 font-mono text-[7px] text-emerald-800">TLS</span>
        </div>
          <div className="space-y-1.5 p-2.5">
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
        <div className="space-y-2 p-2.5">
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
      <div className="space-y-2 p-2.5">
        <div className="rounded-md border border-dashed border-neutral-200 bg-white px-2 py-1.5 font-mono text-[8px] text-neutral-500">
          No broker resale
        </div>
        <div className="h-1.5 w-4/5 rounded bg-neutral-200/80" />
        <div className="h-1.5 w-3/5 rounded bg-neutral-200/80" />
      </div>
    </div>
  )
}

export function PathIllustration({ variant }: { variant: PathVariant }) {
  const shell = 'w-full max-w-[250px] overflow-hidden rounded-xl border border-neutral-200 bg-neutral-50 shadow-sm'

  if (variant === 'users') {
    return (
      <div className={shell} aria-hidden>
        <div className="border-b border-neutral-200 bg-white px-2.5 py-2 font-mono text-[7px] uppercase tracking-[0.2em] text-neutral-500">
          Client
        </div>
        <div className="p-2.5">
          <div className="grid grid-cols-2 gap-1.5">
            <div className="h-8 rounded-md border border-neutral-200 bg-white" />
            <div className="h-8 rounded-md border border-neutral-200 bg-white" />
          </div>
          <div className="mt-2 rounded bg-emerald-50 px-2 py-1 font-mono text-[8px] text-emerald-800">TLS session</div>
        </div>
      </div>
    )
  }

  if (variant === 'platform') {
    return (
      <div className={shell} aria-hidden>
        <div className="border-b border-neutral-200 bg-white px-2.5 py-2 font-mono text-[7px] uppercase tracking-[0.2em] text-neutral-500">
          FirstClassMail.xyz
        </div>
        <div className="space-y-1.5 p-2.5">
          <div className="rounded-md border border-neutral-200 bg-white px-2 py-1.5 font-mono text-[8px] text-neutral-500">
            Authenticate
          </div>
          <div className="rounded-md border border-neutral-200 bg-white px-2 py-1.5 font-mono text-[8px] text-neutral-500">
            Verify
          </div>
          <div className="rounded-md border border-neutral-200 bg-white px-2 py-1.5 font-mono text-[8px] text-neutral-500">
            Route
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={shell} aria-hidden>
      <div className="border-b border-neutral-200 bg-white px-2.5 py-2 font-mono text-[7px] uppercase tracking-[0.2em] text-neutral-500">
        Office endpoint
      </div>
      <div className="p-2.5">
        <div className="h-8 rounded-md border border-neutral-200 bg-white" />
        <div className="mt-2 h-8 rounded-md border border-neutral-200 bg-white" />
        <div className="mt-2 font-mono text-[8px] text-neutral-500">Encrypted handoff</div>
      </div>
    </div>
  )
}
