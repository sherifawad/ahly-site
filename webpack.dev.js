const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const _ESLintPlugin = require("eslint-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].bundle.css",
      chunkFilename: "[id].css",
    }),
    new _ESLintPlugin({
      overrideConfigFile: path.resolve(__dirname, ".eslintrc.js"),
      context: path.resolve(__dirname, "../src/js"),
      files: "**/*.js",
    }),
  ],
  module: {
    rules: [
      // {
      //   test: /\.css$/,
      //   use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      // }

      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: path.resolve(__dirname, "../dist/css/"),
            },
          },
          {
            loader: "css-loader",
            options: { importLoaders: 1 },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                config: path.resolve(__dirname, "postcss.config.js"),
              },
            },
          },
          // could replace the next line with "style-loader" here for inline css
          // MiniCssExtractPlugin.loader,
          // "css-loader",
          // "postcss-loader",
          // according to the docs, sass-loader should be at the bottom, which
          // loads it first to avoid prefixes in your sourcemaps and other issues.
          "sass-loader",
        ],
      },
    ],
  },
  // devtool: "source-map",
  devtool: "inline-source-map",
  devServer: {
    // contentBase: path.join(__dirname, '/dist/'),
    static: {
      directory: path.join(__dirname, "/dist/"),
      watch: true,
    },
    host: "localhost",
    port: 8080,
  },
});
