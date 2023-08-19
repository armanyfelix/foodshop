import Header from '@/components/layout/Header'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import type { Metadata } from 'next'
import { cookies } from 'next/headers'
// import { redirect } from 'next/navigation'
import { ReactNode } from 'react'
import './globals.css'
import { Providers } from './providers'

export const dynamic = 'force-dynamic'
export const metadata: Metadata = {
  title: 'Foodshop',
  description: 'Shop of food',
}

export default async function RootLayout({ children }: { children: ReactNode }) {
  const supabase = createServerComponentClient({ cookies })
  const {
    data: { session },
  } = await supabase.auth.getSession()

  return (
    <html lang="en">
      <body>
        <Providers>
          <Header session={session} />
          {children}
        </Providers>
      </body>
    </html>
  )
}
