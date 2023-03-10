/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "upload.wikimedia.org",
      "static.wikia.nocookie.net",
      "play-lh.googleusercontent.com",
    ],
  },
};

module.exports = nextConfig;
