import { headers } from 'next/headers'
import { CampaignPathProvider } from '@/components/campaign/CampaignPathContext'
import { hostFromRequestHeaders, isCampaignAppHost } from '@/lib/subdomainHosts'

export default async function CampaignRouteLayout({ children }: { children: React.ReactNode }) {
  const h = await headers()
  const host = hostFromRequestHeaders((name) => h.get(name))
  return (
    <CampaignPathProvider shortPaths={isCampaignAppHost(host)}>
      <div className="min-h-screen bg-[#050508] text-neutral-200 antialiased">{children}</div>
    </CampaignPathProvider>
  )
}
