'use client'

import { GlassCard } from '@/components/shared/GlassCard'
import { MetricSparkline } from '@/components/shared/MetricSparkline'

const accent: Record<string, string> = {
  blue: '#60a5fa',
  violet: '#a78bfa',
  teal: '#2dd4bf',
  green: '#4ade80',
}

export function KPICard({
  label,
  value,
  delta,
  tone,
}: {
  label: string
  value: string
  delta: string
  tone: 'blue' | 'violet' | 'teal' | 'green'
}) {
  return (
    <GlassCard hoverTilt className="relative overflow-hidden">
      <p className="text-xs font-medium uppercase tracking-wider text-neutral-500">{label}</p>
      <p className="mt-2 font-mono text-2xl text-white md:text-3xl">{value}</p>
      <p className="mt-1 text-xs text-emerald-400/90">{delta}</p>
      <div className="absolute bottom-3 right-3">
        <MetricSparkline color={accent[tone]} />
      </div>
    </GlassCard>
  )
}
