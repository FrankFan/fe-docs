const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // mode: 'production',
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  entry: {
    'page-css': './src/pages/CSS/index.js',
    'page-js': './src/pages/JS/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]/[name].bundle.js',
  },
  module: {
    rules: [{
      test: /\.js|\.jsx$/,
      exclude: /(node_modules)/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-react',
            '@babel/preset-env'
          ]
        }
      }]
    },{
      test: /\.scss|\.css$/,
      use: [
        "style-loader", // creates style nodes from JS strings
        "css-loader", // translates CSS into CommonJS
        "sass-loader" // compiles Sass to CSS, using Node Sass by default
      ]
    }]
  },
  devServer: {
    port: 9000,
    hot: true
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'css基础',
      filename: 'page-css.html',
      template: `${__dirname}/template.html`,
      chunks: ['page-css', 'vendors~page-css~page-js']
    }),
    new HtmlWebpackPlugin({
      title: 'js基础',
      filename: 'page-js.html',
      template: `${__dirname}/template.html`,
      chunks: ['page-js', 'vendors~page-css~page-js']
    }),
  ]
}