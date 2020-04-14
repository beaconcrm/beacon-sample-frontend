# Sample frontend Slack app

A fun project for sending messages into Slack. The interface needs a little UX love, but once it's had that, you'll be able to send messages as much as you like 😎.

## Installation

### Requirements

* [Yarn](https://yarnpkg.com/)
* [Node.js](https://nodejs.org/en/) (preferably version 10+)

### Steps

1. Clone this repo to your local machine.
2. Run `yarn install`


## Starting up on development

This app has two scripts built into `package.json`. A backend Express server, and a webpack dev server.

### 1) Express server

Spin up an Express server that enables you to work on your app in development:

```
yarn dev
```

### 2) Webpack dev server

Run webpack builds in development. Webpack automatically rebuilds when you make changes to the files in `public/`.

Additionally, [hot reloading](https://github.com/gaearon/react-hot-loader) causes UI components to auto-update when you make changes, without the need for a page refresh.

```
yarn webpack
```

### Open the app

Once you have the above two running, open the app on http://localhost:8001.

