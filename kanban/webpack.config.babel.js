module.exports = {
  entry: [
    './app/App.js'
  ],
  output: {
    path: `${__dirname}/public`,
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-0']
      }
    }]
  },
  devServer: {
    contentBase: './public',
    color: true,
    historyApiFallback: true,
    inline: true
  }
};
