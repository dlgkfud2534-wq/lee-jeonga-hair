'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Package } from 'lucide-react'
import { useAuth } from '@/contexts/AuthContext'
import { getOrdersByUserId } from '@/lib/orders'
import OrderCard from '@/components/OrderCard'

export default function OrdersPage() {
  const router = useRouter()
  const { user, loading: authLoading } = useAuth()
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!authLoading && !user) {
      router.push('/login?redirect=/orders')
      return
    }
    if (user) {
      getOrdersByUserId(user.id)
        .then(setOrders)
        .catch(console.error)
        .finally(() => setLoading(false))
    }
  }, [user, authLoading, router])

  if (authLoading || !user) return null

  return (
    <div className="pt-20 md:pt-24 min-h-screen">
      <div className="max-w-3xl mx-auto px-6 md:px-10 py-8 md:py-12">
        <h1 className="text-2xl font-bold mb-8">주문 내역</h1>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-8 h-8 border-2 border-lightgray border-t-accent rounded-full animate-spin" />
          </div>
        ) : orders.length === 0 ? (
          <div className="text-center py-20">
            <Package size={48} className="mx-auto text-lightgray mb-6" />
            <h2 className="text-lg font-bold mb-3">주문 내역이 없습니다</h2>
            <p className="text-midgray text-sm mb-8">아직 주문하신 상품이 없습니다.</p>
            <Link
              href="/products"
              className="inline-block bg-accent text-white px-8 py-3.5 font-semibold text-sm tracking-wide hover:bg-accent-dark transition-colors"
            >
              쇼핑하러 가기
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {orders.map(order => (
              <OrderCard key={order.id} order={order} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
