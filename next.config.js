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
