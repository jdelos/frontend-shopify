
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteTitle: `La Calçotada - Shop`,
    siteTitleDefault: `Order Your Next Calçotada - La Calçotada`,
    siteHeadline: `All copyrights reserved to La Calçotada`,
    siteUrl: `https://lacalcotada.com`,
    siteDescription: `La Calçotada Barcelona's Best Barbecue Feasts`,
    siteLanguage: `en`,
    siteImage: `/banner.png`,
    author: `@lacalcotada`,
    hrefLang: "en",
    twitter: `@lacalcotada`
  },
  flags: {
    FAST_DEV: true,
  },
  plugins: [
    {
      resolve: "gatsby-source-shopify",
      options: {
        password: process.env.SHOPIFY_SHOP_PASSWORD,
        storeUrl: process.env.GATSBY_SHOPIFY_STORE_URL,
        shopifyConnections: ["collections"],
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-gatsby-cloud",
    // Add your Google Analytics ID to the .env file to enable
    // Otherwise, this plugin can be removed
    process.env.GOOGLE_ANALYTICS_ID && {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
  ].filter(Boolean),
}
