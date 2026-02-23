import LoginPage from '@/views/LoginPage'
import { Suspense } from 'react'

export const metadata = {
  title: '로그인',
}

export default function Login() {
  return (
    <Suspense>
      <LoginPage />
    </Suspense>
  )
}
