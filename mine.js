const db = require('./db');
const Block = require('./models/Block');
const Transaction = require('./models/Transaction');
const UTXO = require('./models/UTXO');
const {PUBLIC_KEY} = require('./config');
const BLOCK_REWARD = 10;

const TARGET_DIFFICULTY = BigInt("0x00000" + "F".repeat(60));
const SHA256 = require('crypto-js/sha256');

let mining = false;

function startMining() {
  mining = true;
  mine();
}

function stopMining() {
  mining = false;
}

function mine() {
  if (!mining) return;

  const block = new Block();

  // add transactions from the mempool
  const coinbase_UTXO = new UTXO(PUBLIC_KEY, BLOCK_REWARD);
  const coinbase_TX = new Transaction([],[coinbase_UTXO]);
  block.addTransaction(coinbase_TX);

  while(BigInt('0x' + block.hash()) >= TARGET_DIFFICULTY) {
    block.nonce++;
  }

  // console.log(block.transactions[0]);

  block.execute();

  db.blockchain.addBlock(block);

  console.log(`Mined block #${db.blockchain.blockHeight()} with a hash of ${block.hash()} at nonce ${block.nonce}`);

  setTimeout (mine, 50);
}

module.exports = {
  startMining,
  stopMining
};
