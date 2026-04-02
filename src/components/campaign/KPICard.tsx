'use client'

import { GlassCard } from '@/components/shared/GlassCard'
import { MetricSparkline } from '@/components/shared/MetricSparkline'

const accent: Record<string, string> = {
  blue: '#1d4ed8',
  violet: '#7c3aed',
  teal: '#0d9488',
  green: '#15803d',
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
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">{label}</p>
      <p className="mt-2 font-mono text-2xl text-neutral-900 md:text-3xl">{value}</p>
      <p className="mt-1 text-xs font-medium text-emerald-600">{delta}</p>
      <div className="absolute bottom-3 right-3">
        <MetricSparkline color={accent[tone]} />
      </div>
    </GlassCard>
  )
}
