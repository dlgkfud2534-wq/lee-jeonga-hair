'use client'

import { CreditCard, Info } from 'lucide-react'

export default function PaymentPlaceholder({ onPay, loading }) {
  return (
    <div>
      <h2 className="text-lg font-bold mb-4">결제 수단</h2>

      <div className="bg-offwhite p-6 text-center">
        <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
          <CreditCard size={24} className="text-accent" />
        </div>
        <p className="text-sm font-semibold mb-2">결제 시스템 준비 중</p>
        <p className="text-xs text-midgray mb-6 flex items-center justify-center gap-1">
          <Info size={12} />
          결제 게이트웨이 연동 전 테스트 모드입니다
        </p>

        <button
          onClick={onPay}
          disabled={loading}
          className="w-full bg-accent text-white py-3.5 font-semibold text-sm tracking-wide hover:bg-accent-dark transition-colors disabled:opacity-50"
        >
          {loading ? '주문 처리 중...' : '주문하기 (테스트)'}
        </button>
      </div>
    </div>
  )
}
