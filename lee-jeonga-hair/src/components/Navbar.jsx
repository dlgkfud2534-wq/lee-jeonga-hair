import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { label: '서비스', href: '/#services' },
  { label: '상품', href: '/products', isRoute: true },
  { label: '스타일리스트', href: '/#stylists' },
  { label: '갤러리', href: '/#gallery' },
  { label: '후기', href: '/#reviews' },
  { label: '오시는 길', href: '/#location' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const isProductsPage = location.pathname === '/products'

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-md border-b border-caramel/20">
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="text-xl md:text-2xl font-bold text-warm-brown tracking-tight">
          이정아 헤어
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.isRoute ? (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className={`text-sm font-medium transition-colors ${
                    isProductsPage
                      ? 'text-warm-brown font-semibold'
                      : 'text-dark-brown/70 hover:text-warm-brown'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ) : (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-dark-brown/70 hover:text-warm-brown transition-colors"
                >
                  {link.label}
                </a>
              </li>
            )
          )}
          <li>
            <a
              href="/#reservation"
              className="text-sm font-semibold text-white bg-warm-brown hover:bg-warm-brown-light px-5 py-2 rounded-full transition-colors"
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
          <span className={`block w-6 h-0.5 bg-dark-brown transition-transform ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-dark-brown transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-dark-brown transition-transform ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-cream/95 backdrop-blur-md border-t border-caramel/20 px-6 pb-6">
          <ul className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) =>
              link.isRoute ? (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className={`text-base font-medium transition-colors ${
                      isProductsPage
                        ? 'text-warm-brown font-semibold'
                        : 'text-dark-brown/80 hover:text-warm-brown'
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
                    className="text-base font-medium text-dark-brown/80 hover:text-warm-brown transition-colors"
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
                className="inline-block text-base font-semibold text-white bg-warm-brown hover:bg-warm-brown-light px-6 py-2.5 rounded-full transition-colors"
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
