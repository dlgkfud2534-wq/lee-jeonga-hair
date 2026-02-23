import { ExternalLink } from 'lucide-react'

export default function CrossSiteLink() {
  const salonUrl = process.env.NEXT_PUBLIC_SALON_URL || '#'

  return (
    <section className="py-16 md:py-20 bg-accent-dark text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
        <p className="text-white/60 text-xs md:text-sm font-semibold uppercase tracking-[0.3em] mb-5">
          Visit Our Salon
        </p>
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          이정아 헤어에서 직접 체험하세요
        </h2>
        <p className="text-white/60 text-base md:text-lg mb-8 max-w-2xl mx-auto">
          전북 군산시 바이더베이직 이정아헤어에서 SESEO 제품을 직접 체험하고,
          <br></br>전문 스타일리스트의 두피·모발 케어를 받아보세요.
        </p>
        <a
          href={salonUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-white text-accent-dark px-8 py-3.5 font-semibold text-sm tracking-wide hover:bg-white/90 transition-colors"
        >
          이정아 헤어 바로가기 <ExternalLink size={16} />
        </a>
      </div>
    </section>
  )
}
