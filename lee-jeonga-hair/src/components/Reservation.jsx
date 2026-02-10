export default function Reservation() {
  return (
    <section
      id="reservation"
      className="py-16 md:py-24 bg-gradient-to-br from-warm-brown to-dark-brown relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-caramel/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-golden-sand/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 text-center">
        {/* Label */}
        <p className="text-xs font-medium tracking-wider uppercase text-golden-sand mb-3">
          Reservation
        </p>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight text-white mb-4">
          지금 바로 예약하세요
        </h2>

        <p className="text-lg md:text-xl font-normal leading-relaxed text-white/70 max-w-2xl mx-auto mb-10">
          전화 또는 카카오톡으로 간편하게 예약하실 수 있습니다.
          <br className="hidden md:block" />
          첫 방문 고객님께는 20% 할인 혜택을 드립니다.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          {/* Phone */}
          <a
            href="tel:02-1234-5678"
            className="flex items-center gap-3 text-base font-semibold text-dark-brown bg-golden-sand hover:bg-caramel px-8 py-4 rounded-full transition-colors shadow-lg w-full sm:w-auto justify-center"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            02-1234-5678
          </a>

          {/* KakaoTalk */}
          <a
            href="#"
            className="flex items-center gap-3 text-base font-semibold text-dark-brown bg-[#FEE500] hover:bg-[#FDD835] px-8 py-4 rounded-full transition-colors shadow-lg w-full sm:w-auto justify-center"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3C6.48 3 2 6.58 2 10.9c0 2.78 1.86 5.22 4.65 6.6l-.95 3.52c-.08.3.26.55.52.38l4.2-2.8c.51.07 1.04.1 1.58.1 5.52 0 10-3.58 10-7.8S17.52 3 12 3z" />
            </svg>
            카카오톡 예약
          </a>
        </div>

        {/* Discount badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3">
          <span className="text-golden-sand text-lg">🎉</span>
          <span className="text-sm md:text-base font-medium text-white/90">
            첫 방문 고객 <span className="text-golden-sand font-bold">20% 할인</span> 이벤트 진행 중
          </span>
        </div>
      </div>
    </section>
  )
}
