'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { CheckCircle, Package } from 'lucide-react'
import { getOrderById } from '@/lib/orders'
import { formatPrice } from '@/data/products'

export default function OrderCompletePage() {
  const searchParams = useSearchParams()
  const orderId = searchParams.get('orderId')
  const [order, setOrder] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (orderId) {
      getOrderById(orderId)
        .then(setOrder)
        .catch(console.error)
        .finally(() => setLoading(false))
    } else {
      setLoading(false)
    }
  }, [orderId])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-lightgray border-t-accent rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <div className="pt-20 md:pt-24 min-h-screen">
      <div className="max-w-lg mx-auto px-6 py-16 text-center">
        <CheckCircle size={64} className="mx-auto text-accent mb-6" />

        <h1 className="text-2xl font-bold mb-3">주문이 완료되었습니다!</h1>
        <p className="text-midgray text-sm mb-8">
          주문해 주셔서 감사합니다. 주문 내역은 마이페이지에서 확인하실 수 있습니다.
        </p>

        {order && (
          <div className="bg-offwhite p-6 text-left mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Package size={18} className="text-accent" />
              <span className="font-semibold text-sm">주문 정보</span>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-midgray">주문번호</span>
                <span className="font-mono text-xs">{order.id}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-midgray">상품</span>
                <span>
                  {order.items[0]?.productName}
                  {order.items.length > 1 && ` 외 ${order.items.length - 1}건`}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-midgray">결제 금액</span>
                <span className="font-bold">{formatPrice(order.grandTotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-midgray">배송지</span>
                <span className="text-right text-xs">{order.shippingAddress?.address}</span>
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/orders"
            className="flex-1 py-3.5 border border-accent text-accent font-semibold text-sm tracking-wide hover:bg-accent hover:text-white transition-colors text-center"
          >
            주문 내역 보기
          </Link>
          <Link
            href="/products"
            className="flex-1 py-3.5 bg-accent text-white font-semibold text-sm tracking-wide hover:bg-accent-dark transition-colors text-center"
          >
            쇼핑 계속하기
          </Link>
        </div>
      </div>
    </div>
  )
}
