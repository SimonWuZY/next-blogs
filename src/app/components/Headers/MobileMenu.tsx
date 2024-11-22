import NavLink from './NavLink'

interface MobileMenuProps {
  isOpen: boolean
  navLinks: Array<{ href: string; label: string }>
}

export default function MobileMenu({ isOpen, navLinks }: MobileMenuProps) {
  if (!isOpen) return null

  return (
    <div className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        {navLinks.map(({ href, label }) => (
          <NavLink key={href} href={href} label={label} isMobile />
        ))}
      </div>
    </div>
  )
}

