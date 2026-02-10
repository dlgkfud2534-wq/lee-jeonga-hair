---
name: landing-page-typography
description: 웹 랜딩페이지 타이포그래피 표준 규칙 스킬. 랜딩페이지, 히어로 섹션, 타이포그래피 시스템, 디자인 시스템을 만들거나 검토할 때 사용한다. 폰트 사이즈, 굵기, 자간, 행간, 요소 간 간격 등 타입 스케일 설정이 필요할 때 트리거된다. 랜딩페이지 제작, 타이포그래피 설정, Tailwind/CSS 타입 스케일 정의, 헤딩/본문 텍스트 스타일 조정, 전환 최적화 웹페이지 작업 시 활용한다.
---

# 웹 랜딩페이지 타이포그래피 표준 규칙

랜딩페이지 타이포그래피 설정 시 이 규칙을 적용한다. 모든 값은 8pt 그리드 시스템 기반이며, 한국어/영문 전환 최적화 페이지에 최적화되어 있다.

## 상세 스펙

전체 타이포그래피 스펙 테이블(폰트 사이즈, 굵기, 자간, 행간, 요소 간 간격)은 `references/typography-spec.md` 참조.

## 핵심 원칙

1. **사이즈 위계**: 히어로 메인카피 ≥ 본문 사이즈의 2~3배. 한 페이지에 4~7개 이내의 폰트 사이즈만 사용.
2. **자간 규칙**: 큰 텍스트 → 좁게(-0.02em~-0.03em). 작은 텍스트 → 넓게(0.01em~0.02em). ALL CAPS → 넓게(0.05em~0.1em).
3. **행간 규칙**: 짧은 텍스트(헤딩) → 좁게(1.1~1.3). 긴 텍스트(본문) → 넓게(1.5~1.7). WCAG 접근성 최소 기준 1.5.
4. **간격 근접성**: 헤딩 위 간격 > 헤딩 아래 간격 (헤딩은 아래 본문에 더 가깝게). 8pt 그리드 스케일 사용: 4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96, 120px.
5. **폰트 패밀리**: 최대 2~3개 (헤딩 1개 + 본문 1개 + 선택적 액센트 1개).
6. **최적 줄 길이**: 영문 45~75자, 한글 25~40자.
7. **최소 본문 사이즈**: 16px 이상 (모바일 포함).
8. **대비율**: 본문 최소 4.5:1, 큰 텍스트 최소 3:1 (WCAG 기준).

## Tailwind CSS 매핑

타이포그래피 스펙을 Tailwind 클래스로 적용할 때:

- 히어로 H1: `text-5xl md:text-7xl font-extrabold leading-tight tracking-tighter`
- 섹션 타이틀 H2: `text-3xl md:text-5xl font-bold leading-tight tracking-tight`
- 서브 헤딩 H3: `text-xl md:text-2xl font-semibold leading-snug`
- 본문: `text-base md:text-lg font-normal leading-relaxed`
- 리드/서브카피: `text-lg md:text-xl font-normal leading-relaxed`
- 캡션/설명: `text-xs md:text-sm font-normal leading-normal tracking-wide`
- CTA 버튼: `text-base font-semibold`
- 라벨/배지: `text-xs font-medium tracking-wider uppercase`

## 섹션 간격 패턴

```
섹션 패딩(상하): py-16 md:py-24 (64~96px)
섹션 간 간격: gap-y-20 md:gap-y-32 (80~128px)
헤딩 → 본문: mb-2 md:mb-4 (8~16px)
본문 단락 간: space-y-4 md:space-y-6 (16~24px)
텍스트 → CTA: mt-6 md:mt-8 (24~32px)
컨테이너: max-w-6xl mx-auto px-6 md:px-10
```
