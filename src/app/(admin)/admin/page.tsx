'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Eye, EyeOff, Server } from 'lucide-react'

const SESSION_KEY = 'fcm_admin_session'

export default function AdminLoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [show, setShow] = useState(false)
  const [loading, setLoading] = useState(false)

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    window.setTimeout(() => {
      localStorage.setItem(SESSION_KEY, '1')
      setLoading(false)
      router.push('/admin/dashboard')
    }, 1500)
  }

  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      <div className="relative hidden flex-1 overflow-hidden bg-[#09090b] lg:flex">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(251,191,36,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(251,191,36,0.06)_1px,transparent_1px)] [background-size:40px_40px]" />
        <div className="relative z-10 flex h-full flex-col justify-center px-12 py-16">
          <h1 className="font-serif text-4xl font-medium text-white md:text-5xl">FirstClass Admin Console</h1>
          <p className="mt-6 max-w-md text-lg text-neutral-400">Platform operations and intelligence.</p>
          <div className="mt-10 flex flex-wrap gap-3">
            {['Server Health Monitoring', 'Linode Infrastructure', 'Full Platform Control'].map((t) => (
              <span key={t} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-neutral-300">
                <Server className="h-3.5 w-3.5 text-amber-400" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md rounded-3xl border border-white/10 bg-white/[0.05] p-8 backdrop-blur-md"
        >
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-red-700 text-lg font-bold text-white">
              AD
            </div>
            <h2 className="font-serif text-2xl text-white">Admin Access</h2>
            <p className="mt-2 text-sm text-neutral-400">Sign in to the operations console</p>
          </div>
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label className="mb-1.5 block text-xs text-neutral-400">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white focus:ring-2 focus:ring-amber-500/40"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs text-neutral-400">Password</label>
              <div className="relative">
                <input
                  type={show ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 pr-11 text-sm text-white focus:ring-2 focus:ring-amber-500/40"
                />
                <button type="button" onClick={() => setShow(!show)} className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500">
                  {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-gradient-to-r from-amber-600 to-red-700 py-3 text-sm font-semibold text-white disabled:opacity-60"
            >
              {loading ? 'Signing in…' : 'Sign In'}
            </button>
          </form>
          <p className="mt-8 text-center text-xs text-neutral-500">
            <Link href="/" className="text-amber-400/90 hover:underline">
              Back to FirstClassMail
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  )
}
