var path = require("path");
var vueLoaderPlugin = require("vue-loader/lib/plugin");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const commonPath = require("./path.config");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: commonPath.entryPath,
  output: {
    path: commonPath.output.outputPath,
    publicPath: commonPath.output.publicPath,
    filename: commonPath.output.filename
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          loaders: {
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the "scss" and "sass" values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this necessary.
            // ts: "ts-loader",
            // css: "vue-style-loader!css-loader",
            // less: "vue-style-loader!css-loader!less-loader",
            // scss: "vue-style-loader!css-loader!sass-loader",
            // sass: "vue-style-loader!css-loader!sass-loader?indentedSyntax"
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]?[hash]"
        }
      }
    ]
  },
  resolve: {
    extensions: ["*",".ts", ".js", ".vue", ".json"],
    alias: {
      vue$: "vue/dist/vue.esm.js",
      "@": path.join(__dirname, '../src')
    }
  },
  plugins: [
    new vueLoaderPlugin(),
    new ProgressBarPlugin(),
    new HtmlWebpackPlugin({
      template: commonPath.templateFilePath
    })
  ]
};
