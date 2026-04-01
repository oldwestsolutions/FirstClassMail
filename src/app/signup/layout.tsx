import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Create Account',
  description:
    'Create a FirstClassMail account as an individual or business team with encrypted communication and verified sourcing.',
  openGraph: {
    title: 'Create Account | FirstClassMail',
    description:
      'Business and individual sign-up for secure, verified, privacy-first communication on FirstClassMail.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
