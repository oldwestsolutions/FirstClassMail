import { headers } from 'next/headers'
import { CampaignPathProvider } from '@/components/campaign/CampaignPathContext'
import { campaignAppHostname } from '@/lib/subdomainHosts'

function campaignHost(host: string) {
  const h = host.split(':')[0]?.toLowerCase() ?? ''
  return h === campaignAppHostname().toLowerCase() || h.startsWith('campaign.localhost')
}

export default async function CampaignRouteLayout({ children }: { children: React.ReactNode }) {
  const host = (await headers()).get('host') ?? ''
  return (
    <CampaignPathProvider shortPaths={campaignHost(host)}>
      <div className="min-h-screen bg-[#050508] text-neutral-200 antialiased">{children}</div>
    </CampaignPathProvider>
  )
}
