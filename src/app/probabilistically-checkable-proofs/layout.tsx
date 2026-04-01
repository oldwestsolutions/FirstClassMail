import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Checkable Proofs',
  description:
    'Checkable proofs (including probabilistically checkable proofs / PCPs): verifier-efficient integrity and audit for professional messaging.',
  openGraph: {
    title: 'Checkable Proofs | FirstClassMail',
    description:
      'How checkable proof ideas support scalable verification and trust-minimized checks on FirstClassMail.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
