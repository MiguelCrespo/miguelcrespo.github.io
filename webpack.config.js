var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OfflinePlugin = require('offline-plugin')

module.exports = {
  context: __dirname + '/app',
  entry: [
    'babel-polyfill',
    './index.js'
  ],

  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.[hash].js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader'},
      {test: /\.json$/, loader: 'json-loader'},
      {test: /\.jpg$/, loader: 'url-loader'}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Miguel Crespo | Software Developer',
      template: 'index.template.ejs',
      inject: false,
      favicon: 'resources/icons/icon.png',
      canonical: 'https://miguelcrespo.github.io',
      description: 'Personal website',
      author: 'Miguel Crespo',
      subject: 'Personal Website',
      og: {
        type: 'Personal Website',
        title: 'Miguel Crespo | Software Developer',
        description: 'Personal website',
        image: '',
        url: 'https://miguelcrespo.github.io',
        site_name: 'Miguel Crespo | Software Developer',
        locale: 'en'
      }
    }),
    new OfflinePlugin({
      externals: [
        '/app/resources/images/me.jpg'
      ]
    })
  ]
};
