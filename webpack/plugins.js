const path = require("path");
const _ESLintPlugin = require("eslint-webpack-plugin");
const _MiniCssExtractPlugin = require("mini-css-extract-plugin");
const _StyleLintPlugin = require("stylelint-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const _HtmlWebpackPlugin = require("html-webpack-plugin");
const _TerserPlugin = require("terser-webpack-plugin");
const _CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const htmlWebpackPlugin = ({ env }) => {
  const result = new _HtmlWebpackPlugin({
    template: path.resolve(__dirname, "../src", "index.html"),
  });
  if (env === "production") {
    result.minify = {
      removeAttributeQuotes: true,
      collapseWhitespace: true,
      removeComments: true,
    };
    // result.minify.removeAttributeQuotes = true;
    // result.minify.collapseWhitespace = true;
    // result.minify.removeComments = true;
  }
  return result;
};

const HtmlWebpackPluginProd = new _HtmlWebpackPlugin({
  template: path.resolve(__dirname, "../src", "index.html"),
  // template: "./src/template.html",
  minify: {
    removeAttributeQuotes: true,
    collapseWhitespace: true,
    removeComments: true,
  },
});

const HtmlWebpackPluginDev = new _HtmlWebpackPlugin({
  template: path.resolve(__dirname, "../src", "index.html"),
  // template: "./src/template.html",
});

const ESLintPlugin = new _ESLintPlugin({
  overrideConfigFile: path.resolve(__dirname, ".eslintrc.js"),
  context: path.resolve(__dirname, "../src/js"),
  files: "**/*.js",
});

const StyleLintPlugin = new _StyleLintPlugin({
  configFile: path.resolve(__dirname, "stylelint.config.js"),
  context: path.resolve(__dirname, "../src/css"),
  files: "**/*.css",
});

const MiniCssExtractPlugin = new _MiniCssExtractPlugin({
  filename: "css/[name].bundle.css",
  chunkFilename: "[id].css",
});

module.exports = {
  CleanWebpackPlugin: new CleanWebpackPlugin(),
  MiniCssExtractPlugin: MiniCssExtractPlugin,
  StyleLintPlugin: StyleLintPlugin,
  ESLintPlugin: ESLintPlugin,
  HtmlWebpackPluginDev: HtmlWebpackPluginDev,
  HtmlWebpackPluginProd: HtmlWebpackPluginProd,
  htmlWebpackPlugin: htmlWebpackPlugin,
  CssMinimizerPlugin: new _CssMinimizerPlugin(),
  TerserPlugin: new _TerserPlugin(),
};
