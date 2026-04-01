import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mail Protocol',
  description:
    'Mail Protocol on FirstClassMail: encrypted transmission, verified sourcing, third-party management, and private delivery.',
  openGraph: {
    title: 'Mail Protocol | FirstClassMail',
    description: 'The four-stage protocol for secure, professionally managed communication on FirstClassMail.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
