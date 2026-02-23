'use client'

const memoOptions = [
  '배송 전 연락 바랍니다',
  '부재 시 경비실에 맡겨주세요',
  '부재 시 문 앞에 놓아주세요',
  '직접 입력',
]

export default function ShippingForm({ form, onChange }) {
  const handleChange = (field) => (e) => {
    onChange({ ...form, [field]: e.target.value })
  }

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 11)
    onChange({ ...form, phone: value })
  }

  const displayPhone = form.phone
    ? form.phone.length > 7
      ? `${form.phone.slice(0, 3)}-${form.phone.slice(3, 7)}-${form.phone.slice(7)}`
      : form.phone.length > 3
      ? `${form.phone.slice(0, 3)}-${form.phone.slice(3)}`
      : form.phone
    : ''

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold mb-4">배송 정보</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wide text-darkgray mb-2">수령인</label>
          <input
            type="text"
            value={form.name}
            onChange={handleChange('name')}
            placeholder="수령인 이름"
            className="w-full px-4 py-3 border border-lightgray text-sm focus:outline-none focus:border-accent transition-colors"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wide text-darkgray mb-2">연락처</label>
          <input
            type="tel"
            value={displayPhone}
            onChange={handlePhoneChange}
            placeholder="01012345678"
            className="w-full px-4 py-3 border border-lightgray text-sm focus:outline-none focus:border-accent transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-wide text-darkgray mb-2">우편번호</label>
        <input
          type="text"
          value={form.postcode}
          onChange={handleChange('postcode')}
          placeholder="우편번호"
          className="w-full px-4 py-3 border border-lightgray text-sm focus:outline-none focus:border-accent transition-colors"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-wide text-darkgray mb-2">주소</label>
        <input
          type="text"
          value={form.address}
          onChange={handleChange('address')}
          placeholder="주소를 입력하세요"
          className="w-full px-4 py-3 border border-lightgray text-sm focus:outline-none focus:border-accent transition-colors"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-wide text-darkgray mb-2">상세주소</label>
        <input
          type="text"
          value={form.addressDetail}
          onChange={handleChange('addressDetail')}
          placeholder="상세주소 (동/호수 등)"
          className="w-full px-4 py-3 border border-lightgray text-sm focus:outline-none focus:border-accent transition-colors"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-wide text-darkgray mb-2">배송 메모</label>
        <select
          value={form.memo}
          onChange={handleChange('memo')}
          className="w-full px-4 py-3 border border-lightgray text-sm focus:outline-none focus:border-accent transition-colors bg-white"
        >
          <option value="">배송 시 요청사항을 선택해주세요</option>
          {memoOptions.map(opt => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
        {form.memo === '직접 입력' && (
          <input
            type="text"
            value={form.memoCustom || ''}
            onChange={handleChange('memoCustom')}
            placeholder="배송 메모를 입력하세요"
            className="w-full mt-2 px-4 py-3 border border-lightgray text-sm focus:outline-none focus:border-accent transition-colors"
          />
        )}
      </div>
    </div>
  )
}
