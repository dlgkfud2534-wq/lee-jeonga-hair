# 이정아 헤어 - 프로젝트 문서

> 최종 업데이트: 2026-02-09

---

## 1. 프로젝트 개요

이정아 헤어 헤어숍의 홍보용 랜딩페이지 + 상품 페이지.
SESEO 두피케어 제품 6종의 상품 목록 및 상세페이지를 포함한다.

- **프로젝트 경로**: `C:\Users\하령\Desktop\code\test1\lee-jeonga-hair\`
- **로컬 개발 서버**: `http://localhost:5173`
- **제품 이미지 원본 경로**: `\\SynologyNAS\광고대행\고객사\이정아헤어\`

---

## 2. 기술 스택

| 항목 | 버전 | 비고 |
|------|------|------|
| React | 19.2.0 | UI 프레임워크 |
| Vite | 7.2.4 | 빌드 도구 |
| Tailwind CSS | 4.1.18 | CSS 프레임워크 (v4, CSS `@theme` 방식) |
| react-router-dom | 7.13.0 | SPA 라우팅 |
| framer-motion | 12.33.0 | 애니메이션 (Reviews 섹션) |
| lucide-react | 0.563.0 | 아이콘 (Reviews 섹션) |

---

## 3. 실행 명령어

```bash
# 개발 서버
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 미리보기
npm run preview
```

---

## 4. 디렉토리 구조

```
lee-jeonga-hair/
├── index.html                  # HTML 엔트리 (lang="ko", Noto Sans KR)
├── package.json
├── vite.config.js
├── postcss.config.js           # @tailwindcss/postcss
├── docs/
│   └── PROJECT.md              # 이 문서
├── public/
│   ├── vite.svg
│   └── images/
│       └── products/           # 실제 제품 사진
│           ├── seseo-deep-cleansing.jpg
│           └── seseo-green-mint-shampoo.jpg
└── src/
    ├── main.jsx                # BrowserRouter 래핑
    ├── App.jsx                 # 라우트 정의
    ├── index.css               # Tailwind @theme + 글로벌 스타일
    ├── data/
    │   └── products.js         # 상품 데이터 (공유)
    ├── components/             # 랜딩페이지 섹션 컴포넌트
    │   ├── Navbar.jsx
    │   ├── Hero.jsx
    │   ├── Services.jsx
    │   ├── Products.jsx        # 랜딩 추천 상품 (4개 미리보기)
    │   ├── Stylists.jsx
    │   ├── Gallery.jsx
    │   ├── Reviews.jsx         # framer-motion 애니메이션
    │   ├── Reservation.jsx
    │   ├── Location.jsx
    │   └── Footer.jsx
    └── pages/
        ├── HomePage.jsx        # 랜딩페이지 (모든 섹션 조합)
        ├── ProductsPage.jsx    # 상품 목록 (/products)
        └── ProductDetailPage.jsx # 상품 상세 (/products/:id)
```

---

## 5. 라우팅

| 경로 | 페이지 | 설명 |
|------|--------|------|
| `/` | HomePage | 랜딩페이지 (8개 섹션) |
| `/products` | ProductsPage | SESEO 상품 목록 (6개) |
| `/products/:id` | ProductDetailPage | 상품 상세페이지 |

---

## 6. 컬러 팔레트

Tailwind v4 `@theme` 방식으로 `src/index.css`에 정의.

| 이름 | HEX | 용도 |
|------|-----|------|
| `cream` | `#FAF6F1` | 배경 (메인) |
| `beige` | `#F5EDE4` | 배경 (서브), 카드 |
| `warm-brown` | `#8B6F47` | 포인트, CTA 버튼 |
| `warm-brown-light` | `#A3845C` | 버튼 hover |
| `caramel` | `#C4956A` | 라벨, 악센트 |
| `dark-brown` | `#3D2B1F` | 텍스트 |
| `golden-sand` | `#D4A574` | 뱃지, 악센트 |

---

## 7. 타이포그래피

- **폰트**: Noto Sans KR (Google Fonts CDN, `index.html`에서 로드)
- **Hero H1**: `text-5xl md:text-7xl font-extrabold leading-tight tracking-tighter`
- **Section H2**: `text-3xl md:text-5xl font-bold leading-tight tracking-tight`
- **Body**: `text-base md:text-lg font-normal leading-relaxed`
- **Labels**: `text-xs font-medium tracking-wider uppercase`
- **CTA**: `text-base font-semibold`
- **컨테이너**: `max-w-6xl mx-auto px-6 md:px-10`

---

## 8. 랜딩페이지 섹션 구성 (HomePage)

