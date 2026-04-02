export function GaugeChart({ value, max = 100, label, color = '#2dd4bf' }: { value: number; max?: number; label: string; color?: string }) {
  const pct = Math.min(100, (value / max) * 100)
  const r = 36
  const cx = 44
  const cy = 44
  const stroke = 8
  const circumference = Math.PI * r
  const offset = circumference - (pct / 100) * circumference
  return (
    <div className="flex flex-col items-center">
      <svg width="88" height="56" viewBox="0 0 88 56" className="overflow-visible">
        <path
          d={`M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`}
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth={stroke}
          strokeLinecap="round"
        />
        <path
          d={`M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`}
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ transition: 'stroke-dashoffset 0.6s ease' }}
        />
      </svg>
      <p className="mt-1 font-mono text-lg text-white">{value}%</p>
      <p className="text-center text-[10px] uppercase tracking-wider text-neutral-500">{label}</p>
    </div>
  )
}
