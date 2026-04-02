import { headers } from 'next/headers'
import { AdminPathProvider } from '@/components/admin/AdminPathContext'
import { isAdminAppHost } from '@/lib/subdomainHosts'

export default async function AdminRouteLayout({ children }: { children: React.ReactNode }) {
  const host = (await headers()).get('host') ?? ''
  return (
    <AdminPathProvider shortPaths={isAdminAppHost(host)}>
      <div className="min-h-screen bg-[#070708] text-neutral-200 antialiased">{children}</div>
    </AdminPathProvider>
  )
}
