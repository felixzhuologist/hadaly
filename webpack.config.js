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
      {
        test: /\.jsx?$/, 
        exclude: /node_modules/, 
        loaders: ['babel-loader'],
      }
    ]
  },
}