module.exports = {
  siteMetadata: {
    title: "放置少女ツール",
    description: "放置少女用のツールです",
    keywords: ["放置少女", "ツール"],
    author: {
      name: `minominolyly`,
    },
    social: {
      twitter: `minominolyly`,
    },
    siteUrl: "https://houchi-tools.firebaseapp.com"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        workboxConfig: {
          runtimeCaching: [
            {
              urlPattern: /(\.js$|\.css$|static\/)/,
              handler: `CacheFirst`,
            },
            {
              urlPattern: /^https?:.*\/page-data\/.*\.json/,
              handler: `NetworkFirst`,
            },
            {
              urlPattern:
                /^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/,
              handler: `StaleWhileRevalidate`,
            },
            {
              urlPattern: /^https?:\/\/fonts\.googleapis\.com\/css/,
              handler: `StaleWhileRevalidate`,
            },
          ],
        },
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "放置少女ツール",
        short_name: "放置少女Tool",
        start_url: "/",
        background_color: "#3abbae",
        display: "standalone",
        theme_color: "#3abbae",
        categories: ["tools", "social", "game"],
        icon: "./src/images/favicon.png",
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://houchi-tools.firebaseapp.com",
        sitemap: "https://houchi-tools.firebaseapp.com/sitemap/sitemap-index.xml",
        env: {
          development: {
            policy: [{ userAgent: "*", disallow: ["/"] }],
          },
          production: {
            policy: [{ userAgent: "*", allow: "/" }],
          },
        },
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: "src/configurations/typography.config.ts",
      },
    },
    "gatsby-plugin-twitter",
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
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
