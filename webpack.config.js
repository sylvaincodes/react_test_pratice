const path = require("path");
const HtlmWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

config = {
  //set entry point and build bundle
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js",
  },

  module: {
    rules: [
      //compile js or jsx, ts file
      {
        test: /\.(ts|js|jsx)$/i, //this is regex format
        exclude: /node_modules/,
        use: "babel-loader",
      },

      //compile for sass file
      {
        test: /(scss|sass|css)$/i,
        use: [
          // create style nodes from JS string
          "style-loader",

          // Translate CSS into COmmonJs
          "css-loader",

          //Compile Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  resolve: {
    extensions: [".jsx", ".js", ".ts"],
  },
};

module.exports = config;
