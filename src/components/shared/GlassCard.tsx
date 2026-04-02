'use client'

import { motion } from 'framer-motion'
import { clsx } from 'clsx'

export function GlassCard({
  children,
  className,
  hoverTilt,
}: {
  children: React.ReactNode
  className?: string
  hoverTilt?: boolean
}) {
  const base = clsx(
    'rounded-2xl border border-neutral-200/90 bg-gradient-to-b from-white to-neutral-50/30 p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_28px_-10px_rgba(0,0,0,0.07)] transition-[border-color,box-shadow] duration-300',
    className
  )
  if (hoverTilt) {
    return (
      <motion.div
        whileHover={{ y: -3 }}
        transition={{ type: 'spring', stiffness: 420, damping: 28 }}
        className={clsx(base, '[@media(hover:hover)]:hover:border-neutral-300/90 [@media(hover:hover)]:hover:shadow-[0_4px_32px_-12px_rgba(0,0,0,0.1)]')}
      >
        {children}
      </motion.div>
    )
  }
  return <div className={base}>{children}</div>
}
