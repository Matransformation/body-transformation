/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "", 
        pathname: "/**",    // ← ajoute cette ligne
      },
    ],
  },
};

export default nextConfig;
