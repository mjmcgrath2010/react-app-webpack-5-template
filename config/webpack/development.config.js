/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: path.resolve(process.cwd(), 'dist/'),
    port: 3000,
    hot: true,
    open: true,
  },
}
