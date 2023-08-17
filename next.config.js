/* eslint-disable @typescript-eslint/no-var-requires */
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
        source: "/danh-sach",
        destination: "/Pages/BookMarks/",
      },
    ];
  },
};

module.exports = nextConfig;
