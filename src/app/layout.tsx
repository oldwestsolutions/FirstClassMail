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
  title: 'FirstClass Mail — Mail for the internet age',
  description:
    'How letters work—addressed, sorted, held, delivered—applied to messages that move across the network. Webforms, queues, and inboxes in one place.',
  keywords:
    'internet mail, webforms, message routing, email delivery, inbound mail, digital postbox, lead messages',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${display.variable} font-sans`}>
        <AuthProvider>
          {children}
          <Toaster position="top-right" />
        </AuthProvider>
        <Analytics />
      </body>
    </html>
  )
}
