import { Leaf, Droplets, Shield, Sparkles } from 'lucide-react'

export default function BrandStory() {
  const values = [
    {
      icon: Leaf,
      title: '식물 기반 성분',
      desc: '자연에서 찾은 유효 성분으로 두피와 모발을 건강하게 케어합니다. 페퍼민트, 살리신산 등 자연 유래 성분만을 엄선했습니다.',
    },
    {
      icon: Droplets,
      title: '깊은 보습과 영양',
      desc: '세라마이드 NS, 케라틴 등 전문 성분이 모발 깊숙이 수분과 영양을 공급하여 촉촉하고 건강한 두피 환경을 만듭니다.',
    },
    {
      icon: Shield,
      title: '두피 건강 보호',
      desc: 'pH 밸런스를 조절하고 모근을 강화하여 탈모를 예방합니다. 혈액순환 촉진으로 건강한 모발 성장 환경을 조성합니다.',
    },
    {
      icon: Sparkles,
      title: '프로페셔널 홈케어',
      desc: '미용실에서 사용하는 전문 제품을 집에서도 동일하게. 6단계 루틴으로 살롱 수준의 케어를 완성합니다.',
    },
  ]

  return (
    <section className="py-28 md:py-40 bg-offwhite">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-20 md:mb-28">
          <p className="text-accent text-xs md:text-sm font-semibold uppercase tracking-[0.3em] mb-5">
            Brand Story
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
            당신의 두피와 모발을 위한<br />프리미엄 케어
          </h2>
          <p className="text-midgray text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            SESEO 식물하나:담다는 자연의 식물 성분을 담아
            두피부터 모발 끝까지 건강하게 가꾸는<br></br>프로페셔널 케어 브랜드입니다.
            <br className="hidden md:block" />
            과학적으로 검증된 성분과 체계적인 6단계 루틴으로 최상의 결과를 약속합니다.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {values.map((item, i) => (
            <div key={i} className="bg-white p-8 md:p-10 text-center border border-lightgray hover:border-accent/30 transition-all">
              <div className="w-16 h-16 mx-auto mb-7 rounded-full bg-accent/10 flex items-center justify-center">
                <item.icon size={28} className="text-accent" />
              </div>
              <h3 className="font-bold text-lg md:text-xl mb-4">{item.title}</h3>
              <p className="text-midgray text-sm md:text-base leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
