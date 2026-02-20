export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1920&q=80)',
        }}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-white mb-4">
          LEE JEONGA<span className="text-accent">.</span>
        </h1>
        <p className="text-sm md:text-base font-light tracking-[0.15em] text-white/70 mb-12">
          당신만의 아름다움을 완성합니다
        </p>
        <a
          href="#reservation"
          className="text-sm font-semibold text-white bg-accent hover:bg-accent-dark px-10 py-4 tracking-wide transition-colors"
        >
          예약하기
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-px h-10 bg-white/30 animate-pulse" />
      </div>
    </section>
  )
}
