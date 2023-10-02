const babelOptions = {
  presets: [
    'babel-preset-gatsby',
    '@babel/preset-typescript',
    '@babel/preset-env',
    '@babel/preset-react',
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    [
      '@babel/plugin-proposal-private-property-in-object', {
        loose: false,
      },
    ],
  ],
};

module.exports = require('babel-jest').default.createTransformer(babelOptions);
