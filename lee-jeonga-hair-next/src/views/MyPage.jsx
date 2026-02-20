'use client'

import { useRouter } from 'next/navigation'
import { useAuth } from '@/contexts/AuthContext'
import { User, Phone, Gift, Ticket, Calendar } from 'lucide-react'

export default function MyPage() {
  const { user, loading, logout } = useAuth()
  const router = useRouter()

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24">
        <p className="text-midgray">로딩 중...</p>
      </div>
    )
  }

  if (!user) {
    router.push('/login')
    return null
  }

  const handleLogout = () => {
    logout()
    router.push('/')
  }

  return (
    <div className="min-h-screen px-6 pt-28 pb-16">
      <div className="max-w-lg mx-auto">
        <h1 className="text-2xl font-bold text-center mb-8">마이페이지</h1>

        {/* 프로필 */}
        <div className="bg-offwhite rounded-2xl p-6 mb-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center">
              <User className="w-7 h-7 text-accent" />
            </div>
            <div>
              <p className="text-lg font-semibold">{user.name}님</p>
              <p className="text-sm text-midgray flex items-center gap-1">
                <Phone className="w-3.5 h-3.5" />
                {user.phone}
              </p>
            </div>
          </div>
        </div>

        {/* 포인트 & 쿠폰 */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-offwhite rounded-xl p-5 text-center">
            <Gift className="w-6 h-6 text-accent mx-auto mb-2" />
            <p className="text-xs text-midgray mb-1">포인트</p>
            <p className="text-xl font-bold">{user.points || 0}<span className="text-sm font-normal text-midgray ml-0.5">P</span></p>
          </div>
          <div className="bg-offwhite rounded-xl p-5 text-center">
            <Ticket className="w-6 h-6 text-accent mx-auto mb-2" />
            <p className="text-xs text-midgray mb-1">쿠폰</p>
            <p className="text-xl font-bold">{user.coupons?.length || 0}<span className="text-sm font-normal text-midgray ml-0.5">장</span></p>
          </div>
        </div>

        {/* 예약 내역 */}
        <div className="bg-offwhite rounded-xl p-6 mb-8">
          <div className="flex items-center gap-2 mb-3">
            <Calendar className="w-5 h-5 text-accent" />
            <p className="font-semibold">예약 내역</p>
          </div>
          <p className="text-sm text-midgray text-center py-4">
            서비스 준비 중입니다.
          </p>
        </div>

        {/* 로그아웃 */}
        <button
          onClick={handleLogout}
          className="w-full py-3 border border-lightgray rounded-lg text-sm text-midgray hover:text-accent hover:border-accent transition-colors"
        >
          로그아웃
        </button>
      </div>
    </div>
  )
}
