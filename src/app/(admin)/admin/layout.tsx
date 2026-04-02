import { headers } from 'next/headers'
import { AdminPathProvider } from '@/components/admin/AdminPathContext'
import { hostFromRequestHeaders, isAdminAppHost } from '@/lib/subdomainHosts'

export default async function AdminRouteLayout({ children }: { children: React.ReactNode }) {
  const h = await headers()
  const host = hostFromRequestHeaders((name) => h.get(name))
  return (
    <AdminPathProvider shortPaths={isAdminAppHost(host)}>
      <div className="min-h-screen bg-white text-neutral-600 antialiased">{children}</div>
    </AdminPathProvider>
  )
}
