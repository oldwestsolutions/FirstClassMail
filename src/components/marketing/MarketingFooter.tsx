import Link from 'next/link'
import { Mail, MapPin, LayoutDashboard, FileText, BookOpen, LifeBuoy, Shield, Building2, CheckCircle } from 'lucide-react'

export function MarketingFooter() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <div className="shell py-16 md:py-24">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-3 lg:grid-cols-7 lg:gap-x-8 xl:gap-x-10">
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-neutral-200 bg-white shadow-sm">
                <Mail className="h-4 w-4 text-neutral-900" strokeWidth={1.25} />
              </div>
              <span className="font-serif text-xl text-neutral-900">FirstClass Mail</span>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-[1.85] text-neutral-600">
              FirstClassMail.xyz delivers encrypted message transmission, verified sourcing, and privacy-first handling. We do not
              sell email addresses or message data to brokers—a professional third party manages communications for security and
              simplicity.
            </p>
            <p className="mt-6 flex items-start gap-2.5 text-sm text-neutral-700">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-neutral-500" strokeWidth={1.5} aria-hidden />
              <span>Post, Texas</span>
            </p>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">Product</p>
            <ul className="mt-5 space-y-3 text-sm text-neutral-600">
              <li>
                <Link href="/correspondence" className="transition hover:text-neutral-900">
                  Correspondence
                </Link>
              </li>
              <li>
                <Link href="/journey" className="transition hover:text-neutral-900">
                  The Journey
                </Link>
              </li>
              <li>
                <Link href="/practice" className="transition hover:text-neutral-900">
                  Practice
                </Link>
              </li>
              <li>
                <Link href="/platform" className="transition hover:text-neutral-900">
                  Portal
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="transition hover:text-neutral-900">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">Platform</p>
            <ul className="mt-5 space-y-3 text-sm text-neutral-600">
              <li>
                <Link href="/portal" className="inline-flex items-center gap-2 transition hover:text-neutral-900">
                  <LayoutDashboard className="h-3.5 w-3.5 opacity-70" strokeWidth={1.5} aria-hidden />
                  Client portal
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="inline-flex items-center gap-2 transition hover:text-neutral-900">
                  <FileText className="h-3.5 w-3.5 opacity-70" strokeWidth={1.5} aria-hidden />
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">Resources</p>
            <ul className="mt-5 space-y-3 text-sm text-neutral-600">
              <li>
                <Link href="/practice" className="inline-flex items-center gap-2 transition hover:text-neutral-900">
                  <BookOpen className="h-3.5 w-3.5 opacity-70" strokeWidth={1.5} aria-hidden />
                  Documentation
                </Link>
              </li>
              <li>
                <a href="/#contact" className="inline-flex items-center gap-2 transition hover:text-neutral-900">
                  <LifeBuoy className="h-3.5 w-3.5 opacity-70" strokeWidth={1.5} aria-hidden />
                  Help center
                </a>
              </li>
              <li>
                <span className="inline-flex items-center gap-2 text-neutral-400">
                  <Shield className="h-3.5 w-3.5 opacity-70" strokeWidth={1.5} aria-hidden />
                  Security overview
                </span>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">Company</p>
            <ul className="mt-5 space-y-3 text-sm text-neutral-600">
              <li>
                <Link href="/correspondence" className="inline-flex items-center gap-2 transition hover:text-neutral-900">
                  <Building2 className="h-3.5 w-3.5 opacity-70" strokeWidth={1.5} aria-hidden />
                  About
                </Link>
              </li>
              <li>
                <span className="text-neutral-400">Careers — soon</span>
              </li>
              <li>
                <Link href="/#contact" className="transition hover:text-neutral-900">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">Legal</p>
            <ul className="mt-5 space-y-3 text-sm text-neutral-600">
              <li>
                <span className="text-neutral-400">Privacy policy — soon</span>
              </li>
              <li>
                <span className="text-neutral-400">Terms of service — soon</span>
              </li>
              <li>
                <span className="text-neutral-400">Cookie policy — soon</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-neutral-200 pt-10 text-xs text-neutral-500 md:flex-row md:items-center">
          <p>&copy; {new Date().getFullYear()} FirstClassMail.xyz. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <CheckCircle className="h-3.5 w-3.5 text-neutral-400" strokeWidth={1.25} aria-hidden />
            TLS encryption · verified sourcing · no broker resale
          </p>
        </div>
      </div>
    </footer>
  )
}
