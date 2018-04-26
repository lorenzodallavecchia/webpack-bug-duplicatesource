module.exports = {
  mode: "development",
  resolve: {
    extensions: [".ts", ".js"],
  },
  devtool: "cheap-module-eval-source-map",
  module: {
    rules: [
      { test: /\.ts$/, use: "ts-loader" },
    ],
  },
};