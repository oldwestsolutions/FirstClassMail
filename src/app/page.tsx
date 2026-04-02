import { headers } from 'next/headers'
import { AdminPathProvider } from '@/components/admin/AdminPathContext'
import AdminLoginPage from '@/components/admin/AdminLoginPage'
import { CampaignPathProvider } from '@/components/campaign/CampaignPathContext'
import CampaignLoginPage from '@/components/campaign/CampaignLoginPage'
import MarketingHome from '@/components/marketing/MarketingHome'
import { hostFromRequestHeaders, isAdminAppHost, isCampaignAppHost } from '@/lib/subdomainHosts'

/** Subdomains share path `/` with the marketing site — branch on host so Vercel cannot serve one static `/` for all. */
export const dynamic = 'force-dynamic'

export default async function Page() {
  const h = await headers()
  const host = hostFromRequestHeaders((name) => h.get(name))

  if (isCampaignAppHost(host)) {
    return (
      <CampaignPathProvider shortPaths>
        <CampaignLoginPage />
      </CampaignPathProvider>
    )
  }

  if (isAdminAppHost(host)) {
    return (
      <AdminPathProvider shortPaths>
        <AdminLoginPage />
      </AdminPathProvider>
    )
  }

  return <MarketingHome />
}
