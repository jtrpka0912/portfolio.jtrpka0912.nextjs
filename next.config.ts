import type { NextConfig } from "next";
import * as path from 'path';

const nextConfig: NextConfig = {
  reactCompiler: true,
  sassOptions: {
    includePaths: [path.join(process.cwd(), 'src/sass')]
  }
};

export default nextConfig;
