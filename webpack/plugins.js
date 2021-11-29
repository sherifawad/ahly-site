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
    minify:
      env === "production"
        ? {
            removeAttributeQuotes: true,
            collapseWhitespace: true,
            removeComments: true,
          }
        : {},
  });
  return result;
};

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
  htmlWebpackPlugin: htmlWebpackPlugin,
  CssMinimizerPlugin: new _CssMinimizerPlugin(),
  TerserPlugin: new _TerserPlugin(),
};
