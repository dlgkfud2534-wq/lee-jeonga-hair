# 이정아 헤어 & SESEO 쇼핑몰 프로젝트

## 개요
전북 군산시 소재 "바이더베이직 이정아헤어" 미용실 랜딩페이지와
SESEO 식물하나:담다 두피/모발 케어 제품 판매 쇼핑몰, 두 사이트로 구성.
동일한 Firebase 프로젝트를 공유하여 회원 시스템 통합.

## 저장소
- GitHub: https://github.com/dlgkfud2534-wq/lee-jeonga-hair.git
- 브랜치: master

## 폴더 구조
```
test1/                          ← Git 루트
├── lee-jeonga-hair-next/       ← ★ 미용실 랜딩페이지 (Next.js App Router)
├── seseo-shop/                 ← ★ SESEO 쇼핑몰 (Next.js App Router)
├── lee-jeonga-hair/            ← 이전 Vite+React 버전 (보관용)
├── landing-page-typography/    ← 타이포그래피 참고자료
└── nul                         ← Windows 예약 파일명 (git 제외)
```

---

## 1. 미용실 사이트 (lee-jeonga-hair-next)

### 배포 (Vercel)
- 프로젝트: `haryeongs-projects/lee-jeonga-hair-next`
- 프로덕션 URL: https://lee-jeonga-hair.vercel.app
- Root Directory: `.` (lee-jeonga-hair-next 폴더에서 배포)
- 환경변수 15개 등록 완료 (Production)

### 기술 스택
- Next.js 15 (App Router) / React 19
- Tailwind CSS v4 (`@tailwindcss/postcss`)
- Framer Motion, Lucide React, Noto Sans KR
- Firebase/Firestore Lite (REST API)

### 프로젝트 구조
```
src/
├── app/
│   ├── layout.jsx, page.jsx, globals.css, loading.jsx
│   ├── login/ (page.jsx, loading.jsx)
│   ├── signup/ (page.jsx, loading.jsx)
│   ├── mypage/ (page.jsx, loading.jsx)
│   └── admin/ (page.jsx, loading.jsx)
├── components/
│   ├── Navbar.jsx          ← '온라인 구매' 링크 → seseo-shop
│   ├── Hero.jsx, Services.jsx, Stylists.jsx
│   ├── Products.jsx        ← SESEO 제품 미리보기 → 쇼핑몰로 링크
│   ├── Gallery.jsx, Reviews.jsx, Location.jsx, Reservation.jsx
│   ├── Footer.jsx          ← '온라인 구매' 링크 → seseo-shop
│   ├── FirebaseInit.jsx
│   └── admin/ (UserManagement, ReservationManagement, ProductManagement)
├── contexts/AuthContext.jsx
├── views/ (HomePage, LoginPage, SignupPage, MyPage, AdminPage)
├── data/products.js
└── lib/firebase.js
```

### 주요 변경사항 (최신)
- `/products`, `/products/[id]` 페이지 삭제 → 쇼핑몰로 이관
- Navbar/Footer에서 '상품' 링크 제거, '온라인 구매' 외부 링크로 교체
- Products.jsx 내 링크가 seseo-shop 쇼핑몰로 연결

### Navbar 다크/라이트 모드
- `/` 경로만 다크 히어로 (흰색 텍스트)
- 나머지 경로는 라이트 모드 (검정 텍스트)

### 개발/배포 명령어
```bash
cd lee-jeonga-hair-next
npm install && npm run dev        # http://localhost:3000
npm run build                     # 프로덕션 빌드
npx vercel --prod                 # 프로덕션 배포
```

---

## 2. SESEO 쇼핑몰 (seseo-shop)

### 배포 (Vercel)
- 프로젝트: `haryeongs-projects/seseo-shop`
- 프로덕션 URL: https://seseo-shop.vercel.app
- Root Directory: `seseo-shop` (같은 repo, 별도 Vercel 프로젝트)
- 환경변수 16개 등록 완료 (Production)

### 기술 스택
- Next.js 15 (App Router) / React 19
- Tailwind CSS v4 (`@tailwindcss/postcss`)
- Framer Motion, Lucide React, Noto Sans KR
- Firebase/Firestore Lite (기존 프로젝트 공유: `leejeonga-hair`)

### 디자인
- 액센트 컬러: 민트 그린 (`#3CB390`)
- 기본 폰트 크기: 17px(모바일) / 18px(데스크탑)
- 한글 단어 단위 줄바꿈 (`word-break: keep-all`)
- 프리미엄 미니멀리즘

