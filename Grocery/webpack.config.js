module.exports = {
  entry: [
    './source/App.js',
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js',
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel',
      query:{
        presets: ['react', 'es2015', 'stage-0']
      }
    }],
  },
};
