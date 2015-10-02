var webpack = require('webpack'),
    _ = require('underscore'),
    path = require('path'),
    srcPath = path.join(__dirname, 'src');

var config = Object.create(require('./webpack.config.js'));

_.extend(config, {
  entry: {
    'foo': srcPath + '/main/foo.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    library: 'foo',
    libraryTarget: 'umd'
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ],
  devtool: 'source-map'
});

module.exports = config;
