const path = require("path");
const NodemonWebpackPlugin = require("nodemon-webpack-plugin");
const webpack = require('webpack');

module.exports = {
  entry: "./src/index.ts",
  mode: "development",
  target: "node",
  output: {
    path: path.resolve(__dirname, "./.tmp"),
    publicPath: "/",
    filename: "[name].js"
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ["ts-loader"]
      }
    ]
  },
  node: {
    __dirname: false,
    __filename: false,
  },  
  plugins: [
    // All options are optional
    new NodemonWebpackPlugin()
  ]
};