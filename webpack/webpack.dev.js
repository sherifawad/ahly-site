const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  optimization: {
    runtimeChunk: "single",
  },
  devtool: "inline-source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    watchFiles: path.join(__dirname, "../src/index.html"),
    open: true,
    hot: true,
    compress: true,
    port: "auto",
  },
});
