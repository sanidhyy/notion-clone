/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "files.edgestore.dev",
      },
    ],
  },
};

module.exports = nextConfig;
