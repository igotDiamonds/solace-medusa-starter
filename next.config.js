const checkEnvVariables = require('./check-env-variables')

checkEnvVariables()

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: 'medusa-public-images.s3.eu-west-1.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'medusa-server-testing.s3.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'medusa-server-testing.s3.us-east-1.amazonaws.com',
      },
      // ...(process.env.NEXT_PUBLIC_SPACE_DOMAIN && {
      //   protocol: 'https',
      //   hostname: process.env.NEXT_PUBLIC_SPACE_DOMAIN,
      // }),
      // ...(process.env.NEXT_PUBLIC_CDN_SPACE_DOMAIN && {
      //   protocol: 'https',
      //   hostname: process.env.NEXT_PUBLIC_CDN_SPACE_DOMAIN,
      // }),
      // ...(process.env.NEXT_PUBLIC_SPACE_ENDPOINT && {
      //   protocol: 'https',
      //   hostname: process.env.NEXT_PUBLIC_SPACE_ENDPOINT,
      // }),
    ],
  },
}

module.exports = nextConfig
