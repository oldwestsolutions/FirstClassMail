export function MetricSparkline({ color = '#2563eb' }: { color?: string }) {
  const pts = [4, 7, 5, 9, 6, 10, 8, 12, 9, 14, 11, 15]
  const w = 80
  const h = 28
  const max = Math.max(...pts)
  const min = Math.min(...pts)
  const path = pts
    .map((v, i) => {
      const x = (i / (pts.length - 1)) * w
      const y = h - ((v - min) / (max - min || 1)) * (h - 4) - 2
      return `${i === 0 ? 'M' : 'L'} ${x} ${y}`
    })
    .join(' ')
  return (
    <svg width={w} height={h} className="opacity-40" aria-hidden>
      <path d={path} fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
