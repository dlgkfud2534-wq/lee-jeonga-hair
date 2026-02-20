import AdminPage from '@/views/AdminPage'

export const metadata = {
  title: '관리자',
  robots: { index: false, follow: false },
}

export default function Admin() {
  return <AdminPage />
}
