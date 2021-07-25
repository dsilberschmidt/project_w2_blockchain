const Blockchain = require('./models/Blockchain.js');

const db = {
  blockchain: new Blockchain
  // should read utxo from Blockchain
  utxos: [],
}

module.exports = db;
