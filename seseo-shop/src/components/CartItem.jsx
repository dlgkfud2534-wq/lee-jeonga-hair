'use client'

import Link from 'next/link'
import { X } from 'lucide-react'
import { formatPrice } from '@/data/products'
import QuantitySelector from './QuantitySelector'
import { useCart } from '@/contexts/CartContext'

export default function CartItem({ item }) {
  const { updateQuantity, removeItem } = useCart()

  return (
    <div className="flex gap-4 py-6 border-b border-lightgray">
      {/* Image */}
      <Link href={`/products/${item.productId}`} className="shrink-0">
        <div className="w-20 h-20 md:w-24 md:h-24 bg-offwhite overflow-hidden">
          <img
            src={item.image}
            alt={item.product.name}
            className="w-full h-full object-cover"
          />
        </div>
      </Link>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div>
            <Link href={`/products/${item.productId}`} className="font-semibold text-sm hover:text-accent transition-colors">
              {item.product.name}
            </Link>
            <p className="text-xs text-midgray mt-1">{item.volume}</p>
          </div>
          <button
            onClick={() => removeItem(item.productId, item.sizeIndex)}
            className="text-midgray hover:text-black transition-colors shrink-0"
            aria-label="삭제"
          >
            <X size={18} />
          </button>
        </div>

        <div className="flex items-end justify-between mt-4">
          <QuantitySelector
            quantity={item.quantity}
            onChange={(q) => updateQuantity(item.productId, item.sizeIndex, q)}
          />
          <p className="font-bold text-sm">{formatPrice(item.subtotal)}</p>
        </div>
      </div>
    </div>
  )
}
