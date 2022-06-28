# React Front-end of WordPress Headless CMS For Maya.lk

This project was bootstrapped with [Create Next App](https://nextjs.org/docs/api-reference/create-next-app).

## Github Actions Secrets (server credentials)

```env
PORT
HOSTNAME
USERNAME
SERVER_PATH
SSH_PRIVATE_KEY
```

## Environment Variables

```env
NEXT_PUBLIC_API_ENTRY_POINT=https://domain.com/backend/wp-json/api/v1
NEXT_PUBLIC_SITE_URL=https://site.com
NEXT_PUBLIC_GTAG_ID=GOOGLE_TAG_ID
```


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
$ npm run production
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
