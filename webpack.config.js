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
        '/app/resources/images/pexels-photo-220444.jpeg',
        '/app/resources/images/me.jpg',
        '/app/resources/images/clickdelivery.jpg',
        '/app/resources/images/erasmeet.jpg',
        '/app/resources/images/universidad-del-magdalena.jpg',
        '/app/resources/images/domicilios-responsive.png',
        '/app/resources/images/domicilios-responsive-2.png',
        '/app/resources/images/erasmeet-home.png',
        '/app/resources/images/erasmeet-me.png',
        '/app/resources/images/lighthouse.png',
        '/app/resources/images/modern-database.png',
        '/app/resources/images/pension-app.png',
        '/app/resources/images/react.jpg',
        '/app/resources/images/this-page.png',
        '/app/resources/images/this-page-mobile.png',
      ]
    })
  ]
};
