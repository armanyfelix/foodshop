'use client'

import { Button } from '@nextui-org/react'
import Link from 'next/link'

export default function CallToAction() {
  return (
    <Button
      size="lg"
      radius="lg"
      className=" bg-gradient-to-tr from-orange-700 to-amber-700 text-white shadow-lg"
    >
      <Link href="/create">Start preparing your food</Link>
    </Button>
  )
}
