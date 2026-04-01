import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blockchain',
  description:
    'USDC mailbox payments, ad revenue sharing via micropayments, instant business settlement, and programmable wallets integrated with FirstClassMail.',
  openGraph: {
    title: 'Blockchain | FirstClassMail',
    description:
      'Stablecoin subscriptions, revenue sharing, and embedded wallets—built for professional correspondence without traditional payment friction.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
