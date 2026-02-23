'use client'

import { Minus, Plus } from 'lucide-react'

export default function QuantitySelector({ quantity, onChange }) {
  return (
    <div className="flex items-center border border-lightgray">
      <button
        onClick={() => onChange(Math.max(1, quantity - 1))}
        className="w-10 h-10 flex items-center justify-center text-midgray hover:text-black transition-colors"
        disabled={quantity <= 1}
      >
        <Minus size={16} />
      </button>
      <span className="w-12 h-10 flex items-center justify-center text-sm font-semibold border-x border-lightgray">
        {quantity}
      </span>
      <button
        onClick={() => onChange(quantity + 1)}
        className="w-10 h-10 flex items-center justify-center text-midgray hover:text-black transition-colors"
      >
        <Plus size={16} />
      </button>
    </div>
  )
}
