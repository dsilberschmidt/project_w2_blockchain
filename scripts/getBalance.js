const client = require('./client');

// const {PUBLIC_KEY} = require('../config');

const {argv} = require('yargs');
const {address} = argv;


// client.request('getBalance', [PUBLIC_KEY], function(err, response) {
client.request('getBalance', [address], function(err, response) {
  if(err) throw err;
  console.log(response.result); // success!
});
