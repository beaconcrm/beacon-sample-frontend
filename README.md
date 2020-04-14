# Sample frontend Slack app

A fun project for sending messages into Slack. The interface needs a little UX love, but once it's had that, you'll be able to send messages as much as you like 😎.

## Installation

### Requirements

* [Yarn](https://yarnpkg.com/)
* [Node.js](https://nodejs.org/en/) (preferably version 10+)

### Steps

1. Clone this repo to your local machine.
2. Run `yarn install`

### Set up your .env file

Before you try and run any servers, you'll need to create a new `.env` file in the root directory. There is already a `.env.sample`, copy this, and then set the value of `SLACK_ACCESS_TOKEN` in the file.


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

Go to the __Send message__ page, and try sending a Slack message to yourself.

## Tasks

This Slack app is using one of the latest versions of [Material UI](https://material-ui.com/), one of the most popular React.js frameworks. You'll want to lean on their documentation extensively while working on these tasks.

### 1. Improve the Send message page UX

There are a number of UX areas that could be improved, including:

1. The message does not blank out after being sent
2. Fields and buttons are not disabled during form submission
3. Change the button to `Sending...` while sending a message
4. There is nothing to indicate that the message was sent successfully (a success alert would be nice)
5. Error messages are not surfaced to the user (__tip:__ to simulate an error, just switch off the dev server with `ctrl + c`)
