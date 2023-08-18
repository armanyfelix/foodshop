'use client'

import { LockIcon } from '@/components/svg/LockIcon'
import { MailIcon } from '@/components/svg/MainIcon'
import { Button, Input } from '@nextui-org/react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import { useMemo, useState } from 'react'

import type { Database } from '@/lib/database.types'

export default function Login() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const router = useRouter()
  const supabase = createClientComponentClient<Database>()

  const validationEmail = useMemo(() => {
    if (email === '') return undefined

    return email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i) ? 'valid' : 'invalid'
  }, [email])

  const validationPassword = useMemo(() => {
    if (password === '') return undefined

    return password.length > 8 ? 'valid' : 'invalid'
  }, [email])

  const handleSignUp = async () => {
    if (validationEmail === 'valid' && validationPassword === 'valid') {
      await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${location.origin}/auth/callback`,
        },
      })
      router.refresh()
    }
  }

  return (
    <div className="space-y-4 p-6">
      {/* <input name="email" onChange={(e) => setEmail(e.target.value)} value={email} />
      <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} value={password} />
      <button onClick={handleSignUp}>Sign up</button> */}
      {/* <button onClick={handleSignIn}>Sign in</button> */}
      {/* <button onClick={handleSignOut}>Sign out</button> */}
      <h1 className="mb-4 text-center text-3xl font-bold text-default-500">Sign up</h1>
      <Input
        autoFocus
        endContent={<MailIcon className="pointer-events-none flex-shrink-0 text-2xl text-default-400" />}
        label="Email"
        variant="faded"
        color={validationEmail === 'invalid' ? 'danger' : 'default'}
        errorMessage={validationEmail === 'invalid' && 'Please enter a valid email'}
        validationState={validationEmail}
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <Input
        endContent={<LockIcon className="pointer-events-none flex-shrink-0 text-2xl text-default-400" />}
        label="Password"
        type="password"
        variant="faded"
        color={validationPassword === 'invalid' ? 'danger' : 'default'}
        errorMessage={validationPassword === 'invalid' && 'Please enter a valid password'}
        validationState={validationPassword}
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <Button color="primary" className="w-full" size="lg" onClick={handleSignUp}>
        Sign in
      </Button>
    </div>
  )
}
