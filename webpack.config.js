const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8888,
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
      },
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'src/index.html'
  })],
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
  },
}


