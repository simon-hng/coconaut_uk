/* eslint-disable no-undef */
require('dotenv').config();

module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.coconaut.co.uk',
    title: 'Coconaut UK',
    // TODO: provide additional meta data
  },
  plugins: [
    {
      resolve: 'gatsby-source-shopify',
      options: {
        password: process.env.SHOPIFY_SHOP_PASSWORD,
        storeUrl: process.env.GATSBY_SHOPIFY_STORE_URL,
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          placeholder: `none`,
        },
      },
    },
    `gatsby-transformer-sharp`, // Needed for dynamic images
    `gatsby-plugin-tsconfig-paths`,
    `gatsby-plugin-anchor-links`,
  ],
};
