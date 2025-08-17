import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { NextAuthProvider } from '@/components/providers/next-auth-provider'
import { Toaster } from 'sonner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CorpFin Pro - Corporate Finance Management',
  description: 'Professional corporate finance application for budgeting, forecasting, and financial planning',
  keywords: 'corporate finance, budgeting, forecasting, FP&A, CFO, financial planning',
  authors: [{ name: 'CorpFin Pro Team' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>
          {children}
          <Toaster position="top-right" />
        </NextAuthProvider>
      </body>
    </html>
  )
}
