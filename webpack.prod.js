const path = require("path");
const nodeExternals = require("webpack-node-externals")

module.exports = {
  entry: "./src/index.ts",
  mode: "production",
  target: "node",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "index.js"
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  watch: false,
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ["ts-loader"]
      }
    ]
  }
};
