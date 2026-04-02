/** @type {import('next').NextConfig} */
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
        source: '/:path*',
        has: [{ type: 'host', value: 'campaign.firstclassmail.xyz' }],
        destination: '/campaign/:path*',
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'admin.firstclassmail.xyz' }],
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
