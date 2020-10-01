module.exports = {
  pathPrefix: "/demo",
  plugins: [
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /icons/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-module-resolver',
      options: {
        root: './src',
        aliases: {
          '@components': './components',
          '@lib': './lib',
          '@assets': './assets',
          '@constants': './constants',
        },
      },
    },
  ],
};
