'use strict'

const webpack = require('webpack')
const path = require('path')
const fs = require('fs')

const entry = {
  'src': './src/index.jsx'
}

const output = {
  path: path.join(__dirname, '/dist'),
  // filename: '[name]/index.js',
  // chunkFilename: '[name]/[id].chunk.js',
  publicPath: '/'
}



/**
 *    Loaders
 */

const loaders = [
  { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader', query: { presets: ['es2015', 'stage-0', 'react'] } },
  { test: /\.css$/, loader: 'style!css-loader' }
]



/**
 *    Plugins
 */

// dependencies
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')


// combine to a single array
const plugins = [
  // root html file
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: './src/index.html',
  }),
  // static assets e.g. images
  new CopyWebpackPlugin([{ from: 'assets', to: 'assets' }]),

]



/**
 *    Build config object
 */
module.exports = {
  entry,
  output,
  module: { loaders },
  plugins,
  devtool: 'cheap-module-source-map',
  devServer: {
    stats: 'errors-only'
  },
  recordsPath: path.resolve('/tmp/webpack.json')
}
