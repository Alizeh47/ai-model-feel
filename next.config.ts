import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  // Optimize for production builds
  swcMinify: true,
  
  // Reduce filesystem operations
  typescript: {
    // Don't run TypeScript during development
    ignoreBuildErrors: process.env.NODE_ENV === 'development',
  },
  
  // Optimize image handling
  images: {
    domains: [],
    // Disable blur placeholder in development
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Webpack optimization
  webpack: (config, { dev, isServer }) => {
    // Optimize only in production
    if (!dev) {
      config.optimization = {
        ...config.optimization,
        minimize: true,
      }
    }
    return config
  },
}

export default nextConfig
