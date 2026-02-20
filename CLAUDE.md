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
- **Firebase**: Firestore Lite (REST API) — 회원/예약 데이터 관리
- **폰트**: Noto Sans KR (Google Fonts, next/font)

## 프로젝트 구조 (lee-jeonga-hair-next/src)
```
src/
├── app/
│   ├── layout.jsx          ← 루트 레이아웃 (메타데이터, OG, Navbar, Footer)
│   ├── page.jsx            ← / (홈)
│   ├── globals.css         ← Tailwind + 커스텀 테마 색상
│   ├── loading.jsx         ← 페이지 전환 로딩 스피너
│   ├── login/
│   │   ├── page.jsx        ← /login (로그인)
│   │   └── loading.jsx
│   ├── signup/
│   │   ├── page.jsx        ← /signup (회원가입)
│   │   └── loading.jsx
│   ├── mypage/
│   │   ├── page.jsx        ← /mypage (마이페이지)
│   │   └── loading.jsx
│   ├── admin/
│   │   ├── page.jsx        ← /admin (관리자, robots noindex)
│   │   └── loading.jsx
│   └── products/
│       ├── page.jsx        ← /products (제품 목록)
│       └── [id]/page.jsx   ← /products/:id (제품 상세)
├── components/
│   ├── Navbar.jsx          ← 'use client' (usePathname, 관리자 링크 표시)
│   ├── Hero.jsx            ← 메인 히어로 섹션
│   ├── Services.jsx        ← 서비스 & 가격표
│   ├── Stylists.jsx        ← 스타일리스트 소개
│   ├── Products.jsx        ← SESEO 제품 미리보기 (홈)
│   ├── Gallery.jsx         ← 포트폴리오 갤러리
│   ├── Reviews.jsx         ← 'use client' (framer-motion)
│   ├── Location.jsx        ← 오시는 길 + 영업시간
│   ├── Reservation.jsx     ← 예약 안내
│   ├── Footer.jsx          ← 푸터 (사업자 정보)
│   ├── FirebaseInit.jsx    ← 'use client' (Firestore lite 워밍업)
│   └── admin/
│       ├── UserManagement.jsx        ← 회원 조회/검색/포인트 수정/관리자 권한 토글
│       ├── ReservationManagement.jsx ← 예약 CRUD/상태 변경
│       └── ProductManagement.jsx     ← 상품 목록 (정적 데이터 읽기 전용)
├── contexts/
│   └── AuthContext.jsx     ← 회원가입/로그인/로그아웃 (Firestore, localStorage 세션)
├── views/
│   ├── HomePage.jsx        ← 홈페이지 조합 컴포넌트
│   ├── ProductsPage.jsx    ← 제품 목록 페이지
│   ├── ProductDetailPage.jsx ← 'use client' (제품 상세)
│   ├── LoginPage.jsx       ← 로그인 페이지 (전화번호 자동 포맷)
│   ├── SignupPage.jsx      ← 회원가입 페이지 (전화번호 자동 포맷)
│   ├── MyPage.jsx          ← 마이페이지 (포인트, 쿠폰)
│   └── AdminPage.jsx      ← 관리자 페이지 (비밀번호 OR isAdmin 인증, 3탭)
├── data/
│   └── products.js         ← SESEO 제품 데이터 (6개 제품)
└── lib/
    └── firebase.js         ← Firebase 초기화 (firestore/lite)
```

## 환경변수
로컬: `lee-jeonga-hair-next/.env.local`
Vercel: 15개 Production 환경에 등록됨
**주의**: Vercel 환경변수 등록 시 `printf` 사용 필수 (줄바꿈 방지)

| 변수명 | 용도 |
|--------|------|
| `NEXT_PUBLIC_FIREBASE_API_KEY` | Firebase API 키 |
| `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN` | Firebase 인증 도메인 |
| `NEXT_PUBLIC_FIREBASE_PROJECT_ID` | Firebase 프로젝트 ID (leejeonga-hair) |
| `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET` | Firebase 스토리지 |
| `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID` | Firebase 메시징 (385724807082) |
| `NEXT_PUBLIC_FIREBASE_APP_ID` | Firebase 앱 ID |
| `NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID` | Firebase Analytics |
| `NEXT_PUBLIC_ADMIN_PASSWORD` | 관리자 페이지 비밀번호 (admin1234) |
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
5. `23c1028` - 디자인 변경_1차
6. `ef66b10` - 로그인/관리자페이지 추가
7. `4190841` - 회원가입설정 (firestore/lite 전환, Vercel 환경변수 줄바꿈 수정)

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
- 'use client' 필요한 컴포넌트: Navbar, Reviews, ProductDetailPage, FirebaseInit, AdminPage, LoginPage, SignupPage, MyPage
- OG 이미지: `/images/logo/logo_og.jpg`
- Tailwind v4 사용 중 → `tailwind.config.js` 대신 `globals.css`의 `@theme`에서 커스텀 색상 정의
- 제품 이미지: `public/images/products/` 에 위치
- Vercel 배포 시 `.vercel/` 폴더가 자동 생성됨 (gitignore 처리됨)

## 회원/인증 시스템
- **인증 방식**: Firestore `users` 컬렉션 기반 (이름 + 전화번호 매칭), localStorage 세션
- **회원가입**: 전화번호 중복 체크 → Firestore 문서 생성 → localStorage 저장
- **로그인**: 전화번호로 조회 → 이름 일치 확인 → `isAdmin` 포함 userData 저장
- **로그아웃**: localStorage 제거
- **전화번호**: 자동 하이픈 포맷 (01012345678 → 010-1234-5678)
- **타임아웃**: Firestore 요청 10초 제한 (`withTimeout`)

## 관리자 시스템
- **접근 경로**: `/admin` (robots noindex)
- **인증 방식 2가지**:
  1. `isAdmin: true`인 계정으로 로그인 → Navbar에 "관리자" 링크 표시
  2. 비밀번호 입력 (`NEXT_PUBLIC_ADMIN_PASSWORD`) → URL 직접 접근
- **관리자 권한 부여**: 관리자 페이지 > 회원 관리 > 부여 버튼 (isAdmin 토글)
- **주의**: 관리자 권한 부여 후 해당 회원이 **로그아웃 → 재로그인** 해야 반영됨
- **3탭 구성**: 회원 관리 / 예약 관리 / 상품 관리

## Firestore 컬렉션
- **users**: name, phone, points, coupons[], isAdmin, createdAt
- **reservations**: userName, userPhone, date, time, service, stylist, status, memo, createdAt
- **보안 규칙**: users, reservations 컬렉션 read/write 허용 필요

## Navbar 다크/라이트 모드
- `/`, `/products` 경로만 다크 히어로 (흰색 텍스트)
- 나머지 경로는 라이트 모드 (검정 텍스트)
- `hasDarkHero` 변수로 제어

## 트러블슈팅 기록
- **Firebase Installations 400 에러**: `firebase/firestore` → `firebase/firestore/lite` 전환으로 해결 (REST API 사용, Installations 불필요)
- **Vercel 환경변수 줄바꿈**: `echo` 대신 `printf`로 등록해야 `%0A` 방지
- **느린 페이지 전환**: 각 라우트에 `loading.jsx` 추가
- **Firestore 콜드스타트**: `FirebaseInit.jsx`에서 앱 로드 시 워밍업 쿼리 실행
