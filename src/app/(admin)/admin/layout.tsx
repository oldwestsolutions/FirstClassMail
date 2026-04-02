import { headers } from 'next/headers'
import { AdminPathProvider } from '@/components/admin/AdminPathContext'
import { adminAppHostname } from '@/lib/subdomainHosts'

function adminHost(host: string) {
  const h = host.split(':')[0]?.toLowerCase() ?? ''
  return h === adminAppHostname().toLowerCase() || h.startsWith('admin.localhost')
}

export default async function AdminRouteLayout({ children }: { children: React.ReactNode }) {
  const host = (await headers()).get('host') ?? ''
  return (
    <AdminPathProvider shortPaths={adminHost(host)}>
      <div className="min-h-screen bg-[#070708] text-neutral-200 antialiased">{children}</div>
    </AdminPathProvider>
  )
}
