# 이정아 헤어 프로젝트

## 개요
전북 군산시 소재 "바이더베이직 이정아헤어" 미용실 랜딩페이지.
SESEO 식물하나:담다 두피/모발 케어 제품 판매 페이지 포함.

## 저장소
- GitHub: https://github.com/dlgkfud2534-wq/lee-jeonga-hair.git
- 브랜치: master

## 배포 (Vercel)
- 프로젝트: `haryeongs-projects/lee-jeonga-hair-next`
- 프로덕션 URL: https://lee-jeonga-hair.vercel.app, https://lee-jeonga-hair-next.vercel.app
- Framework Preset: Next.js
- Root Directory: `.` (lee-jeonga-hair-next 폴더에서 배포)
- 환경변수 14개 등록 완료 (Production)

## 폴더 구조
```
test1/                          ← Git 루트
├── lee-jeonga-hair-next/       ← ★ 메인 프로젝트 (Next.js App Router)
├── lee-jeonga-hair/            ← 이전 Vite+React 버전 (보관용)
├── landing-page-typography/    ← 타이포그래피 참고자료
└── nul                         ← Windows 예약 파일명 (git 제외)
```

## 기술 스택 (lee-jeonga-hair-next)
- **프레임워크**: Next.js 15 (App Router)
- **UI**: React 19, Tailwind CSS v4 (`@tailwindcss/postcss`)
- **애니메이션**: Framer Motion
- **아이콘**: Lucide React
- **Firebase**: Analytics 연동 (클라이언트 사이드)
- **폰트**: Noto Sans KR (Google Fonts, next/font)

## 프로젝트 구조 (lee-jeonga-hair-next/src)
```
src/
├── app/
│   ├── layout.jsx          ← 루트 레이아웃 (메타데이터, OG, Navbar, Footer)
│   ├── page.jsx            ← / (홈)
│   ├── globals.css         ← Tailwind + 커스텀 테마 색상
│   └── products/
│       ├── page.jsx        ← /products (제품 목록)
│       └── [id]/page.jsx   ← /products/:id (제품 상세)
├── components/
│   ├── Navbar.jsx          ← 'use client' (usePathname)
│   ├── Hero.jsx            ← 메인 히어로 섹션
│   ├── Services.jsx        ← 서비스 & 가격표
│   ├── Stylists.jsx        ← 스타일리스트 소개
│   ├── Products.jsx        ← SESEO 제품 미리보기 (홈)
│   ├── Gallery.jsx         ← 포트폴리오 갤러리
│   ├── Reviews.jsx         ← 'use client' (framer-motion)
│   ├── Location.jsx        ← 오시는 길 + 영업시간
│   ├── Reservation.jsx     ← 예약 안내
│   ├── Footer.jsx          ← 푸터 (사업자 정보)
│   └── FirebaseInit.jsx    ← 'use client' (Firebase 동적 import)
├── views/
│   ├── HomePage.jsx        ← 홈페이지 조합 컴포넌트
│   ├── ProductsPage.jsx    ← 제품 목록 페이지
│   └── ProductDetailPage.jsx ← 'use client' (제품 상세)
├── data/
│   └── products.js         ← SESEO 제품 데이터 (6개 제품)
└── lib/
    └── firebase.js         ← Firebase 초기화
```

## 환경변수
로컬: `lee-jeonga-hair-next/.env.local`
Vercel: 14개 Production 환경에 등록됨

| 변수명 | 용도 |
|--------|------|
| `NEXT_PUBLIC_FIREBASE_API_KEY` | Firebase API 키 |
| `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN` | Firebase 인증 도메인 |
| `NEXT_PUBLIC_FIREBASE_PROJECT_ID` | Firebase 프로젝트 ID |
| `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET` | Firebase 스토리지 |
| `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID` | Firebase 메시징 |
| `NEXT_PUBLIC_FIREBASE_APP_ID` | Firebase 앱 ID |
| `NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID` | Firebase Analytics |
| `NEXT_PUBLIC_BUSINESS_PHONE` | 전화번호 (063-446-7601) |
| `NEXT_PUBLIC_BUSINESS_EMAIL` | 이메일 |
| `NEXT_PUBLIC_BUSINESS_ADDRESS` | 주소 (전북 군산시 미장안7길 30) |
| `NEXT_PUBLIC_BUSINESS_ADDRESS_DETAIL` | 상세주소 (2층 바이더베이직이정아헤어) |
| `NEXT_PUBLIC_BUSINESS_REGISTRATION` | 사업자등록번호 |
| `NEXT_PUBLIC_BUSINESS_OWNER` | 대표자명 (이정아) |
| `NEXT_PUBLIC_KAKAO_ID` | 카카오톡 채널 |

## 커밋 이력
1. `472d21c` - test1 폴더 전체 커밋: lee-jeonga-hair + landing-page-typography
2. `6796725` - 환경변수 설정: 하드코딩된 사업 정보를 import.meta.env로 분리
3. `6bcbb2c` - 3차 수정 완료_배포까지 (Next.js 마이그레이션 + 배포)
4. `667c447` - 도메인수정

## 주요 설정 파일
- `lee-jeonga-hair-next/next.config.mjs` - Next.js 설정 (현재 빈 설정)
- `lee-jeonga-hair-next/postcss.config.mjs` - `@tailwindcss/postcss` 사용
- `lee-jeonga-hair-next/jsconfig.json` - 경로 별칭 `@/*` → `./src/*`
- `lee-jeonga-hair-next/.env.local` - 환경변수 (git 제외)
- `lee-jeonga-hair-next/.env.example` - 환경변수 템플릿

## 개발 명령어
```bash
cd lee-jeonga-hair-next
npm install
npm run dev        # http://localhost:3000
npm run build      # 프로덕션 빌드
```

## 배포 명령어
```bash
cd lee-jeonga-hair-next
npx vercel --prod  # 프로덕션 배포
npx vercel env ls  # 환경변수 확인
```

## 참고사항
- 'use client' 필요한 컴포넌트: Navbar, Reviews, ProductDetailPage, FirebaseInit
- OG 이미지: `/images/logo/logo_og.jpg`
- Tailwind v4 사용 중 → `tailwind.config.js` 대신 `globals.css`의 `@theme`에서 커스텀 색상 정의
- 제품 이미지: `public/images/products/` 에 위치
- Vercel 배포 시 `.vercel/` 폴더가 자동 생성됨 (gitignore 처리됨)
