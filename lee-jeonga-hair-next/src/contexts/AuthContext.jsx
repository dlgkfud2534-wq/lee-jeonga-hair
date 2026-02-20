'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import { db } from '@/lib/firebase'
import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  serverTimestamp,
} from 'firebase/firestore'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const saved = localStorage.getItem('user')
    if (saved) {
      try {
        setUser(JSON.parse(saved))
      } catch {
        localStorage.removeItem('user')
      }
    }
    setLoading(false)
  }, [])

  const formatPhone = (phone) => {
    const digits = phone.replace(/\D/g, '')
    if (digits.length === 11) {
      return `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7)}`
    }
    return phone
  }

  const signup = async (name, phone) => {
    const formattedPhone = formatPhone(phone)

    const q = query(
      collection(db, 'users'),
      where('phone', '==', formattedPhone)
    )
    const snapshot = await getDocs(q)

    if (!snapshot.empty) {
      throw new Error('이미 가입된 전화번호입니다.')
    }

    const docRef = await addDoc(collection(db, 'users'), {
      name: name.trim(),
      phone: formattedPhone,
      createdAt: serverTimestamp(),
      points: 0,
      coupons: [],
    })

    const userData = {
      id: docRef.id,
      name: name.trim(),
      phone: formattedPhone,
      points: 0,
      coupons: [],
    }

    setUser(userData)
    localStorage.setItem('user', JSON.stringify(userData))
    return userData
  }

  const login = async (name, phone) => {
    const formattedPhone = formatPhone(phone)

    const q = query(
      collection(db, 'users'),
      where('phone', '==', formattedPhone)
    )
    const snapshot = await getDocs(q)

    if (snapshot.empty) {
      throw new Error('가입되지 않은 전화번호입니다.')
    }

    const doc = snapshot.docs[0]
    const data = doc.data()

    if (data.name !== name.trim()) {
      throw new Error('이름이 일치하지 않습니다.')
    }

    const userData = {
      id: doc.id,
      name: data.name,
      phone: data.phone,
      points: data.points || 0,
      coupons: data.coupons || [],
      isAdmin: data.isAdmin || false,
    }

    setUser(userData)
    localStorage.setItem('user', JSON.stringify(userData))
    return userData
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  return (
    <AuthContext.Provider value={{ user, loading, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
