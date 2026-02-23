import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { seseoProducts } from '@/data/products'
import ProductCard from './ProductCard'

export default function FeaturedProducts() {
  const featured = seseoProducts.slice(0, 4)

  return (
    <section className="py-20 md:py-28 bg-offwhite">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-accent text-xs md:text-sm font-semibold uppercase tracking-[0.3em] mb-5">
              Best Products
            </p>
            <h2 className="text-3xl md:text-5xl font-bold">인기 제품</h2>
          </div>
          <Link
            href="/products"
            className="hidden md:flex items-center gap-2 text-sm font-medium text-midgray hover:text-accent transition-colors"
          >
            전체보기 <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {featured.map(product => (
            <ProductCard key={product.id} product={product} variant="home" />
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-medium text-midgray hover:text-accent transition-colors"
          >
            전체 상품 보기 <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
