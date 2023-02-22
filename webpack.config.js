'use strict';

let path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/js/script.js',
  output: {
    filename: 'bundle.js',
    path: '/DEV/Cool-Barber/dist/js'
    // path: __dirname + 'Cool-Barber/dist/js'
  },
  watch: true,

  devtool: "source-map",

  module: {}
};
