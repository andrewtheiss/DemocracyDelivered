const path = require('path');

module.exports = {
  mode: 'development', // Set the mode to 'development' to enable useful defaults
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/', // Necessary for webpack-dev-server
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Handle .js and .jsx files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/, // Handle CSS files
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i, // Handle image files
        type: 'asset/resource',
      },
    ],
  },devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
      serveIndex: false, // Disable directory listing
      watch: true, // Enable file watching if needed
    },
    devMiddleware: {
      index: true, // Serve index.html instead of directory listings
    },
    compress: true,
    port: 3000,
    historyApiFallback: true, // For SPA routing
    hot: true, // Enable hot module replacement
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Resolve these extensions
  },
  devtool: 'inline-source-map', // Enable source maps for debugging
};
