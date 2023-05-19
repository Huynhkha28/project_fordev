/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
module.exports = {
  images: {
    domains: ['localhost', 'localhost:3001'],
  },
  env: {
    PORT: process.env.PORT,
  }
}

module.exports = nextConfig
