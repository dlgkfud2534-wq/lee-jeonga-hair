import Link from 'next/link'
import { formatPrice, badgeColors } from '@/data/products'

// variant: 'home' (홈 인기제품) | 'list' (상품목록, 기본값)
export default function ProductCard({ product, variant = 'list' }) {
  const minPrice = Math.min(...product.sizes.map(s => s.price))
  const maxPrice = Math.max(...product.sizes.map(s => s.price))

  return (
    <Link href={`/products/${product.id}`} className="group">
      <div className="relative aspect-square bg-offwhite overflow-hidden border border-lightgray hover:border-accent transition-all">
        {/* Badge */}
        {product.badge && (
          <span className={`absolute top-3 left-3 z-10 text-xs font-bold tracking-wide uppercase px-2.5 py-1 ${badgeColors[product.badge] || 'bg-black text-white'}`}>
            {product.badge}
          </span>
        )}

        {/* Step Label */}
        <span className="absolute top-3 right-3 z-10 text-xs text-midgray font-medium">
          {product.stepLabel}
        </span>

        {/* Image */}
        <div className="w-full h-full flex items-end justify-center overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
            style={{
              transform: `scale(${
                variant === 'home'
                  ? (product.homeScale || product.listScale || 2)
                  : (product.listScale || 2)
              }) translate(${
                variant === 'home'
                  ? (product.homeThumbX || product.listThumbX || '0%')
                  : (product.listThumbX || '0%')
              }, ${
                variant === 'home'
                  ? (product.homeThumbY || product.listThumbY || '0%')
                  : (product.listThumbY || '0%')
              }) rotate(${
                variant === 'home'
                  ? (product.homeRotate || '0deg')
                  : (product.listRotate || '0deg')
              })`,
              transformOrigin: 'center bottom',
            }}
          />
        </div>
      </div>

      <div className="mt-3">
        <h3 className="font-semibold text-base group-hover:text-accent transition-colors">
          {product.name}
        </h3>
        <p className="text-midgray text-sm mt-1 line-clamp-1">{product.shortDesc}</p>
        <p className="text-base font-bold mt-2">
          {minPrice === maxPrice
            ? formatPrice(minPrice)
            : `${formatPrice(minPrice)} ~ ${formatPrice(maxPrice)}`
          }
        </p>
      </div>
    </Link>
  )
}
