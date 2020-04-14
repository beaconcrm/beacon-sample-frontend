# Sample frontend Slack app

A fun project for sending messages into Slack. The interface needs a little UX love, but once it's had that, you'll be able to send messages as much as you like 😎.

## Installation

### Requirements

* [Yarn](https://yarnpkg.com/)
* [Node.js](https://nodejs.org/en/) (preferably version 10+)

### Steps

1. Clone this repo to your local machine.
2. Run `yarn install`


### Starting the server

This app has two scripts built into `package.json` - one to run a back-end Express server, and another for running webpack builds in development.

__Note:__ webpack automatically rebuilds when you make changes to your files. Additionally, [hot reloading](https://github.com/gaearon/react-hot-loader) causes UI components to auto-update when you make changes, without the need for a page refresh.

To start the server:

```
yarn dev
```

And to start the webpack builds:

```
yarn webpack
```