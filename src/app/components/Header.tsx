'use client'
import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation' // 使用 next/navigation 的 usePathname 钩子
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname() // 获取当前路径

  const navLinks = [
    { href: '/', label: '主页' },
    { href: '/applications', label: '应用' },
    { href: '/blogs', label: '论坛' },
    { href: '/account', label: '账号' },
  ];

  // 根据当前路径返回导航链接的样式
  const getNavClass = (path: string) =>
    path === pathname
      ? 'inline-flex items-center px-1 pt-1 text-sm font-medium text-red-900 font-bold'
      : 'inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900';

  const getMobileNavClass = (path: string) =>
    path === pathname
      ? 'block px-3 py-2 rounded-md text-base font-medium text-red-900 font-bold'
      : 'block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50';

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="font-bold text-xl">
              Logo
            </Link>
          </div>
          <nav className="hidden md:ml-6 md:flex md:space-x-8">
            {navLinks.map(({ href, label }) => (
              <Link key={href} href={href} className={getNavClass(href)}>
                {label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
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

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map(({ href, label }) => (
              <Link key={href} href={href} className={getMobileNavClass(href)}>
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
