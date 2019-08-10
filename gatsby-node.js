// Tell gatsby to recompile files from `@arcblock/gatsby-theme`
// https://www.gatsbyjs.org/docs/add-custom-webpack-config/
exports.onCreateWebpackConfig = ({ actions, loaders, getConfig }) => {
  const config = getConfig();

  const filteredRules = config.module.rules
    .filter(rule => String(rule.test) !== String(/\.jsx?$/))
    .filter(rule => String(rule.test).indexOf('|jpg|jpeg|png|gif|') === -1);

  const excludeFn = modulePath => {
    return /node_modules/.test(modulePath) && !/@arcblock\/ux/.test(modulePath) && !/@arcblock\/www/.test(modulePath);
  };

  config.module.rules = [
    ...filteredRules,
    {
      ...loaders.url(),
      test: /\.(ico|jpg|jpeg|png|gif|webp)(\?.*)?$/,
      exclude: excludeFn,
    },
    {
      ...loaders.js(),
      test: /\.jsx?$/,
      exclude: excludeFn,
    },
  ];

  actions.replaceWebpackConfig(config);
};
