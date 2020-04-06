const express = require('express');
const axios = require('axios');
const _ = require('lodash');
const bodyParser = require('body-parser');
const pkg = require('../package.json');
const config = require('./config');


const app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// parse application/json
app.use(bodyParser.json());


app.use(express.static('dist'));


app.post('/slack/send_message', async (req, res) => {

  const { data } = await axios({
    method: 'post',
    url: 'https://slack.com/api/chat.postMessage',
    data: {
      channel: '@chris',
      text: req.body.message,
    },
    headers: {
      Authorization: `Bearer ${process.env.SLACK_ACCESS_TOKEN}`,
      'Content-Type': 'application/json; charset=utf-8',
    },
  });

  if (data.ok === true) {
    res.json({
      success: true,
    });
  } else {
    res.status(500).json({
      error: _.get(data, 'error') || 'An unknown error occurred',
    });
  }
});


app.get('*', (req, res) => {
  const assetsHosts = {
    production: `https://d2513fpustehec.cloudfront.net/admin/${config.assetsKey}`,
    staging: `https://d1u3fl6h80w0nc.cloudfront.net/admin/${config.assetsKey}`,
    development: '',
  };

  res.render('../views/index', {
    environment: config.environment,
    version: pkg.version,
    assetsHost: assetsHosts[config.environment],
  });
});


module.exports = app;
