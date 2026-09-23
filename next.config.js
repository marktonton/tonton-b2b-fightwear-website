/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/products/black-competition-shorts',
        destination: '/products/high-split-grappling-shorts',
        permanent: true,
      },
      {
        source: '/products/team-kit-13',
        destination: '/customization/sublimated-rash-guards',
        permanent: true,
      },
      {
        source: '/products/team-kit-14',
        destination: '/products/pro-mma-shorts-08',
        permanent: true,
      },
      {
        source: '/products/team-kit-15',
        destination: '/products/pro-mma-shorts-08',
        permanent: true,
      },
      {
        source: '/products/pro-team-kit-17',
        destination: '/customization/sublimated-bjj-mma-shorts',
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.tontongear.com',
        pathname: '/assets/**',
      },
    ],
  },
}

module.exports = nextConfig
