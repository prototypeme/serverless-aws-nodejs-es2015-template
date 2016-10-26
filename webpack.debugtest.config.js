var path = require('path');
var webpackConfig = require('./webpack.config.js');

webpackConfig.entry = './test/index.js';
webpackConfig.module.devtool = 'source-map';
webpackConfig.output.filename = 'test/index.js';
webpackConfig.output.sourceMapFilename = "index.map";
webpackConfig.module.loaders = [
  {
    test: /\.js$/,
    include: [
      path.resolve(__dirname, 'test'),
      path.resolve(__dirname, 'src')
    ],
    loader: 'babel-loader'
  },
  {
    test: /\.json$/,
    loaders: ['json']
  }
];
module.exports = webpackConfig;