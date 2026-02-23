'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ShoppingBag, Menu, X, User } from 'lucide-react'
import { useAuth } from '@/contexts/AuthContext'
import { useCart } from '@/contexts/CartContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const { user } = useAuth()
  const { cartCount } = useCart()

  const hasDarkHero = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  const isDark = hasDarkHero && !scrolled
  const bgClass = scrolled || !hasDarkHero
    ? 'bg-white/95 backdrop-blur-md shadow-sm'
    : 'bg-transparent'
  const textClass = isDark ? 'text-white' : 'text-black'
  const logoColor = isDark ? 'text-white' : 'text-accent'

  const navLinks = [
    { href: '/products', label: '상품' },
    { href: '/cart', label: '장바구니' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${bgClass}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between h-18 md:h-22">
          {/* Logo - 다크 히어로: 흰색 로고, 라이트: 민트색 로고 */}
          <Link href="/" className="flex-shrink-0">
            <img
              src={isDark ? '/images/logo/logo_no_bg.png' : '/images/logo/logo_no_bg_cl.png'}
              alt="SESEO 식물하나:담다"
              className="h-18 md:h-20 w-auto transition-all duration-300"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium uppercase tracking-wide transition-colors ${
                  pathname === link.href ? 'text-accent' : `${textClass} hover:text-accent`
                }`}
              >
                {link.label}
              </Link>
            ))}

            {user ? (
              <Link
                href="/mypage"
                className={`text-sm font-medium uppercase tracking-wide transition-colors ${
                  pathname === '/mypage' ? 'text-accent' : `${textClass} hover:text-accent`
                }`}
              >
                {user.name}님
              </Link>
            ) : (
              <Link
                href="/login"
                className={`text-sm font-medium uppercase tracking-wide transition-colors ${
                  pathname === '/login' ? 'text-accent' : `${textClass} hover:text-accent`
                }`}
              >
                로그인
              </Link>
            )}

            {/* Cart Icon */}
            <Link href="/cart" className={`relative ${textClass} hover:text-accent transition-colors`}>
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-accent text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {cartCount > 99 ? '99+' : cartCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile: Cart + Hamburger */}
          <div className="flex md:hidden items-center gap-4">
            <Link href="/cart" className={`relative ${textClass} hover:text-accent transition-colors`}>
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-accent text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {cartCount > 99 ? '99+' : cartCount}
                </span>
              )}
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`${textClass} transition-colors`}
              aria-label="메뉴 열기"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-lightgray">
          <div className="px-6 py-4 space-y-3">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`block text-sm font-medium py-2 transition-colors ${
                  pathname === link.href ? 'text-accent' : 'text-black hover:text-accent'
                }`}
              >
                {link.label}
              </Link>
            ))}
            {user ? (
              <Link
                href="/mypage"
                className={`block text-sm font-medium py-2 transition-colors ${
                  pathname === '/mypage' ? 'text-accent' : 'text-black hover:text-accent'
                }`}
              >
                <span className="flex items-center gap-2">
                  <User size={16} />
                  {user.name}님
                </span>
              </Link>
            ) : (
              <Link
                href="/login"
                className="block text-sm font-medium py-2 text-black hover:text-accent transition-colors"
              >
                로그인
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}
