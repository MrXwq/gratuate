  const merge = require('webpack-merge');
  const common = require('./webpack.common.js');
  const path = require('path');

  module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, "dist"),
      compress: true, //一切服务都启用gzip压缩
      hot: true, //热更新
      open: true, //每次打包打开浏览器
      port: 8080, //打开8080端口
      overlay: true //出现编译器错误或警告时，在浏览器中显示全屏覆盖
    },
  });