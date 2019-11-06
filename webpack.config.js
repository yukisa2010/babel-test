const path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
// const webpack = require('webpack')

module.exports = {
  mode: "development",
  entry: [
    path.resolve(__dirname, "es6.js")
  ],
  output: {
    path: path.resolve(__dirname),
    filename: 'es5.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env"
              ]
            }
          }
        ]
      }
    ]
  }
};

