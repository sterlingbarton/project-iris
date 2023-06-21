/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
  }
  
  module.exports = {
    async rewrites() {
      return [
        {
          source: "/api/:path*",
          destination: "http://localhost:5555/:path*",
        }
      ];
    },
  };
  
  // module.exports = nextConfig