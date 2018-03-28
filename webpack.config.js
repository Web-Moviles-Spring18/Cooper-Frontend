const webpack = require('webpack');
const path = require("path");
module.exports = {
    entry: [
        'react-hot-loader/patch',
        './src/app.js'
    ],
    module: {
        rules: [
            {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
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
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true"
      },
      contentBase: './dist',
      hot: true, 
      port: 8080,
      historyApiFallback: {
        index: '/'
      }
    }
  };