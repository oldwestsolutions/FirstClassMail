import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Legal',
  description: 'Legal resources and policy timeline for FirstClassMail.',
  openGraph: {
    title: 'Legal | FirstClassMail',
    description: 'Legal resources and policy timeline for FirstClassMail.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
