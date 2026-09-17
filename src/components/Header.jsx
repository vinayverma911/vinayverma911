import { useState } from 'react'
import { HiOutlineMenu, HiOutlineMoon, HiOutlineSun, HiOutlineX } from 'react-icons/hi'
import { Link, NavLink } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'

const links = [
  { to: '/about', label: 'About' },
  { to: '/skills', label: 'Skills' },
  { to: '/work', label: 'Work' },
  { to: '/contact', label: 'Contact' },
]

function navLinkClass({ isActive }) {
  return `text-[16px] font-medium ${
    isActive
      ? 'text-gray-900 dark:text-gray-50'
      : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'
  }`
}

function mobileNavLinkClass({ isActive }) {
  return `rounded-lg px-2 py-2.5 text-[16px] font-medium ${
    isActive
      ? 'bg-gray-50 text-gray-900 dark:bg-gray-800 dark:text-gray-50'
      : 'text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800'
  }`
}

export default function Header() {
  const [isDark, setIsDark] = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4 md:px-20">
        <Link to="/" className="font-bold tracking-tight text-gray-900 dark:text-gray-50">
          {'<VV />'}
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={navLinkClass}>
              {link.label}
            </NavLink>
          ))}
          <button
            type="button"
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle dark mode"
            className="rounded-lg p-1.5 text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
          >
            {isDark ? <HiOutlineSun size={22} /> : <HiOutlineMoon size={22} />}
          </button>
          <a
            href="/resume.pdf"
            download
            className="rounded-xl bg-gray-900 px-4 py-1.5 text-[16px] font-medium text-gray-50 hover:bg-gray-800 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-white"
          >
            Download CV
          </a>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle dark mode"
            className="rounded-lg p-1.5 text-gray-600 dark:text-gray-400"
          >
            {isDark ? <HiOutlineSun size={22} /> : <HiOutlineMoon size={22} />}
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="rounded-lg p-1.5 text-gray-900 dark:text-gray-50"
          >
            {menuOpen ? <HiOutlineX size={24} /> : <HiOutlineMenu size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="flex flex-col gap-1 border-t border-gray-100 bg-white px-6 py-4 md:hidden dark:border-gray-800 dark:bg-gray-900">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={mobileNavLinkClass}
            >
              {link.label}
            </NavLink>
          ))}
          <a
            href="/resume.pdf"
            download
            className="mt-2 rounded-xl bg-gray-900 px-4 py-2.5 text-center text-[16px] font-medium text-gray-50 dark:bg-gray-50 dark:text-gray-900"
          >
            Download CV
          </a>
        </nav>
      )}
    </header>
  )
}
