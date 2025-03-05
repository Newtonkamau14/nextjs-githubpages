import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const nextConfig:NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/nextjs-githubpages/' : '',
  basePath: isProd ? '/nextjs-githubpages' : '',
  output: 'export'
};

export default nextConfig;