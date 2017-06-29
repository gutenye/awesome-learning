module.exports = {
  entry: './index',

  output: {
    path: 'dist',
    filename: 'index.js',
  },

  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel', exclude: /node_modules/},
      {test: /\.scss$/, loader: 'style!css!sass'}, 
    ]
  },

  devServer: {
    port: 3003,
    host: '0.0.0.0',
  },

  devtool: 'cheap-module-eval-source-map',
}
