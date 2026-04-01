import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Security',
  description:
    'Security posture of FirstClassMail.xyz: encrypted transmission, verification controls, intermediary governance, and private delivery boundaries.',
  openGraph: {
    title: 'Security | FirstClassMail.xyz',
    description:
      'Detailed security and governance model for professional communication on FirstClassMail.xyz.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
