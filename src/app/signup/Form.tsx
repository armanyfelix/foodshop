'use client'

import LockIcon from '@/svg/LockIcon'
import MailIcon from '@/svg/MainIcon'
import { Button, Input, Link } from '@nextui-org/react'
import { useMemo, useState } from 'react'
import { experimental_useFormStatus as useFormStatus } from 'react-dom'

interface Props {
  onSignup: (e: any) => void
}

export default function Form({ onSignup }: Props) {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const { pending } = useFormStatus()

  const validationEmail = useMemo(() => {
    if (email === '') return undefined
    return email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i) ? 'valid' : 'invalid'
  }, [email])

  const validationPassword = useMemo(() => {
    if (password === '') return undefined
    return password.length >= 8 ? 'valid' : 'invalid'
  }, [password])

  async function handleSignUp(e: FormData) {
    // if (validationPassword === 'valid' && validationEmail === 'valid') {
    const res = await onSignup(e)
    console.log('🚀 ~ file: Form.tsx:31 ~ handleSignUp ~ res:', res)
  }

  return (
    <form action={handleSignUp} className="mx-auto max-w-xl space-y-6 text-center">
      <Input
        autoFocus
        name="email"
        endContent={<MailIcon className="pointer-events-none flex-shrink-0 text-2xl text-default-400" />}
        label="Email"
        variant="faded"
        isRequired
        color={validationEmail === 'invalid' ? 'danger' : 'default'}
        errorMessage={validationEmail === 'invalid' && 'Please enter a valid email'}
        validationState={validationEmail}
        onValueChange={setEmail}
        value={email}
      />
      <Input
        endContent={<LockIcon className="pointer-events-none flex-shrink-0 text-2xl text-default-400" />}
        name="password"
        label="Password"
        type="password"
        variant="faded"
        isRequired
        color={validationPassword === 'invalid' ? 'danger' : 'default'}
        errorMessage={validationPassword === 'invalid' && 'The password must be at least 8 characters'}
        validationState={validationPassword}
        onValueChange={setPassword}
        value={password}
      />
      <Link href="/forgot-password">
        <span className="text-default-500">Forgot password?</span>
      </Link>
      <Button color="primary" className="w-full" isLoading={pending} size="lg" type="submit">
        Sign Up
      </Button>
      <div>
        <span>Already have an account? </span>
        <Link href="/signin">
          <span className="text-default-500">sign in</span>
        </Link>
      </div>
    </form>
  )
}
