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
        filename: 'index.html',
        template: './html/index.html'
      }),
      new htmlWebpackPlugin({
        title: 'My App',
        filename: 'artical.html',
        template: './html/artical.html'
      }),
      new htmlWebpackPlugin({
        title: 'My App',
        filename: 'news.html',
        template: './html/news.html'
      }),     
      new htmlWebpackPlugin({
        title: 'My App',
        filename: 'call.html',
        template: './html/call.html'
      }),   
      new htmlWebpackPlugin({
        title: 'My App',
        filename: 'company.html',
        template: './html/company.html'
      }),
      new htmlWebpackPlugin({
        title: 'My App',
        filename: 'business.html',
        template: './html/business.html'
      }),
      new htmlWebpackPlugin({
        title: 'My App',
        filename: 'join.html',
        template: './html/join.html'
      }),
      new htmlWebpackPlugin({
        title: 'My App',
        filename: 'service.html',
        template: './html/service.html'
      })
    ]
};
