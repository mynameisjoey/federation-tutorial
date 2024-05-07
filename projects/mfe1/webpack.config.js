const {
  shareAll,
  withModuleFederationPlugin,
} = require('@angular-architects/module-federation/webpack');

const webpackConfig = withModuleFederationPlugin({
  name: 'mfe1',

  exposes: {
    // Update this whole line (both, left and right part):
    './Module': './projects/mfe1/src/app/flights/flights.module.ts',
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto',
    }),
  },
});
module.exports = {
  ...webpackConfig,
  output: {
    ...webpackConfig.output,
    publicPath: 'http://localhost:4201/',
    scriptType: 'text/javascript'
  }
};
