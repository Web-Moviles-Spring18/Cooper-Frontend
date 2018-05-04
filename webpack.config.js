const webpack = require('webpack');
const path = require("path");
module.exports = {
    entry: [
      'webpack-dev-server/client?https://0.0.0.0:8080',
        'react-hot-loader/patch',
        './src/app.js'
    ],
    module: {
        rules: [
            {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              use: ['babel-loader']
            },
            {
              test: /\.css$/,
              use: ['style-loader', 'css-loader']
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'bundle.js'
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
      compress: true,

    disableHostCheck: true,   // That solved it
      contentBase: './dist',
      hot: true,
      port: process.env.PORT || 8080,
      historyApiFallback: {
        index: '/'
      }
    }
  };
