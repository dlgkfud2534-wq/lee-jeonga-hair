'use client'

import { useEffect } from 'react'

export default function FirebaseInit() {
  useEffect(() => {
    // Firebase 모듈 로드 + Firestore 연결 워밍업
    import('@/lib/firebase').then(({ db }) => {
      import('firebase/firestore').then(({ collection, getDocs, query, limit }) => {
        // 가벼운 읽기로 Firestore 연결을 미리 수립
        getDocs(query(collection(db, 'users'), limit(1))).catch(() => {})
      })
    })
  }, [])
  return null
}
