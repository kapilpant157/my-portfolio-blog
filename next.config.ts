import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['img.youtube.com'],
  },
};

// const withMDX = require('@next/mdx')()

// module.exports = withMDX({
//   pageExtensions: ['ts', 'tsx', 'mdx'],
// })

export default nextConfig;

