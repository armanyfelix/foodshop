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
import Image from 'next/image'
import { useState } from 'react'
import logo from '../../../public/logo_white.png'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<Boolean>(false)

  const menuItems = [
    'Profile',
    'Home',
    'Activity',
    'Orders',
    'Payment Methods',
    'My Settings',
    'Help & Feedback',
    'Log Out',
  ]

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-black">
      <NavbarContent>
        <NavbarMenuToggle aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} className="sm:hidden" />
      </NavbarContent>
      <NavbarContent justify="center">
        <NavbarBrand>
          <Link href="/">
            <Image src={logo} alt="fooshop" width={50} height={50} />
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            History
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
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="/auth" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={index === 2 ? 'primary' : index === menuItems.length - 1 ? 'danger' : 'foreground'}
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
