import SignupPage from '@/views/SignupPage'
import { Suspense } from 'react'

export const metadata = {
  title: '회원가입',
}

export default function Signup() {
  return (
    <Suspense>
      <SignupPage />
    </Suspense>
  )
}
