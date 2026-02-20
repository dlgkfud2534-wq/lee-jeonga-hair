'use client'

import { useState, useEffect } from 'react'
import { db } from '@/lib/firebase'
import {
  collection,
  getDocs,
  doc,
  updateDoc,
  orderBy,
  query,
} from 'firebase/firestore/lite'
import { Search, Save, RefreshCw, ShieldCheck, ShieldOff } from 'lucide-react'

export default function UserManagement() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [editingId, setEditingId] = useState(null)
  const [editPoints, setEditPoints] = useState(0)
  const [saving, setSaving] = useState(false)

  const fetchUsers = async () => {
    setLoading(true)
    try {
      const q = query(collection(db, 'users'), orderBy('createdAt', 'desc'))
      const snapshot = await getDocs(q)
      const list = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }))
      setUsers(list)
    } catch (err) {
      console.error('회원 목록 조회 실패:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  const filteredUsers = users.filter((u) => {
    const term = searchTerm.toLowerCase()
    return (
      (u.name && u.name.toLowerCase().includes(term)) ||
      (u.phone && u.phone.includes(term))
    )
  })

  const startEdit = (user) => {
    setEditingId(user.id)
    setEditPoints(user.points || 0)
  }

  const cancelEdit = () => {
    setEditingId(null)
    setEditPoints(0)
  }

  const savePoints = async (userId) => {
    setSaving(true)
    try {
      await updateDoc(doc(db, 'users', userId), { points: Number(editPoints) })
      setUsers((prev) =>
        prev.map((u) =>
          u.id === userId ? { ...u, points: Number(editPoints) } : u
        )
      )
      setEditingId(null)
    } catch (err) {
      console.error('포인트 수정 실패:', err)
      alert('포인트 수정에 실패했습니다.')
    } finally {
      setSaving(false)
    }
  }

  const toggleAdmin = async (userId, currentIsAdmin) => {
    const action = currentIsAdmin ? '관리자 권한을 해제' : '관리자 권한을 부여'
    if (!confirm(`이 회원에게 ${action}하시겠습니까?`)) return
    try {
      await updateDoc(doc(db, 'users', userId), { isAdmin: !currentIsAdmin })
      setUsers((prev) =>
        prev.map((u) =>
          u.id === userId ? { ...u, isAdmin: !currentIsAdmin } : u
        )
      )
    } catch (err) {
      console.error('관리자 권한 변경 실패:', err)
      alert('관리자 권한 변경에 실패했습니다.')
    }
  }

  const formatDate = (timestamp) => {
    if (!timestamp) return '-'
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp)
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    })
  }

  return (
    <div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6">
        <h2 className="text-lg font-bold text-black">
          회원 목록{' '}
          <span className="text-sm font-normal text-midgray ml-2">
            {filteredUsers.length}명
          </span>
        </h2>
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <div className="relative flex-1 sm:flex-initial">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-midgray" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="이름 또는 전화번호 검색"
              className="w-full sm:w-64 pl-9 pr-4 py-2.5 text-sm border border-lightgray focus:outline-none focus:border-black transition-colors"
            />
          </div>
          <button
            onClick={fetchUsers}
            className="p-2.5 border border-lightgray hover:border-black text-midgray hover:text-black transition-colors"
            title="새로고침"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-16 text-sm text-midgray">
          회원 목록을 불러오는 중...
        </div>
      ) : filteredUsers.length === 0 ? (
        <div className="text-center py-16 text-sm text-midgray">
          {searchTerm ? '검색 결과가 없습니다.' : '등록된 회원이 없습니다.'}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredUsers.map((user) => (
            <div
              key={user.id}
              className="bg-white border border-lightgray p-5"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-semibold text-black">
                      {user.name}
                    </h3>
                    {user.isAdmin && (
                      <span className="px-1.5 py-0.5 text-[10px] font-semibold bg-accent text-white">
                        관리자
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-midgray">{user.phone}</p>
                </div>
                <span className="text-[10px] text-midgray">
                  {formatDate(user.createdAt)}
                </span>
              </div>

              <div className="pt-3 border-t border-lightgray">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-midgray">포인트</span>
                  {editingId === user.id ? (
                    <div className="flex items-center gap-1.5">
                      <input
                        type="number"
                        value={editPoints}
                        onChange={(e) => setEditPoints(e.target.value)}
                        className="w-20 px-2 py-1 text-sm text-right border border-lightgray focus:outline-none focus:border-black"
                      />
                      <button
                        onClick={() => savePoints(user.id)}
                        disabled={saving}
                        className="p-1.5 bg-black text-white hover:bg-darkgray transition-colors disabled:opacity-50"
                        title="저장"
                      >
                        <Save className="w-3 h-3" />
                      </button>
                      <button
                        onClick={cancelEdit}
                        className="p-1.5 border border-lightgray text-midgray hover:text-black hover:border-black transition-colors"
                      >
                        <span className="text-xs">취소</span>
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => startEdit(user)}
                      className="text-sm font-semibold text-black hover:text-accent transition-colors"
                    >
                      {(user.points || 0).toLocaleString()}P
                    </button>
                  )}
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-midgray">쿠폰</span>
                  <span className="text-sm font-semibold text-black">
                    {(user.coupons || []).length}장
                  </span>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-lightgray">
                  <span className="text-xs text-midgray">관리자 권한</span>
                  <button
                    onClick={() => toggleAdmin(user.id, user.isAdmin)}
                    className={`flex items-center gap-1 px-2 py-1 text-[11px] font-medium transition-colors ${
                      user.isAdmin
                        ? 'text-accent hover:text-accent-dark'
                        : 'text-midgray hover:text-black'
                    }`}
                  >
                    {user.isAdmin ? (
                      <>
                        <ShieldCheck className="w-3.5 h-3.5" />
                        해제
                      </>
                    ) : (
                      <>
                        <ShieldOff className="w-3.5 h-3.5" />
                        부여
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
