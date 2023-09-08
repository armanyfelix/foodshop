import { revalidatePath } from 'next/cache'
import Form from './Form'

export default function signup() {
  async function onSignup(e: FormData) {
    'use server'

    // const email = e.get('email')
    // const password = e.get('password')
    try {
      const res = await fetch('http://localhost:3000/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'form-data' },
        body: e,
      })
      revalidatePath('/')
      return res
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="h-screen w-full p-6">
      <h1 className="mb-9 text-center text-5xl font-bold text-default-500">Sign Up</h1>
      <Form onSignup={onSignup} />
    </div>
  )
}
