const Blockchain = require('./models/Blockchain.js');

const db = {
  blockchain: new Blockchain,
  utxos: [], 
}

module.exports = db;
