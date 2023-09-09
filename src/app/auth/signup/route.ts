import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

import type { Database } from '@/types/database.types'

export const dynamic = 'force-dynamic'

export async function POST(req: Request) {
  const reqUrl = new URL(req.url)
  const formData = await req.formData()
  const email = String(formData.get('email'))
  const password = String(formData.get('password'))
  const supabase = createRouteHandlerClient<Database>({ cookies })

  try {
    const res = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${reqUrl.origin}/auth/callback`,
      },
    })
    if (res.error) {
      return NextResponse.json(
        {
          error: res.error,
        },
        { status: res.error.status }
      )
    } else {
      return NextResponse.redirect(reqUrl.origin, {
        status: 301,
      })
    }
  } catch (error) {
    return NextResponse.json({ error })
  }
}
