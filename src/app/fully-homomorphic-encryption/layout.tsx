import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Homomorphic Encryption',
  description:
    'Homomorphic encryption: computing on ciphertexts—including fully homomorphic schemes—and what it enables for private mail and workflow.',
  openGraph: {
    title: 'Homomorphic Encryption | FirstClassMail',
    description:
      'Homomorphic encryption and confidential processing alongside transport security on FirstClassMail.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
