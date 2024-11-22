'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import NavLink from './NavLink'
import MobileMenu from './MobileMenu'
import './styles.css'

const navLinks = [
  { href: '/', label: '主页', fontSize: 'text-lg' },
  { href: '/apps', label: '应用', fontSize: 'text-lg' },
  { href: '/blogs', label: '论坛', fontSize: 'text-lg' },
  { href: '/account', label: '账号', fontSize: 'text-lg' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md fixed w-full z-50 flowing-gradient header-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="font-bold text-xl text-blue-600">
              Logo
            </Link>
          </div>
          <nav className="hidden md:ml-6 md:flex md:space-x-8">
            {navLinks.map(({ href, label, fontSize }) => (
              <NavLink key={href} href={href} label={label} fontSize={fontSize} />
            ))}
          </nav>
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      <MobileMenu isOpen={isMenuOpen} navLinks={navLinks} />
    </header>
  )
}

