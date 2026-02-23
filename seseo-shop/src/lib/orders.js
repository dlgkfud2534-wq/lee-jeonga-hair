import { db } from '@/lib/firebase'
import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  query,
  where,
  orderBy,
  serverTimestamp,
} from 'firebase/firestore/lite'

function withTimeout(promise, ms = 10000) {
  return Promise.race([
    promise,
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error('서버 응답이 느립니다. 잠시 후 다시 시도해주세요.')), ms)
    ),
  ])
}

export async function createOrder(orderData) {
  const docRef = await withTimeout(
    addDoc(collection(db, 'orders'), {
      ...orderData,
      status: 'pending',
      paymentMethod: 'placeholder',
      paymentStatus: 'pending',
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    })
  )
  return docRef.id
}

export async function getOrdersByUserId(userId) {
  const q = query(
    collection(db, 'orders'),
    where('userId', '==', userId),
    orderBy('createdAt', 'desc')
  )
  const snapshot = await withTimeout(getDocs(q))
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  }))
}

export async function getOrderById(orderId) {
  const docRef = doc(db, 'orders', orderId)
  const docSnap = await withTimeout(getDoc(docRef))
  if (!docSnap.exists()) return null
  return { id: docSnap.id, ...docSnap.data() }
}
