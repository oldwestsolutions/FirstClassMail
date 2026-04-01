import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Calendar',
  description:
    'Calendar and scheduling on FirstClassMail: verified threads for invitations, confirmations, reminders, and retained records.',
  openGraph: {
    title: 'Calendar | FirstClassMail',
    description:
      'Enterprise-grade scheduling communication—centralized, auditable, and aligned with mailbox and wallet workflows.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
