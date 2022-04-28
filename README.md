# React Front-end of WordPress Headless CMS For Maya.lk

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Recommended Tools

1. [ESLint](https://eslint.org/) - JavaScript linter
2. [Prettier](https://prettier.io/) - Code Formatter

## Available Scripts

In the project directory, you can run:

```shell
$ npm run dev
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

## Environment Variables

Set the back-end entry point using the .env file.

```env
NEXT_PUBLIC_API_ENTRY_POINT=https://app.com/api
```

## Importing Components

Use custom aliases for absolute import paths.

```jsx
import { PrimaryButton } from '@components';
```

Editor auto completion configuration [intellisense for imports](https://github.com/maya-lk/maya-reactjs/blob/master/jsconfig.json).

## Importing Stylesheets

This project supports CSS Modules alongside regular stylesheets using the [name].module.css.

Using Sass partials:

```scss
@import 'styles/config/variables' as var;
```

Styling components:

```jsx
import styles from './Component.module.scss';

<div className={styles.div} />;
```

<hr>

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
