const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')

module.exports = {
  // entry: path.join(__dirname, '/src/index.js'),
  // output: {
  //   path: path.join(__dirname, '/dist'),
  //   filename: 'bundle.js'
  // },
  entry: {
    index: path.join(__dirname, 'src/index.js'),
    index2: path.join(__dirname, 'src/index2.js')
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: "[name].js"
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    hot: true,
    port: 8080,
    inline: true,
    open: true,
    //compress: false,
    overlay: true,
    //historyApiFallBack: true,
    proxy: {
      '/api': {
        target: '',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.sass|.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin('版权所有，翻版必究'),
    new HtmlWebpackPlugin({
       template: path.join(__dirname, '/src/index.html')
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextWebpackPlugin('css/index.css')
  ]
}