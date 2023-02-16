module.exports = {
  siteMetadata: {
    siteUrl: `https://www.madcompany.com.br`,
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
        pixelId: "1154782721895778",
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
