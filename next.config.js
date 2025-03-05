/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["aceternity.com"],
    unoptimized: process.env.NODE_ENV === "development",
  },
  typescript: {
    ignoreBuildErrors: false,
    tsconfigPath: "./tsconfig.json",
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

module.exports = nextConfig;
