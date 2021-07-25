// const Block = require('./models/Block.js');
const jayson = require('jayson');
const {startMining, stopMining} = require('./mine.js');
const {PORT} = require('./config');
const {utxos} = require('./db');
// create a server
const server = new jayson.server({
  startMining: function(_, callback) {
    callback(null, 'success!');
    startMining();

  },
  stopMining: function(_, callback) {
    callback(null, 'stop!');
    stopMining();
  },
  // getBalance: function([address], callback) {
  //   console.log(utxos.length);
  //   const ourUTXOs = utxos.filter(x => {
  //     return x.owner === address && !x.spent
  //   });
  //   console.log(ourUTXOs.length);
  //   const sum = ourUTXOs.reduce((p,c) => p + c.amount, 0);
  //   callback(null, sum);
  //   // stopMining();
  // },
  getBalance: function([address], callback) {
    const ourUTXOs = utxos.filter(x => {
      return x.owner === address && !x.spent;
    });
    const sum = ourUTXOs.reduce((p,c) => p + c.amount, 0);
    callback(null, sum);
  }
});

server.http().listen(PORT);
