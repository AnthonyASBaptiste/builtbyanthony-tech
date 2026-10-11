import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/resume',
        destination: '/cv',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
