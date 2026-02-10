import Link from 'next/link'
import { seseoProducts, badgeColors, formatPrice } from '@/data/products'

const featured = seseoProducts.slice(0, 4)

export default function Products() {
  return (
    <section id="products" className="py-16 md:py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs font-medium tracking-wider uppercase text-caramel mb-3">
            SESEO 식물하나:담다
          </p>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight text-dark-brown mb-4">
            추천 상품
          </h2>
          <p className="text-lg md:text-xl font-normal leading-relaxed text-dark-brown/70 max-w-2xl mx-auto">
            이정아 헤어가 엄선한 SESEO 식물하나:담다 두피케어 제품
          </p>
        </div>

        {/* Featured Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product) => (
            <Link
              href={`/products/${product.id}`}
              key={product.id}
              className="group bg-beige rounded-2xl overflow-hidden border border-caramel/10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative aspect-square overflow-hidden bg-[#f0ece7]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain origin-bottom transition-transform duration-500"
                  style={{ transform: `scale(${product.scale || 2.3}) translateY(${product.thumbY || '8%'})` }}
                  loading="lazy"
                />
                {product.badge && (
                  <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold shadow-sm ${badgeColors[product.badge] || 'bg-warm-brown text-white'}`}>
                    {product.badge}
                  </span>
                )}
                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-bold bg-white/90 text-dark-brown shadow-sm">
                  STEP {product.step}
                </span>
              </div>
              <div className="p-5">
                <p className="text-xs text-caramel font-medium tracking-wide mb-1">
                  {product.stepLabel}
                </p>
                <h3 className="text-base font-semibold text-dark-brown leading-snug mb-2 group-hover:text-warm-brown transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-lg font-bold text-warm-brown">
                    {formatPrice(product.sizes[product.sizes.length - 1].price)}
                  </span>
                  {product.sizes.length > 1 && (
                    <span className="text-xs text-dark-brown/40">~</span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-10">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-base font-semibold text-warm-brown border-2 border-warm-brown/30 hover:border-warm-brown hover:bg-warm-brown/5 px-8 py-3 rounded-full transition-colors"
          >
            전체 상품 보기
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
