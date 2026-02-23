import { Noto_Sans_KR } from 'next/font/google'
import './globals.css'
import { AuthProvider } from '@/contexts/AuthContext'
import { CartProvider } from '@/contexts/CartContext'
import FirebaseInit from '@/components/FirebaseInit'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
})

export const metadata = {
  title: {
    default: 'SESEO 식물하나:담다 | 두피·모발 케어 전문',
    template: '%s | SESEO 식물하나:담다',
  },
  description: 'SESEO 식물하나:담다 - 식물 성분 기반 프리미엄 두피·모발 케어 제품. 딥클렌징, 샴푸, 두피팩, 모발팩, 앰플, 리브인까지 6단계 홈케어 루틴.',
  keywords: ['SESEO', '식물하나담다', '두피케어', '모발케어', '탈모예방', '두피샴푸', '이정아헤어'],
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    siteName: 'SESEO 식물하나:담다',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={`${notoSansKR.className} bg-white text-black min-h-screen`}>
        <AuthProvider>
          <CartProvider>
            <FirebaseInit />
            <Navbar />
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
