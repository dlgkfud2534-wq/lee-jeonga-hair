const services = [
  {
    icon: '✂️',
    name: '커트',
    description: '얼굴형과 라이프스타일에 맞춘 정밀 커트로 자연스러운 실루엣을 완성합니다.',
    price: '₩25,000~',
  },
  {
    icon: '🌀',
    name: '펌',
    description: '볼륨펌, 다운펌, 히피펌 등 최신 트렌드 펌으로 원하는 스타일을 연출합니다.',
    price: '₩80,000~',
  },
  {
    icon: '🎨',
    name: '염색',
    description: '피부톤에 어울리는 컬러 진단 후, 저자극 약제로 건강한 염색을 제공합니다.',
    price: '₩70,000~',
  },
  {
    icon: '💆',
    name: '두피·모발 클리닉',
    description: '두피 진단부터 모발 트리트먼트까지, 건강한 모발을 위한 맞춤 케어.',
    price: '₩50,000~',
  },
  {
    icon: '💇',
    name: '스타일링',
    description: '특별한 날을 위한 업스타일, 웨딩, 졸업식 등 이벤트 헤어 스타일링.',
    price: '₩40,000~',
  },
  {
    icon: '✨',
    name: '매직·셋팅',
    description: '매직 스트레이트, 볼륨 매직 등으로 매끄럽고 정돈된 헤어를 선사합니다.',
    price: '₩100,000~',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-beige">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs font-medium tracking-wider uppercase text-caramel mb-3">
            Services
          </p>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight text-dark-brown mb-4">
            서비스 메뉴
          </h2>
          <p className="text-lg md:text-xl font-normal leading-relaxed text-dark-brown/70 max-w-2xl mx-auto">
            당신에게 딱 맞는 스타일을 찾아드립니다
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.name}
              className="bg-cream rounded-2xl p-6 md:p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="text-4xl mb-4">{service.icon}</div>

              {/* Name */}
              <h3 className="text-xl md:text-2xl font-semibold leading-snug text-dark-brown mb-2 group-hover:text-warm-brown transition-colors">
                {service.name}
              </h3>

              {/* Description */}
              <p className="text-base md:text-lg font-normal leading-relaxed text-dark-brown/70 mb-4">
                {service.description}
              </p>

              {/* Price */}
              <p className="text-lg font-bold text-warm-brown">{service.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
