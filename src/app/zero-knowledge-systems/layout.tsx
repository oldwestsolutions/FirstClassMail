import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Zero Knowledge Systems',
  description:
    'Zero-knowledge proofs and systems: proving properties about messages and identities without exposing underlying secrets.',
  openGraph: {
    title: 'Zero Knowledge Systems | FirstClassMail',
    description:
      'ZK concepts applied to verified sourcing, selective disclosure, and professional-grade privacy on FirstClassMail.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
