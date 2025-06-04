/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/(.*)",
        has: [{ type: "host", value: "www.thaicertifi.com" }],
        destination: "https://thaicertifi.com/:1",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
