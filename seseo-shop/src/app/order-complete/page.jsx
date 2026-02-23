import OrderCompletePage from '@/views/OrderCompletePage'
import { Suspense } from 'react'

export const metadata = {
  title: '주문 완료',
}

export default function OrderComplete() {
  return (
    <Suspense>
      <OrderCompletePage />
    </Suspense>
  )
}
