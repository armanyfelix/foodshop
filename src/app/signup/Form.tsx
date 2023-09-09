'use client'

import { useUserStore } from '@/store/session'
import LockIcon from '@/svg/LockIcon'
import MailIcon from '@/svg/MainIcon'
import { Button, Input, Link } from '@nextui-org/react'
import { revalidatePath } from 'next/cache'
import { useRouter } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'
import { experimental_useFormStatus as useFormStatus } from 'react-dom'

export default function Form() {
  const user = useUserStore((state: any) => state.user)
  const router = useRouter()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [sucess, setSuccess] = useState<boolean | null>(null)
  const { pending } = useFormStatus()

  const validationEmail = useMemo(() => {
    if (email === '') return undefined
    return email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i) ? 'valid' : 'invalid'
  }, [email])

  const validationPassword = useMemo(() => {
    if (password === '') return undefined
    return password.length >= 8 ? 'valid' : 'invalid'
  }, [password])

  async function handleSignUp(formData: FormData) {
    try {
      const res = await fetch('/auth/signup', {
        method: 'POST',
        // headers: { 'Content-Type': 'multipart/form-data;' },
        body: formData,
      })
      if (res.status === 500) {
        setSuccess(false)
      } else {
        setSuccess(true)
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
    <form action={handleSignUp} className="mx-auto max-w-xl space-y-6 text-center">
      {sucess && (
        <div className="mt-4 rounded-xl border-2 border-success-600 p-2 text-center text-success-600">
          <h2 className="text-lg font-semibold">Sign up success!</h2>
          <p className="text-sm">Please check your email to confirm your account.</p>
        </div>
      )}
      {sucess === false && (
        <div className="mt-4 rounded-xl border-2 border-danger-600 p-2 text-center text-danger-600">
          <h2 className="text-lg font-semibold">Sign up failed</h2>
          <p className="text-sm">Something went wrong. Please check your email and password again.</p>
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
