'use client'

import { useState } from 'react'
import { ShoppingBag, Check } from 'lucide-react'
import { useCart } from '@/contexts/CartContext'

export default function AddToCartButton({ productId, sizeIndex, quantity = 1 }) {
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)

  const handleClick = () => {
    addItem(productId, sizeIndex, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <button
      onClick={handleClick}
      className={`flex items-center justify-center gap-2 w-full py-3.5 font-semibold text-sm tracking-wide transition-all ${
        added
          ? 'bg-accent-dark text-white'
          : 'bg-accent text-white hover:bg-accent-dark'
      }`}
    >
      {added ? (
        <>
          <Check size={18} />
          장바구니에 담았습니다
        </>
      ) : (
        <>
          <ShoppingBag size={18} />
          장바구니 담기
        </>
      )}
    </button>
  )
}
