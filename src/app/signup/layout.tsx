import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Create Account',
  description:
    'Create a FirstClassMail.xyz account as an individual or business team with encrypted communication and verified sourcing.',
  openGraph: {
    title: 'Create Account | FirstClassMail.xyz',
    description:
      'Business and individual sign-up for secure, verified, privacy-first communication on FirstClassMail.xyz.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
