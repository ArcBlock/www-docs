require('dotenv').config();

const fs = require('fs');
const path = require('path');
const { version } = require('./package.json');

module.exports = {
  siteMetadata: {
    disableI18n: false,
  },
  plugins: [
    {
      resolve: require.resolve('@arcblock/www'),
    },
    {
      resolve: require.resolve('@arcblock/gatsby-theme-docs'),
      options: {
        version: `v${version}`,
        official: true,
        disableI18n: false,
        showGetStarted: true,
        defaultBanner: '/og-banner.png',
        sourceDirs: [
          path.resolve(__dirname, 'dependencies/forge-docs/src'),
          path.resolve(__dirname, 'dependencies/forge-cli-handbook/src'),
          path.resolve(__dirname, 'dependencies/abtnode-docs/src'),
          path.resolve(__dirname, 'src', 'pages'),
        ],
        siteMetadata: {
          title: 'Documentation',
          siteUrl: 'https://docs.arcblock.io',
          description: 'Forge SDK Documentation',
          logoUrl: '/docs/intro',
          sidebarWidth: 320,
        },
        algoliaSearch: {
          enabled: process.env.NODE_ENV === 'production',
          appId: process.env.GATSBY_ALGOLIA_APP_ID,
          adminKey: process.env.GATSBY_ALGOLIA_ADMIN_KEY,
          searchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
          indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
        },
        navItems: [
          {
            title: 'Community',
            link: 'https://community.arcblockio.cn',
            subPages: {
              'https://community.arcblockio.cn': 'Community',
              'https://github.com/ArcBlock': 'GitHub',
              'https://www.arcblock.io': 'About',
              'https://twitter.com/ArcBlock_io': 'Twitter',
              'https://www.youtube.com/channel/UCTEzIGHk71usPOLc2cYPYpQ': 'YouTube',
            },
          },
        ],
        extraPlugins: [],
      },
    },
    // Speed up netlify build
    {
      resolve: 'gatsby-plugin-netlify-cache',
      options: {
        cachePublic: true,
      },
    },
  ],
};
