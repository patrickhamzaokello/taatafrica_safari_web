import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['images.unsplash.com','plus.unsplash.com','wallpapers.com', 'lh3.googleusercontent.com', 'mwonya-kasfa-assets-store.s3.us-east-1.amazonaws.com', 'assets.mwonya.com', 'artist.mwonya.com', 'www.promptengineering.org'],
},
};

export default nextConfig;
