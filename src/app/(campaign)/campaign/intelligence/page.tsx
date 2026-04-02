'use client'

import { Pie, PieChart, Cell, ResponsiveContainer, BarChart, Bar, XAxis, LineChart, Line } from 'recharts'
import { CampaignShell } from '@/components/campaign/CampaignShell'
import { GlassCard } from '@/components/shared/GlassCard'

const pie = [
  { name: 'MAPD', value: 58 },
  { name: 'PDP', value: 27 },
  { name: 'D-SNP', value: 15 },
]
const COLORS = ['#2dd4bf', '#60a5fa', '#a78bfa']

const hours = Array.from({ length: 12 }, (_, i) => ({ h: `${8 + i}h`, o: 20 + i * 7 }))
const growth = Array.from({ length: 12 }, (_, i) => ({ n: i + 1, new: 400 + i * 22, ret: 1200 + i * 40 }))

export default function CampaignIntelligencePage() {
  return (
    <CampaignShell title="Advertising Intelligence">
      <p className="mb-8 max-w-3xl text-neutral-400">
        ZK-verified audience insights powered by FirstClassMail cryptographic verification.
      </p>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <GlassCard>
          <h3 className="font-serif text-lg text-white">Audience verification</h3>
          <div className="mt-4 flex h-56 items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={[{ v: 94.2 }, { v: 5.8 }]} dataKey="v" innerRadius={56} outerRadius={80} startAngle={90} endAngle={-270}>
                  <Cell fill="#2dd4bf" />
                  <Cell fill="rgba(255,255,255,0.08)" />
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <p className="text-center text-lg text-white">94.2% verified Medicare beneficiaries</p>
          <p className="text-center text-xs text-teal-400/90">ZK proof badge · attested</p>
        </GlassCard>

        <GlassCard>
          <h3 className="font-serif text-lg text-white">Top zip engagement</h3>
          <div className="mt-4 grid grid-cols-5 gap-1 text-center text-[10px] text-neutral-500">
            {['33101', '75201', '30301', '02101', '98101'].map((z, i) => (
              <div key={z} className="rounded-lg bg-white/5 py-3" style={{ opacity: 1 - i * 0.12 }}>
                {z}
              </div>
            ))}
          </div>
          <div className="mt-6 h-40">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={[{ s: 'FL', v: 92 }, { s: 'TX', v: 78 }, { s: 'GA', v: 71 }]}>
                <XAxis dataKey="s" stroke="#71717a" />
                <Bar dataKey="v" fill="#60a5fa" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>

        <GlassCard>
          <h3 className="font-serif text-lg text-white">Plan interest</h3>
          <div className="mt-4 h-48">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={pie} dataKey="value" nameKey="name" outerRadius={72} label>
                  {pie.map((_, i) => (
                    <Cell key={i} fill={COLORS[i]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>

        <GlassCard>
          <h3 className="font-serif text-lg text-white">Engagement timing</h3>
          <div className="mt-4 h-48">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={hours}>
                <XAxis dataKey="h" stroke="#71717a" fontSize={10} />
                <Bar dataKey="o" fill="#2dd4bf" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="mt-2 text-xs text-teal-300">Best send: 10:00–11:30 local</p>
        </GlassCard>

        <GlassCard>
          <h3 className="font-serif text-lg text-white">Subscriber growth</h3>
          <div className="mt-4 h-48">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={growth}>
                <Line type="monotone" dataKey="new" stroke="#60a5fa" dot={false} />
                <Line type="monotone" dataKey="ret" stroke="#a78bfa" dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>

        <GlassCard>
          <h3 className="font-serif text-lg text-white">Revenue intelligence</h3>
          <p className="mt-4 text-sm text-neutral-400">
            USDC per subscriber up <span className="text-teal-400">+6.2%</span> vs prior quarter. Highest value: MAPD · Florida · 65–74.
          </p>
        </GlassCard>
      </div>
    </CampaignShell>
  )
}
