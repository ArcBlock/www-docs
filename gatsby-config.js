const config = require('./config');

module.exports = {
  plugins: [
    {
      resolve: require.resolve('@arcblock/www'),
      options: {},
    },
    {
      resolve: require.resolve('@arcblock/gatsby-theme-docs'),
      options: config,
    },
  ],
};
