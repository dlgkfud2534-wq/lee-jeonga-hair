'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { label: '상품', href: '/products', isRoute: true },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isProductsPage = pathname === '/products'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md border-b border-lightgray' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-18">
        {/* Logo */}
        <Link href="/" className={`text-xl md:text-2xl font-bold tracking-tight transition-colors ${scrolled ? 'text-black' : 'text-white'}`}>
          LEE JEONGA<span className="text-accent">.</span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.isRoute ? (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-[13px] font-medium tracking-wide uppercase transition-colors ${
                    isProductsPage
                      ? 'text-accent'
                      : scrolled ? 'text-darkgray hover:text-accent' : 'text-white/80 hover:text-accent'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ) : (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`text-[13px] font-medium tracking-wide uppercase transition-colors ${
                    scrolled ? 'text-darkgray hover:text-accent' : 'text-white/80 hover:text-accent'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            )
          )}
          <li>
            <a
              href="/#reservation"
              className="text-[13px] font-semibold text-white bg-accent hover:bg-accent-dark px-6 py-2.5 transition-colors"
            >
              예약하기
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="메뉴 열기"
        >
          <span className={`block w-6 h-0.5 transition-transform ${scrolled ? 'bg-black' : 'bg-white'} ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 transition-opacity ${scrolled ? 'bg-black' : 'bg-white'} ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 transition-transform ${scrolled ? 'bg-black' : 'bg-white'} ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-lightgray px-6 pb-6">
          <ul className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) =>
              link.isRoute ? (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-sm font-medium uppercase tracking-wide transition-colors ${
                      isProductsPage ? 'text-accent' : 'text-darkgray hover:text-accent'
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ) : (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-medium uppercase tracking-wide text-darkgray hover:text-accent transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              )
            )}
            <li>
              <a
                href="/#reservation"
                className="inline-block text-sm font-semibold text-white bg-accent hover:bg-accent-dark px-6 py-2.5 transition-colors"
                onClick={() => setOpen(false)}
              >
                예약하기
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
