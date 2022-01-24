module.exports = {
  siteMetadata: {
    title: `Dev-Test`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    "gatsby-plugin-postcss",
    // ...
  ],
};
