/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // appDirを使うために以下を追記
  experimental: {
    appDir: true,
  }
}

module.exports = nextConfig
