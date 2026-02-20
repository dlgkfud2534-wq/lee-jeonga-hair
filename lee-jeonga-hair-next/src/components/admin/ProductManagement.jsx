import Link from 'next/link'
import { allProducts, formatPrice, badgeColors } from '@/data/products'

export default function ProductManagement() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold text-black">
          상품 목록 <span className="text-sm font-normal text-midgray ml-2">{allProducts.length}개</span>
        </h2>
        <span className="text-xs text-midgray">읽기 전용</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {allProducts.map((product) => {
          const minPrice = Math.min(...product.sizes.map((s) => s.price))
          const maxPrice = Math.max(...product.sizes.map((s) => s.price))

          return (
            <div
              key={product.id}
              className="border border-lightgray bg-white p-5"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-xs font-bold text-accent">
                  STEP {product.step}
                </span>
                {product.badge && (
                  <span
                    className={`px-2 py-0.5 text-[10px] font-semibold ${badgeColors[product.badge] || 'bg-black text-white'}`}
                  >
                    {product.badge}
                  </span>
                )}
              </div>

              <h3 className="text-base font-semibold text-black mb-1">
                {product.name}
              </h3>
              <p className="text-xs text-midgray mb-3">{product.category}</p>

              <div className="flex items-baseline gap-1.5 pt-3 border-t border-lightgray mb-3">
                <span className="text-sm font-bold text-accent">
                  {formatPrice(minPrice)}
                </span>
                {minPrice !== maxPrice && (
                  <>
                    <span className="text-xs text-midgray">~</span>
                    <span className="text-sm font-semibold text-darkgray">
                      {formatPrice(maxPrice)}
                    </span>
                  </>
                )}
              </div>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {product.sizes.map((size, i) => (
                  <span
                    key={i}
                    className="text-[10px] px-2 py-1 bg-offwhite border border-lightgray text-darkgray"
                  >
                    {size.volume}
                  </span>
                ))}
              </div>

              <Link
                href={`/products/${product.id}`}
                className="block text-center text-xs font-semibold text-accent hover:text-accent-dark border border-lightgray hover:border-accent px-3 py-2 transition-colors"
              >
                상세 페이지 보기
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}
