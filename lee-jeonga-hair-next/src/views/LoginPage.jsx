'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useAuth } from '@/contexts/AuthContext'

export default function LoginPage() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const { login } = useAuth()
  const router = useRouter()

  const handlePhoneChange = (e) => {
    const digits = e.target.value.replace(/\D/g, '').slice(0, 11)
    if (digits.length <= 3) {
      setPhone(digits)
    } else if (digits.length <= 7) {
      setPhone(`${digits.slice(0, 3)}-${digits.slice(3)}`)
    } else {
      setPhone(`${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7)}`)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (!name.trim()) {
      setError('이름을 입력해주세요.')
      return
    }
    if (phone.replace(/\D/g, '').length < 10) {
      setError('올바른 전화번호를 입력해주세요.')
      return
    }

    setSubmitting(true)
    try {
      await login(name, phone)
      router.push('/mypage')
    } catch (err) {
      setError(err.message)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6 pt-24 pb-16">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-2">로그인</h1>
        <p className="text-midgray text-center text-sm mb-8">
          가입하신 이름과 전화번호를 입력해주세요.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-darkgray mb-1.5">
              이름
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="홍길동"
              className="w-full px-4 py-3 border border-lightgray rounded-lg text-sm focus:outline-none focus:border-accent transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-darkgray mb-1.5">
              전화번호
            </label>
            <input
              type="tel"
              value={phone}
              onChange={handlePhoneChange}
              placeholder="010-0000-0000"
              className="w-full px-4 py-3 border border-lightgray rounded-lg text-sm focus:outline-none focus:border-accent transition-colors"
            />
          </div>

          {error && (
            <p className="text-accent text-sm">{error}</p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="w-full py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent-dark transition-colors disabled:opacity-50"
          >
            {submitting ? '로그인 중...' : '로그인'}
          </button>
        </form>

        <p className="text-center text-sm text-midgray mt-6">
          아직 회원이 아니신가요?{' '}
          <Link href="/signup" className="text-accent font-medium hover:underline">
            회원가입
          </Link>
        </p>
      </div>
    </div>
  )
}
