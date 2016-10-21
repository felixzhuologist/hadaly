var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    './static/js/app.js'
  ],
  output: {
    path: __dirname + '/static/dist',
    filename: 'app.js',
  },
  module: {
    loaders: [
      // ES6 javascript, jsx
      {
        test: /\.jsx?$/, 
        exclude: /node_modules/, 
        loaders: ['babel-loader'],
      },
    ]
  },
  eslint: {
    configFile: '.eslintrc',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}