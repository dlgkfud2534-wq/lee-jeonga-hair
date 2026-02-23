'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { User, LogOut, Package, ArrowRight, Gift, Coins } from 'lucide-react'
import { useAuth } from '@/contexts/AuthContext'
import { getOrdersByUserId } from '@/lib/orders'
import OrderCard from '@/components/OrderCard'

export default function MyPage() {
  const router = useRouter()
  const { user, loading: authLoading, logout } = useAuth()
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!authLoading && !user) {
      router.push('/login?redirect=/mypage')
      return
    }
    if (user) {
      getOrdersByUserId(user.id)
        .then(data => setOrders(data.slice(0, 3)))
        .catch(console.error)
        .finally(() => setLoading(false))
    }
  }, [user, authLoading, router])

  if (authLoading || !user) return null

  const handleLogout = () => {
    logout()
    router.push('/')
  }

  return (
    <div className="pt-20 md:pt-24 min-h-screen">
      <div className="max-w-3xl mx-auto px-6 md:px-10 py-8 md:py-12">
        {/* Profile */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center">
              <User size={24} className="text-accent" />
            </div>
            <div>
              <h1 className="text-xl font-bold">{user.name}님</h1>
              <p className="text-sm text-midgray">{user.phone}</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-1.5 text-sm text-midgray hover:text-black transition-colors"
          >
            <LogOut size={16} />
            로그아웃
          </button>
        </div>

        {/* Points & Coupons */}
        <div className="grid grid-cols-2 gap-4 mb-10">
          <div className="bg-offwhite p-5 text-center">
            <Coins size={20} className="mx-auto text-accent mb-2" />
            <p className="text-xs text-midgray mb-1">포인트</p>
            <p className="text-lg font-bold">{(user.points || 0).toLocaleString()}P</p>
          </div>
          <div className="bg-offwhite p-5 text-center">
            <Gift size={20} className="mx-auto text-accent mb-2" />
            <p className="text-xs text-midgray mb-1">쿠폰</p>
            <p className="text-lg font-bold">{(user.coupons || []).length}장</p>
          </div>
        </div>

        {/* Recent Orders */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold flex items-center gap-2">
              <Package size={20} />
              최근 주문
            </h2>
            <Link href="/orders" className="flex items-center gap-1 text-sm text-midgray hover:text-accent transition-colors">
              전체보기 <ArrowRight size={14} />
            </Link>
          </div>

          {loading ? (
            <div className="flex justify-center py-12">
              <div className="w-8 h-8 border-2 border-lightgray border-t-accent rounded-full animate-spin" />
            </div>
          ) : orders.length === 0 ? (
            <div className="text-center py-12 bg-offwhite">
              <p className="text-midgray text-sm mb-4">아직 주문 내역이 없습니다.</p>
              <Link href="/products" className="text-accent text-sm hover:underline">쇼핑하러 가기</Link>
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
    </div>
  )
}
