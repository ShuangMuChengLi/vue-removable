var path = require("path");
var webpack = require("webpack");
const MinifyPlugin = require('babel-minify-webpack-plugin');
module.exports = {
  mode: 'production',
  devtool:'none',
  entry: "./vue-removable.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/dist/",
    filename: "index.min.js",
    library: "vue-removable",
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },
  performance: {
    hints: false
  },
  plugins: [
    new MinifyPlugin({
      removeConsole:true
    }),
  ]
};
