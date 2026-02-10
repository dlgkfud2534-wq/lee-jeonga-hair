import ProductDetailPage from '@/views/ProductDetailPage'

export default async function ProductDetail({ params }) {
  const { id } = await params
  return <ProductDetailPage id={id} />
}
