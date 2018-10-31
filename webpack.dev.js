const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');

const WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = Merge(CommonConfig, {
  plugins: [
    new WriteFilePlugin()
  ],
  devServer: {
    contentBase: 'static',
    // port: 8104,
    port: 80,
    host: '127.0.0.1',
    disableHostCheck: true,
    historyApiFallback: true,
    noInfo: false
  }
});
