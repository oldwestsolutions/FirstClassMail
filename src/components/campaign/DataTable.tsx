'use client'

import { clsx } from 'clsx'

export function DataTable({
  columns,
  rows,
}: {
  columns: { key: string; label: string; className?: string }[]
  rows: Record<string, React.ReactNode>[]
}) {
  return (
    <div className="overflow-x-auto rounded-xl border border-neutral-200">
      <table className="w-full min-w-[640px] text-left text-sm">
        <thead>
          <tr className="border-b border-neutral-200 bg-neutral-50 text-xs uppercase tracking-wider text-neutral-500">
            {columns.map((c) => (
              <th key={c.key} className={clsx('px-4 py-3 font-medium', c.className)}>
                {c.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-neutral-100 transition hover:bg-neutral-50/50">
              {columns.map((c) => (
                <td key={c.key} className="px-4 py-3 text-neutral-600">
                  {row[c.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
