import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Appointments',
  description:
    'Appointments workflow for FirstClassMail: scheduling, coordination, and secure follow-up communication in professional environments.',
  openGraph: {
    title: 'Appointments | FirstClassMail',
    description:
      'Detailed appointments workflow and communication standards for teams using FirstClassMail.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
