'use client'

import { formatPrice } from '@/data/products'
import { useCart } from '@/contexts/CartContext'

export default function OrderSummary() {
  const { getCartItems, getCartTotal } = useCart()
  const cartItems = getCartItems()
  const { subtotal, shippingFee, grandTotal } = getCartTotal()

  return (
    <div>
      <h2 className="text-lg font-bold mb-4">주문 상품</h2>

      <div className="space-y-4 mb-6">
        {cartItems.map((item) => (
          <div key={`${item.productId}-${item.sizeIndex}`} className="flex items-center gap-4 py-3 border-b border-lightgray">
            <div className="w-16 h-16 bg-offwhite shrink-0 overflow-hidden">
              <img src={item.image} alt={item.product.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold truncate">{item.product.name}</p>
              <p className="text-xs text-midgray">{item.volume} / {item.quantity}개</p>
            </div>
            <p className="text-sm font-bold shrink-0">{formatPrice(item.subtotal)}</p>
          </div>
        ))}
      </div>

      <div className="bg-offwhite p-4 space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-midgray">상품 합계</span>
          <span>{formatPrice(subtotal)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-midgray">배송비</span>
          <span>{shippingFee === 0 ? '무료' : formatPrice(shippingFee)}</span>
        </div>
        <div className="flex justify-between pt-2 border-t border-lightgray font-bold text-base">
          <span>총 결제 금액</span>
          <span>{formatPrice(grandTotal)}</span>
        </div>
      </div>
    </div>
  )
}
