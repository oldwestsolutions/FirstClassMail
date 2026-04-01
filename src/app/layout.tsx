import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'
import { AuthProvider } from '@/contexts/AuthContext'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'], variable: '--font-body' })
const display = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://firstclassmail.xyz'),
  title: {
    default: 'FirstClassMail.xyz — Encrypted Messaging & Verified Connections',
    template: '%s | FirstClassMail.xyz',
  },
  description:
    'FirstClassMail.xyz offers encrypted message transmission, verified sourcing so you reach exactly who you intend, and privacy-first handling—no doxxing risk, no selling emails to brokers, with a professional third party managing communications.',
  keywords: [
    'FirstClassMail.xyz',
    'encrypted messaging',
    'secure email',
    'verified identity',
    'private messaging',
    'no data brokers',
    'TLS encryption',
    'anti-doxxing',
    'third-party message management',
    'professional communication',
  ],
  authors: [{ name: 'FirstClassMail.xyz' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://firstclassmail.xyz',
    siteName: 'FirstClassMail.xyz',
    title: 'FirstClassMail.xyz — Encrypted Messaging & Verified Connections',
    description:
      'Secure, encrypted messaging with verified sourcing. No email resale to brokers—private, professional communication managed end to end.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FirstClassMail.xyz — Encrypted Messaging & Verified Connections',
    description:
      'Encrypted transmission, verified sourcing, and privacy-first messaging. No data broker sales—trusted third-party handling.',
  },
  alternates: {
    canonical: 'https://firstclassmail.xyz',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'FirstClassMail.xyz',
  url: 'https://firstclassmail.xyz',
  description:
    'Encrypted message transmission, verified sourcing, and privacy-first messaging. No selling of email addresses or data to brokers—professional third-party management.',
  publisher: {
    '@type': 'Organization',
    name: 'FirstClassMail.xyz',
    url: 'https://firstclassmail.xyz',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${display.variable} font-sans`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <AuthProvider>
          {children}
          <Toaster position="top-right" />
        </AuthProvider>
        <Analytics />
      </body>
    </html>
  )
}
