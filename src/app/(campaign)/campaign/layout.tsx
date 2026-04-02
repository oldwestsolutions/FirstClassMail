import { headers } from 'next/headers'
import { CampaignPathProvider } from '@/components/campaign/CampaignPathContext'
import { isCampaignAppHost } from '@/lib/subdomainHosts'

export default async function CampaignRouteLayout({ children }: { children: React.ReactNode }) {
  const host = (await headers()).get('host') ?? ''
  return (
    <CampaignPathProvider shortPaths={isCampaignAppHost(host)}>
      <div className="min-h-screen bg-[#050508] text-neutral-200 antialiased">{children}</div>
    </CampaignPathProvider>
  )
}
