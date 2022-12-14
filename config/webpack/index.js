/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config()

const baseConfig = require('./base.config')
const development = require('./development.config')
const production = require('./production.config')

const env = process.env.NODE_ENV || 'development'

const envConfigs = {
  production,
  development,
}

module.exports = {
  ...baseConfig,
  ...envConfigs[env],
  plugins: [...baseConfig.plugins, ...envConfigs[env].plugins],
}
