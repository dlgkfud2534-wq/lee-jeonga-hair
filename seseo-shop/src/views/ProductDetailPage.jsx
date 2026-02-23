'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ChevronRight, Check, Truck } from 'lucide-react'
import { getProductById, formatPrice, badgeColors, seseoProducts } from '@/data/products'
import SizeSelector from '@/components/SizeSelector'
import QuantitySelector from '@/components/QuantitySelector'
import AddToCartButton from '@/components/AddToCartButton'
import ProductCard from '@/components/ProductCard'
import { useCart } from '@/contexts/CartContext'

export default function ProductDetailPage({ id }) {
  const router = useRouter()
  const { addItem } = useCart()
  const product = getProductById(id)
  const [selectedSize, setSelectedSize] = useState(0)
  const [quantity, setQuantity] = useState(1)

  if (!product) {
    return (
      <div className="pt-32 text-center min-h-screen">
        <h1 className="text-2xl font-bold mb-4">상품을 찾을 수 없습니다</h1>
        <Link href="/products" className="text-accent hover:underline">전체 상품 보기</Link>
      </div>
    )
  }

  const currentSize = product.sizes[selectedSize]
  const totalPrice = currentSize.price * quantity
  const threshold = parseInt(process.env.NEXT_PUBLIC_FREE_SHIPPING_THRESHOLD || '100000')

  const relatedProducts = seseoProducts
    .filter(p => p.id !== product.id)
    .slice(0, 3)

  const handleBuyNow = () => {
    addItem(product.id, selectedSize, quantity)
    router.push('/checkout')
  }

  return (
    <div className="pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4">
        <nav className="flex items-center gap-2 text-sm text-midgray">
          <Link href="/" className="hover:text-accent transition-colors">홈</Link>
          <ChevronRight size={14} />
          <Link href="/products" className="hover:text-accent transition-colors">상품</Link>
          <ChevronRight size={14} />
          <span className="text-black">{product.name}</span>
        </nav>
      </div>

      {/* Product Hero */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Image */}
          <div className="relative aspect-square bg-offwhite overflow-hidden">
            {product.badge && (
              <span className={`absolute top-4 left-4 z-10 text-[10px] font-bold tracking-wide uppercase px-3 py-1.5 ${badgeColors[product.badge] || 'bg-black text-white'}`}>
                {product.badge}
              </span>
            )}
            <div className="w-full h-full flex items-end justify-center">
              <img
                src={currentSize.image || product.image}
                alt={`${product.name} ${currentSize.volume}`}
                className="transition-all duration-300"
                style={{
                  transform: `scale(${currentSize.scale || product.scale || 2}) translateY(${currentSize.thumbY || product.thumbY || '0%'})`,
                  transformOrigin: 'center bottom',
                }}
              />
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col">
            <p className="text-accent text-[11px] font-semibold uppercase tracking-[0.3em] mb-2">
              {product.stepLabel}
            </p>
            <h1 className="text-2xl md:text-3xl font-bold mb-3">{product.name}</h1>
            <p className="text-midgray text-sm leading-relaxed mb-6">{product.description}</p>

            {/* Price */}
            <div className="mb-6">
              <p className="text-2xl font-bold">{formatPrice(currentSize.price)}</p>
              {totalPrice >= threshold && (
                <p className="text-accent text-xs mt-1 flex items-center gap-1">
                  <Truck size={14} /> 무료배송
                </p>
              )}
            </div>

            {/* Size */}
            <div className="mb-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-darkgray mb-3">용량 선택</p>
              <SizeSelector sizes={product.sizes} selected={selectedSize} onSelect={setSelectedSize} />
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-darkgray mb-3">수량</p>
              <QuantitySelector quantity={quantity} onChange={setQuantity} />
            </div>

            {/* Total */}
            <div className="flex items-center justify-between py-4 border-t border-b border-lightgray mb-6">
              <span className="text-sm text-midgray">총 상품 금액</span>
              <span className="text-xl font-bold">{formatPrice(totalPrice)}</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3">
              <AddToCartButton productId={product.id} sizeIndex={selectedSize} quantity={quantity} />
              <button
                onClick={handleBuyNow}
                className="w-full py-3.5 font-semibold text-sm tracking-wide border border-black bg-black text-white hover:bg-darkgray transition-colors"
              >
                바로 구매
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="border-t border-lightgray">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
          {/* Features */}
          <div className="mb-12">
            <h2 className="text-lg font-bold mb-6">주요 특징</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {product.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-offwhite">
                  <Check size={16} className="text-accent mt-0.5 shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Usage */}
          <div className="mb-12">
            <h2 className="text-lg font-bold mb-4">사용 방법</h2>
            <p className="text-sm text-midgray leading-relaxed bg-offwhite p-6">{product.usage}</p>
          </div>

          {/* Price Table */}
          <div className="mb-12">
            <h2 className="text-lg font-bold mb-6">용량별 가격</h2>
            <div className="border border-lightgray">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-offwhite border-b border-lightgray">
                    <th className="text-left px-6 py-3 font-semibold">용량</th>
                    <th className="text-right px-6 py-3 font-semibold">가격</th>
                  </tr>
                </thead>
                <tbody>
                  {product.sizes.map((size, i) => (
                    <tr key={i} className="border-b border-lightgray last:border-0">
                      <td className="px-6 py-3">{size.volume}</td>
                      <td className="px-6 py-3 text-right font-semibold">{formatPrice(size.price)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="bg-offwhite border-t border-lightgray">
          <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
            <h2 className="text-lg font-bold mb-8">함께 사용하면 좋은 제품</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
