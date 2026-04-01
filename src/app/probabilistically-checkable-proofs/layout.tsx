import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Probabilistically Checkable Proofs',
  description:
    'How probabilistically checkable proofs (PCPs) relate to verifiable computation and trust-minimized checks in modern messaging platforms.',
  openGraph: {
    title: 'Probabilistically Checkable Proofs | FirstClassMail',
    description:
      'Verifier-efficient proofs and their role in scalable integrity and auditability for professional communication systems.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
