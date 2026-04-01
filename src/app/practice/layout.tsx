import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Practice',
  description:
    'What FirstClassMail delivers in production: pillars of encryption, verified sourcing, privacy—and how mail moves from users to office servers.',
  openGraph: {
    title: 'Practice | FirstClassMail',
    description: 'Operational pillars and message path—professional third-party management without broker resale.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
