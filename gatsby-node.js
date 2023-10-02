const FilterWarningsPlugin = require('webpack-filter-warnings-plugin');

exports.onCreateWebpackConfig = ({ actions, getConfig, loaders, stage }) => {
  /*
   * This error/warning (warn chunk styles [mini-css-extract-plugin]) is caused by the Webpack plugin  mini-css-extract-plugin
   * wanting all CSS imports to be in the same order. This is because it confused
   * CSS modules with plain CSS.
   * For more info:https://robertmarshall.dev/blog/fix-warn-chunk-commons-mini-css-extract-plugin-error-in-gatsby-js/
   */

  actions.setWebpackConfig({
    plugins: [
      new FilterWarningsPlugin({
        exclude: /mini-css-extract-plugin[^]*Conflicting order. Following module has been added:/,
      }),
    ],
  });

  if (['build-html', 'develop-html'].includes(stage)) {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /2gis-maps/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};
