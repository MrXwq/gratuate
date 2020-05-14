const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true //使用sourceMap将错误消息位置映射到模块(这会减慢编译速度)
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      'process.env.URL': JSON.stringify('/web'),
      'process.env.VUE_APP_API_URL': JSON.stringify('/web')
    })
  ]
});