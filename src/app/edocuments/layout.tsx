import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'eDocuments',
  description:
    'Secure document exchange and lifecycle management alongside encrypted correspondence on FirstClassMail.',
  openGraph: {
    title: 'eDocuments | FirstClassMail',
    description:
      'Professional document handling tied to verified threads—reducing exposure and keeping records where they belong.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
