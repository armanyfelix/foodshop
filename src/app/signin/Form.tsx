'use client'

import { useUserStore } from '@/store/session'
import LockIcon from '@/svg/LockIcon'
import MailIcon from '@/svg/MainIcon'
import { Button, Input, Link } from '@nextui-org/react'
import { revalidatePath } from 'next/cache'
import { useRouter } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'

export default function Form() {
  const user = useUserStore((state: any) => state.user)
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const router = useRouter()

  const validationEmail = useMemo(() => {
    if (email === '') return undefined
    return email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i) ? 'valid' : 'invalid'
  }, [email])

  const validationPassword = useMemo(() => {
    if (password === '') return undefined
    return password.length >= 8 ? 'valid' : 'invalid'
  }, [password])

  const handleSignIn = async (formData: FormData) => {
    setLoading(true)
    try {
      const res = await fetch('/auth/signin', {
        method: 'POST',
        body: formData,
      })
      if (res.status === 500) {
        setError(true)
        setLoading(false)
      } else {
        router.refresh()
      }
      revalidatePath('/')
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    if (user) {
      router.push('/')
    }
  }, [user])

  return (
    <form action={handleSignIn} className="mx-auto max-w-xl space-y-6 text-center">
      {error === true && (
        <div className="mt-4 rounded-xl border-2 border-danger-600 p-2 text-center text-danger-600">
          <h2 className="text-lg font-semibold">Sign in failed</h2>
          <p className="text-sm">Something went wrong. Please try again later.</p>
        </div>
      )}
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
      <Button color="primary" className="w-full" isLoading={loading} size="lg" type="submit">
        Sign in
      </Button>
      <div>
        <span>Don't have an account? </span>
        <Link href="/signup">
          <span className="text-default-500">sign up</span>
        </Link>
      </div>
    </form>
  )
}
