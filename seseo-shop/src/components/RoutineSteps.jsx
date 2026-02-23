import Link from 'next/link'
import { seseoProducts } from '@/data/products'

export default function RoutineSteps() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <p className="text-accent text-xs md:text-sm font-semibold uppercase tracking-[0.3em] mb-5">
            6-Step Routine
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">
            6단계 홈케어 루틴
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {seseoProducts.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="group text-center"
            >
              <div className="relative aspect-square bg-offwhite rounded-lg overflow-hidden mb-3 border border-lightgray group-hover:border-accent transition-all isolate">
                <div className="absolute top-2 left-2 z-10 bg-accent text-white text-xs font-bold px-2 py-0.5 rounded">
                  STEP {product.step}
                </div>
                <div className="absolute inset-0 flex items-end justify-center overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    style={{
                      transform: `scale(${product.routineScale || 1.6}) translate(${product.routineThumbX || '0%'}, ${product.routineThumbY || '0%'}) rotate(${product.routineRotate || '0deg'})`,
                      transformOrigin: 'center bottom',
                    }}
                  />
                </div>
              </div>
              <p className="text-xs text-accent font-medium uppercase tracking-wide mb-1">
                {product.stepLabel}
              </p>
              <p className="text-sm font-semibold group-hover:text-accent transition-colors">
                {product.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
