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

Additionally, [hot reloading](https://github.com/gaearon/react-hot-loader) causes UI components to auto-update when you make changes, without the need for a page refresh. Hot reloading has its quirks, but it tends to save a world of time.

```
yarn webpack
```

### Open the app

Once you have the above two running, open the app on http://localhost:8001.

Go to the __Send message__ page, and try sending a Slack message to yourself.

## Tasks

This Slack app is using one of the latest versions of [Material UI](https://material-ui.com/), one of the most popular React.js frameworks. You'll want to lean on their documentation extensively while working on these tasks.

__Important:__ you __only__ need to focus on the code within `public/js/app`.

### 1. Improve the Send message page UX

There are a number of UX areas that could be improved, including:

1. The message should be blanked after a successful send
2. The [TextField](https://material-ui.com/api/text-field/#textfield-api) and [Button](https://material-ui.com/api/button/) should be disabled while the message is being sent
3. Change the [Button](https://material-ui.com/api/button/) to `Sending...` while the message is being sent
4. Show a nice [Alert](https://material-ui.com/api/alert/) message to indicate a successful send
5. An error [Alert](https://material-ui.com/api/alert/) should be surfaced to the user (__tip:__ to simulate an error, just switch off the dev server with `ctrl + c`)

Tip: be sure to check out the "Components" within [Material UI](https://material-ui.com/), as well as the "Component API" (which are linked to above).

### 2. Make it possible to pick a channel

It would be great if the user could pick the Slack channel to send messages to before they hit send!

There is [an endpoint](http://localhost:8001/slack/channels) that you can use specifically to get a list of all of the channels in Slack. You can load a list of all of the available channels in your code with:

```js
const response = await axios.get('/slack/channels');
console.log(response.data);
```

Once you've loaded the channels, you render a select (dropdown) field the [TextField](https://material-ui.com/components/text-fields/) component. An example dropdown is below: (you'll need to change a few things to make it work)

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

Tips:

* Load the channels via [componentDidMount](https://reactjs.org/docs/react-component.html#componentdidmount)
* You may want to use an `isLoading` state value to handle loading state
* When the channels are loading a [progress spinner](https://material-ui.com/components/progress/) can be a nice touch
