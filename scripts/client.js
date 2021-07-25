const jayson = require('jayson');
const {PORT} = require('../config');


// create a client
const client = new jayson.client.http({
  port: PORT
});

module.exports = client;
