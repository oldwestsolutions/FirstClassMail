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
    'rounded-2xl border border-white/10 bg-white/[0.05] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur-md',
    className
  )
  if (hoverTilt) {
    return (
      <motion.div whileHover={{ y: -3 }} transition={{ type: 'spring', stiffness: 420, damping: 28 }} className={base}>
        {children}
      </motion.div>
    )
  }
  return <div className={base}>{children}</div>
}
