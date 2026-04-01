import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Zero Knowledge Proofs',
  description:
    'Zero-knowledge proofs: how provers convince verifiers of statements about mail, identity, and policy without revealing underlying secrets.',
  openGraph: {
    title: 'Zero Knowledge Proofs | FirstClassMail',
    description:
      'ZK proofs for verified sourcing and selective disclosure—proof obligations, not raw data exposure, on FirstClassMail.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
