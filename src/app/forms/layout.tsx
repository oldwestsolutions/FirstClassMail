import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Forms',
  description:
    'TLS-backed forms and intake that land in verified threads on FirstClassMail—structured fields, private replies, audit-friendly history.',
  openGraph: {
    title: 'Forms | FirstClassMail',
    description:
      'Professional forms and intake tied to encrypted mail: submissions in verified threads, not scattered inboxes.',
  },
}

export default function FormsLayout({ children }: { children: React.ReactNode }) {
  return children
}
