'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ShoppingBag } from 'lucide-react'
import { useCart } from '@/contexts/CartContext'
import { useAuth } from '@/contexts/AuthContext'
import CartItem from '@/components/CartItem'
import CartSummary from '@/components/CartSummary'

export default function CartPage() {
  const router = useRouter()
  const { items, getCartItems } = useCart()
  const { user } = useAuth()
  const cartItems = getCartItems()

  const handleCheckout = () => {
    if (!user) {
      router.push('/login?redirect=/checkout')
      return
    }
    router.push('/checkout')
  }

  if (items.length === 0) {
    return (
      <div className="pt-20 md:pt-24 min-h-screen">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 text-center">
          <ShoppingBag size={48} className="mx-auto text-lightgray mb-6" />
          <h1 className="text-xl font-bold mb-3">장바구니가 비어있습니다</h1>
          <p className="text-midgray text-sm mb-8">마음에 드는 제품을 장바구니에 담아보세요.</p>
          <Link
            href="/products"
            className="inline-block bg-accent text-white px-8 py-3.5 font-semibold text-sm tracking-wide hover:bg-accent-dark transition-colors"
          >
            쇼핑 계속하기
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-20 md:pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-8 md:py-12">
        <h1 className="text-2xl font-bold mb-8">장바구니</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            {cartItems.map((item, i) => (
              <CartItem key={`${item.productId}-${item.sizeIndex}`} item={item} />
            ))}
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <CartSummary />
              <button
                onClick={handleCheckout}
                className="w-full mt-4 bg-accent text-white py-3.5 font-semibold text-sm tracking-wide hover:bg-accent-dark transition-colors"
              >
                주문하기
              </button>
              <Link
                href="/products"
                className="block text-center mt-3 text-sm text-midgray hover:text-accent transition-colors"
              >
                쇼핑 계속하기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
