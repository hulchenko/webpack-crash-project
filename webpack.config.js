const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HTMLPlugin({
      filename: 'index.html',
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i, 
        use: [MiniCssExtractPlugin.loader, 'css-loader'] //webpack runs array from right to left. First it will catch all code from css-loader, then apply it with style-loader.
      }
    ]
  },
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin()
    ]
  }
};
