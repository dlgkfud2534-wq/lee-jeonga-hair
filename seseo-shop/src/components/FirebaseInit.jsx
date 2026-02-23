'use client'

import { useEffect } from 'react'

export default function FirebaseInit() {
  useEffect(() => {
    import('@/lib/firebase').then(({ db }) => {
      import('firebase/firestore/lite').then(({ collection, getDocs, query, limit }) => {
        getDocs(query(collection(db, 'users'), limit(1))).catch(() => {})
      })
    })
  }, [])
  return null
}