### 프로젝트 구조
```
src/
├── app/
│   ├── layout.jsx, page.jsx, globals.css, loading.jsx, not-found.jsx
│   ├── products/ (page.jsx, [id]/page.jsx)
│   ├── cart/page.jsx
│   ├── checkout/page.jsx
│   ├── order-complete/page.jsx
│   ├── orders/page.jsx
│   ├── login/page.jsx, signup/page.jsx
│   └── mypage/page.jsx
├── components/
│   ├── Navbar.jsx          ← 로고 이미지 (다크/라이트 전환)
│   ├── Footer.jsx          ← 이정아헤어 사이트 링크
│   ├── Hero.jsx            ← 식물 배경 이미지
│   ├── BrandStory.jsx      ← 4개 가치 카드
│   ├── RoutineSteps.jsx    ← 6단계 루틴 그리드
│   ├── FeaturedProducts.jsx, CrossSiteLink.jsx
│   ├── ProductCard.jsx     ← variant: 'home' | 'list'
│   ├── ProductGrid.jsx, StepFilter.jsx
│   ├── SizeSelector.jsx, QuantitySelector.jsx, AddToCartButton.jsx
│   ├── CartItem.jsx, CartSummary.jsx
│   ├── ShippingForm.jsx, OrderSummary.jsx, PaymentPlaceholder.jsx
│   ├── OrderCard.jsx, Logo.jsx
│   └── FirebaseInit.jsx
├── contexts/
│   ├── AuthContext.jsx     ← 기존 Firebase users 컬렉션 공유
│   └── CartContext.jsx     ← localStorage 기반 장바구니
├── views/ (HomePage, ProductsPage, ProductDetailPage, CartPage,
│           CheckoutPage, OrderCompletePage, OrdersPage,
│           LoginPage, SignupPage, MyPage)
├── data/products.js        ← 6개 제품 + 영역별 썸네일 설정
└── lib/
    ├── firebase.js
    └── orders.js           ← Firestore orders CRUD
```

### 썸네일 이미지 설정 (products.js)
각 제품에 3가지 영역별 독립 설정:
| 설정 | 홈 인기제품 | 6단계 루틴 | 상품 목록 |
|------|------------|-----------|----------|
| 크기 | `homeScale` | `routineScale` | `listScale` |
| 좌우 | `homeThumbX` | `routineThumbX` | `listThumbX` |
| 상하 | `homeThumbY` | `routineThumbY` | `listThumbY` |
| 기울기 | `homeRotate` | `routineRotate` | `listRotate` |
(기울기는 PLPP 모발팩에만 적용)

### 로고 이미지
- `public/images/logo/logo_no_bg.png` — 흰색 로고 (다크 히어로용)
- `public/images/logo/logo_no_bg_cl.png` — 민트색 로고 (라이트 네비바용)
- `public/images/logo/logo_bg.png` — 민트 배경 로고 (기타 용도)

### 장바구니 → 결제 흐름
1. 상품 상세 → 사이즈 선택 → 장바구니 담기 (CartContext → localStorage)
2. `/cart` → 수량 변경/삭제, 소계/배송비/합계
3. "주문하기" → 미로그인 시 `/login?redirect=/checkout`
4. `/checkout` → 배송지 입력 + 주문 요약 + 결제 (플레이스홀더)
5. Firestore `orders`에 저장 → 장바구니 초기화 → `/order-complete`

### 배송비 정책
- 10만원 이상: 무료배송
- 10만원 미만: 3,000원

### 폰트 크기 체계
| 역할 | 크기 |
|------|------|
| 섹션 제목 (h2) | `text-3xl md:text-5xl` |
| 섹션 서브타이틀 | `text-xs md:text-sm` |
| 섹션 설명 | `text-base md:text-lg` |
| 카드 제목 | `text-base` ~ `text-lg md:text-xl` |
| 카드 설명 | `text-sm md:text-base` |
| 소형 라벨 | `text-xs` |

### 개발/배포 명령어
```bash
cd seseo-shop
npm install && npm run dev        # http://localhost:3001
npm run build                     # 프로덕션 빌드
npx vercel --prod                 # 프로덕션 배포
```

---

## 공통 사항

### Firebase / Firestore
- 프로젝트: `leejeonga-hair` (양쪽 사이트 공유)
- `users` 컬렉션: name, phone, points, coupons[], isAdmin, createdAt
- `reservations` 컬렉션: 미용실 예약 데이터
- `orders` 컬렉션: 쇼핑몰 주문 데이터
- 보안 규칙: users, reservations, orders 컬렉션 read/write 허용 필요

