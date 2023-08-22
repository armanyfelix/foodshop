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
import { useRouter } from 'next/navigation'
import { useState } from 'react'
// import logoDark from '../../../public/logo_dark.png'
// import { lorelei } from '@dicebear/collection'
// import { createAvatar } from '@dicebear/core'

import type { Database } from '@/types/database.types'

interface Props {
  session: object | null
}

export default function Header({ session }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState<Boolean>(false)
  // const { theme, setTheme } = useTheme()
  const router = useRouter()
  const supabase = createClientComponentClient<Database>()

  // const avatar = useMemo(() => {
  //   return createAvatar(lorelei, {
  //     size: 228,
  //     // ... other options
  //   }).toDataUriSync()
  // }, [])

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
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      classNames={{
        base: 'bg-transparent',
        // item: [
        //   'flex',
        //   'relative',
        //   'h-full',
        //   'items-center',
        //   "data-[active=true]:after:content-['']",
        //   'data-[active=true]:after:absolute',
        //   'data-[active=true]:after:bottom-0',
        //   'data-[active=true]:after:left-0',
        //   'data-[active=true]:after:right-0',
        //   'data-[active=true]:after:h-[2px]',
        //   'data-[active=true]:after:rounded-[2px]',
        //   'data-[active=true]:after:bg-primary',
        // ],
      }}
    >
      <NavbarContent className="sm:hidden">
        <NavbarMenuToggle aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} />
      </NavbarContent>
      <NavbarContent justify="start">
        <Link href="/">
          <NavbarBrand>
            <h1 className="bg-gradient-to-br from-orange-400 to-indigo-400 bg-clip-text font-mono text-xl font-bold text-transparent sm:text-4xl">
              COOKSHOP
            </h1>
          </NavbarBrand>
        </Link>
      </NavbarContent>
      {/* <NavbarContent className="hidden gap-4 sm:flex" justify="center">
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
          <Link color="foreground" href="/account">
            Account
          </Link>
        </NavbarItem>
      </NavbarContent> */}
      {/* 
      <NavbarContent as="div" className="items-center" justify="center">
        <Search />
      </NavbarContent>

    */}
      <NavbarContent justify="end">
        {/*
        {session ? (
          <Dropdown placement="bottom-end">
            <DropdownTrigger className="p-2">
              <Avatar
                // isBordered
                as="button"
                radius="lg"
                className="transition-transform"
                color="primary"
                name="Jason Hughes"
                size="sm"
                src={avatar}
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">zoey@example.com</p>
              </DropdownItem>
              <DropdownItem key="settings">My Settings</DropdownItem>
              <DropdownItem key="team_settings">Team Settings</DropdownItem>
              <DropdownItem key="analytics">Analytics</DropdownItem>
              <DropdownItem key="system">System</DropdownItem>
              <DropdownItem key="configurations">Configurations</DropdownItem>
              <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
              <DropdownItem key="logout" color="danger">
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        ) : (
          <> */}
        <NavbarItem className="hidden md:flex">
          <Link href="/signin">Sign In</Link>
        </NavbarItem>
        <NavbarItem className="scale-75 md:scale-100">
          <Button as={Link} size="lg" color="primary" href="/signup" radius="lg" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
        {/*    </>
  )
}  */}
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
          <button type="button" className="text-danger" onClick={handleSignOut}>
            Log out
          </button>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  )
}
