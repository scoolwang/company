const path = require('path');
// 新引入
const htmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: ["./js/index.js"],
    output: {
      path: path.resolve(__dirname, 'asset'),
      filename: "bundle.js"
    },
    // 新引入
    plugins: [
      new htmlWebpackPlugin({
        title: 'My App',
        filename: 'company.html',
        template: './html/company.html'
      })
    ]
};
