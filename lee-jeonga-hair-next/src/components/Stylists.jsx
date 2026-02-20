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
    <section id="stylists" className="py-20 md:py-32 bg-offwhite">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-16 md:mb-20">
          <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-accent mb-4">
            Our Team
          </p>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight text-black">
            스타일리스트
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stylists.map((stylist) => (
            <div key={stylist.name} className="text-center group">
              <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-lightgray flex items-center justify-center overflow-hidden group-hover:ring-2 group-hover:ring-accent transition-all">
                <span className="text-5xl text-midgray/40">+</span>
              </div>
              <h3 className="text-xl font-semibold text-black mb-1">
                {stylist.name}
              </h3>
              <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-accent mb-3">
                {stylist.role} · {stylist.experience}
              </p>
              <p className="text-sm font-normal leading-relaxed text-midgray mb-4 max-w-xs mx-auto">
                {stylist.description}
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {stylist.specialties.map((s) => (
                  <span
                    key={s}
                    className="text-[11px] font-medium text-darkgray border border-lightgray px-3 py-1"
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
