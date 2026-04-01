import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Zero Knowledge',
  description:
    'Zero knowledge: proofs and protocols that establish facts about mail, identity, and policy without unnecessary disclosure.',
  openGraph: {
    title: 'Zero Knowledge | FirstClassMail',
    description:
      'Zero-knowledge techniques for verified sourcing and selective disclosure on FirstClassMail.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
