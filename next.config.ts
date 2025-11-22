import type { NextConfig } from 'next';
import * as path from 'path';

const nextConfig: NextConfig = {
  reactCompiler: true,
  sassOptions: {
    includePaths: [path.join(process.cwd(), 'src/sass')],
  },
  experimental: {
    optimizePackageImports: ['@chakra-ui/react'],
  },
  images: {
    remotePatterns: [
      // Contentful Image Repo
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
      },
    ],
  },
};

export default nextConfig;
