'use client'

import { formatPrice } from '@/data/products'

export default function SizeSelector({ sizes, selected, onSelect }) {
  return (
    <div className="flex flex-wrap gap-2">
      {sizes.map((size, i) => (
        <button
          key={i}
          onClick={() => onSelect(i)}
          className={`px-4 py-2.5 text-sm font-medium border transition-all ${
            selected === i
              ? 'border-accent bg-accent text-white'
              : 'border-lightgray bg-white text-darkgray hover:border-accent'
          }`}
        >
          <span className="block">{size.volume}</span>
          <span className="block text-xs mt-0.5 opacity-80">{formatPrice(size.price)}</span>
        </button>
      ))}
    </div>
  )
}
