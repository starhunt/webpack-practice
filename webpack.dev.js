const merge = require("webpack-merge");
const common = require("./webpack.common.js");

const config = {
  mode: "development",
  devServer: {
    open: true,
    overlay: true,
    port: 8123,
    historyApiFallback: {
      rewrites: [
        { from: /^\/subpage$/, to: "subpage.html" },
        { from: /./, to: "404.html" }
      ]
    }
  }
};

module.exports = merge(common, config);
