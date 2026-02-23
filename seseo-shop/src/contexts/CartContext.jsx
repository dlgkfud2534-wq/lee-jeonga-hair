'use client'

import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import { getProductById } from '@/data/products'

const CartContext = createContext(null)

const CART_KEY = 'seseo_cart'

function loadCart() {
  if (typeof window === 'undefined') return []
  try {
    const saved = localStorage.getItem(CART_KEY)
    if (saved) {
      const parsed = JSON.parse(saved)
      return parsed.items || []
    }
  } catch {}
  return []
}

function saveCart(items) {
  localStorage.setItem(CART_KEY, JSON.stringify({ items, updatedAt: new Date().toISOString() }))
}

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setItems(loadCart())
    setLoaded(true)
  }, [])

  useEffect(() => {
    if (loaded) {
      saveCart(items)
    }
  }, [items, loaded])

  const addItem = useCallback((productId, sizeIndex, quantity = 1) => {
    setItems(prev => {
      const existing = prev.find(item => item.productId === productId && item.sizeIndex === sizeIndex)
      if (existing) {
        return prev.map(item =>
          item.productId === productId && item.sizeIndex === sizeIndex
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }
      return [...prev, { productId, sizeIndex, quantity }]
    })
  }, [])

  const removeItem = useCallback((productId, sizeIndex) => {
    setItems(prev => prev.filter(item => !(item.productId === productId && item.sizeIndex === sizeIndex)))
  }, [])

  const updateQuantity = useCallback((productId, sizeIndex, newQuantity) => {
    if (newQuantity < 1) return
    setItems(prev =>
      prev.map(item =>
        item.productId === productId && item.sizeIndex === sizeIndex
          ? { ...item, quantity: newQuantity }
          : item
      )
    )
  }, [])

  const clearCart = useCallback(() => {
    setItems([])
  }, [])

  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0)

  const getCartItems = useCallback(() => {
    return items.map(item => {
      const product = getProductById(item.productId)
      if (!product) return null
      const size = product.sizes[item.sizeIndex]
      if (!size) return null
      return {
        ...item,
        product,
        volume: size.volume,
        price: size.price,
        image: size.image || product.image,
        subtotal: size.price * item.quantity,
      }
    }).filter(Boolean)
  }, [items])

  const getCartTotal = useCallback(() => {
    const enriched = getCartItems()
    const subtotal = enriched.reduce((sum, item) => sum + item.subtotal, 0)
    const threshold = parseInt(process.env.NEXT_PUBLIC_FREE_SHIPPING_THRESHOLD || '100000')
    const fee = parseInt(process.env.NEXT_PUBLIC_SHIPPING_FEE || '3000')
    const shippingFee = subtotal >= threshold ? 0 : fee
    return { subtotal, shippingFee, grandTotal: subtotal + shippingFee }
  }, [getCartItems])

  return (
    <CartContext.Provider value={{ items, cartCount, addItem, removeItem, updateQuantity, clearCart, getCartItems, getCartTotal }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
