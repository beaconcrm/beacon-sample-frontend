# The Beacon Celebration Service

A silly project for firing various kinds of confetti.

## Installation

### Requirements

* [Yarn](https://yarnpkg.com/)
* [Node.js](https://nodejs.org/en/) (version 12.16.2)

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

Additionally, [hot reloading](https://github.com/gaearon/react-hot-loader) causes UI components to auto-update when you make changes, without the need for a page refresh. Hot reloading has its quirks, but it tends to save a world of time.

```
yarn webpack
```

### Open the app

Once you have the above two running, open the app on http://localhost:8001.

Go to the Celebrate page, hit go, and savour the celebratory atmosphere of your browser.

## Tasks

This app is using one of the latest versions of [Material UI](https://material-ui.com/), one of the most popular React.js frameworks. It's used extensively throughout Beacon.

__Important:__ you __only__ need to change code within `public/js/app/views`.

### Task 1: Celebrate (spend up to 20 minutes on this task)

The Celebrate tab lets you choose a duration for the confetti and fires when you click the 'Go' button.

1. Rewrite Celebrate/index.jsx so that it uses hooks.  You do not need to add or modify any functionality.

### Task 2. Effects (spend up to 10 minutes on this task)

The Effects tab lets you choose a colour for your confetti.

1. Use the Effect hook to make confetti fire when a new colour is selected so we don't need to hit 'Go' (Don't worry if this fires on mount - that's fine).

2. How do we make it only show on the first render? Add code to do this but leave it commented out!

### Task 3. State (spend up to 25 minutes on this task)

The State tab lets you choose a colour for your confetti, but we're going to add another option. You'll see from the code that we've broken down this page into separate components for the inputs.

1. Add another component called 'Velocity' which allows the user to change the start velocity of the confetti. You do not need to modify any files outside of the 'State' directory, the confetti util function is already expecting a third 'velocity' argument. You might not want to implement your new component exactly like the 'Colour' component.  That's fine, and feel free to update the Colour component as well if you wish.

## Notes

* Ask Sam if you have any questions at any point - we're here to help!
* If you don't have time to finish a task in the suggested time then that's absolutely fine but please move on - 3 half-finished tasks is an order of magnitude more desirable than 1 finished task.
