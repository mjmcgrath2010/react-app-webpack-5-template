/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config()
const path = require('path')

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: path.resolve(process.cwd(), 'dist/'),
    port: process.env.PORT || 3000,
    hot: true,
    open: true,
    historyApiFallback: true,
    allowedHosts: ['localhost'],
  },
  plugins: [],
}
