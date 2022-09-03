/* eslint-disable no-undef */
module.exports = function (plop) {
  plop.setGenerator('setup', {
    description: 'Do you want to configure module federation?',
    prompts: [
      {
        type: 'list',
        message: 'Use module federation?',
        name: 'useMf',
        choices: ['yes', 'no'],
      },
      {
        type: 'list',
        message: 'Is this a host or a container?',
        name: 'mfType',
        choices: ['container', 'remote'],
        when: (data) => data.useMf === 'yes',
      },
      {
        message: 'What is the name of this remote?',
        type: 'input',
        name: 'mfName',
        when: (data) => data.useMf === 'yes' && !data.mfType === 'container',
      },
    ],
    actions: (data) => {
      const mfAction = [
        {
          type: 'add',
          path: '../webpack/module.federation.config.js',
          templateFile: './templates/MFConfig.hbs',
        },
        {
          type: 'append',
          template: `const moduleFederationConfig = require("./module.federation.config.js")`,
          pattern: /\/\* ======= setup-imports ================ \*\//,
          path: '../webpack/base.config.js',
        },
        {
          type: 'append',
          template: `const { ModuleFederationPlugin } = require("webpack").container`,
          pattern: /\/\* ======= setup-imports ================ \*\//,
          path: '../webpack/base.config.js',
        },
        {
          type: 'append',
          template: `new ModuleFederationPlugin(moduleFederationConfig),`,
          pattern: /\/\* ======= setup-plugins ================ \*\//,
          path: '../webpack/base.config.js',
        },
      ]

      if (!data.mfName) {
        data.mfName = 'container'
      }

      return data.useMf === 'yes' ? mfAction : []
    },
  })
}
