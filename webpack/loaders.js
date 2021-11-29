const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const JSLoader = {
  test: /\.js$/i,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader",
    options: {
      presets: ["@babel/preset-env"],
    },
  },
};

const cssLoader = ({ env }) => {
  const result = {
    // test: /\.(s[ac]|c)ss$/i,
    test: /\.(css|sass|scss)$/i,
    exclude: /node_modules/,
    type: "asset",
    use: [
      {
        loader: MiniCssExtractPlugin.loader,
        options: {
          // publicPath: path.resolve(__dirname, "../dist"),
          publicPath: "../",
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
            config:
              env === "production"
                ? path.resolve(__dirname, "postcss/postcss.config.prod.js")
                : path.resolve(__dirname, "postcss/postcss.config.dev.js"),
          },
        },
      },
      "sass-loader",
    ],
  };
  return result;
};

const HTMLLoader = {
  test: /\.html$/,
  use: ["html-loader"],
};

const URLLoaoder = {
  test: /\.(png|svg|jpg|gif|webp)$/i,
  use: [
    {
      loader: "url-loader",
      options: {
        limit: 8192, // in bytes
      },
    },
  ],
};

const FileLoader = {
  test: /\.(png|jpe?g|gif)$/i,
  use: [
    {
      loader: "file-loader",
      options: {
        name: "[name].[hash].[ext]",
        outputPath: "imgs",
        // publicPath: path.resolve(__dirname, "dist/"),
      },
    },
  ],
};

module.exports = {
  cssLoader: cssLoader,
  JSLoader: JSLoader,
  FileLoader: FileLoader,
  URLLoaoder: URLLoaoder,
  HTMLLoader: HTMLLoader,
};
