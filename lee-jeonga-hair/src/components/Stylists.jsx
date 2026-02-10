const stylists = [
  {
    name: '이정아 원장',
    role: '대표 원장',
    experience: '경력 20년',
    specialties: ['프리미엄 커트', '컬러 컨설팅', '두피 클리닉'],
    description:
      '서울 유명 살롱에서 20년간 수만 명의 고객을 만나며 쌓은 경험으로, 고객 한 분 한 분의 개성과 라이프스타일에 맞는 최적의 스타일을 제안합니다.',
  },
  {
    name: '김수현 디자이너',
    role: '수석 디자이너',
    experience: '경력 12년',
    specialties: ['트렌드 펌', '옴브레 염색', '남성 커트'],
    description:
      '최신 트렌드를 빠르게 반영하면서도 고객의 모발 상태를 최우선으로 생각하는 시술을 합니다.',
  },
  {
    name: '박지은 디자이너',
    role: '디자이너',
    experience: '경력 8년',
    specialties: ['웨딩 스타일링', '업스타일', '볼륨펌'],
    description:
      '특별한 날을 위한 헤어 스타일링 전문. 세심한 상담과 꼼꼼한 마무리로 최고의 결과를 만들어 드립니다.',
  },
]

export default function Stylists() {
  return (
    <section id="stylists" className="py-16 md:py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs font-medium tracking-wider uppercase text-caramel mb-3">
            Our Team
          </p>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight text-dark-brown mb-4">
            스타일리스트
          </h2>
          <p className="text-lg md:text-xl font-normal leading-relaxed text-dark-brown/70 max-w-2xl mx-auto">
            최고의 실력과 정성으로 모시겠습니다
          </p>
        </div>

        {/* Stylists */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stylists.map((stylist) => (
            <div key={stylist.name} className="text-center group">
              {/* Profile Image Placeholder */}
              <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-caramel/30 to-golden-sand/30 flex items-center justify-center overflow-hidden group-hover:shadow-xl transition-shadow">
                <div className="w-full h-full bg-beige rounded-full flex items-center justify-center">
                  <span className="text-6xl text-caramel/50">👤</span>
                </div>
              </div>

              {/* Name & Role */}
              <h3 className="text-xl md:text-2xl font-semibold leading-snug text-dark-brown mb-1">
                {stylist.name}
              </h3>
              <p className="text-xs font-medium tracking-wider uppercase text-caramel mb-2">
                {stylist.role} · {stylist.experience}
              </p>

              {/* Description */}
              <p className="text-base font-normal leading-relaxed text-dark-brown/70 mb-4 max-w-sm mx-auto">
                {stylist.description}
              </p>

              {/* Specialties */}
              <div className="flex flex-wrap justify-center gap-2">
                {stylist.specialties.map((s) => (
                  <span
                    key={s}
                    className="text-xs font-medium text-warm-brown bg-warm-brown/10 px-3 py-1 rounded-full"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
