'use client'

import { LockIcon } from '@/svg/LockIcon'
import { MailIcon } from '@/svg/MainIcon'
import { Button, Input, Link } from '@nextui-org/react'
import { useMemo, useState } from 'react'

interface Props {
  handleSignUp: (e: any) => void
}

export default function Form({ handleSignUp }: Props) {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const validationEmail = useMemo(() => {
    if (email === '') return undefined

    return email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i) ? 'valid' : 'invalid'
  }, [email])

  const validationPassword = useMemo(() => {
    if (password === '') return undefined

    return password.length > 8 ? 'valid' : 'invalid'
  }, [email])

  return (
    <form action={handleSignUp} method="post" className="mx-auto max-w-xl space-y-10 text-center">
      <Input
        autoFocus
        name="email"
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
        name="password"
        label="Password"
        type="password"
        variant="faded"
        color={validationPassword === 'invalid' ? 'danger' : 'default'}
        errorMessage={validationPassword === 'invalid' && 'Please enter a valid password'}
        validationState={validationPassword}
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <Link href="/auth/forgot-password">
        <span className="text-default-500">Forgot password?</span>
      </Link>
      <Button color="primary" className="w-full" size="lg" type="submit">
        Sign in
      </Button>
    </form>
  )
}
