'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useAuth } from '@/contexts/AuthContext'

const shopUrl = process.env.NEXT_PUBLIC_SHOP_URL || 'https://seseo-shop.vercel.app'

const navLinks = [
  { label: '온라인 구매', href: shopUrl, isExternal: true },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const { user } = useAuth()

  // 홈만 어두운 히어로 섹션이 있음
  const hasDarkHero = pathname === '/'
  // 밝은 배경 페이지이거나 스크롤한 경우 어두운 텍스트 사용
  const useDark = scrolled || !hasDarkHero

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      useDark ? 'bg-white/95 backdrop-blur-md border-b border-lightgray' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-18">
        {/* Logo */}
        <Link href="/" className={`text-xl md:text-2xl font-bold tracking-tight transition-colors ${useDark ? 'text-black' : 'text-white'}`}>
          LEE JEONGA<span className="text-accent">.</span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.isExternal ? (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-[13px] font-medium tracking-wide uppercase transition-colors ${
                    useDark ? 'text-darkgray hover:text-accent' : 'text-white/80 hover:text-accent'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ) : link.isRoute ? (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-[13px] font-medium tracking-wide uppercase transition-colors ${
                    isProductsPage
                      ? 'text-accent'
                      : useDark ? 'text-darkgray hover:text-accent' : 'text-white/80 hover:text-accent'
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
                    useDark ? 'text-darkgray hover:text-accent' : 'text-white/80 hover:text-accent'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            )
          )}
          {user?.isAdmin && (
            <li>
              <Link
                href="/admin"
                className={`text-[13px] font-medium tracking-wide uppercase transition-colors ${
                  pathname === '/admin'
                    ? 'text-accent'
                    : useDark ? 'text-darkgray hover:text-accent' : 'text-white/80 hover:text-accent'
                }`}
              >
                관리자
              </Link>
            </li>
          )}
          <li>
            {user ? (
              <Link
                href="/mypage"
                className={`text-[13px] font-medium tracking-wide transition-colors ${
                  useDark ? 'text-darkgray hover:text-accent' : 'text-white/80 hover:text-accent'
                }`}
              >
                {user.name}님
              </Link>
            ) : (
              <Link
                href="/login"
                className={`text-[13px] font-medium tracking-wide transition-colors ${
                  useDark ? 'text-darkgray hover:text-accent' : 'text-white/80 hover:text-accent'
                }`}
              >
                로그인
              </Link>
            )}
          </li>
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
          <span className={`block w-6 h-0.5 transition-transform ${useDark ? 'bg-black' : 'bg-white'} ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 transition-opacity ${useDark ? 'bg-black' : 'bg-white'} ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 transition-transform ${useDark ? 'bg-black' : 'bg-white'} ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-lightgray px-6 pb-6">
          <ul className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) =>
              link.isExternal ? (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium uppercase tracking-wide text-darkgray hover:text-accent transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ) : link.isRoute ? (
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
            {user?.isAdmin && (
              <li>
                <Link
                  href="/admin"
                  className={`text-sm font-medium uppercase tracking-wide transition-colors ${
                    pathname === '/admin' ? 'text-accent' : 'text-darkgray hover:text-accent'
                  }`}
                  onClick={() => setOpen(false)}
                >
                  관리자
                </Link>
              </li>
            )}
            <li>
              {user ? (
                <Link
                  href="/mypage"
                  className="text-sm font-medium uppercase tracking-wide text-darkgray hover:text-accent transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {user.name}님
                </Link>
              ) : (
                <Link
                  href="/login"
                  className="text-sm font-medium uppercase tracking-wide text-darkgray hover:text-accent transition-colors"
                  onClick={() => setOpen(false)}
                >
                  로그인
                </Link>
              )}
            </li>
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
