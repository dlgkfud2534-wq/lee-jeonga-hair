'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/contexts/AuthContext'
import { useCart } from '@/contexts/CartContext'
import { createOrder } from '@/lib/orders'
import ShippingForm from '@/components/ShippingForm'
import OrderSummary from '@/components/OrderSummary'
import PaymentPlaceholder from '@/components/PaymentPlaceholder'

export default function CheckoutPage() {
  const router = useRouter()
  const { user, loading: authLoading } = useAuth()
  const { items, getCartItems, getCartTotal, clearCart } = useCart()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const [shippingForm, setShippingForm] = useState({
    name: '',
    phone: '',
    postcode: '',
    address: '',
    addressDetail: '',
    memo: '',
    memoCustom: '',
  })

  useEffect(() => {
    if (!authLoading && !user) {
      router.push('/login?redirect=/checkout')
    }
  }, [user, authLoading, router])

  useEffect(() => {
    if (user) {
      setShippingForm(prev => ({
        ...prev,
        name: prev.name || user.name || '',
        phone: prev.phone || user.phone?.replace(/-/g, '') || '',
      }))
    }
  }, [user])

  if (authLoading || !user) return null
  if (items.length === 0) {
    router.push('/cart')
    return null
  }

  const handlePay = async () => {
    setError('')

    if (!shippingForm.name || !shippingForm.phone || !shippingForm.address) {
      setError('수령인, 연락처, 주소를 입력해주세요.')
      return
    }

    setLoading(true)
    try {
      const cartItems = getCartItems()
      const { subtotal, shippingFee, grandTotal } = getCartTotal()

      const formatPhone = (p) => {
        const d = p.replace(/\D/g, '')
        if (d.length === 11) return `${d.slice(0, 3)}-${d.slice(3, 7)}-${d.slice(7)}`
        return p
      }

      const orderId = await createOrder({
        userId: user.id,
        userName: user.name,
        userPhone: user.phone,
        items: cartItems.map(item => ({
          productId: item.productId,
          productName: item.product.name,
          sizeIndex: item.sizeIndex,
          volume: item.volume,
          price: item.price,
          quantity: item.quantity,
          subtotal: item.subtotal,
        })),
        shippingAddress: {
          name: shippingForm.name,
          phone: formatPhone(shippingForm.phone),
          postcode: shippingForm.postcode,
          address: shippingForm.address,
          addressDetail: shippingForm.addressDetail,
          memo: shippingForm.memo === '직접 입력' ? shippingForm.memoCustom : shippingForm.memo,
        },
        totalAmount: subtotal,
        shippingFee,
        grandTotal,
      })

      clearCart()
      router.push(`/order-complete?orderId=${orderId}`)
    } catch (err) {
      console.error('주문 에러:', err)
      setError(err.message || '주문 처리 중 오류가 발생했습니다.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="pt-20 md:pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-8 md:py-12">
        <h1 className="text-2xl font-bold mb-8">주문/결제</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: Shipping + Payment */}
          <div className="space-y-10">
            <ShippingForm form={shippingForm} onChange={setShippingForm} />
            <PaymentPlaceholder onPay={handlePay} loading={loading} />
            {error && <p className="text-red-500 text-sm">{error}</p>}
          </div>

          {/* Right: Order Summary */}
          <div>
            <div className="sticky top-24">
              <OrderSummary />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
