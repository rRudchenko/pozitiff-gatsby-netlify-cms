module.exports = {
  siteMetadata: {
    title: `pozitiff gatsby netlify cms`,
    description: `pozitiff gatsby netlify cms`,
    author: `@gatsbyjs`
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/static`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`
  ]
}
