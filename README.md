# React Front-end of WordPress Headless CMS For Maya.lk

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Import Aliases

Use custom aliases for absolute import paths, [all supported aliases](https://github.com/maya-lk/maya-reactjs/blob/master/src/utils/aliases.js).

```jsx
import { PrimaryButton } from '@components';
```

Editor auto completion configuration [intellisense for imports](https://github.com/maya-lk/maya-reactjs/blob/master/jsconfig.json).

## Environment Variables

Set the back-end entry point using the .env file.

```env
REACT_APP_API_ENTRY_POINT=https://app.com/api
```

## Recommended Tools

1. [ESLint](https://eslint.org/) - JavaScript linter
2. [Prettier](https://prettier.io/) - Code Formatter

## Importing Stylesheets

This project supports CSS Modules alongside regular stylesheets using the [name].module.css file naming convention. CSS Modules allows the scoping of CSS by automatically creating a unique classname of the format [filename]\_[classname]\_\_[hash].

## Available Scripts

In the project directory, you can run:

```shell
$ npm start
```

Starts the development server and makes your application accessible at [http://localhost:3000](http://localhost:3000). Changes in the application code will be hot-reloaded along with eslint-error detection.

<hr>

```shell
$ npm run build
```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

<hr>

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
