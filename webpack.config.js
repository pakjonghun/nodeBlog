const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    index: "./src/assets/js/index.js",
    add: "./src/assets/js/add.js",
    login: "./src/assets/js/login.js",
    join: "./src/assets/js/join.js",
    detail: "./src/assets/js/detail.js",
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/index.css",
    }),
  ],
  output: {
    path: path.resolve(__dirname, "assets"),
    filename: "js/[name].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
};
