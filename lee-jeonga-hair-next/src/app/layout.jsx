import './globals.css'
import { Noto_Sans_KR } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FirebaseInit from '@/components/FirebaseInit'
import { AuthProvider } from '@/contexts/AuthContext'

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
})

export const metadata = {
  title: {
    default: '이정아 헤어 | 당신만의 아름다움을 완성합니다',
    template: '%s | 이정아 헤어',
  },
  description:
    '전북 군산, 당신만의 아름다움을 완성하는 프리미엄 헤어살롱. 커트·컬러·펌·클리닉과 SESEO 식물하나:담다 두피케어까지, 전문 스타일리스트가 1:1 맞춤 상담해드립니다.',
  openGraph: {
    type: 'website',
    title: '이정아 헤어 | 군산 프리미엄 헤어살롱',
    description:
      '전북 군산, 당신만의 아름다움을 완성하는 프리미엄 헤어살롱. 커트·컬러·펌·클리닉과 SESEO 식물하나:담다 두피케어까지.',
    siteName: '이정아 헤어',
    locale: 'ko_KR',
    images: [
      {
        url: '/images/logo/logo_og.jpg',
        width: 1200,
        height: 630,
        alt: '이정아 헤어 - 군산 프리미엄 헤어살롱',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '이정아 헤어 | 군산 프리미엄 헤어살롱',
    description:
      '전북 군산, 당신만의 아름다움을 완성하는 프리미엄 헤어살롱.',
    images: ['/images/logo/logo_og.jpg'],
  },
  keywords: [
    '군산 헤어살롱',
    '군산 미용실',
    '이정아 헤어',
    '두피케어',
    'SESEO 식물하나:담다',
    '프리미엄 헤어살롱',
  ],
  category: 'beauty',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={notoSansKR.className}>
        <FirebaseInit />
        <AuthProvider>
          <div className="min-h-screen bg-white">
            <Navbar />
            {children}
            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  )
}
