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
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
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
  ],
};
