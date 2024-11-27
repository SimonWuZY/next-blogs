'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'
import { Avatar } from './Avatar'
import { LoginModal } from './LoginModal'
import { Button } from "@/app/components/ui/button"
import "./styles.css"

const navLinks = [
  { href: '/', label: '首页' },
  { href: '/apps', label: '助理' },
  { href: '/blogs', label: '博客' },
  { href: '/drafts', label: '撰写' },
]

export default function Header() {
  const pathname = usePathname()
  const [isVisible, setIsVisible] = useState(true)
  const [isMounted, setIsMounted] = useState(false)
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const prevScrollY = useRef(0)

  useEffect(() => {
    setIsMounted(true)

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const headerHeight = headerRef.current?.offsetHeight || 0

      // Scroll behavior
      if (currentScrollY < prevScrollY.current || currentScrollY <= headerHeight) {
        if (!isVisible) setIsVisible(true) // Only update if necessary
      } else if (currentScrollY > prevScrollY.current && currentScrollY > headerHeight) {
        if (isVisible) setIsVisible(false) // Only update if necessary
      }

      prevScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [isVisible]) // Dependency on isVisible to avoid unnecessary renders

  if (!isMounted) {
    return null
  }

  return (
    <header
      ref={headerRef}
      className={`fixed w-full z-50 bg-white py-4 transition-transform duration-300 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="container mx-auto px-4 flex justify-center items-center">
        {/* Left Avatar */}
        <div className="ml-[250px]">
          <Avatar />
        </div>

        {/* Navigation */}
        <nav className="flex-grow text-center">
          <ul className="nav-container flex justify-center items-center space-x-10 max-w-[500px] mx-auto px-4">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`text-lg font-medium transition-colors relative ${pathname === href
                    ? 'text-purple-600 font-semibold'
                    : 'text-blue-600 hover:text-purple-500'}`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Avatar and Login Button */}
        <div className="mr-[120px] flex items-center space-x-4">
          <Avatar />
          <Button onClick={() => setIsLoginModalOpen(true)}>登录</Button>
        </div>
      </div>

      {/* Login Modal */}
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
    </header>
  )
}
