import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Stamps',
  description:
    'Outbound stamps and postmarks on FirstClassMail: class, intent, and handling signals visible on send within verified threads.',
  openGraph: {
    title: 'Stamps | FirstClassMail',
    description:
      'Apply postal-style stamps to outbound mail so routing and intent stay explicit in professional correspondence.',
  },
}

export default function StampsLayout({ children }: { children: React.ReactNode }) {
  return children
}
