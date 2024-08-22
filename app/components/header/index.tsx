'use client'

import Image from 'next/image'
import Link from 'next/link'
import { NavItem } from './nav-item'

const NAV_ITEMS = [
  {
    label: 'Home',
    href: '/',
  },
{
   label: 'Sobre mim',
   href: '/about',
 },
  {
    label: 'Projetos',
    href: '/projects',
    // href: 'https://github.com/Ruan-F-M?tab=repositories',
  },
]

export const Header = () => {
  return (
    <header className="absolute top-0 z-10 h-24 w-full flex items-center justify-center">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <Image
            width={58}
            height={49}
            src="/images/logo-dev.png"
            alt="Logo Dev"
          />
        </Link>

        <nav className="flex items-center gap-4 sm:gap-10">
          {NAV_ITEMS.map((item) => (
            <NavItem {...item} key={item.label} />
          ))}
        </nav>
      </div>
    </header>
  )
}
