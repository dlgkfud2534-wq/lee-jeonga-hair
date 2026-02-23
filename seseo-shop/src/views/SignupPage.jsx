'use client'

import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { useAuth } from '@/contexts/AuthContext'

export default function SignupPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const redirect = searchParams.get('redirect') || '/mypage'
  const { signup } = useAuth()

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 11)
    setPhone(value)
  }

  const displayPhone = phone.length > 7
    ? `${phone.slice(0, 3)}-${phone.slice(3, 7)}-${phone.slice(7)}`
    : phone.length > 3
    ? `${phone.slice(0, 3)}-${phone.slice(3)}`
    : phone

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (!name.trim() || !phone.trim()) {
      setError('이름과 전화번호를 입력해주세요.')
      return
    }

    if (phone.length < 10) {
      setError('올바른 전화번호를 입력해주세요.')
      return
    }

    setLoading(true)
    try {
      await signup(name, phone)
      router.push(redirect)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="pt-20 md:pt-24 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md px-6 py-12">
        <div className="text-center mb-10">
          <h1 className="text-2xl font-bold mb-2">회원가입</h1>
          <p className="text-midgray text-sm">SESEO 회원이 되어 특별한 혜택을 누리세요</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wide text-darkgray mb-2">이름</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="이름을 입력하세요"
              className="w-full px-4 py-3 border border-lightgray text-sm focus:outline-none focus:border-accent transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wide text-darkgray mb-2">전화번호</label>
            <input
              type="tel"
              value={displayPhone}
              onChange={handlePhoneChange}
              placeholder="01012345678"
              className="w-full px-4 py-3 border border-lightgray text-sm focus:outline-none focus:border-accent transition-colors"
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-accent text-white py-3.5 font-semibold text-sm tracking-wide hover:bg-accent-dark transition-colors disabled:opacity-50"
          >
            {loading ? '가입 중...' : '회원가입'}
          </button>
        </form>

        <p className="text-center text-sm text-midgray mt-8">
          이미 회원이신가요?{' '}
          <Link href={`/login${redirect !== '/mypage' ? `?redirect=${redirect}` : ''}`} className="text-accent hover:underline font-medium">
            로그인
          </Link>
        </p>
      </div>
    </div>
  )
}
