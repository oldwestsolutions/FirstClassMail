import { clsx } from 'clsx'

export function StatusBadge({
  children,
  variant = 'neutral',
}: {
  children: React.ReactNode
  variant?: 'success' | 'warning' | 'error' | 'neutral' | 'teal'
}) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
        variant === 'success' && 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-600/20',
        variant === 'warning' && 'bg-amber-50 text-amber-700 ring-1 ring-amber-600/20',
        variant === 'error' && 'bg-red-50 text-red-700 ring-1 ring-red-600/20',
        variant === 'teal' && 'bg-teal-50 text-teal-700 ring-1 ring-teal-600/20',
        variant === 'neutral' && 'bg-neutral-100 text-neutral-600 ring-1 ring-neutral-300/50'
      )}
    >
      {children}
    </span>
  )
}
