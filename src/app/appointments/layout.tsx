import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Appointments',
  description:
    'Appointments workflow for FirstClassMail.xyz: scheduling, coordination, and secure follow-up communication in professional environments.',
  openGraph: {
    title: 'Appointments | FirstClassMail.xyz',
    description:
      'Detailed appointments workflow and communication standards for teams using FirstClassMail.xyz.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
