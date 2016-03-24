module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: 'dist.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: "babel-loader", query: { presets: ['es2015'] } }
    ]
  }
};
