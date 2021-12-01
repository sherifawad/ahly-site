const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const plugins = require("./plugins");

module.exports = merge(common, {
  mode: "production",
  output: {
    // assetModuleFilename: "imgs/[hash][ext][query]",
    filename: "js/[name].[contenthash].bundle.js",
    path: path.resolve(__dirname, "../dist"),
  },
  optimization: {
    minimize: true,
    minimizer: [plugins.CssMinimizerPlugin, plugins.TerserPlugin],
  },
  plugins: [plugins.CssMinimizerPlugin, plugins.TerserPlugin],
});
