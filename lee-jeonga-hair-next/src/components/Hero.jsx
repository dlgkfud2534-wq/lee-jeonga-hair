export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-beige via-cream to-golden-sand/30" />

      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-caramel/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-golden-sand/15 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 text-center">
        {/* Label */}
        <p className="text-xs font-medium tracking-wider uppercase text-caramel mb-6">
          Premium Hair Salon
        </p>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tighter text-dark-brown mb-6">
          당신만의
          <br />
          <span className="text-warm-brown">아름다움</span>을<br className="md:hidden" /> 완성합니다
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl font-normal leading-relaxed text-dark-brown/70 max-w-2xl mx-auto mb-10">
          20년 경력의 이정아 원장이 이끄는 프리미엄 헤어살롱.
          <br className="hidden md:block" />
          트렌드와 개성을 모두 담은 맞춤 스타일링을 경험하세요.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#reservation"
            className="text-base font-semibold text-white bg-warm-brown hover:bg-warm-brown-light px-8 py-3.5 rounded-full transition-colors shadow-lg shadow-warm-brown/25"
          >
            지금 예약하기
          </a>
          <a
            href="#services"
            className="text-base font-semibold text-warm-brown border-2 border-warm-brown/30 hover:border-warm-brown hover:bg-warm-brown/5 px-8 py-3.5 rounded-full transition-colors"
          >
            서비스 보기
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16">
          {[
            { number: '20+', label: '년 경력' },
            { number: '15,000+', label: '고객 시술' },
            { number: '4.9', label: '평균 평점' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-warm-brown">{stat.number}</p>
              <p className="text-xs md:text-sm font-normal leading-normal tracking-wide text-dark-brown/60 mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-dark-brown/40 tracking-wider">SCROLL</span>
        <div className="w-px h-8 bg-dark-brown/20 animate-pulse" />
      </div>
    </section>
  )
}
