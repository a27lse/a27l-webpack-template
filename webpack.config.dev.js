const path = require('path');

const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
//const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
    assetModuleFilename: 'images/[name][ext][query]'
  },
  mode: 'development',
  //devtool: 'source-map',
  //watch: true,
  resolve: {
    extensions: ['.js'],
    alias: {
      '@helper': path.resolve(__dirname, 'src/helper/'),
      '@templates': path.resolve(__dirname, 'src/templates/'),
      '@styles': path.resolve(__dirname, 'src/css/'),
      '@images': path.resolve(__dirname, 'src/images/'),
    }
  },
  module: {
    rules: [
      {
        test: /\.m?js$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader, //"style-loader",
          "css-loader", "sass-loader"
        ],
      },
      {
        test: /\.png$/i,
        type: 'asset/resource'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './public/index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].css"
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src", "images"),
          to: "images"
        }
      ]
    }),
    new Dotenv(),
    //new CleanWebpackPlugin(),
    //new BundleAnalyzerPlugin()
      // USO:
      // npx webpack --profile --json > stats.json
      // npx webpack-bundle-analyzer stats.json
  ],
  //optimization: {
  //  minimize: true,
  //  minimizer: [
  //    new CssMinimizerPlugin(),
  //    new TerserPlugin(),
  //  ]
  //},
  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    historyApiFallback: true,
    port: 8080,
    open: true
  }
}
