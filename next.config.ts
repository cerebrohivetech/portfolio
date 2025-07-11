import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
};

const isProd = process.env.NODE_ENV === 'production';
const repoName = 'portfolio'; // Replace with your repository name

module.exports = {
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',
};

export default nextConfig;
