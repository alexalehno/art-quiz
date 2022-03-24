const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devMode = process.env.NODE_ENV !== "production";

module.exports = {
  devtool: 'inline-cheap-module-source-map',

  entry: {
    main: path.resolve(__dirname, './src/app.js'),
  },

  output: {
    filename: '[name].[contenthash].js',
    // assetModuleFilename: 'assets/[hash][ext][query]',
    clean: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
      filename: 'index.html',
    }),

    new MiniCssExtractPlugin({
      // filename: devMode ? "[name].css" : "[name].[contenthash].css",
      filename: '[name].[contenthash].css',
    }),
  ],

  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },

      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    'postcss-preset-env',
                  ],
                ],
              },
            },
          },
          {
            loader: 'sass-loader',
          }
        ],
      },

      {
        test: /\.(png|jpg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/img/[hash][ext]'
        },
      },

      {
        test: /\.(svg|ico)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/icons/[hash][ext]'
        },
      },

      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[hash][ext]'
        },
      },

      {
        test: /\.m?js$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime']
          }
        }
      }
    ],
  },
} 