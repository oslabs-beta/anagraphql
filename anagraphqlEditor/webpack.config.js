const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: path.join(__dirname, 'src', 'client', 'index.jsx'),
  output: {
    publicPath: path.join(__dirname, '..'),
    path: path.join(__dirname, '..'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
      {
        test: /\.s?css$/,
        loaders: ['style-loader', 'css-loader'],
      },
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.mjs', '.gql', '.graphql'],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    proxy: {
      '/api': 'http://localhost:3000',
      '/graphql': 'http://localhost:3000',
    },

  },
};
