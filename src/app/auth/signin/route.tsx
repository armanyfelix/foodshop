import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

import type { Database } from '@/types/database.types'

export const dynamic = 'force-dynamic'

export async function POST(req: Request) {
  try {
    const reqUrl = new URL(req.url)
    const formData = await req.formData()
    const email = String(formData.get('email'))
    const password = String(formData.get('password'))
    const supabase = createRouteHandlerClient<Database>({ cookies })
    const signin = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    let res = NextResponse.next()
    if (signin.error) {
      res.cookies.set('error', signin.error.message)
      return res
    } else {
      res.cookies.set('error', '')
      res.cookies.set('show-banner', 'true')
      return NextResponse.redirect(reqUrl.origin, {
        status: 301,
      })
    }
  } catch (error) {
    return NextResponse.json({ error })
  }
}
