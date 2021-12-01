const path = require("path");
const loaders = require("./loaders");
const webpack = require("webpack"); // to access built-in plugins
const plugins = require("./plugins");
const _ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

let mode = "development";
if (process.env.NODE_ENV === "production") {
  mode = "production";
  // Temporary workaround for 'browserslist' bug that is being patched in the near future
  // target = "browserslist";
}
if (process.env.SERVE) {
  // We only want React Hot Reloading in serve mode
  plugins.push(new _ReactRefreshWebpackPlugin());
}

// multi page array names without extensions and js file same as html files
const pages = ["index", "about"];
const commonChunks = ["vendor"];
let scripts = pages.reduce((config, page) => {
  config[page] = path.join(__dirname, "../src", "js", `${page}.js`);
  return config;
}, {});
let commonScripts = commonChunks.reduce((config, chunk) => {
  config[chunk] = path.join(__dirname, "../src", "js", `${chunk}.js`);
  return config;
}, {});
module.exports = {
  mode: mode,
  // entry: ["/src/js/script.js", "/src/js/vendor.js"],
  // entry: {
  //   vendor: path.join(__dirname, "../src", "js", "vendor"),
  //   index: path.join(__dirname, "../src", "js", "index"),
  // },
  entry: { ...commonScripts, ...scripts },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  module: {
    rules: [
      loaders.HTMLLoader,
      loaders.JSLoader,
      loaders.cssLoader({ env: mode }),
      loaders.Imageloader,
    ],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    plugins.CleanWebpackPlugin,
    // plugins.htmlWebpackPlugin({env: mode}),
    // plugins.ESLintPlugin,
    // plugins.StyleLintPlugin,
    plugins.miniCssExtractPlugin({env : mode}),
  ].concat(
    plugins.htmlWebpackPluginpages({
      env: mode,
      pages: pages,
      commonChunks: commonChunks,
    })
  ),

  // target: target,
  resolve: {
    extensions: ["*", ".json", ".js", ".jsx"],
  },
};
