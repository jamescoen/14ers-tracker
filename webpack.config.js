const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    src: './src/index.js',
  },

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  mode: 'development',

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],

  module: {
    rules: [
      {
        test: /.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },

  devServer: {
    historyApiFallback: true,
    proxy: [
      {
        context: ['/api'],
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
    ],
    port: 3000,
  },
};
