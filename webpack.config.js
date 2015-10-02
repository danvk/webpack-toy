'use strict';

var webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    path = require('path'),
    srcPath = path.join(__dirname, 'src'),
    nodeModulesPath = path.join(__dirname, 'node_modules');

module.exports = {
  target: 'web',
  cache: true,
  entry: {
    'demo': srcPath + '/demo.js'
  },
  resolve: {
    root: srcPath,
    extensions: ['', '.js'],
    modulesDirectories: ['node_modules', 'src'],
    // alias: moduleAlias
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist',
    filename: '[name].[hash].js',
    pathInfo: true  // ???
  },
  module: {
    loaders: [
      { test: /\.js?$/, exclude: /node_modules/, loader: 'babel?cacheDirectory' },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: 'src/demo.html'
    }),
    new webpack.NoErrorsPlugin(),
  ],
  debug: true,
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    port: 9090,
    contentBase: './'
  }
};
