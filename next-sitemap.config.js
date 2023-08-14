/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_APP_DOMAIN || "https://example.com",
  generateRobotsTxt: true, // (optional)
  sitemapSize: 7000,
  // ...other options
};
