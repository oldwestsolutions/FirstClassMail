import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Security',
  description:
    'Security posture of FirstClassMail: encrypted transmission, verification controls, intermediary governance, and private delivery boundaries.',
  openGraph: {
    title: 'Security | FirstClassMail',
    description:
      'Detailed security and governance model for professional communication on FirstClassMail.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
