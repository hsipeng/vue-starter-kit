const path = require("path");

module.exports = {
  entryPath: path.join(__dirname, "../src/index.ts"),
  output: {
    outputPath: path.join(__dirname, "../dist"),
    publicPath: "./",
    filename: "build.js"
  },
  templateFilePath: path.join(__dirname, "../index.html"),
  cleanPaths: ["dist"]
};