| 순서 | 컴포넌트 | 섹션 ID | 설명 |
|------|----------|---------|------|
| 1 | Navbar | - | 고정 상단 네비게이션 |
| 2 | Hero | `#hero` | 메인 비주얼 + CTA |
| 3 | Services | `#services` | 서비스 메뉴 카드 그리드 |
| 4 | Products | `#products` | SESEO 추천 상품 4개 + "전체 보기" 링크 |
| 5 | Stylists | `#stylists` | 스타일리스트 소개 |
| 6 | Gallery | `#gallery` | 시술 갤러리 |
| 7 | Reviews | `#reviews` | 고객 후기 (framer-motion) |
| 8 | Reservation | `#reservation` | 예약 CTA |
| 9 | Location | `#location` | 위치, 영업시간, 주차 안내 |
| 10 | Footer | - | 업체 정보, SNS |

---

## 9. 상품 데이터 (`src/data/products.js`)

### 9-1. SESEO 두피케어 제품 (6종)

| STEP | ID | 제품명 | 용량/가격 | 이미지 상태 |
|------|----|--------|-----------|-------------|
| 1 | `seseo-deep-cleansing` | 딥클렌징 필링 | 1000ml ₩198,000 / 300ml ₩66,000 | 실제 사진 적용 (1종) |
| 2 | `seseo-green-mint-shampoo` | 그린 민트 샴푸 | 1000ml ₩176,000 / 500ml ₩120,000 | 실제 사진 적용 (1종) |
| 3 | `seseo-scalp-mint-pack` | 스칼프/소프트 민트 두피팩 | 1000ml ₩165,000 / 500ml ₩110,000 | 실제 사진 적용 (4종: 스칼프/소프트 × 500/1000ml) |
| 4 | `seseo-plpp-hair-pack` | PLPP 모발팩 | 1000ml ₩220,000 / 500ml ₩132,000 | 실제 사진 적용 (2종: 500/1000ml) |
| 5 | `seseo-scalp-ampoule` | 두피앰플 | 1000ml ₩198,000 / 150ml ₩45,000 | 실제 사진 적용 (2종: 150/1000ml) |
| 6 | `seseo-leave-in` | 리브인 | 1000ml ₩220,000 / 500ml ₩132,000 / 300ml ₩88,000 | 실제 사진 적용 (3종: 300/500/1000ml) |

### 9-2. 제품 데이터 필드

```js
{
  id: 'string',           // URL용 고유 ID
  name: 'string',         // 제품명
  brand: 'SESEO',         // 브랜드
  category: 'string',     // 카테고리
  badge: 'string|null',   // 뱃지 (베스트/추천/인기/두피케어/null)
  image: 'string',        // 대표 이미지 경로 (/images/products/xxx.jpg)
  shortDesc: 'string',    // 짧은 설명 (카드용)
  description: 'string',  // 상세 설명
  features: ['string'],   // 주요 특징 배열
  usage: 'string',        // 사용 방법
  sizes: [                // 용량/가격 배열 (용량별 이미지 지원)
    {
      volume: 'string',
      price: number,
      image: 'string',    // 해당 용량의 이미지 경로
      thumbY: 'string',   // 해당 용량의 Y축 오프셋
      scale: number,      // 해당 용량의 확대 정도
    }
  ],
  step: number,           // SESEO 루틴 단계 (1~6)
  stepLabel: 'string',    // 단계 라벨 (STEP 1 · 클렌징)
  thumbY: 'string',       // 상세페이지 Y축 오프셋 (기본값)
  scale: number,          // 상세페이지 확대 정도 (기본값)
  listThumbY: 'string',   // /products 갤러리 전용 Y축 오프셋
  listScale: number,      // /products 갤러리 전용 확대 정도
}
```

### 9-3. 내보내기 함수

| 이름 | 설명 |
|------|------|
| `seseoProducts` | SESEO 6종 배열 |
| `allProducts` | 전체 상품 배열 (= seseoProducts) |
| `categories` | 카테고리 필터 배열 |
| `badgeColors` | 뱃지별 Tailwind 클래스 맵 |
| `formatPrice(price)` | 가격 포맷 (₩xxx,xxx) |
| `getProductById(id)` | ID로 상품 조회 |

---

## 10. 상품 이미지 관리

