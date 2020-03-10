  const path = require('path');
  const resolve = dir => path.resolve(__dirname, dir);

  const {
    CleanWebpackPlugin
  } = require('clean-webpack-plugin');
  const HtmlWebpackPlugin = require('html-webpack-plugin');
  const VueLoaderPlugin = require('vue-loader/lib/plugin');
  const MiniCssExtractPlugin = require('mini-css-extract-plugin');
  const devMode = process.env.NODE_ENV !== 'production';

  module.exports = {
    entry: './src/index.js',
    output: {
      filename: 'js/[name].[hash:8].js',
      path: path.resolve(__dirname, '../serve/before')
    },
    module: {
      rules: [{
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
        {
          test: /\.css$/,
          use: [
            devMode ? 'vue-style-loader' : MiniCssExtractPlugin.loader, //开发环境的热重载作用
            'css-loader',
          ],
          sideEffects: true
        },
        {
          test: /\.scss$/,
          use: [
            devMode ? 'vue-style-loader' : MiniCssExtractPlugin.loader, //开发环境的热重载作用
            'css-loader',
            'sass-loader'
          ],
          sideEffects: true
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [{
            loader: 'url-loader',
            options: {
              limit: 8192,
              publicPath: 'img/',
              outputPath: 'img/'
            }
          }]
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [{
            loader: 'url-loader',
          }]
        },
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: devMode ? 'css/[name].css' : 'css/[name].[hash].css',
        publicPath: '../'
      }),
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        title: 'My App',
        template: './public/index.html' //使用自己的文件
      }),
      new VueLoaderPlugin()
    ],
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': resolve('src'),
      }
    }
  };