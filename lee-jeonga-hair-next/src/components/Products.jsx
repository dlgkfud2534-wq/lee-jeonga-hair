import Link from 'next/link'
import { seseoProducts, formatPrice } from '@/data/products'

const featured = seseoProducts.slice(0, 4)

export default function Products() {
  return (
    <section id="products" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight text-black">
            SESEO
          </h2>
        </div>

        {/* Featured Products Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {featured.map((product) => (
            <Link
              href={`/products/${product.id}`}
              key={product.id}
              className="group"
            >
              <div className="relative aspect-square overflow-hidden bg-offwhite mb-3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain origin-bottom transition-transform duration-500 group-hover:scale-105"
                  style={{ transform: `scale(${product.scale || 2.3}) translateY(${product.thumbY || '8%'})` }}
                  loading="lazy"
                />
              </div>
              <h3 className="text-sm font-medium text-black leading-snug mb-1 group-hover:text-accent transition-colors">
                {product.name}
              </h3>
              <span className="text-sm font-bold text-accent">
                {formatPrice(product.sizes[product.sizes.length - 1].price)}
              </span>
            </Link>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-semibold text-black border border-black hover:bg-black hover:text-white px-8 py-3.5 tracking-wide transition-colors"
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
