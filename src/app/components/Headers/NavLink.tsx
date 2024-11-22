import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavLinkProps {
  href: string
  label: string
  isMobile?: boolean
  fontSize?: string
}

export default function NavLink({ href, label, isMobile = false, fontSize }: NavLinkProps) {
  const pathname = usePathname()

  const getNavClass = (path: string) =>
    `${isMobile ? 'block px-3 py-2 rounded-md' : 'inline-flex items-center px-1 pt-1'} 
     font-medium ${fontSize || (isMobile ? 'text-base' : 'text-sm')} 
     ${path === pathname 
       ? 'text-blue-600 font-bold' 
       : 'text-gray-500 hover:text-purple-600'} 
     ${isMobile ? 'hover:bg-gray-50' : ''}`

  return (
    <Link href={href} className={getNavClass(href)}>
      {label}
    </Link>
  )
}

