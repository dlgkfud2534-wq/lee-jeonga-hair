import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="pt-20 md:pt-24 min-h-screen flex items-center justify-center">
      <div className="text-center px-6">
        <h1 className="text-6xl font-bold text-lightgray mb-4">404</h1>
        <h2 className="text-xl font-bold mb-3">페이지를 찾을 수 없습니다</h2>
        <p className="text-midgray text-sm mb-8">
          요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="px-8 py-3.5 bg-accent text-white font-semibold text-sm tracking-wide hover:bg-accent-dark transition-colors"
          >
            홈으로 가기
          </Link>
          <Link
            href="/products"
            className="px-8 py-3.5 border border-lightgray text-darkgray font-semibold text-sm tracking-wide hover:border-accent hover:text-accent transition-colors"
          >
            상품 보기
          </Link>
        </div>
      </div>
    </div>
  )
}
