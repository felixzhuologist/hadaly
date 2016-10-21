module.exports = {
  entry: [
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
}