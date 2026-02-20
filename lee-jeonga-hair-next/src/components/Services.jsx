const services = [
  {
    name: '커트',
    description: '얼굴형과 라이프스타일에 맞춘 정밀 커트로 자연스러운 실루엣을 완성합니다.',
    price: '₩25,000~',
  },
  {
    name: '펌',
    description: '볼륨펌, 다운펌, 히피펌 등 최신 트렌드 펌으로 원하는 스타일을 연출합니다.',
    price: '₩80,000~',
  },
  {
    name: '염색',
    description: '피부톤에 어울리는 컬러 진단 후, 저자극 약제로 건강한 염색을 제공합니다.',
    price: '₩70,000~',
  },
  {
    name: '두피·모발 클리닉',
    description: '두피 진단부터 모발 트리트먼트까지, 건강한 모발을 위한 맞춤 케어.',
    price: '₩50,000~',
  },
  {
    name: '스타일링',
    description: '특별한 날을 위한 업스타일, 웨딩, 졸업식 등 이벤트 헤어 스타일링.',
    price: '₩40,000~',
  },
  {
    name: '매직·셋팅',
    description: '매직 스트레이트, 볼륨 매직 등으로 매끄럽고 정돈된 헤어를 선사합니다.',
    price: '₩100,000~',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-accent mb-4">
            Services
          </p>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight text-black">
            서비스 메뉴
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-lightgray">
          {services.map((service, i) => (
            <div
              key={service.name}
              className="bg-white p-8 md:p-10 group hover:bg-offwhite transition-colors duration-300"
            >
              <span className="text-[11px] font-medium tracking-[0.2em] text-midgray">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="text-xl md:text-2xl font-semibold text-black mt-3 mb-3 group-hover:text-accent transition-colors">
                {service.name}
              </h3>
              <p className="text-sm font-normal leading-relaxed text-midgray mb-6">
                {service.description}
              </p>
              <p className="text-lg font-bold text-accent">{service.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
