export default function Logo({ className = '', dark = false }) {
  const color = dark ? '#FFFFFF' : '#3CB390'
  const textColor = dark ? 'text-white' : 'text-accent'

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* 볼(절구) 아이콘 + SESEO */}
      <svg
        viewBox="0 0 120 90"
        className="h-9 md:h-11 w-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* 볼 몸체 */}
        <path
          d="M10 38 C10 38, 15 85, 60 85 C105 85, 110 38, 110 38 Z"
          fill={color}
        />
        {/* 볼 테두리 (위쪽 림) */}
        <ellipse cx="60" cy="38" rx="54" ry="10" fill={color} />
        {/* 막자 (pestle) */}
        <line
          x1="78" y1="8" x2="95" y2="30"
          stroke={color}
          strokeWidth="6"
          strokeLinecap="round"
        />
        {/* SESEO 텍스트 */}
        <text
          x="60"
          y="60"
          textAnchor="middle"
          fill="white"
          fontSize="18"
          fontWeight="700"
          fontFamily="'Noto Sans KR', sans-serif"
          letterSpacing="2"
        >
          SESEO
        </text>
      </svg>

      {/* 식물하나:담다 텍스트 (오른쪽) */}
      <span className={`text-sm md:text-base font-semibold tracking-tight whitespace-nowrap ${textColor}`}>
        식물하나:담다
      </span>
    </div>
  )
}
