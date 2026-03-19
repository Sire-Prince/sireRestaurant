/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  // Keep your turbopack settings if needed
  turbopack: {
    root: process.cwd(),
  },
};

module.exports = nextConfig;
