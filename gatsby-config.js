/* eslint-env node */
const path = require('path');

module.exports = {
  siteMetadata: {
    siteUrl: `https://jameslnewell.dev`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
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
    {
      resolve: 'gatsby-plugin-graphql-codegen',
      options: {
        fileName: 'src/types/graphql.ts',
      },
    },
  ],
};
