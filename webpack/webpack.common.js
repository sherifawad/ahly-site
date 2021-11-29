const path = require("path");
const loaders = require("./loaders");
const webpack = require("webpack"); // to access built-in plugins
const plugins = require("./plugins");
let mode = "development";
if (process.env.NODE_ENV === "production") {
  mode = "production";
  // Temporary workaround for 'browserslist' bug that is being patched in the near future
  // target = "browserslist";
}
// if (process.env.SERVE) {
//   // We only want React Hot Reloading in serve mode
//   plugins.push(new ReactRefreshWebpackPlugin());
// }

module.exports = {
  mode: mode,
  // entry: ["/src/js/script.js", "/src/js/vendor.js"],
  entry: {
    vendor: path.join(__dirname, "../src", "js", "vendor"),
    main: path.join(__dirname, "../src", "js", "script"),
  },
  module: {
    rules: [
      loaders.HTMLLoader,
      loaders.JSLoader,
      loaders.FileLoader,
      loaders.cssLoader({ env: mode }),
    ],
  },
  output: {
    assetModuleFilename: "imgs/[hash][ext][query]",
    filename: "js/[name].bundle.js",
    path: path.resolve(__dirname, "../dist"),
  },
  plugins: [
    new webpack.ProgressPlugin(),
    plugins.CleanWebpackPlugin,
    plugins.htmlWebpackPlugin({ env: mode }),
    // plugins.ESLintPlugin,
    // plugins.StyleLintPlugin,
    plugins.MiniCssExtractPlugin,
  ],
};
