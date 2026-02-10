'use client'

import { useState } from 'react'
import Link from 'next/link'
import { getProductById, formatPrice, seseoProducts } from '@/data/products'

export default function ProductDetailPage({ id }) {
  const phone = process.env.NEXT_PUBLIC_BUSINESS_PHONE
  const product = getProductById(id)
  const [selectedSize, setSelectedSize] = useState(0)

  if (!product) {
    return (
      <main className="pt-16 min-h-screen bg-cream flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-dark-brown mb-4">상품을 찾을 수 없습니다</h1>
          <Link
            href="/products"
            className="text-warm-brown font-semibold hover:underline"
          >
            상품 목록으로 돌아가기
          </Link>
        </div>
      </main>
    )
  }

  const relatedProducts = seseoProducts
    .filter((p) => p.id !== product.id)
    .slice(0, 3)

  return (
    <main className="pt-16">
      {/* Breadcrumb */}
      <div className="bg-beige border-b border-caramel/10">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-4">
          <div className="flex items-center gap-2 text-sm text-dark-brown/50">
            <Link href="/" className="hover:text-warm-brown transition-colors">홈</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-warm-brown transition-colors">상품</Link>
            <span>/</span>
            <span className="text-dark-brown font-medium truncate">{product.name}</span>
          </div>
        </div>
      </div>

      {/* ===== Section 1: Product Hero ===== */}
      <div className="bg-cream py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Image */}
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden bg-[#f0ece7] border border-caramel/10">
                <img
                  src={product.sizes[selectedSize]?.image || product.image}
                  alt={product.name}
                  className="w-full h-full object-contain origin-bottom transition-all duration-300"
                  style={{ transform: `scale(${product.sizes[selectedSize]?.scale || product.scale || 2.3}) translateY(${product.sizes[selectedSize]?.thumbY || product.thumbY || '8%'})` }}
                />
              </div>
              {product.badge && (
                <span className={`absolute top-5 left-5 px-4 py-1.5 rounded-full text-sm font-semibold shadow-md ${
                  {
                    '베스트': 'bg-warm-brown text-white',
                    '추천': 'bg-caramel text-white',
                    '인기': 'bg-golden-sand text-dark-brown',
                    '프리미엄': 'bg-dark-brown text-golden-sand',
                    '두피케어': 'bg-emerald-700 text-white',
                  }[product.badge] || 'bg-warm-brown text-white'
                }`}>
                  {product.badge}
                </span>
              )}
              <span className="absolute top-5 right-5 px-3 py-1.5 rounded-full text-sm font-bold bg-white/90 text-dark-brown shadow-md">
                SESEO 식물하나:담다
              </span>
            </div>

            {/* Info */}
            <div className="flex flex-col">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-sm font-semibold text-caramel tracking-wide">
                  {product.brand}
                </span>
                {product.stepLabel && (
                  <span className="text-xs font-medium text-dark-brown/40 bg-beige px-3 py-1 rounded-full">
                    {product.stepLabel}
                  </span>
                )}
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-dark-brown leading-tight tracking-tight mb-4">
                {product.name}
              </h1>
              <p className="text-lg text-dark-brown/70 leading-relaxed mb-6">
                {product.shortDesc}
              </p>
              <div className="border-t border-caramel/15 my-2" />

              {/* Size Selector */}
              <div className="py-6">
                <h2 className="text-sm font-semibold text-dark-brown/50 uppercase tracking-wider mb-3">
                  용량 선택
                </h2>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedSize(i)}
                      className={`px-5 py-3 rounded-xl text-sm font-medium border-2 transition-all duration-200 ${
                        selectedSize === i
                          ? 'border-warm-brown bg-warm-brown/5 text-warm-brown'
                          : 'border-caramel/20 text-dark-brown/60 hover:border-caramel/40'
                      }`}
                    >
                      <span className="block font-semibold">{size.volume}</span>
                      <span className="block mt-0.5">{formatPrice(size.price)}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price & CTA */}
              <div className="mt-auto pt-6 border-t border-caramel/15">
                <div className="flex items-end justify-between mb-5">
                  <div>
                    <p className="text-sm text-dark-brown/50 mb-1">선택 상품 가격</p>
                    <p className="text-3xl font-extrabold text-warm-brown">
                      {formatPrice(product.sizes[selectedSize].price)}
                    </p>
                  </div>
                  <p className="text-sm text-dark-brown/40">
                    {product.sizes[selectedSize].volume}
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={`tel:${phone}`}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-warm-brown text-white rounded-full font-semibold hover:bg-warm-brown-light transition-colors text-base"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    전화 주문
                  </a>
                  <a
                    href="#"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#FEE500] text-dark-brown rounded-full font-semibold hover:bg-[#FDD835] transition-colors text-base"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 3C6.48 3 2 6.58 2 10.9c0 2.78 1.86 5.22 4.65 6.6l-.95 3.52c-.08.3.26.55.52.38l4.2-2.8c.51.07 1.04.1 1.58.1 5.52 0 10-3.58 10-7.8S17.52 3 12 3z" />
                    </svg>
                    카카오톡 주문
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Section 2: 제품 상세 설명 ===== */}
      <div className="bg-beige py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <p className="text-xs font-medium tracking-wider uppercase text-caramel mb-3">Product Details</p>
            <h2 className="text-2xl md:text-4xl font-bold text-dark-brown leading-tight">제품 상세 정보</h2>
          </div>
          <div className="bg-cream rounded-3xl p-8 md:p-12 border border-caramel/10">
            <p className="text-base md:text-lg text-dark-brown/80 leading-relaxed md:leading-loose">
              {product.description}
            </p>
          </div>
        </div>
      </div>

      {/* ===== Section 3: 주요 특징 ===== */}
      {product.features && product.features.length > 0 && (
        <div className="bg-cream py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 md:px-10">
            <div className="text-center mb-12">
              <p className="text-xs font-medium tracking-wider uppercase text-caramel mb-3">Key Features</p>
              <h2 className="text-2xl md:text-4xl font-bold text-dark-brown leading-tight">주요 특징</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {product.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-4 bg-beige rounded-2xl p-6 border border-caramel/10">
                  <div className="w-10 h-10 rounded-full bg-warm-brown/10 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-warm-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-base font-semibold text-dark-brown leading-snug">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ===== Section 4: 사용 방법 ===== */}
      {product.usage && (
        <div className="bg-beige py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 md:px-10">
            <div className="text-center mb-12">
              <p className="text-xs font-medium tracking-wider uppercase text-caramel mb-3">How to Use</p>
              <h2 className="text-2xl md:text-4xl font-bold text-dark-brown leading-tight">사용 방법</h2>
            </div>
            <div className="bg-cream rounded-3xl p-8 md:p-12 border border-caramel/10">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-warm-brown/10 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-warm-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-base md:text-lg text-dark-brown/80 leading-relaxed md:leading-loose">{product.usage}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ===== Section 5: 용량 및 가격 ===== */}
      <div className="bg-cream py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <p className="text-xs font-medium tracking-wider uppercase text-caramel mb-3">Price</p>
            <h2 className="text-2xl md:text-4xl font-bold text-dark-brown leading-tight">용량 및 가격</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {product.sizes.map((size, i) => (
              <div key={i} className="bg-beige rounded-2xl p-6 md:p-8 border border-caramel/10 text-center">
                <p className="text-sm text-caramel font-medium mb-2">{product.name}</p>
                <p className="text-2xl md:text-3xl font-extrabold text-dark-brown mb-1">{size.volume}</p>
                <p className="text-xl font-bold text-warm-brown">{formatPrice(size.price)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== Section 6: 구매 안내 ===== */}
      <div className="bg-beige py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <div className="bg-gradient-to-br from-warm-brown to-warm-brown-light rounded-3xl p-8 md:p-14 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">구매를 원하시나요?</h2>
            <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-xl mx-auto mb-8">
              모든 상품은 매장에서 직접 상담 후 구매하실 수 있습니다.
              <br />
              온라인 주문은 카카오톡으로 문의해주세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`tel:${phone}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-warm-brown rounded-full font-semibold hover:bg-cream transition-colors text-base"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                전화 문의
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#FEE500] text-dark-brown rounded-full font-semibold hover:bg-[#FDD835] transition-colors text-base"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 3C6.48 3 2 6.58 2 10.9c0 2.78 1.86 5.22 4.65 6.6l-.95 3.52c-.08.3.26.55.52.38l4.2-2.8c.51.07 1.04.1 1.58.1 5.52 0 10-3.58 10-7.8S17.52 3 12 3z" />
                </svg>
                카카오톡 주문
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Section 7: 다른 제품 추천 ===== */}
      {relatedProducts.length > 0 && (
        <div className="bg-cream py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-6 md:px-10">
            <div className="text-center mb-12">
              <p className="text-xs font-medium tracking-wider uppercase text-caramel mb-3">More Products</p>
              <h2 className="text-2xl md:text-4xl font-bold text-dark-brown leading-tight">함께 사용하면 좋은 제품</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedProducts.map((rp) => (
                <Link
                  key={rp.id}
                  href={`/products/${rp.id}`}
                  className="group bg-beige rounded-2xl overflow-hidden border border-caramel/10 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="relative aspect-square overflow-hidden bg-[#f0ece7]">
                    <img
                      src={rp.image}
                      alt={rp.name}
                      className="w-full h-full object-contain origin-bottom transition-transform duration-500"
                      style={{ transform: `scale(${rp.scale || 2.3}) translateY(${rp.thumbY || '8%'})` }}
                      loading="lazy"
                    />
                    <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-bold bg-white/90 text-dark-brown shadow-sm">
                      STEP {rp.step}
                    </span>
                  </div>
                  <div className="p-5">
                    <p className="text-xs text-caramel font-medium mb-1">{rp.stepLabel}</p>
                    <h3 className="text-base font-semibold text-dark-brown group-hover:text-warm-brown transition-colors mb-1">
                      {rp.name}
                    </h3>
                    <p className="text-sm text-dark-brown/60 line-clamp-1">{rp.shortDesc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ===== Back to Products ===== */}
      <div className="bg-beige py-12">
        <div className="max-w-6xl mx-auto px-6 md:px-10 text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-base font-semibold text-warm-brown border-2 border-warm-brown/30 hover:border-warm-brown hover:bg-warm-brown/5 px-8 py-3 rounded-full transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            전체 상품 보기
          </Link>
        </div>
      </div>
    </main>
  )
}
