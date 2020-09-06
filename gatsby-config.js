module.exports = {
  siteMetadata: {
    title: `HANK Development`,
    description: `HANK Development is a team of four female web developers driving best practices through creativity and strategy.`,
    author: `@nicoledwenger`,
  },
  plugins: [
    {
      resolve: `gatsby-theme-codebushi`,
      options: {
        tailwindConfig: `tailwind.config.js`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/assets/logo-dark.svg`
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `chivo\:300,400,700`,
          `crimson text`,
          `open sans`,
          `raleway\:300,400,700`,
        ],
        display: 'swap'
      }
    },
  ],
};