### 회원/인증 시스템 (양쪽 공유)
- Firestore `users` 컬렉션 기반 (이름 + 전화번호 매칭)
- localStorage 세션
- 전화번호 자동 하이픈 포맷
- Firestore 요청 10초 제한 (`withTimeout`)

### 관리자 시스템 (미용실 사이트)
- 접근 경로: `/admin` (robots noindex)
- 인증: `isAdmin: true` 계정 또는 비밀번호 입력
- 3탭: 회원 관리 / 예약 관리 / 상품 관리

### 크로스 사이트 연결
- 미용실 → 쇼핑몰: Navbar '온라인 구매', Footer '온라인 구매', Products.jsx 링크
- 쇼핑몰 → 미용실: Footer 링크, CrossSiteLink 섹션

### 환경변수 (공통 Firebase)
| 변수명 | 용도 |
|--------|------|
| `NEXT_PUBLIC_FIREBASE_API_KEY` | Firebase API 키 |
| `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN` | Firebase 인증 도메인 |
| `NEXT_PUBLIC_FIREBASE_PROJECT_ID` | Firebase 프로젝트 ID (leejeonga-hair) |
| `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET` | Firebase 스토리지 |
| `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID` | Firebase 메시징 |
| `NEXT_PUBLIC_FIREBASE_APP_ID` | Firebase 앱 ID |
| `NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID` | Firebase Analytics |
| `NEXT_PUBLIC_BUSINESS_PHONE` | 전화번호 (063-446-7601) |
| `NEXT_PUBLIC_BUSINESS_EMAIL` | 이메일 |
| `NEXT_PUBLIC_BUSINESS_ADDRESS` | 주소 |
| `NEXT_PUBLIC_BUSINESS_ADDRESS_DETAIL` | 상세주소 |
| `NEXT_PUBLIC_BUSINESS_REGISTRATION` | 사업자등록번호 |
| `NEXT_PUBLIC_BUSINESS_OWNER` | 대표자명 (이정아) |
| `NEXT_PUBLIC_KAKAO_ID` | 카카오톡 채널 |

### 환경변수 (미용실 전용)
| 변수명 | 용도 |
|--------|------|
| `NEXT_PUBLIC_ADMIN_PASSWORD` | 관리자 비밀번호 |
| `NEXT_PUBLIC_SHOP_URL` | 쇼핑몰 URL |

### 환경변수 (쇼핑몰 전용)
| 변수명 | 용도 |
|--------|------|
| `NEXT_PUBLIC_SALON_URL` | 미용실 사이트 URL |
| `NEXT_PUBLIC_FREE_SHIPPING_THRESHOLD` | 무료배송 기준 (100000) |
| `NEXT_PUBLIC_SHIPPING_FEE` | 배송비 (3000) |

### 커밋 이력
1. `472d21c` - test1 폴더 전체 커밋
2. `6796725` - 환경변수 설정
3. `6bcbb2c` - Next.js 마이그레이션 + 배포
4. `667c447` - 도메인 수정
5. `23c1028` - 디자인 변경 1차
6. `ef66b10` - 로그인/관리자페이지 추가
7. `4190841` - 회원가입 설정
8. `c6e3a89` - 작업내용 저장
9. `7a32e62` - SESEO 쇼핑몰 프로젝트 추가
10. `7258362` - 이정아헤어에 쇼핑몰 링크 추가
11. `e1f0bde` - 상품 페이지 제거 및 쇼핑몰 링크로 전환

### 트러블슈팅 기록
- **Firebase Installations 400 에러**: `firebase/firestore` → `firebase/firestore/lite` 전환
- **Vercel 환경변수 줄바꿈**: `echo` 대신 `printf`로 등록
- **느린 페이지 전환**: 각 라우트에 `loading.jsx` 추가
- **Firestore 콜드스타트**: `FirebaseInit.jsx`에서 워밍업 쿼리
- **RoutineSteps 이미지 레이어**: `isolate` + `absolute inset-0`으로 z-index 격리

### 미완료 / 향후 작업
- [ ] 결제 시스템 연동 (토스페이먼츠 등) — 현재 플레이스홀더
- [ ] 주문 상태 관리 (관리자 페이지에서 주문 관리 기능)
- [ ] 쇼핑몰 관리자 페이지 (상품/주문 관리)
- [ ] OG 이미지 및 SEO 메타데이터 (쇼핑몰)
- [ ] 커스텀 도메인 연결 (seseo-shop)
