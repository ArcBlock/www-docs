const path = require('path');
const createConfig = require('@arcblock/gatsby-config/gatsby-config');

module.exports = createConfig({
  pagesPath: [path.resolve('./src/pages/')],
});
