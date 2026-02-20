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
  const phone = process.env.NEXT_PUBLIC_BUSINESS_PHONE
  const address = process.env.NEXT_PUBLIC_BUSINESS_ADDRESS
  const addressDetail = process.env.NEXT_PUBLIC_BUSINESS_ADDRESS_DETAIL
  const kakaoId = process.env.NEXT_PUBLIC_KAKAO_ID

  return (
    <section id="location" className="py-20 md:py-32 bg-offwhite">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-16 md:mb-20">
          <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-accent mb-4">
            Location
          </p>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight text-black">
            오시는 길
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <div className="overflow-hidden bg-lightgray aspect-[4/3] flex items-center justify-center border border-lightgray">
            <div className="text-center p-8">
              <div className="text-5xl mb-4 opacity-20">+</div>
              <p className="text-sm font-medium text-midgray mb-2">지도 영역</p>
              <p className="text-[11px] text-midgray leading-relaxed">
                {address}
                <br />
                {addressDetail}
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-black mb-2">주소</h3>
              <p className="text-sm text-darkgray leading-relaxed">
                {address} {addressDetail}
              </p>
              <p className="text-[11px] text-midgray mt-1">군산 미장동 위치</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-black mb-3">영업시간</h3>
              <div className="space-y-0">
                {hours.map((h) => (
                  <div
                    key={h.day}
                    className={`flex justify-between items-center py-2.5 border-b border-lightgray ${
                      h.closed ? 'text-midgray' : 'text-darkgray'
                    }`}
                  >
                    <span className="text-sm font-medium">{h.day}</span>
                    <span className={`text-sm ${h.closed ? 'text-accent font-semibold' : ''}`}>
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-black mb-2">주차 안내</h3>
              <p className="text-sm text-darkgray leading-relaxed">
                건물 지하 주차장 이용 가능 (2시간 무료)
              </p>
              <p className="text-[11px] text-midgray mt-1">
                근처 공영주차장도 이용하실 수 있습니다.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-black mb-2">연락처</h3>
              <div className="space-y-1">
                <p className="text-sm text-darkgray">
                  <span className="font-medium text-black">전화:</span>{' '}
                  <a href={`tel:${phone}`} className="hover:text-accent transition-colors">
                    {phone}
                  </a>
                </p>
                <p className="text-sm text-darkgray">
                  <span className="font-medium text-black">카카오톡:</span> {kakaoId}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
