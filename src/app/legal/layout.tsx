import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Legal',
  description: 'Legal resources and policy timeline for FirstClassMail.xyz.',
  openGraph: {
    title: 'Legal | FirstClassMail.xyz',
    description: 'Legal resources and policy timeline for FirstClassMail.xyz.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
