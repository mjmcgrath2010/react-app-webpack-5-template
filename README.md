# `react-app-webpack-5-template`

> A generator for creating react applications with exposed webpack configs
___

## Features

- [Webpack @^5.74.0](https://webpack.js.org/blog/2020-10-10-webpack-5-release/)
- [React @^18.2.0](https://reactjs.org/blog/2022/03/29/react-v18.html)
- [React Router 6](https://reactrouter.com/en/main)
- [Typescript @^4.8.2](https://devblogs.microsoft.com/typescript/announcing-typescript-4-8/)
- [Jest](https://jestjs.io/)
- [React testing library](https://testing-library.com/docs/react-testing-library/intro/)
- [Eslint](https://eslint.org/)
- [Husky pre commit hooks](https://www.npmjs.com/package/husky)

## Setup Intructions

- Install by running:

```bash
npx create-react-app-webpack-5 my-project-name
```

- Start the app:

```bash
cd my-project-name && yarn dev
```


## Directory Structure

- **config**
  - **webpack**
    - `base.config.js` - Shared webpack config settings
    - `development.config.js` - Development webpack config settings
    - `production.config.js` - Production webpack config settings
- **dist** - `build` directory
- **public**
  - `index.html` - Template for webpack build copy
- **src**
  - **assets** - Home to all static assets
  - **components** - Shared components directory (empty)
  - **content** - React context directory
  - **hooks** - Custom hooks directory
  - **layouts** - Shared layouts directory
  - **modules** - Typescript declaration files
  - **pages** - Home to all `react-router` exposed routes
  - **scss** - Styles (SCSS)
  - **tests** - Tests directory, mimics the same structure as `src`
  - `App.tsx` - Root application component
  - `index.tsx` - Application entry point
