const express = require('express');
const pkg = require('../package.json');
const config = require('./config');


const app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');


app.use(express.static('dist'));

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
