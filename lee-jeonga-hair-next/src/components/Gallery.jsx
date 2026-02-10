const galleryItems = [
  { id: 1, label: '내추럴 레이어드 커트', category: '커트' },
  { id: 2, label: '볼륨 C컬 펌', category: '펌' },
  { id: 3, label: '애쉬 브라운 염색', category: '염색' },
  { id: 4, label: '히피펌 스타일링', category: '펌' },
  { id: 5, label: '밀크 베이지 컬러', category: '염색' },
  { id: 6, label: '두피 클리닉 전후', category: '클리닉' },
  { id: 7, label: '웨딩 업스타일', category: '스타일링' },
  { id: 8, label: '댄디 숏컷', category: '커트' },
]

const colors = [
  'from-caramel/40 to-golden-sand/30',
  'from-warm-brown/30 to-caramel/20',
  'from-golden-sand/40 to-beige',
  'from-caramel/30 to-warm-brown/20',
  'from-warm-brown/20 to-golden-sand/30',
  'from-golden-sand/30 to-caramel/20',
  'from-caramel/20 to-warm-brown/30',
  'from-warm-brown/30 to-golden-sand/20',
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 md:py-24 bg-beige">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs font-medium tracking-wider uppercase text-caramel mb-3">
            Portfolio
          </p>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight text-dark-brown mb-4">
            시술 갤러리
          </h2>
          <p className="text-lg md:text-xl font-normal leading-relaxed text-dark-brown/70 max-w-2xl mx-auto">
            이정아 헤어에서 완성한 다양한 스타일을 만나보세요
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className={`relative aspect-square rounded-2xl overflow-hidden group cursor-pointer ${
                index === 0 || index === 5 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${colors[index]} flex items-center justify-center`}
              >
                <div className="text-center p-4">
                  <span className="text-4xl md:text-5xl block mb-2 opacity-30">📷</span>
                  <span className="text-xs md:text-sm text-dark-brown/40 font-medium">
                    시술 사진
                  </span>
                </div>
              </div>
              <div className="absolute inset-0 bg-dark-brown/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4">
                <span className="text-xs font-medium tracking-wider uppercase text-golden-sand mb-2">
                  {item.category}
                </span>
                <h3 className="text-base md:text-lg font-semibold text-center leading-snug">
                  {item.label}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
