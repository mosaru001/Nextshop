/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  images: {
    domains: [
      "www.allonline.7eleven.co.th",
      "media.allonline.7eleven.co.th",
      "images.unsplash.com",
      'promotions.co.th'
    ],
  },
}

module.exports = nextConfig
