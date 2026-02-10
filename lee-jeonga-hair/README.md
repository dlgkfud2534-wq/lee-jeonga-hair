# 이정아 헤어 랜딩페이지

## 환경변수 설정

프로젝트 실행 전 환경변수 설정이 필요합니다.

1. `.env.example` 파일을 복사하여 `.env` 파일을 생성합니다.
   ```bash
   cp .env.example .env
   ```

2. `.env` 파일을 열고 실제 값으로 수정합니다.

| 변수명 | 설명 | 예시 |
|--------|------|------|
| `VITE_BUSINESS_PHONE` | 사업장 전화번호 | `02-1234-5678` |
| `VITE_BUSINESS_EMAIL` | 사업장 이메일 | `info@example.com` |
| `VITE_BUSINESS_ADDRESS` | 사업장 주소 | `서울특별시 강남구 테헤란로 123` |
| `VITE_BUSINESS_ADDRESS_DETAIL` | 상세 주소 | `OO빌딩 2층` |
| `VITE_BUSINESS_REGISTRATION` | 사업자등록번호 | `000-00-00000` |
| `VITE_BUSINESS_OWNER` | 대표자명 | `홍길동` |
| `VITE_KAKAO_ID` | 카카오톡 아이디 | `@카카오아이디` |

> `.env` 파일은 `.gitignore`에 포함되어 있어 git에 커밋되지 않습니다.

## 실행 방법

```bash
npm install
npm run dev
```

---

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
