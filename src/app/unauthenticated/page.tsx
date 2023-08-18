import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import Options from './Options'

export default async function Unauntenticated() {
  const supabase = createServerComponentClient({ cookies })
  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (session) {
    redirect('/')
  }

  return (
    <div className="mt-10 text-center">
      <h1 className="bg-gradient-to-r from-cyan-600 via-amber-600 to-orange-700 bg-clip-text text-3xl font-bold text-transparent">
        FOODSHOP
      </h1>
      <Options />
    </div>
  )
}
