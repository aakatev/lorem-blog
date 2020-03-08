const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const MyWebpackPlugin = require('./build-utils/MyWebpackPlugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './docs'),
    filename: 'main.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MyWebpackPlugin()
  ]
};