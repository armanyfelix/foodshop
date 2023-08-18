import Header from '@/components/layout/Header'
import type { Metadata } from 'next'
import './globals.css'
import { Providers } from './providers'

export const dynamic = 'force-dynamic'
export const metadata: Metadata = {
  title: 'Foodshop',
  description: 'Shop of food',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  )
}
