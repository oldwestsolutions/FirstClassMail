import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Correspondence',
  description:
    'How FirstClassMail protects confidentiality: encryption in transit and at rest, verified parties, and a strict no–data-brokerage policy.',
  openGraph: {
    title: 'Correspondence | FirstClassMail',
    description:
      'TLS encryption, verified sourcing, and privacy-first handling—without selling your contact graph to brokers.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
