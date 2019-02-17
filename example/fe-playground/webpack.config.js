const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const htmlMinifyConfig = {
  collapseWhitespace: true,
  removeComments: true,
}

module.exports = (noting, argv) => {
  console.log(`mode = ${argv.mode}`)
  const isProduction = argv.mode === 'production';

  let plugins = [
    new HtmlWebpackPlugin({
      title: 'css基础',
      filename: 'page-css.html',
      template: `${__dirname}/template.html`,
      chunks: ['page-css', 'common', 'runtime'],
      minify: isProduction ? htmlMinifyConfig : {},
    }),
    new HtmlWebpackPlugin({
      title: 'js基础',
      filename: 'page-js.html',
      template: `${__dirname}/template.html`,
      chunks: ['page-js', 'common', 'runtime'],
      minify: isProduction ? htmlMinifyConfig : {},
    }),
  ];

  if (isProduction) {
    plugins.push(new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "css/[name].[contenthash:8].css",
      // chunkFilename: "[id].css"
    }));
  } else {
    // dev plugins here
  }

  return {
    // All your other custom config...
    mode: argv.mode,
    devtool: isProduction ? '' : 'cheap-module-eval-source-map',
    entry: {
      'page-css': './src/pages/CSS/index.js',
      'page-js': './src/pages/JS/index.js',
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: isProduction
                ? '[name]/[name].bundle.[chunkhash:8].js'
                : '[name]/[name].bundle.js',
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
          isProduction ? {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it use publicPath in webpackOptions.output
              // publicPath: '../'
            }
          } : "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      }]
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src/'),
      }
    },
    devServer: {
      port: 9000,
      hot: true,
      open: true,
      openPage: 'page-css.html',
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
        name: 'common',
      },
      runtimeChunk: {
        name: 'runtime',
      }
    },
    plugins,
  }
}
