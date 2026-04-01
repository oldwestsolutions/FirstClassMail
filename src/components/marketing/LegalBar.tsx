import { CheckCircle } from 'lucide-react'

export function LegalBar() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <div className="shell py-8">
        <div className="flex flex-col items-start justify-between gap-4 text-xs text-neutral-500 md:flex-row md:items-center">
          <p>&copy; {new Date().getFullYear()} Old West Solutions. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <CheckCircle className="h-3.5 w-3.5 text-neutral-400" strokeWidth={1.25} aria-hidden />
            256-Bit Encryption · Verified Sourcing · No Broker Resale
          </p>
        </div>
      </div>
    </footer>
  )
}
