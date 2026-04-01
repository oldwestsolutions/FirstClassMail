import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Wallet',
  description:
    'Embedded wallet and stablecoin flows for FirstClassMail: USDC for subscriptions, settlement, and programmable balances alongside encrypted mail.',
  openGraph: {
    title: 'Wallet | FirstClassMail',
    description:
      'Programmable wallet capabilities inside the mailbox—stablecoin-ready, policy-aligned, and built for professional correspondence economics.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
