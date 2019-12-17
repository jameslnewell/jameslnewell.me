module.exports = {
  siteMetadata: {
    siteUrl: `https://jameslnewell.dev`,
  },
  plugins: [
    `gatsby-plugin-react-svg`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: process.env.GA_ID,
        includeInDevelopment: false,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-no-javascript`,
  ],
};
