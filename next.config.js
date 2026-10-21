/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [{
      source: '/assets/factory/straight-knife/:path*',
      headers: [{ key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=604800' }],
    }, {
      source: '/assets/factory/rotary-transfer/:path*',
      headers: [{ key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=604800' }],
    }, {
      source: '/assets/factory/intelligent-hanging/:path*',
      headers: [{ key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=604800' }],
    }, ...['hd', '720'].map((quality) => ({
      source: `/assets/factory/multi-head-embroidery/embroidery-brand-film-${quality}.mp4`,
      headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
    }))];
  },
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
