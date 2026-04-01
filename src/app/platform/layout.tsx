import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Client Portal',
  description:
    'How the FirstClassMail client portal organizes mailboxes, verified threads, TLS indicators, and outbound delivery—before you sign in.',
  openGraph: {
    title: 'Client Portal | FirstClassMail',
    description: 'Product overview of the secure client portal: thread view, sent view, and professional workflows.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
