'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import './styles.css'

const navLinks = [
  { href: '/', label: '首页' },
  { href: '/apps', label: '助理' },
  { href: '/blogs', label: '博客' },
  { href: '/account', label: '账号' },
]

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="fixed w-full z-50 bg-transparent py-4">
      <div className="max-w-[500px] mx-auto px-4">
        <nav className="nav-container flex justify-center items-center">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`px-4 py-2 text-lg font-medium transition-colors relative
                ${pathname === href 
                  ? 'text-purple-600 font-semibold' 
                  : 'text-blue-600 hover:text-purple-500'
                }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

