'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Eye, EyeOff, Mail, ArrowRight, BarChart3, TrendingUp, Target } from 'lucide-react'
import Link from 'next/link'
import { hrefForCampaignSegment, useCampaignPaths } from '@/components/campaign/CampaignPathContext'
import { MAIN_SITE_ORIGIN } from '@/lib/publicUrls'

const SESSION_KEY = 'fcm_campaign_session'

function CoinbaseIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 32 32" aria-hidden>
      <circle cx="16" cy="16" r="16" fill="#0052FF" />
      <path fill="white" d="M16 7c4.97 0 9 4.03 9 9s-4.03 9-9 9-9-4.03-9-9 4.03-9 9-9zm0 3.6a5.4 5.4 0 100 10.8 5.4 5.4 0 000-10.8z" />
    </svg>
  )
}

function CircleIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 32 32" aria-hidden>
      <circle cx="16" cy="16" r="16" fill="#0C6CF2" />
      <circle cx="16" cy="16" r="6" fill="white" />
    </svg>
  )
}

export default function CampaignLoginPage() {
  const router = useRouter()
  const { shortPaths } = useCampaignPaths()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [show, setShow] = useState(false)
  const [remember, setRemember] = useState(true)
  const [loading, setLoading] = useState(false)

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    window.setTimeout(() => {
      localStorage.setItem(SESSION_KEY, '1')
      if (!remember) localStorage.removeItem('fcm_campaign_remember')
      setLoading(false)
      router.push(hrefForCampaignSegment(shortPaths, '/dashboard'))
    }, 1500)
  }

  return (
    <div className="flex min-h-screen flex-col bg-white lg:flex-row">
      <div className="relative hidden flex-1 overflow-hidden border-r border-neutral-200 bg-neutral-50 lg:flex">
        <div className="relative z-10 flex h-full w-full flex-col justify-between px-12 py-12">
          <Link href={MAIN_SITE_ORIGIN} className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-neutral-200 bg-white shadow-sm">
              <Mail className="h-4 w-4 text-neutral-900" strokeWidth={1.25} />
            </div>
            <span className="font-serif text-lg tracking-wide text-neutral-900">FirstClassMail</span>
          </Link>

          <div className="max-w-md">
            <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-neutral-500">Business Intelligence</p>
            <h1 className="mt-5 font-serif text-4xl font-medium leading-[1.08] tracking-tight text-neutral-900 md:text-5xl">
              Business Intelligence Portal.
            </h1>
            <p className="mt-6 text-base leading-[1.75] text-neutral-600">
              Unified business intelligence and marketing analytics — manage Meta and Facebook ad campaigns, unlock audience insights, and track performance across every channel.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              {[
                { label: 'Marketing Analytics', icon: BarChart3 },
                { label: 'Meta Ads Integration', icon: Target },
                { label: 'Performance Insights', icon: TrendingUp },
              ].map(({ label, icon: Icon }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-xs text-neutral-600 shadow-sm"
                >
                  <Icon className="h-3.5 w-3.5 text-neutral-400" strokeWidth={1.5} />
                  {label}
                </span>
              ))}
            </div>
          </div>

          <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-neutral-400">
            Encrypted transit · Verified recipients · Privacy by design
          </p>
        </div>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center px-4 py-12 lg:px-12">
        <div className="flex w-full max-w-md flex-col lg:hidden">
          <Link href={MAIN_SITE_ORIGIN} className="mb-10 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-neutral-200 bg-neutral-50">
              <Mail className="h-4 w-4 text-neutral-900" strokeWidth={1.25} />
            </div>
            <span className="font-serif text-lg tracking-wide text-neutral-900">FirstClassMail</span>
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-md"
        >
          <div className="mb-8">
            <h2 className="font-serif text-3xl tracking-tight text-neutral-900">Sign in</h2>
            <p className="mt-2 text-sm text-neutral-500">Access business intelligence</p>
          </div>

          <form onSubmit={onSubmit} className="space-y-5">
            <div>
              <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-neutral-500">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="flex h-12 w-full rounded-2xl border border-neutral-200 bg-white px-4 text-sm text-neutral-900 placeholder:text-neutral-400 transition focus:border-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900/10"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-neutral-500">Password</label>
              <div className="relative">
                <input
                  type={show ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="flex h-12 w-full rounded-2xl border border-neutral-200 bg-white px-4 pr-11 text-sm text-neutral-900 placeholder:text-neutral-400 transition focus:border-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900/10"
                />
                <button
                  type="button"
                  onClick={() => setShow(!show)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-neutral-400 transition hover:text-neutral-900"
                  aria-label={show ? 'Hide password' : 'Show password'}
                >
                  {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between gap-4 text-sm">
              <label className="flex cursor-pointer items-center gap-2 text-neutral-500">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className="rounded border-neutral-300 text-neutral-900 focus:ring-neutral-900/20"
                />
                Remember me
              </label>
              <button type="button" className="text-neutral-400 transition hover:text-neutral-900">
                Forgot password?
              </button>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-blue-600 text-sm font-medium text-white transition-colors duration-200 hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 disabled:opacity-50"
            >
              {loading ? (
                <span className="inline-flex items-center gap-2">
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                  Signing in…
                </span>
              ) : (
                <>
                  Sign In
                  <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                </>
              )}
            </button>
          </form>

          <div className="my-8 flex items-center gap-3">
            <div className="h-px flex-1 bg-neutral-200" />
            <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-400">or continue with</span>
            <div className="h-px flex-1 bg-neutral-200" />
          </div>

          <div className="flex flex-col gap-3">
            <button
              type="button"
              className="flex h-12 w-full items-center justify-center gap-2 rounded-full border border-neutral-200 bg-white text-sm font-medium text-neutral-700 transition hover:bg-neutral-50 hover:border-neutral-300"
            >
              <CoinbaseIcon />
              Coinbase Wallet
            </button>
            <button
              type="button"
              className="flex h-12 w-full items-center justify-center gap-2 rounded-full border border-neutral-200 bg-white text-sm font-medium text-neutral-700 transition hover:bg-neutral-50 hover:border-neutral-300"
            >
              <CircleIcon />
              Circle Wallet
            </button>
          </div>

          <p className="mt-10 text-center text-xs text-neutral-500">
            Need access? Contact your administrator ·{' '}
            <a href={MAIN_SITE_ORIGIN} className="text-neutral-900 underline-offset-4 transition hover:underline">
              FirstClassMail home
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  )
}
