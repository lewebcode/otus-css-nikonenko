const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCss = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  target: 'web',
  devtool: 'source-map',
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    clean: true,
    filename: 'main.js',
    assetModuleFilename: 'assets/[name][ext]',
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(c|sa|sc)ss$/i,
        use: [MiniCss.loader, 'css-loader'],
      },
      {
        test: /\.(jpeg|jpg|png|svg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(ttf|woff2?)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name].[ext]',
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
    }),
    new MiniCss({
      filename: 'style.css',
    }),
  ],

  devServer: {
    compress: false,
    open: true,
    port: 5004,
    // static: './public',
    hot: true,
  },
};
