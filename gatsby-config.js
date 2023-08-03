module.exports = {
  siteMetadata: {
    siteUrl: `https://www.maddigital.com.br`
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: "7247562658592878",
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-THNZXZJ",
        includeInDevelopment: false,
      },
    },
  ]
}

//1912545459091301 antigo
