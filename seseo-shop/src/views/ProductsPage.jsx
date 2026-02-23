'use client'

import { useState } from 'react'
import { seseoProducts } from '@/data/products'
import StepFilter from '@/components/StepFilter'
import ProductGrid from '@/components/ProductGrid'

export default function ProductsPage() {
  const [selectedStep, setSelectedStep] = useState(0)

  const filtered = selectedStep === 0
    ? seseoProducts
    : seseoProducts.filter(p => p.step === selectedStep)

  return (
    <div className="pt-20 md:pt-24">
      {/* Hero Banner */}
      <section className="bg-offwhite py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
          <p className="text-accent text-[11px] font-semibold uppercase tracking-[0.3em] mb-4">
            All Products
          </p>
          <h1 className="text-2xl md:text-4xl font-bold">전체 상품</h1>
          <p className="text-midgray text-sm mt-3">
            SESEO 식물하나:담다 6단계 두피·모발 케어 라인
          </p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="mb-10">
            <StepFilter selected={selectedStep} onSelect={setSelectedStep} />
          </div>
          <ProductGrid products={filtered} />
        </div>
      </section>
    </div>
  )
}
