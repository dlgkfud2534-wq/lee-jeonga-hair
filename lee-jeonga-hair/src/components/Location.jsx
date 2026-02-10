const hours = [
  { day: '월요일', time: '정기 휴무', closed: true },
  { day: '화요일', time: '10:00 - 20:00', closed: false },
  { day: '수요일', time: '10:00 - 20:00', closed: false },
  { day: '목요일', time: '10:00 - 20:00', closed: false },
  { day: '금요일', time: '10:00 - 21:00', closed: false },
  { day: '토요일', time: '10:00 - 21:00', closed: false },
  { day: '일요일', time: '10:00 - 18:00', closed: false },
]

export default function Location() {
  const phone = import.meta.env.VITE_BUSINESS_PHONE
  const address = import.meta.env.VITE_BUSINESS_ADDRESS
  const addressDetail = import.meta.env.VITE_BUSINESS_ADDRESS_DETAIL
  const kakaoId = import.meta.env.VITE_KAKAO_ID

  return (
    <section id="location" className="py-16 md:py-24 bg-beige">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs font-medium tracking-wider uppercase text-caramel mb-3">
            Location
          </p>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight text-dark-brown mb-4">
            오시는 길
          </h2>
          <p className="text-lg md:text-xl font-normal leading-relaxed text-dark-brown/70 max-w-2xl mx-auto">
            편리한 위치에서 만나보세요
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Map Placeholder */}
          <div className="rounded-2xl overflow-hidden bg-cream aspect-[4/3] flex items-center justify-center">
            <div className="text-center p-8">
              <div className="text-6xl mb-4 opacity-30">🗺️</div>
              <p className="text-base font-medium text-dark-brown/50 mb-2">지도 영역</p>
              <p className="text-sm text-dark-brown/40">
                {address}
                <br />
                {addressDetail}
              </p>
            </div>
          </div>

          {/* Info */}
          <div className="space-y-8">
            {/* Address */}
            <div>
              <h3 className="text-xl md:text-2xl font-semibold leading-snug text-dark-brown mb-3">
                주소
              </h3>
              <p className="text-base md:text-lg font-normal leading-relaxed text-dark-brown/70">
                {address} {addressDetail}
              </p>
              <p className="text-sm text-dark-brown/50 mt-1">
                강남역 3번 출구에서 도보 3분
              </p>
            </div>

            {/* Business Hours */}
            <div>
              <h3 className="text-xl md:text-2xl font-semibold leading-snug text-dark-brown mb-3">
                영업시간
              </h3>
              <div className="space-y-2">
                {hours.map((h) => (
                  <div
                    key={h.day}
                    className={`flex justify-between items-center py-2 border-b border-caramel/10 ${
                      h.closed ? 'text-dark-brown/40' : 'text-dark-brown/70'
                    }`}
                  >
                    <span className="text-sm font-medium">{h.day}</span>
                    <span className={`text-sm ${h.closed ? 'text-caramel font-medium' : ''}`}>
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Parking */}
            <div>
              <h3 className="text-xl md:text-2xl font-semibold leading-snug text-dark-brown mb-3">
                주차 안내
              </h3>
              <p className="text-base md:text-lg font-normal leading-relaxed text-dark-brown/70">
                건물 지하 주차장 이용 가능 (2시간 무료)
              </p>
              <p className="text-sm text-dark-brown/50 mt-1">
                근처 공영주차장도 이용하실 수 있습니다.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-xl md:text-2xl font-semibold leading-snug text-dark-brown mb-3">
                연락처
              </h3>
              <div className="space-y-1">
                <p className="text-base font-normal text-dark-brown/70">
                  <span className="font-medium text-dark-brown">전화:</span>{' '}
                  <a href={`tel:${phone}`} className="hover:text-warm-brown transition-colors">
                    {phone}
                  </a>
                </p>
                <p className="text-base font-normal text-dark-brown/70">
                  <span className="font-medium text-dark-brown">카카오톡:</span> {kakaoId}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
