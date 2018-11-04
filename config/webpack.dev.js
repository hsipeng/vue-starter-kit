const history = require("connect-history-api-fallback");
const convert = require("koa-connect");
const webpackServeWaitpage = require("webpack-serve-waitpage");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: [
          "vue-style-loader",
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
                require("autoprefixer")() //CSS浏览器兼容
                // require('cssnano')()  //压缩css
              ]
            }
          },
          "less-loader"
        ]
      }
    ]
  }
};

// webpack-serve 配置开始
module.exports.serve = {
  content: [__dirname],
  add: (app, middleware, options) => {
    // Be sure to pass the options argument from the arguments
    // build waiting page
    app.use(
      webpackServeWaitpage(options, {
        title: "Development Server (Dev)",
        theme: "default"
      })
    );

    // history api fallback 配置开始
    const historyOptions = {
      disableDotRule: true,
      verbose: true,
      htmlAcceptHeaders: ["text/html", "application/xhtml+xml"]
      // ... see: https://github.com/bripkens/connect-history-api-fallback#options
    };

    app.use(convert(history(historyOptions)));
  },
  // local ip
  host: "localhost"
};
