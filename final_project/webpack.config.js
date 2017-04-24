const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const config = {
  entry : './server/react_front_end/src/index.js',
  output:{
    path: path.resolve('./', "server/react_front_end/build"),
    filename: 'bundle.js'
  },
  module:{
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/
      },
      {
        use: ExtractTextPlugin.extract({
          use: 'css-loader'
        }),
        test: /\.css$/
      }
    ]
  },
  plugins: [new ExtractTextPlugin('style.css')]
}

module.exports = config;
