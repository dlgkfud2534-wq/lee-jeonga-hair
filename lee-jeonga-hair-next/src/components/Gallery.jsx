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

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 md:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-16 md:mb-20">
          <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-accent mb-4">
            Portfolio
          </p>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight text-white">
            시술 갤러리
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className={`relative aspect-square overflow-hidden group cursor-pointer ${
                index === 0 || index === 5 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <div className="absolute inset-0 bg-darkgray flex items-center justify-center">
                <div className="text-center p-4">
                  <span className="text-3xl md:text-4xl block mb-2 opacity-20">+</span>
                  <span className="text-[10px] text-white/20 font-medium tracking-wider uppercase">
                    Photo
                  </span>
                </div>
              </div>
              <div className="absolute inset-0 bg-accent/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4">
                <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-white/70 mb-2">
                  {item.category}
                </span>
                <h3 className="text-sm md:text-base font-semibold text-center leading-snug">
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
