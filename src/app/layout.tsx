import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import { ReactNode } from 'react'
import Header from '../components/layout/Header'
import './globals.css'
import { Providers } from './providers'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Cookshop',
  description: 'Shop of food',
}

export default async function RootLayout({ children }: { children: ReactNode }) {
  const supabase = createServerComponentClient({ cookies })
  const {
    data: { session },
  } = await supabase.auth.getSession()

  return (
    <html lang="en">
      <body className="bg-gradient-to-bl from-orange-300 to-cyan-300 dark:from-orange-950 dark:to-cyan-950 ">
        <Providers>
          <Header user={session?.user || null} />
          {children}
        </Providers>
      </body>
    </html>
  )
}
