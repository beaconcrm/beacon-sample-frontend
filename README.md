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

1. The message should be blanked after a successful send
2. The [TextField](https://material-ui.com/api/text-field/#textfield-api) and [Button](https://material-ui.com/api/button/) should be disabled while the message is being sent
3. Change the [Button](https://material-ui.com/api/button/) to `Sending...` while the message is being sent
4. Show a nice [Alert](https://material-ui.com/api/alert/) message to indicate a successful send
5. An error [Alert](https://material-ui.com/api/alert/) should be surfaced to the user (__tip:__ to simulate an error, just switch off the dev server with `ctrl + c`)

### 2. Make it possible to pick a channel

There is an endpoint that you can use specifically to get a list of all of the channels in Slack. Once you've loaded the channels, you render a select (dropdown) field the [TextField](https://material-ui.com/components/text-fields/) component. An example dropdown is below:

```js
<TextField
  select
  label="Channel"
  value=""
  onChange={(e) => {
    console.log(e.target.value);
  })
  helperText="Please choose your channel"
  margin="normal"
>
  {map(items, item => (
    <MenuItem key={item.value} value={item.value}>
      {item.label}
    </MenuItem>
  ))}
</TextField>
```
