import { formatPrice } from '@/data/products'
import { Package } from 'lucide-react'

const statusLabels = {
  pending: '주문 접수',
  confirmed: '주문 확인',
  shipping: '배송 중',
  delivered: '배송 완료',
  cancelled: '주문 취소',
}

const statusColors = {
  pending: 'bg-yellow-100 text-yellow-800',
  confirmed: 'bg-blue-100 text-blue-800',
  shipping: 'bg-accent/10 text-accent',
  delivered: 'bg-green-100 text-green-800',
  cancelled: 'bg-red-100 text-red-800',
}

export default function OrderCard({ order }) {
  const createdAt = order.createdAt?.toDate
    ? order.createdAt.toDate().toLocaleDateString('ko-KR')
    : order.createdAt?.seconds
    ? new Date(order.createdAt.seconds * 1000).toLocaleDateString('ko-KR')
    : '-'

  return (
    <div className="border border-lightgray p-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Package size={16} className="text-midgray" />
          <span className="text-xs text-midgray">{createdAt}</span>
        </div>
        <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${statusColors[order.status] || 'bg-gray-100 text-gray-800'}`}>
          {statusLabels[order.status] || order.status}
        </span>
      </div>

      {/* Items */}
      <div className="space-y-2 mb-4">
        {order.items?.map((item, i) => (
          <div key={i} className="flex justify-between text-sm">
            <span className="text-darkgray">
              {item.productName} ({item.volume}) x {item.quantity}
            </span>
            <span className="font-medium">{formatPrice(item.subtotal)}</span>
          </div>
        ))}
      </div>

      {/* Total */}
      <div className="pt-3 border-t border-lightgray flex justify-between items-center">
        <span className="text-sm text-midgray">총 결제 금액</span>
        <span className="font-bold">{formatPrice(order.grandTotal)}</span>
      </div>
    </div>
  )
}
