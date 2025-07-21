import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    output: "export",
    // For GitHub Pages under /portfolio
    assetPrefix: "/portfolio/",
    basePath: "/portfolio",
};

export default nextConfig;
