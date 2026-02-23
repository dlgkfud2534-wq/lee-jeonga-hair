export const seseoProducts = [
  {
    id: 'seseo-deep-cleansing',
    name: '딥클렌징 필링',
    brand: 'SESEO',
    category: 'SESEO 식물하나:담다',
    badge: '두피케어',
    image: '/images/products/seseo-deep-cleansing.jpg',
    shortDesc: '모낭충 제거 및 노폐물·각질 케어로 두피 탄력 유지',
    description:
      '모낭충을 제거하고, 모공에 쌓인 노폐물과 묵은 각질을 제거하여 두피의 탄력을 유지합니다. 깨끗한 두피 환경을 만들어 후속 케어 제품의 흡수력을 높여줍니다.',
    features: [
      '모낭충 제거',
      '모공 속 노폐물·묵은 각질 제거',
      '두피 탄력 유지',
      '후속 케어 흡수력 향상',
    ],
    usage: '마른 두피에 도포 후 5분 방치한 뒤 미온수로 충분히 헹궈냅니다.',
    sizes: [
      { volume: '1000ml', price: 198000, image: '/images/products/seseo-deep-cleansing.jpg', thumbY: '5%', scale: 2.3 },
      { volume: '300ml', price: 66000, image: '/images/products/seseo-deep-cleansing.jpg', thumbY: '5%', scale: 2.3 },
    ],
    step: 1,
    stepLabel: 'STEP 1 · 클렌징',
    // 상품 상세 페이지
    thumbY: '5%',
    scale: 2.3,
    // ── 썸네일 이미지 설정 (각 영역별로 독립 조절 가능) ──
    // 홈 > 인기 제품 섹션
    homeThumbX: '0%',
    homeThumbY: '5%',
    homeScale: 1.7,
    // 홈 > 6단계 루틴 섹션
    routineThumbX: '0%',
    routineThumbY: '4%',
    routineScale: 1.6,
    // 상품 목록 페이지 (/products)
    listThumbX: '0%',
    listThumbY: '3%',
    listScale: 1.6,
  },
  {
    id: 'seseo-green-mint-shampoo',
    name: '그린 민트 샴푸',
    brand: 'SESEO',
    category: 'SESEO 식물하나:담다',
    badge: '베스트',
    image: '/images/products/seseo-green-mint-shampoo.jpg',
    shortDesc: '피지 밸런스 조절 & 페퍼민트 성분으로 두피 염증·트러블 완화',
    description:
      '각질, 탈모, 두피 트러블을 완화하며, 과다 분비되는 피지와 노폐물을 효과적으로 세정합니다. 피지 밸런스를 조절하고, 페퍼민트 성분이 두피 염증과 트러블을 진정시킵니다.',
    features: [
      '각질·탈모·두피 트러블 완화',
      '피지 노폐물 효과적 세정',
      '피지 밸런스 조절',
      '페퍼민트 성분 (두피 염증·트러블 완화)',
    ],
    usage: '필링을 바른 머리를 물로 충분히 헹군 후, 샴푸를 도포하고 5분간 방치한 뒤 헹굽니다.',
    sizes: [
      { volume: '1000ml', price: 176000, image: '/images/products/seseo-green-mint-shampoo.jpg', thumbY: '17%', scale: 1.8 },
      { volume: '500ml', price: 120000, image: '/images/products/seseo-green-mint-shampoo.jpg', thumbY: '17%', scale: 1.8 },
    ],
    step: 2,
    stepLabel: 'STEP 2 · 샴푸',
    thumbY: '17%',
    scale: 1.8,
    homeThumbX: '0%',
    homeThumbY: '17%',
    homeScale: 1.2,
    routineThumbX: '0%',
    routineThumbY: '17%',
    routineScale: 1.2,
    listThumbX: '0%',
    listThumbY: '17%',
    listScale: 1.2,
  },
  {
    id: 'seseo-scalp-mint-pack',
    name: '스칼프 / 소프트 민트 두피팩',
    brand: 'SESEO',
    category: 'SESEO 식물하나:담다',
    badge: '추천',
    image: '/images/products/seseo-scalp-mint-500.jpg',
    shortDesc: '살리신산 각질 억제 & 세라마이드 NS 성분으로 두피 보습',
    description:
      '살리신산이 각질이 쌓이는 것을 막아주고, 세라마이드 NS 성분이 두피에 깊은 보습을 제공하여 촉촉하고 건강한 두피 환경을 만듭니다.',
    features: [
      '살리신산 - 각질 생성 억제',
      '세라마이드 NS 성분',
      '두피 깊은 보습',
      '촉촉한 두피 환경 조성',
    ],
    usage: '샴푸 후 두피에 골고루 바른 뒤 바로 헹구거나, 10분간 방치 후 헹굽니다.',
    sizes: [
      { volume: '스칼프 민트 1000ml', price: 165000, image: '/images/products/seseo-scalp-mint-1000.jpg', thumbY: '12%', scale: 1.5 },
      { volume: '스칼프 민트 500ml', price: 110000, image: '/images/products/seseo-scalp-mint-500.jpg', thumbY: '13%', scale: 2 },
      { volume: '소프트 민트 1000ml', price: 165000, image: '/images/products/seseo-soft-scalp-mint-1000.jpg', thumbY: '5%', scale: 1.8 },
      { volume: '소프트 민트 500ml', price: 110000, image: '/images/products/seseo-soft-scalp-mint-500.jpg', thumbY: '5%', scale: 2.3 },
    ],
    step: 3,
    stepLabel: 'STEP 3 · 두피팩',
    thumbY: '25%',
    scale: 2.3,
    homeThumbX: '0%',
    homeThumbY: '13%',
    homeScale: 1.35,
    routineThumbX: '0%',
    routineThumbY: '12%',
    routineScale: 1.3,
    listThumbX: '0%',
    listThumbY: '13%',
    listScale: 1.35,
  },
  {
    id: 'seseo-plpp-hair-pack',
    name: 'PLPP 모발팩',
    brand: 'SESEO',
    category: 'SESEO 식물하나:담다',
    badge: '인기',
    image: '/images/products/seseo-plpp-500.jpg',
    shortDesc: '극손상 모발의 뼈대 구성, 단백질·비타민·수분 집중 공급',
    description:
      '극도로 손상된 모발의 뼈대를 재구성하며, 단백질·비타민·수분을 집중적으로 공급합니다. 시술 후 약해진 모발에 탄력과 윤기를 되돌려줍니다.',
    features: [
      '극손상 모발 뼈대 구성',
      '단백질 집중 공급',
      '비타민·수분 보충',
      '모발 탄력·윤기 회복',
    ],
    usage: '샴푸 후 모발에 골고루 바른 뒤 바로 헹구거나, 10분간 방치 후 헹굽니다.',
    sizes: [
      { volume: '1000ml', price: 220000, image: '/images/products/seseo-plpp-1000.jpg', thumbY: '8%', scale: 2 },
      { volume: '500ml', price: 132000, image: '/images/products/seseo-plpp-500.jpg', thumbY: '2%', scale: 2.3 },
    ],
    step: 4,
    stepLabel: 'STEP 4 · 모발팩',
    thumbY: '8%',
    scale: 2.3,
    homeThumbX: '3.5%',
    homeThumbY: '4.7%',
    homeScale: 1.77,
    homeRotate: '-1.8deg',
    routineThumbY: '4.3%',
    routineThumbX: '5%',
    routineScale: 1.75,
    routineRotate: '358deg',
    listThumbX: '5%',
    listThumbY: '4%',
    listScale: 1.75,
    listRotate: '-2deg',
  },
  {
    id: 'seseo-scalp-ampoule',
    name: '두피앰플',
    brand: 'SESEO',
    category: 'SESEO 식물하나:담다',
    badge: '추천',
    image: '/images/products/seseo-balance-150.jpg',
    shortDesc: 'pH 밸런스 조절, 모근 강화(탈모 예방), 혈액순환 촉진',
    description:
      'pH 밸런스를 조절하여 곰팡이균을 억제하고, 모근을 강화하여 탈모를 예방합니다. 두피의 혈액순환을 촉진하여 건강한 모발 성장 환경을 조성합니다.',
    features: [
      'pH 밸런스 조절 (곰팡이균 억제)',
      '모근 강화 (탈모 예방)',
      '혈액순환 촉진',
      '건강한 모발 성장 환경 조성',
    ],
    usage: '두피팩/모발팩을 깨끗이 헹군 후, 타월 드라이한 두피에 뿌리고 말립니다.',
    sizes: [
      { volume: '1000ml', price: 198000, image: '/images/products/seseo-balance-1000.jpg', thumbY: '2%', scale: 2.8 },
      { volume: '150ml', price: 45000, image: '/images/products/seseo-balance-150.jpg', thumbY: '2%', scale: 2.8 },
    ],
    step: 5,
    stepLabel: 'STEP 5 · 앰플',
    thumbY: '2%',
    scale: 2.8,
    homeThumbX: '0%',
    homeThumbY: '2%',
    homeScale: 2.8,
    routineThumbX: '3%',
    routineThumbY: '2%',
    routineScale: 2,
    listThumbX: '4.5%',
    listThumbY: '2%',
    listScale: 1.95,
  },
  {
    id: 'seseo-leave-in',
    name: '리브인',
    brand: 'SESEO',
    category: 'SESEO 식물하나:담다',
    badge: null,
    image: '/images/products/seseo-leave-in-500.jpg',
    shortDesc: '케라틴 영양 공급으로 부드러움과 윤기를 지속적으로 유지',
    description:
      '건조하고 푸석한 모발 길 속까지 침투하여 수분을 충전합니다. 케라틴 성분이 영양을 공급하여 부드러움과 윤기를 지속적으로 유지시켜줍니다.',
    features: [
      '모발 깊숙이 수분 충전',
      '케라틴 성분 영양 공급',
      '부드러움·윤기 지속 유지',
      '건조·푸석한 모발 개선',
    ],
    usage: '두피팩/모발팩을 깨끗이 헹군 후, 타월 드라이한 모발에 바르고 말립니다.',
    sizes: [
      { volume: '1000ml', price: 220000, image: '/images/products/seseo-leave-in-1000.jpg', thumbY: '8%', scale: 2.3 },
      { volume: '500ml', price: 132000, image: '/images/products/seseo-leave-in-500.jpg', thumbY: '8%', scale: 2.3 },
      { volume: '300ml', price: 88000, image: '/images/products/seseo-leave-in-300.jpg', thumbY: '8%', scale: 2.3 },
    ],
    step: 6,
    stepLabel: 'STEP 6 · 마무리',
    thumbY: '8%',
    scale: 2.3,
    homeThumbX: '0%',
    homeThumbY: '8%',
    homeScale: 2.3,
    routineThumbX: '-2%',
    routineThumbY: '11%',
    routineScale: 1.6,
    listThumbX: '-2%',
    listThumbY: '13%',
    listScale: 1.7,
  },
]

