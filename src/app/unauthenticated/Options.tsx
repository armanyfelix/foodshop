'use client'

import { Button, Link } from '@nextui-org/react'

export default function Options() {
  return (
    <div className="mt-20 flex flex-col  items-center justify-center space-y-4">
      <Button as={Link} color="primary" size="lg" href="/signup" variant="flat">
        Sign Up
      </Button>
      <span className="text-sm">or</span>
      <Link href="/login" size="lg">
        Login
      </Link>
    </div>
  )
}
