import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fully Homomorphic Encryption',
  description:
    'Fully homomorphic encryption (FHE): computing on ciphertexts and what it enables for privacy-preserving mail and workflow.',
  openGraph: {
    title: 'Fully Homomorphic Encryption | FirstClassMail',
    description:
      'Why FHE matters for confidential processing and how it complements transport security in correspondence platforms.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
