const Path = require('path')
const BASE = Path.resolve(__dirname)
const webpack = require('webpack')

module.exports ={
  devtool: 'cheap-module-source-map',
  entry: Path.join(BASE, 'index.js'),
  output: {
    path: Path.join(BASE, 'build'),
    filename: 'bundle.js'
  },
  node: {
    fs: 'empty'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ compress: {
     warnings: false,
     drop_console: true,
     dead_code: true,
   },
     comments: false })
  ]
}
