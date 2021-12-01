const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// Temporary workaround for 'browserslist' bug that is being patched in the near future
// const target = process.env.NODE_ENV === "production" ? "browserslist" : "web";

module.exports = {
  entry: {
    main: path.join(__dirname, "src", "js", "index"),
    vendor: path.join(__dirname, "src", "js", "vendor"),
  },
  plugins: [
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
        // test: /.jsx?$/,
        test: /.js$/,
        include: [path.resolve(__dirname, "src")],
        exclude: [path.resolve(__dirname, "node_modules")],
        use: ["babel-loader"]
      },
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192, // in bytes
            },
          },
          {
            loader: "file-loader",
            options: {
              name: "[name].[hash].[ext]",
              outputPath: "imgs",
            },
          },
          // {loader: 'url-loader'}
          //  {loader: 'file-loader'}
        ],
      },
    ],
  },
  // target: target,
  resolve: {
    extensions: [".json", ".js", ".jsx"],
  },
};
