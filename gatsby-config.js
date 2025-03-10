/**
 * @type {import('gatsby').GatsbyConfig}
 *
 */
/* src/styles/global.css */

module.exports = {
  siteMetadata: {
    title: `Jeewantha Rashmika | UI/UX Designer`,
    siteUrl: `https://jeewantharashmika.com`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/fav.png",
      },
    },

    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`], // Convert images to WebP for smaller file sizes
          quality: 75, // Reduce image quality slightly
          breakpoints: [750, 1080, 1366, 1920], // Limit breakpoints
        },
        failOnError: false, // Prevent the build from crashing on image errors
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-plugin-no-sourcemaps",
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-TH73QWLG",

        includeInDevelopment: false,

        defaultDataLayer: { platform: "gatsby" },
      },
    },
  ],
};
