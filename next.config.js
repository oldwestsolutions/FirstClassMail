/** @type {import('next').NextConfig} */
function hostnameFromEnv(url, fallback) {
  if (!url || typeof url !== 'string') return fallback
  try {
    return new URL(url).hostname
  } catch {
    return fallback
  }
}

const mainApex = hostnameFromEnv(process.env.NEXT_PUBLIC_MAIN_SITE_URL, 'firstclassmail.xyz')
const campaignRewriteHost = hostnameFromEnv(
  process.env.NEXT_PUBLIC_CAMPAIGN_URL,
  `campaign.${mainApex}`
)
const adminRewriteHost = hostnameFromEnv(process.env.NEXT_PUBLIC_ADMIN_URL, `admin.${mainApex}`)

/** Deduped hostnames so rewrites match even if env URLs disagree slightly from apex. */
function uniqueHosts(...hosts) {
  return [...new Set(hosts.filter(Boolean))]
}

const nextConfig = {
  async redirects() {
    return [
      { source: '/appointments', destination: '/calendar', permanent: true },
      { source: '/zero-knowledge-systems', destination: '/zero-knowledge-proofs', permanent: true },
    ]
  },
  async rewrites() {
    const campaignHosts = uniqueHosts(campaignRewriteHost, `campaign.${mainApex}`)
    const adminHosts = uniqueHosts(adminRewriteHost, `admin.${mainApex}`)
    const rules = []
    for (const host of campaignHosts) {
      rules.push({
        source: '/',
        has: [{ type: 'host', value: host }],
        destination: '/campaign',
      })
      rules.push({
        source: '/:path*',
        has: [{ type: 'host', value: host }],
        destination: '/campaign/:path*',
      })
    }
    for (const host of adminHosts) {
      rules.push({
        source: '/',
        has: [{ type: 'host', value: host }],
        destination: '/admin',
      })
      rules.push({
        source: '/:path*',
        has: [{ type: 'host', value: host }],
        destination: '/admin/:path*',
      })
    }
    return rules
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  experimental: {
    serverComponentsExternalPackages: ['sqlite3', 'bcryptjs']
  },
  output: 'standalone',
  // Optimize for Vercel deployment
  swcMinify: true,
  compress: true,
  poweredByHeader: false
}

module.exports = nextConfig
