/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  env: {
    appApi: process.env["NEXT_PUBLIC_API"] || "",
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  async rewrites() {
    return [
      {
        source: "/danh-muc/tin-tuc-trong-ngay",
        destination: "/Pages/Categories/Daily",
      },
      {
        source: "/danh-muc/tin-thi-truong",
        destination: "/Pages/Categories/MarketNews",
      },
    ];
  },
};

module.exports = nextConfig;
