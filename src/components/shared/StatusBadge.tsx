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
        variant === 'success' && 'bg-emerald-500/20 text-emerald-300',
        variant === 'warning' && 'bg-amber-500/20 text-amber-200',
        variant === 'error' && 'bg-red-500/20 text-red-300',
        variant === 'teal' && 'bg-teal-500/20 text-teal-200',
        variant === 'neutral' && 'bg-white/10 text-neutral-300'
      )}
    >
      {children}
    </span>
  )
}