// ──────────────────────────────────────────────
// 썸네일 설정 가이드
// ──────────────────────────────────────────────
// 각 제품에 3가지 영역별 이미지 설정이 있습니다:
//
// 1) 홈 > 인기 제품 (FeaturedProducts)
//    homeScale  : 이미지 크기 (1=원본, 2=2배)
//    homeThumbX : 좌우 위치 ('-10%'=왼쪽, '10%'=오른쪽)
//    homeThumbY : 상하 위치 ('0%'=기본, '10%'=아래로)
//
// 2) 홈 > 6단계 루틴 (RoutineSteps)
//    routineScale  : 이미지 크기
//    routineThumbX : 좌우 위치
//    routineThumbY : 상하 위치
//
// 3) 상품 목록 (/products)
//    listScale  : 이미지 크기
//    listThumbX : 좌우 위치
//    listThumbY : 상하 위치
//
// 값 조절 팁:
//   Scale  올리면 → 이미지 커짐 (1.5~3.0 범위 추천)
//   ThumbX 양수 → 오른쪽 이동, 음수 → 왼쪽 이동
//   ThumbY 올리면 → 이미지가 아래로 이동 ('0%'~'30%')
//   ThumbX/ThumbY 미지정 시 기본값 '0%' (가운데)
// ──────────────────────────────────────────────

export const allProducts = [...seseoProducts]

export const badgeColors = {
  '베스트': 'bg-accent text-white',
  '추천': 'bg-black text-white',
  '인기': 'bg-darkgray text-white',
  '프리미엄': 'bg-black text-white',
  '두피케어': 'bg-accent-dark text-white',
}

export function formatPrice(price) {
  return `₩${price.toLocaleString()}`
}

export function getProductById(id) {
  return allProducts.find((p) => p.id === id)
}
