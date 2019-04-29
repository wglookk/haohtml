
const webpack = require('webpack');
// var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
  entry: __dirname + "/app/main.js",//已多次提及的唯一入口文件
  output: {
    path: __dirname + "/public",//打包后的文件存放的地方
    // filename: "bundle.js",//打包后输出文件的文件名
    filename: '[name].js',
    chunkFilename: '[name].js',
  },
  devServer: {
    contentBase: "./public",//本地服务器所加载的页面所在的目录
    historyApiFallback: true,//不跳转
    inline: true//实时刷新
  },
  module: {
    rules: [
    //   {
    //     test: /\.bundle\.js$/,
    //     loader: 'bundle-loader',
    //     include:/page/,
    //     options: {
    //         lazy: true,
    //         name: '[name]'
    //     }
    // },
      // {
      //   test: /(\.jsx|\.js)$/,
      //   use: {
      //     loader: "babel-loader"
      //   },
      //   exclude: /node_modules/,
      //   options: {
      //     babelrc: false,
      //     presets: ['react'],
      //     plugins: ['syntax-dynamic-import']
      //   }
      // },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          babelrc: false,
          presets: ['react'],
          plugins: ['syntax-dynamic-import']
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          }, {
            loader: "css-loader",
            options: {
              modules: true
            }
          }, {
            loader: "postcss-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin('版权所有，翻版必究'),

  //   new webpack.optimize.UglifyJsPlugin({
  //     sourceMap: true,
  //     compress: {
  //         warnings: false,
  //         drop_console: true
  //     },
  //     beautify:false,
  //     comments:false
  // }),
  // new BundleAnalyzerPlugin()
  ]


}
