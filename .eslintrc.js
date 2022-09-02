// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks', 'simple-import-sort'],
  rules: {
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // The main event
          ['^react(-dom)?'],
          // Third party
          ['^[\\w@]'],
          // Common local aliases
          [
            '^(asset|api|component|context|hook|layout|page|section|selectors|style|typing|util|test-util)s?',
          ],
          // Relative imports
          // Anything that starts with a dot
          ['^\\.{2}'],
          ['^\\.'],
          // Side effect imports
          ['^\\u0000'],
          // Style imports
          ['^.+\\.s?css$'],
        ],
      },
    ],
  },
}
