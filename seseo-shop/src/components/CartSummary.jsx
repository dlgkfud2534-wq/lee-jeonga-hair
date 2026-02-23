'use client'

import { formatPrice } from '@/data/products'
import { useCart } from '@/contexts/CartContext'

export default function CartSummary() {
  const { getCartTotal } = useCart()
  const { subtotal, shippingFee, grandTotal } = getCartTotal()
  const threshold = parseInt(process.env.NEXT_PUBLIC_FREE_SHIPPING_THRESHOLD || '100000')
  const remaining = threshold - subtotal

  return (
    <div className="bg-offwhite p-6">
      <h3 className="font-semibold text-sm mb-4">주문 요약</h3>

      <div className="space-y-3 text-sm">
        <div className="flex justify-between">
          <span className="text-midgray">상품 합계</span>
          <span>{formatPrice(subtotal)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-midgray">배송비</span>
          <span>{shippingFee === 0 ? '무료' : formatPrice(shippingFee)}</span>
        </div>
        {remaining > 0 && (
          <p className="text-xs text-accent">
            {formatPrice(remaining)} 더 구매 시 무료배송!
          </p>
        )}
      </div>

      <div className="mt-4 pt-4 border-t border-lightgray flex justify-between items-center">
        <span className="font-semibold">총 결제 금액</span>
        <span className="text-xl font-bold">{formatPrice(grandTotal)}</span>
      </div>
    </div>
  )
}
