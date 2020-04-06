const awsServerlessExpress = require('aws-serverless-express');
const app = require('./lib/app');

const server = awsServerlessExpress.createServer(app);


module.exports.app = (event, context) => {
  awsServerlessExpress.proxy(server, event, context);
};
