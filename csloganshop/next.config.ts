import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["cdn.sanity.io"],
  },
  eslint: {
    ignoreDuringBuilds: true, // ✅ Skip ESLint during Vercel production build
  },
};

export default nextConfig;
