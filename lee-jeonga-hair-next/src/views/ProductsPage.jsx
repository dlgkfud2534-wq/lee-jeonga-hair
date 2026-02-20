import Link from 'next/link'
import { allProducts, badgeColors, formatPrice } from '@/data/products'

export default function ProductsPage() {
  const phone = process.env.NEXT_PUBLIC_BUSINESS_PHONE

  return (
    <main className="pt-16">
      {/* Hero Banner */}
      <div className="bg-black py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex items-center gap-2 text-sm text-white/40 mb-6">
            <Link href="/" className="hover:text-accent transition-colors">홈</Link>
            <span>/</span>
            <span className="text-white font-medium">상품</span>
          </div>

          <span className="inline-block px-3 py-1 text-[10px] font-bold tracking-wide uppercase bg-accent text-white mb-4">
            SESEO 식물하나:담다
          </span>
          <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tighter text-white mb-4">
            SESEO 식물하나:담다 두피케어
          </h1>
          <p className="text-base md:text-lg font-light leading-relaxed text-white/50 max-w-2xl">
            이정아 헤어가 직접 사용하고 효과를 검증한 SESEO 식물하나:담다 두피케어 라인입니다.
            <br className="hidden md:block" />
            6단계 루틴으로 건강한 두피와 모발을 경험하세요.
          </p>
        </div>
      </div>

      {/* Products Section */}
      <div className="bg-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          {/* Step Guide */}
          <div className="flex flex-wrap items-center justify-center gap-2 pb-10 mb-10 border-b border-lightgray">
            {allProducts.map((product, i) => (
              <a
                key={product.id}
                href={`#${product.id}`}
                className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium border border-lightgray text-darkgray hover:bg-black hover:text-white hover:border-black transition-all duration-200"
              >
                <span className="font-bold text-accent">
                  {product.step}
                </span>
                {product.name}
              </a>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allProducts.map((product) => (
              <Link
                href={`/products/${product.id}`}
                key={product.id}
                id={product.id}
                className="group border border-lightgray hover:border-accent transition-all duration-300"
              >
                <div className="relative aspect-square overflow-hidden bg-offwhite">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain origin-bottom transition-transform duration-500"
                    style={{ transform: `scale(${product.listScale || product.scale || 2.3}) translateY(${product.listThumbY || product.thumbY || '8%'})` }}
                    loading="lazy"
                  />
                  {product.badge && (
                    <span className={`absolute top-3 left-3 px-3 py-1 text-[10px] font-semibold tracking-wide uppercase ${badgeColors[product.badge] || 'bg-black text-white'}`}>
                      {product.badge}
                    </span>
                  )}
                  <span className="absolute top-3 right-3 px-3 py-1.5 text-[10px] font-bold bg-white text-black border border-lightgray">
                    STEP {product.step}
                  </span>
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-semibold text-accent tracking-wide uppercase">
                      SESEO 식물하나:담다
                    </span>
                    <span className="text-[10px] text-midgray">
                      {product.stepLabel}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-black leading-snug mb-2 group-hover:text-accent transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-midgray mb-3 line-clamp-2">
                    {product.shortDesc}
                  </p>

                  <div className="flex items-baseline gap-2 pt-3 border-t border-lightgray">
                    <span className="text-lg font-bold text-accent">
                      {formatPrice(product.sizes[product.sizes.length - 1].price)}
                    </span>
                    {product.sizes.length > 1 && (
                      <>
                        <span className="text-[10px] text-midgray">~</span>
                        <span className="text-sm font-semibold text-darkgray">
                          {formatPrice(product.sizes[0].price)}
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom Notice */}
          <div className="mt-16 border border-lightgray p-6 md:p-8 text-center">
            <h3 className="text-xl font-semibold text-black mb-2">상품 구매 안내</h3>
            <p className="text-sm text-midgray leading-relaxed max-w-2xl mx-auto mb-4">
              모든 상품은 매장에서 직접 상담 후 구매하실 수 있습니다.
              <br />
              온라인 주문은 카카오톡으로 문의해주세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`tel:${phone}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-white font-semibold hover:bg-accent-dark transition-colors text-sm tracking-wide"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                전화 문의
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#FEE500] text-black font-semibold hover:bg-[#FDD835] transition-colors text-sm tracking-wide"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 3C6.48 3 2 6.58 2 10.9c0 2.78 1.86 5.22 4.65 6.6l-.95 3.52c-.08.3.26.55.52.38l4.2-2.8c.51.07 1.04.1 1.58.1 5.52 0 10-3.58 10-7.8S17.52 3 12 3z" />
                </svg>
                카카오톡 주문
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
