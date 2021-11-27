const path = require("path");
const common = require("./webpack.common");
const {merge} = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = merge(common, {
  mode: "development",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].bundle.js"
  },  
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      }
    ],
  },
  devServer: {
    // contentBase: path.join(__dirname, '/dist/'),
    static: {
      directory: path.join(__dirname, "/dist/"),
      watch: true,
    },
    host: "localhost",
    port: 8080,
  }
});
