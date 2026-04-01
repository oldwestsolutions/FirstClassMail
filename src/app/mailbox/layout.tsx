import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mailbox',
  description:
    'Mailbox capabilities on FirstClassMail.xyz: intake, organization, retention controls, and verified delivery handling for professional communication.',
  openGraph: {
    title: 'Mailbox | FirstClassMail.xyz',
    description:
      'A detailed guide to mailbox operations, routing controls, and workflow management on FirstClassMail.xyz.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
