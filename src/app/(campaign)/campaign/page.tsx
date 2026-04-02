'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Eye, EyeOff, Sparkles } from 'lucide-react'

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
      router.push('/campaign/dashboard')
    }, 1500)
  }

  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      <div className="relative hidden min-h-[40vh] flex-1 overflow-hidden bg-[#030712] lg:flex lg:min-h-screen">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.07)_1px,transparent_1px)] [background-size:40px_40px]" />
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 100, repeat: Infinity, ease: 'linear' }}
          className="pointer-events-none absolute left-1/2 top-1/2 h-[min(120vw,720px)] w-[min(120vw,720px)] -translate-x-1/2 -translate-y-1/2 rounded-[40%] border border-white/[0.06] bg-gradient-to-br from-blue-500/25 via-violet-600/10 to-transparent blur-2xl"
        />
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="pointer-events-none absolute bottom-0 left-10 h-48 w-48 rounded-3xl border border-white/10 bg-gradient-to-tr from-teal-500/20 to-transparent backdrop-blur-sm"
        />
        <div className="relative z-10 flex h-full flex-col justify-center px-12 py-16">
          <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-blue-300/80">Medicare advertising</p>
          <h1 className="mt-4 max-w-lg font-serif text-4xl font-medium leading-tight text-white md:text-5xl">
            FirstClass Campaign Portal
          </h1>
          <p className="mt-6 max-w-md text-lg text-neutral-400">
            Verified advertising intelligence for the Medicare market.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            {['ZK Verified Identity', 'Circle Wallet Connected', 'USDC Powered Payouts'].map((t) => (
              <span
                key={t}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-neutral-300"
              >
                <Sparkles className="h-3.5 w-3.5 text-teal-400" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center px-4 py-12">
        <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/[0.05] p-8 shadow-2xl backdrop-blur-md">
          <div className="mb-8 flex flex-col items-center text-center">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-violet-600 text-lg font-bold text-white">
              FC
            </div>
            <h2 className="font-serif text-2xl text-white">Sign in to Campaign</h2>
            <p className="mt-2 text-sm text-neutral-400">Access your advertising portal</p>
          </div>

          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label className="mb-1.5 block text-xs font-medium text-neutral-400">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:border-teal-500/50 focus:outline-none focus:ring-2 focus:ring-teal-500/30"
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-medium text-neutral-400">Password</label>
              <div className="relative">
                <input
                  type={show ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 pr-11 text-sm text-white placeholder:text-neutral-600 focus:border-teal-500/50 focus:outline-none focus:ring-2 focus:ring-teal-500/30"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShow(!show)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-white"
                  aria-label={show ? 'Hide password' : 'Show password'}
                >
                  {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between gap-4 text-sm">
              <label className="flex cursor-pointer items-center gap-2 text-neutral-400">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className="rounded border-white/20 bg-black/40 text-teal-500 focus:ring-teal-500/40"
                />
                Remember me
              </label>
              <button type="button" className="text-white/40 hover:text-white/70">
                Forgot password?
              </button>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 py-3 text-sm font-semibold text-white shadow-[0_0_24px_rgba(59,130,246,0.35)] transition hover:shadow-[0_0_32px_rgba(139,92,246,0.45)] disabled:opacity-60"
            >
              {loading ? (
                <span className="inline-flex items-center gap-2">
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                  Signing in…
                </span>
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          <div className="my-8 flex items-center gap-3">
            <div className="h-px flex-1 bg-white/10" />
            <span className="text-xs uppercase tracking-wider text-neutral-500">or continue with</span>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <div className="flex flex-col gap-3">
            <button
              type="button"
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#0052FF]/40 bg-transparent py-3 text-sm text-white transition hover:bg-[#0052FF]/10"
            >
              <CoinbaseIcon />
              Coinbase Wallet
            </button>
            <button
              type="button"
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#0C6CF2]/40 bg-transparent py-3 text-sm text-white transition hover:bg-[#0C6CF2]/10"
            >
              <CircleIcon />
              Circle Wallet
            </button>
          </div>

          <p className="mt-8 text-center text-xs text-neutral-500">
            Need access? Contact your administrator ·{' '}
            <Link href="/" className="text-teal-400/90 hover:underline">
              FirstClassMail home
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
