'use client'

import { LockIcon } from '@/svg/LockIcon'
import { MailIcon } from '@/svg/MainIcon'
import { Button, Input, Link } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import { useMemo, useState } from 'react'

export default function SignIn() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const router = useRouter()

  const validationEmail = useMemo(() => {
    if (email === '') return undefined

    return email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i) ? 'valid' : 'invalid'
  }, [email])

  const validationPassword = useMemo(() => {
    if (password === '') return undefined

    return password.length > 8 ? 'valid' : 'invalid'
  }, [email])

  const handleSignIn = async () => {
    await fetch('/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }).then
    router.refresh()
  }

  return (
    <div className="h-screen space-y-4 p-6">
      {/* <input name="email" onChange={(e) => setEmail(e.target.value)} value={email} />
      <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} value={password} />
      <button onClick={handleSignUp}>Sign up</button> */}
      {/* <button onClick={handleSignIn}>Sign in</button> */}
      {/* <button onClick={handleSignOut}>Sign out</button> */}
      <h1 className="mb-4 text-center text-3xl font-bold text-default-500">Login</h1>
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
      <div className="flex justify-center px-1 py-2">
        {/* <Checkbox
          classNames={{
            label: 'text-small',
          }}
        >
          Remember me
        </Checkbox> */}
        <Link color="primary" href="/forgot-password" size="sm">
          Forgot password?
        </Link>
      </div>
      <Button color="primary" className="w-full" size="lg" onClick={handleSignIn}>
        Sign in
      </Button>
    </div>
  )
}