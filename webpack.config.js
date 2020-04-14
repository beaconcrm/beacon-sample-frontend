const _ = require('lodash');


// see https://webpack.js.org/concepts/mode/
const mode = process.env.NODE_ENV === 'development' ? 'development' : 'production';

const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    './public/js/app/entry.jsx',
  ],
  mode,
  devtool: process.env.NODE_ENV === 'production' ? 'none' : 'cheap-module-eval-source-map', // full source maps slow down incremental builds big time
  devServer: {
    port: 8082,
    contentBase: './dist',
    hot: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },

    // Below added because of https://github.com/webpack/webpack-dev-server/issues/416
    disableHostCheck: true,
  },
  plugins: _.compact([
    mode === 'development' && new webpack.HotModuleReplacementPlugin(),
  ]),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            babelrc: false,
            plugins: [
              // the below makes async await work
              ['@babel/plugin-transform-runtime', {
                regenerator: true,
              }],
              'lodash',
              'react-hot-loader/babel',
            ],
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
            ],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      app: `${__dirname}/public/js/app`,
      config: `${__dirname}/public/js/app/config`,
      components: `${__dirname}/public/js/app/components`,
      utils: `${__dirname}/public/js/app/utils`,
      actions: `${__dirname}/public/js/app/actions`,
      constants: `${__dirname}/public/js/app/constants`,
      reducers: `${__dirname}/public/js/app/reducers`,
      api: `${__dirname}/public/js/app/api`,
    },
  },
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'http://localhost:8082/',
    pathinfo: false,
  },
};
