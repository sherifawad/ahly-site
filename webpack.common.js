const path = require("path");

module.exports = {
  entry: {
    main: path.join(__dirname, "src", "index"),
    vendor: path.join(__dirname, "src", "vendor"),
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        include: [path.resolve(__dirname, "src")],
        exclude: [path.resolve(__dirname, "node_modules")],
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/env",
              {
                targets: {
                  browsers: "last 2 chrome versions",
                },
              },
            ],
          ],
        },
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
  resolve: {
    extensions: [".json", ".js", ".jsx"],
  }
};
