const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new UglifyJSPlugin({ sourceMap: true }),
    new CleanWebpackPlugin(),
    new Dotenv(),
    new HtmlWebpackPlugin({
      title: 'index.html',
      template: './src/index.html',
      inject: 'body'
    }),
    new HtmlWebpackPlugin({  
      filename: 'landing-dashboard.html',
      template: './src/landing-dashboard.html',
      inject: 'body'
    }),
    new HtmlWebpackPlugin({  
      filename: 'new-user.html',
      template: './src/new-user.html',
      inject: 'body'
    }),
    new HtmlWebpackPlugin({  
      filename: 'user-profile.html',
      template: './src/user-profile.html',
      inject: 'body'
    }),
    new HtmlWebpackPlugin({  
      filename: 'add-recipe.html',
      template: './src/add-recipe.html',
      inject: 'body'
    }),
    new HtmlWebpackPlugin({  
      filename: 'add-event-page.html',
      template: './src/add-event-page.html',
      inject: 'body'
    }),
    new HtmlWebpackPlugin({  
      filename: 'login-signup-page.html',
      template: './src/login-signup-page.html',
      inject: 'body'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(gif|png|jpe?g)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/images/'
            }
          }
        ]
      },
      {
        test:/\.html$/,
        use: [
          'html-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      }
    ]
  }
};