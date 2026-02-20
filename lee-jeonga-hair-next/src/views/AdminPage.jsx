'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Users, CalendarDays, Package, LogOut, Lock } from 'lucide-react'
import { useAuth } from '@/contexts/AuthContext'
import UserManagement from '@/components/admin/UserManagement'
import ReservationManagement from '@/components/admin/ReservationManagement'
import ProductManagement from '@/components/admin/ProductManagement'

const TABS = [
  { key: 'users', label: '회원 관리', icon: Users },
  { key: 'reservations', label: '예약 관리', icon: CalendarDays },
  { key: 'products', label: '상품 관리', icon: Package },
]

export default function AdminPage() {
  const { user, loading } = useAuth()
  const router = useRouter()
  const [passwordAuth, setPasswordAuth] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [activeTab, setActiveTab] = useState('users')

  useEffect(() => {
    const saved = localStorage.getItem('admin_authenticated')
    if (saved === 'true') {
      setPasswordAuth(true)
    }
  }, [])

  const isAdmin = user?.isAdmin || passwordAuth

  const handleLogin = (e) => {
    e.preventDefault()
    if (password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      setPasswordAuth(true)
      localStorage.setItem('admin_authenticated', 'true')
      setError('')
    } else {
      setError('비밀번호가 일치하지 않습니다.')
    }
  }

  const handleLogout = () => {
    setPasswordAuth(false)
    localStorage.removeItem('admin_authenticated')
    if (user?.isAdmin) {
      router.push('/')
    }
  }

  if (loading) {
    return (
      <main className="pt-16 min-h-screen bg-offwhite flex items-center justify-center">
        <div className="text-midgray text-sm">로딩 중...</div>
      </main>
    )
  }

  if (!isAdmin) {
    return (
      <main className="pt-16 min-h-screen bg-offwhite flex items-center justify-center">
        <div className="w-full max-w-sm mx-4">
          <div className="bg-white border border-lightgray p-8">
            <div className="flex items-center justify-center w-12 h-12 bg-black mx-auto mb-6">
              <Lock className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-bold text-black text-center mb-1">관리자 로그인</h1>
            <p className="text-sm text-midgray text-center mb-6">비밀번호를 입력해주세요</p>

            <form onSubmit={handleLogin}>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="비밀번호"
                className="w-full px-4 py-3 border border-lightgray text-sm focus:outline-none focus:border-black transition-colors mb-3"
                autoFocus
              />
              {error && (
                <p className="text-xs text-accent mb-3">{error}</p>
              )}
              <button
                type="submit"
                className="w-full py-3 bg-black text-white text-sm font-semibold hover:bg-darkgray transition-colors"
              >
                로그인
              </button>
            </form>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="pt-16 min-h-screen bg-offwhite">
      {/* Header */}
      <div className="bg-black">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-lg font-bold text-white">관리자 대시보드</h1>
              <p className="text-xs text-white/40 mt-0.5">
                이정아 헤어{user?.isAdmin ? ` · ${user.name}` : ''}
              </p>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 text-xs font-medium text-white/60 hover:text-white border border-white/20 hover:border-white/40 transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" />
              로그아웃
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-lightgray">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex gap-0">
            {TABS.map((tab) => {
              const Icon = tab.icon
              const isActive = activeTab === tab.key
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex items-center gap-2 px-5 py-3.5 text-sm font-medium border-b-2 transition-colors ${
                    isActive
                      ? 'border-accent text-accent'
                      : 'border-transparent text-midgray hover:text-black'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-8">
        {activeTab === 'users' && <UserManagement />}
        {activeTab === 'reservations' && <ReservationManagement />}
        {activeTab === 'products' && <ProductManagement />}
      </div>
    </main>
  )
}
