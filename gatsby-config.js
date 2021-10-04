module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "CoconautUK",
  },
  plugins: [
    {
      resolve: "gatsby-source-shopify",
      options: {
        shopName: "",
        accessToken: "",
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
  ],
};
