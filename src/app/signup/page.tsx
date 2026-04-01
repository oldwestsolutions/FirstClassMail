'use client'

import { FormEvent, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowRight, Building2, User } from 'lucide-react'
import { MarketingHeader } from '@/components/marketing/MarketingHeader'
import { MarketingFooter } from '@/components/marketing/MarketingFooter'

type AccountType = 'individual' | 'business'

export default function SignupPage() {
  const router = useRouter()
  const [accountType, setAccountType] = useState<AccountType>('individual')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [jobTitle, setJobTitle] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const payload = {
        name: accountType === 'business' && companyName ? `${name} · ${companyName}` : name,
        email,
        password,
        accountType,
        companyName,
        jobTitle,
      }

      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data?.error ?? 'Registration failed. Please try again.')
        setLoading(false)
        return
      }

      if (data?.token) {
        localStorage.setItem('authToken', data.token)
      }

      router.push('/portal')
    } catch {
      setError('Registration failed. Please try again.')
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-white text-neutral-600">
      <MarketingHeader />

      <main>
        <section className="border-b border-neutral-200 bg-gradient-to-b from-neutral-50 to-white py-16 md:py-24 lg:py-28">
          <div className="shell">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-neutral-500">Create Account</p>
                <h1 className="mt-5 font-serif text-4xl font-medium leading-[1.1] text-neutral-900 md:text-5xl">
                  Start secure messaging with the right account profile.
                </h1>
                <p className="mt-7 max-w-xl text-lg leading-relaxed text-neutral-600">
                  Choose an individual account for direct professional correspondence, or a business account for teams that need
                  structured onboarding and operational separation.
                </p>
                <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
                    <p className="font-serif text-lg text-neutral-900">Individual</p>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                      Best for consultants, operators, and professionals managing private 1:1 communication.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
                    <p className="font-serif text-lg text-neutral-900">Business</p>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                      Best for teams requiring role context, organization labels, and shared communication standards.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="rounded-[2rem] border border-neutral-200 bg-white p-7 shadow-sm ring-1 ring-neutral-100 md:p-10">
                  <div className="grid grid-cols-2 gap-2 rounded-2xl border border-neutral-200 bg-neutral-50 p-1.5">
                    <button
                      type="button"
                      onClick={() => setAccountType('individual')}
                      className={`rounded-xl px-4 py-3 text-sm transition ${
                        accountType === 'individual'
                          ? 'bg-white font-medium text-neutral-900 shadow-sm'
                          : 'text-neutral-500 hover:text-neutral-800'
                      }`}
                    >
                      <span className="inline-flex items-center gap-2">
                        <User className="h-4 w-4" strokeWidth={1.5} />
                        Individual
                      </span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setAccountType('business')}
                      className={`rounded-xl px-4 py-3 text-sm transition ${
                        accountType === 'business'
                          ? 'bg-white font-medium text-neutral-900 shadow-sm'
                          : 'text-neutral-500 hover:text-neutral-800'
                      }`}
                    >
                      <span className="inline-flex items-center gap-2">
                        <Building2 className="h-4 w-4" strokeWidth={1.5} />
                        Business
                      </span>
                    </button>
                  </div>

                  <form onSubmit={onSubmit} className="mt-7 space-y-5">
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                      <label className="block">
                        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-500">
                          {accountType === 'business' ? 'Primary Contact' : 'Full Name'}
                        </span>
                        <input
                          className="mt-2 input border-neutral-300 bg-white text-neutral-900 placeholder:text-neutral-400 focus-visible:ring-neutral-900 focus-visible:ring-offset-white"
                          placeholder={accountType === 'business' ? 'Jordan Lee' : 'Your full name'}
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </label>

                      <label className="block">
                        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-500">
                          {accountType === 'business' ? 'Work Email' : 'Email'}
                        </span>
                        <input
                          type="email"
                          className="mt-2 input border-neutral-300 bg-white text-neutral-900 placeholder:text-neutral-400 focus-visible:ring-neutral-900 focus-visible:ring-offset-white"
                          placeholder="name@company.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </label>
                    </div>

                    {accountType === 'business' && (
                      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                        <label className="block">
                          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-500">Company Name</span>
                          <input
                            className="mt-2 input border-neutral-300 bg-white text-neutral-900 placeholder:text-neutral-400 focus-visible:ring-neutral-900 focus-visible:ring-offset-white"
                            placeholder="Riverside Legal"
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                            required
                          />
                        </label>

                        <label className="block">
                          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-500">Job Title</span>
                          <input
                            className="mt-2 input border-neutral-300 bg-white text-neutral-900 placeholder:text-neutral-400 focus-visible:ring-neutral-900 focus-visible:ring-offset-white"
                            placeholder="Operations Director"
                            value={jobTitle}
                            onChange={(e) => setJobTitle(e.target.value)}
                          />
                        </label>
                      </div>
                    )}

                    <label className="block">
                      <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-500">Password</span>
                      <input
                        type="password"
                        className="mt-2 input border-neutral-300 bg-white text-neutral-900 placeholder:text-neutral-400 focus-visible:ring-neutral-900 focus-visible:ring-offset-white"
                        placeholder="Minimum 8 characters"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        minLength={8}
                        required
                      />
                    </label>

                    {error ? (
                      <p className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">{error}</p>
                    ) : null}

                    <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center">
                      <button
                        type="submit"
                        disabled={loading}
                        className="btn btn-primary px-8 py-3.5 text-xs uppercase tracking-[0.2em]"
                      >
                        {loading ? 'Creating...' : 'Create Account'}
                        <ArrowRight className="ml-2 h-4 w-4" strokeWidth={1.5} />
                      </button>
                      <Link
                        href="/portal"
                        className="text-sm text-neutral-500 underline-offset-4 transition hover:text-neutral-900 hover:underline"
                      >
                        Already have an account? Sign in
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <MarketingFooter />
    </div>
  )
}
