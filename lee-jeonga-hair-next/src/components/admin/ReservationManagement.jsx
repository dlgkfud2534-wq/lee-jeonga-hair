'use client'

import { useState, useEffect } from 'react'
import { db } from '@/lib/firebase'
import {
  collection,
  getDocs,
  addDoc,
  doc,
  updateDoc,
  orderBy,
  query,
  serverTimestamp,
} from 'firebase/firestore'
import { Plus, X, RefreshCw } from 'lucide-react'

const SERVICES = ['커트', '펌', '염색', '두피·모발 클리닉', '스타일링', '매직·셋팅']
const STYLISTS = ['이정아 원장', '김수현 디자이너', '박지은 디자이너']
const STATUSES = ['전체', '대기', '확정', '완료', '취소']

const STATUS_STYLE = {
  대기: 'bg-yellow-100 text-yellow-800',
  확정: 'bg-blue-100 text-blue-800',
  완료: 'bg-green-100 text-green-800',
  취소: 'bg-gray-100 text-gray-400 line-through',
}

const INITIAL_FORM = {
  userName: '',
  userPhone: '',
  date: '',
  time: '',
  service: SERVICES[0],
  stylist: STYLISTS[0],
  memo: '',
}

export default function ReservationManagement() {
  const [reservations, setReservations] = useState([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState(INITIAL_FORM)
  const [submitting, setSubmitting] = useState(false)
  const [statusFilter, setStatusFilter] = useState('전체')

  const fetchReservations = async () => {
    setLoading(true)
    try {
      const q = query(
        collection(db, 'reservations'),
        orderBy('createdAt', 'desc')
      )
      const snapshot = await getDocs(q)
      const list = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }))
      setReservations(list)
    } catch (err) {
      console.error('예약 목록 조회 실패:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchReservations()
  }, [])

  const filtered =
    statusFilter === '전체'
      ? reservations
      : reservations.filter((r) => r.status === statusFilter)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.userName || !form.userPhone || !form.date || !form.time) {
      alert('필수 항목을 모두 입력해주세요.')
      return
    }
    setSubmitting(true)
    try {
      const docRef = await addDoc(collection(db, 'reservations'), {
        ...form,
        status: '대기',
        createdAt: serverTimestamp(),
      })
      setReservations((prev) => [
        { id: docRef.id, ...form, status: '대기', createdAt: new Date() },
        ...prev,
      ])
      setForm(INITIAL_FORM)
      setShowForm(false)
    } catch (err) {
      console.error('예약 생성 실패:', err)
      alert('예약 생성에 실패했습니다.')
    } finally {
      setSubmitting(false)
    }
  }

  const changeStatus = async (id, newStatus) => {
    try {
      await updateDoc(doc(db, 'reservations', id), { status: newStatus })
      setReservations((prev) =>
        prev.map((r) => (r.id === id ? { ...r, status: newStatus } : r))
      )
    } catch (err) {
      console.error('상태 변경 실패:', err)
      alert('상태 변경에 실패했습니다.')
    }
  }

  const formatDate = (timestamp) => {
    if (!timestamp) return '-'
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp)
    return date.toLocaleDateString('ko-KR', {
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6">
        <h2 className="text-lg font-bold text-black">
          예약 관리{' '}
          <span className="text-sm font-normal text-midgray ml-2">
            {filtered.length}건
          </span>
        </h2>
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              setShowForm(true)
              setForm(INITIAL_FORM)
            }}
            className="flex items-center gap-1.5 px-4 py-2.5 bg-black text-white text-xs font-semibold hover:bg-darkgray transition-colors"
          >
            <Plus className="w-3.5 h-3.5" />
            새 예약
          </button>
          <button
            onClick={fetchReservations}
            className="p-2.5 border border-lightgray hover:border-black text-midgray hover:text-black transition-colors"
            title="새로고침"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* New Reservation Form */}
      {showForm && (
        <div className="bg-white border border-lightgray p-6 mb-6">
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-sm font-bold text-black">새 예약 등록</h3>
            <button
              onClick={() => setShowForm(false)}
              className="p-1 text-midgray hover:text-black transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-xs font-medium text-midgray mb-1.5">
                  고객명 *
                </label>
                <input
                  name="userName"
                  value={form.userName}
                  onChange={handleChange}
                  placeholder="홍길동"
                  className="w-full px-3 py-2.5 text-sm border border-lightgray focus:outline-none focus:border-black transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-midgray mb-1.5">
                  전화번호 *
                </label>
                <input
                  name="userPhone"
                  value={form.userPhone}
                  onChange={handleChange}
                  placeholder="010-1234-5678"
                  className="w-full px-3 py-2.5 text-sm border border-lightgray focus:outline-none focus:border-black transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-midgray mb-1.5">
                  날짜 *
                </label>
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 text-sm border border-lightgray focus:outline-none focus:border-black transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-midgray mb-1.5">
                  시간 *
                </label>
                <input
                  type="time"
                  name="time"
                  value={form.time}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 text-sm border border-lightgray focus:outline-none focus:border-black transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-midgray mb-1.5">
                  서비스
                </label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 text-sm border border-lightgray focus:outline-none focus:border-black transition-colors bg-white"
                >
                  {SERVICES.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-midgray mb-1.5">
                  담당
                </label>
                <select
                  name="stylist"
                  value={form.stylist}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 text-sm border border-lightgray focus:outline-none focus:border-black transition-colors bg-white"
                >
                  {STYLISTS.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-xs font-medium text-midgray mb-1.5">
                메모
              </label>
              <textarea
                name="memo"
                value={form.memo}
                onChange={handleChange}
                rows={2}
                placeholder="관리자 메모 (선택)"
                className="w-full px-3 py-2.5 text-sm border border-lightgray focus:outline-none focus:border-black transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="px-6 py-2.5 bg-accent text-white text-sm font-semibold hover:bg-accent-dark transition-colors disabled:opacity-50"
            >
              {submitting ? '등록 중...' : '예약 등록'}
            </button>
          </form>
        </div>
      )}

      {/* Status Filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        {STATUSES.map((s) => (
          <button
            key={s}
            onClick={() => setStatusFilter(s)}
            className={`px-4 py-2 text-xs font-medium border transition-colors ${
              statusFilter === s
                ? 'border-black bg-black text-white'
                : 'border-lightgray text-midgray hover:border-black hover:text-black'
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      {/* Reservation List */}
      {loading ? (
        <div className="text-center py-16 text-sm text-midgray">
          예약 목록을 불러오는 중...
        </div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-16 text-sm text-midgray">
          예약이 없습니다.
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((r) => (
            <div
              key={r.id}
              className="bg-white border border-lightgray p-5"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                {/* Left: Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span
                      className={`px-2 py-0.5 text-[10px] font-semibold ${STATUS_STYLE[r.status] || 'bg-gray-100 text-gray-600'}`}
                    >
                      {r.status}
                    </span>
                    <span className="text-sm font-semibold text-black">
                      {r.userName}
                    </span>
                    <span className="text-xs text-midgray">{r.userPhone}</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-darkgray">
                    <span>{r.date} {r.time}</span>
                    <span>{r.service}</span>
                    <span>{r.stylist}</span>
                  </div>
                  {r.memo && (
                    <p className="text-xs text-midgray mt-1.5 truncate">
                      {r.memo}
                    </p>
                  )}
                </div>

                {/* Right: Actions */}
                <div className="flex items-center gap-1.5 shrink-0">
                  {r.status !== '확정' && r.status !== '취소' && (
                    <button
                      onClick={() => changeStatus(r.id, '확정')}
                      className="px-3 py-1.5 text-[11px] font-medium bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors"
                    >
                      확정
                    </button>
                  )}
                  {r.status !== '완료' && r.status !== '취소' && (
                    <button
                      onClick={() => changeStatus(r.id, '완료')}
                      className="px-3 py-1.5 text-[11px] font-medium bg-green-50 text-green-700 hover:bg-green-100 transition-colors"
                    >
                      완료
                    </button>
                  )}
                  {r.status !== '취소' && (
                    <button
                      onClick={() => changeStatus(r.id, '취소')}
                      className="px-3 py-1.5 text-[11px] font-medium bg-gray-50 text-gray-500 hover:bg-gray-100 transition-colors"
                    >
                      취소
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
