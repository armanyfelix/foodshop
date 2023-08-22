import Form from './Form'

export default function signup() {
  const handleSignUp = async (e: any) => {
    'use server'

    const email = e.get('email')
    const password = e.get('password')

    fetch('/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className="h-screen w-full p-6">
      {/* <input name="email" onChange={(e) => setEmail(e.target.value)} value={email} />
      <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} value={password} />
      <button onClick={handleSignUp}>Sign up</button> */}
      {/* <button onClick={handleSignIn}>Sign in</button> */}
      {/* <button onClick={handleSignOut}>Sign out</button> */}
      <h1 className="mt-24 w-full pb-28 text-center text-6xl font-bold text-default-500">Sign Up</h1>
      <Form handleSignUp={handleSignUp} />
    </div>
  )
}
