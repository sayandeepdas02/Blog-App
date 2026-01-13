import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: '/api/proxy/:path*',
        destination: 'http://localhost:8000/:path*', // Proxy to Backend
      },

    ];
  },
};

export default nextConfig;
