'use client'

import {
  Avatar,
  AvatarIcon,
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
import { useRouter } from 'next/navigation'
import { useState } from 'react'
// import logoDark from '../../../public/logo_dark.png'
import type { Database } from '@/lib/database.types'

interface Props {
  session: object
}

export default function Header({ session }: Props) {
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
            {/* <Image src={logoLight} alt="fooshop" width={50} height={50} /> */}
            <h1 className="-500 bg-gradient-to-br from-indigo-400 to-orange-500 bg-clip-text font-mono text-xl font-bold text-transparent">
              FOODSHOP
            </h1>
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
        {session ? (
          <Avatar
            size="sm"
            icon={<AvatarIcon />}
            classNames={{
              base: 'bg-zinc-400',
              icon: 'text-black',
            }}
          />
        ) : (
          <>
            <NavbarItem className="hidden lg:flex">
              <Link href="/login">Login</Link>
            </NavbarItem>
            <NavbarItem>
              <Button as={Link} color="primary" href="/signup" variant="flat">
                Sign Up
              </Button>
            </NavbarItem>
          </>
        )}
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
