'use client'

import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
// import { useTheme } from 'next-themes'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
// import logoDark from '../../../public/logo_dark.png'
import logoLight from '../../../public/logo_light.png'

import type { Database } from '@/lib/database.types'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<Boolean>(false)
  // const { theme, setTheme } = useTheme()
  const router = useRouter()
  const supabase = createClientComponentClient<Database>()

  const menuItems = [
    'Profile',
    'Home',
    'Activity',
    'Orders',
    'Payment Methods',
    'My Settings',
    'Help & Feedback',
  ]

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} className="sm:hidden" />
      </NavbarContent>
      <NavbarContent justify="center">
        <Link href="/">
          <NavbarBrand>
            {/* {theme && ( */}
            <Image src={logoLight} alt="fooshop" width={50} height={50} />
            {/* )} */}
          </NavbarBrand>
        </Link>
      </NavbarContent>
      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Orders
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Account
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="/login">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="/signup" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link color="foreground" className="w-full" href="#" size="lg">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
          <Link color="danger" className="w-full" href="#" size="lg">
            Log out
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  )
}
