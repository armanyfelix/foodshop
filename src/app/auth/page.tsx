import AuthForm from './auth-form'

export default function Auth() {
  return (
    <div className="p-8">
      <div className="mb-5">
        <h1 className="text-center text-4xl">Registrate</h1>
      </div>
      <div>
        <AuthForm />
      </div>
    </div>
  )
}
