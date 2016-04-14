/* eslint-disable no-var */
var path = require('path');
var webpack = require('webpack');

var projectRoot = __dirname;

var config = {
  // Must be an absolute path or watching feature will fail
  context: path.join(projectRoot, 'js'),
  entry: [
    './main.js',
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080/',
  ],
  output: {
    path: path.join(projectRoot, 'www'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    loaders: [
      // ES6
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
    ],
  },
  resolveLoader: {
    root: [
      path.join(projectRoot, 'node_modules'),
    ],
  },
  resolve: {
    root: [
      path.join(projectRoot, 'node_modules'),
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
};
module.exports = config;
