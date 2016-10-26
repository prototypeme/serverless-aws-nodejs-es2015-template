var fs = require('fs');
var gracefulFs = require('graceful-fs');
gracefulFs.gracefulify(fs);

var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './handler.js',
  target: 'node',
  module: {
    loaders: [
      { test: /\.js$/, exclude: 'node_modules', loader: 'babel-loader' },
      { test: /\/json$/, loaders: ['json'] }
    ]
  },
  externals: [nodeExternals()],
  plugins: [new CopyWebpackPlugin([{ from: 'static', to: 'static'}], {copyUnmodified: true})],
  output: {
    libraryTarget: 'commonjs',
    path: '.webpack',
    filename: 'handler.js'
  }
};