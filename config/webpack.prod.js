const path = require("path");
const commonPath = require("./path.config");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  mode: "production",
  devtool: "source-map",
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          chunks: "initial",
          minChunks: 2,
          maxInitialRequests: 5, // The default limit is too small to showcase the effect
          minSize: 0 // This is example is too small to create commons chunks
        },
        vendor: {
          test: /node_modules/,
          chunks: "initial",
          name: "vendor",
          priority: 10,
          enforce: true
        }
      }
    },
    runtimeChunk: true
  },
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              modules: false,
              localIdentName: "[local]___[hash:base64:5]"
            }
          },
          {
            loader: "postcss-loader",
            options: {
              // 如果没有options这个选项将会报错 No PostCSS Config found
              plugins: loader => [
                // require('postcss-import')({root: loader.resourcePath}),
                require("autoprefixer")(), //CSS浏览器兼容
                require("cssnano")() //压缩css
              ]
            }
          },
          "less-loader"
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(commonPath.cleanPaths, {
      // 设置起始路径，正确清理build
      root: path.resolve(__dirname, "../")
    }),
    new MiniCssExtractPlugin({
      filename: `[name].css`,
      chunkFilename: `[name].css`
    }),
    new BundleAnalyzerPlugin()
  ]
};
