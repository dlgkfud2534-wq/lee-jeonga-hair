import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

export default function Footer() {
  const salonUrl = process.env.NEXT_PUBLIC_SALON_URL || '#'
  const phone = process.env.NEXT_PUBLIC_BUSINESS_PHONE || ''
  const address = process.env.NEXT_PUBLIC_BUSINESS_ADDRESS || ''
  const addressDetail = process.env.NEXT_PUBLIC_BUSINESS_ADDRESS_DETAIL || ''
  const registration = process.env.NEXT_PUBLIC_BUSINESS_REGISTRATION || ''
  const owner = process.env.NEXT_PUBLIC_BUSINESS_OWNER || ''

  return (
    <footer className="bg-black text-white/50">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          {/* Brand */}
          <div>
            <h3 className="text-white font-bold text-lg tracking-tight mb-3">SESEO</h3>
            <p className="text-sm leading-relaxed mb-4">
              식물하나:담다<br />
              두피와 모발, 식물의 힘으로 담다
            </p>
            <a
              href={salonUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-white/70 hover:text-accent-light transition-colors"
            >
              이정아 헤어 방문하기 <ExternalLink size={12} />
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70 mb-4">바로가기</h4>
            <div className="space-y-2.5">
              <Link href="/products" className="block text-sm hover:text-white transition-colors">상품 전체보기</Link>
              <Link href="/cart" className="block text-sm hover:text-white transition-colors">장바구니</Link>
              <Link href="/mypage" className="block text-sm hover:text-white transition-colors">마이페이지</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70 mb-4">고객센터</h4>
            <div className="space-y-2 text-sm">
              {phone && <p>전화: <a href={`tel:${phone}`} className="hover:text-white transition-colors">{phone}</a></p>}
              {address && <p>{address}</p>}
              {addressDetail && <p>{addressDetail}</p>}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xs text-white/30">
            {owner && <span>대표: {owner}</span>}
            {registration && <span className="ml-4">사업자등록번호: {registration}</span>}
          </div>
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} SESEO 식물하나:담다. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
