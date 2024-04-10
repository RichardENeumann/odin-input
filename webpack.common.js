const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/index.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title: "tada! Sign up",
      myPageHeader: "Sign up for tada! here",
      template: "./src/index.html",
      filename: "./index.html",
    }),
  ],
  output: {
    filename: "./main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
