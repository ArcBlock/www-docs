const config = require('./config');

module.exports = {
  plugins: [
    {
      resolve: require.resolve('@arcblock/gatsby-theme-docs'),
      options: config,
    },
  ],
};
