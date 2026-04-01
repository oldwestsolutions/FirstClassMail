import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Journey',
  description:
    'From encrypted transmission through verified sourcing and third-party management to private delivery—every stage explained.',
  openGraph: {
    title: 'The Journey | FirstClassMail.xyz',
    description: 'Four stages of secure, professionally managed communication on FirstClassMail.xyz.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
