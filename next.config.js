/** @type {import('next').NextConfig} */
function hostnameFromEnv(url, fallback) {
  if (!url || typeof url !== 'string') return fallback
  try {
    return new URL(url).hostname
  } catch {
    return fallback
  }
}

const campaignRewriteHost = hostnameFromEnv(
  process.env.NEXT_PUBLIC_CAMPAIGN_URL,
  'campaign.firstclassmail.xyz'
)
const adminRewriteHost = hostnameFromEnv(process.env.NEXT_PUBLIC_ADMIN_URL, 'admin.firstclassmail.xyz')

const nextConfig = {
  async redirects() {
    return [
      { source: '/appointments', destination: '/calendar', permanent: true },
      { source: '/zero-knowledge-systems', destination: '/zero-knowledge-proofs', permanent: true },
    ]
  },
  async rewrites() {
    return [
      {
        source: '/',
        has: [{ type: 'host', value: campaignRewriteHost }],
        destination: '/campaign',
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: campaignRewriteHost }],
        destination: '/campaign/:path*',
      },
      {
        source: '/',
        has: [{ type: 'host', value: adminRewriteHost }],
        destination: '/admin',
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: adminRewriteHost }],
        destination: '/admin/:path*',
      },
    ]
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