### 저장 위치
- **원본**: `\\SynologyNAS\광고대행\고객사\이정아헤어\`
- **프로젝트**: `public/images/products/` (Vite가 빌드 시 자동 복사)

### 이미지 적용 방법
1. NAS에서 이미지를 `public/images/products/`에 복사
2. 파일명: `seseo-{제품명}-{용량}.jpg` 형태
3. `src/data/products.js`에서 해당 제품의 `image` 필드 및 `sizes[].image` 수정
4. `thumbY`/`scale` 값 조정 (제품 형태에 따라)
5. 갤러리 전용 조정이 필요하면 `listThumbY`/`listScale` 별도 설정

### 현재 적용된 이미지 파일

| 파일명 | 매핑 제품 |
|--------|-----------|
| `seseo-deep-cleansing.jpg` | 딥클렌징 필링 |
| `seseo-green-mint-shampoo.jpg` | 그린 민트 샴푸 |
| `seseo-scalp-mint-500.jpg` / `seseo-scalp-mint-1000.jpg` | 스칼프 민트 두피팩 |
| `seseo-soft-scalp-mint-500.jpg` / `seseo-soft-scalp-mint-1000.jpg` | 소프트 스칼프 민트 두피팩 |
| `seseo-plpp-500.jpg` / `seseo-plpp-1000.jpg` | PLPP 모발팩 |
| `seseo-balance-150.jpg` / `seseo-balance-1000.jpg` | 두피앰플 |
| `seseo-leave-in-300.jpg` / `seseo-leave-in-500.jpg` / `seseo-leave-in-1000.jpg` | 리브인 |

### 썸네일 이미지 표시 방식

모든 페이지에서 `object-contain origin-bottom` + `scale` + `thumbY` 방식으로 통일.

| 위치 | 사용 속성 | 비고 |
|------|-----------|------|
| 상품 목록 갤러리 (ProductsPage) | `listScale` + `listThumbY` | 갤러리 전용 값 (없으면 scale/thumbY 사용) |
| 랜딩 추천 (Products) | `scale` + `thumbY` | 상품 기본값 |
| 상세페이지 히어로 (ProductDetailPage) | `sizes[].scale` + `sizes[].thumbY` | 용량 선택 시 개별 이미지/값 적용 |
| 상세페이지 추천카드 | `scale` + `thumbY` | 상품 기본값 |

---

## 11. 상세페이지 구성 (ProductDetailPage)

| 순서 | 섹션 | 배경색 | 설명 |
|------|------|--------|------|
| 1 | Breadcrumb | beige | 홈 > 상품 > 제품명 |
| 2 | Product Hero | cream | 이미지 + 용량 선택 + 가격 + CTA |
| 3 | 제품 상세 정보 | beige | description 표시 |
| 4 | 주요 특징 | cream | features 카드 그리드 (2열) |
| 5 | 사용 방법 | beige | usage + 아이콘 |
| 6 | 용량 및 가격 | cream | sizes 카드 (용량별) |
| 7 | 구매 안내 CTA | beige | 그라데이션 배경, 전화/카카오톡 |
| 8 | 함께 사용하면 좋은 제품 | cream | 관련 상품 3개 카드 |
| 9 | 전체 상품 보기 | beige | 목록으로 돌아가기 버튼 |

---

## 12. 네비게이션 구조

```
이정아 헤어 (로고, / 링크)
├── 서비스     → /#services
├── 상품       → /products (react-router Link)
├── 스타일리스트 → /#stylists
├── 갤러리     → /#gallery
├── 후기       → /#reviews
├── 오시는 길  → /#location
└── [예약하기]  → /#reservation (CTA 버튼)
```

- 모바일: 햄버거 메뉴 (토글)
- `상품` 메뉴만 react-router `Link` 사용 (SPA 라우팅)
- 나머지는 `<a href="/#section">` 앵커 링크

---

## 13. 플레이스홀더 데이터 (배포 시 교체 필요)

| 항목 | 현재 값 | 사용 위치 |
|------|---------|-----------|
| 전화번호 | `02-1234-5678` | Reservation, Location, ProductsPage, ProductDetailPage |
| 이메일 | `info@leejeonghair.com` | Footer |
| 주소 | `서울특별시 강남구 테헤란로 123 이정아빌딩 2층` | Footer, Location |
| 사업자번호 | `123-45-67890` | Footer |

---

## 14. 남은 작업

### 완료된 작업
- [x] 6종 전체 제품 실제 사진 적용
- [x] 용량별 이미지 전환 기능 구현
- [x] 상품별 scale/thumbY 개별 조정 지원
- [x] 갤러리 전용 listScale/listThumbY 분리
- [x] Git 초기화 및 GitHub 연동

### 남은 작업
- [ ] 딥클렌징 필링 / 그린 민트 샴푸 용량별 개별 사진 추가 (현재 동일 사진 사용)
- [ ] 플레이스홀더 연락처/주소를 실제 정보로 교체
- [ ] 카카오톡 주문 링크 실제 URL로 교체
- [ ] SEO 메타태그 추가
- [ ] 파비콘 교체
- [ ] 프로덕션 배포 (Vercel / Netlify 등)
