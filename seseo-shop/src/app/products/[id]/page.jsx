import ProductDetailPage from '@/views/ProductDetailPage'
import { getProductById } from '@/data/products'

export async function generateMetadata({ params }) {
  const { id } = await params
  const product = getProductById(id)
  return {
    title: product ? product.name : '상품 상세',
  }
}

export default async function ProductDetail({ params }) {
  const { id } = await params
  return <ProductDetailPage id={id} />
}
