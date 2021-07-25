const {BLOCKHAIN_FILE} = require('../config');
const fs = require('fs');


class Blockchain {
  constructor() {
    //if file exist read from it else, create it
    this.blocks = [];
  }

  addBlock(block) {
    this.blocks.push(block);
    //save to file

    fs.writeFile(BLOCKHAIN_FILE, JSON.stringify(this.blocks), (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
      })
  }

  blockHeight() {
    return this.blocks.length;
  }
}
module.exports = Blockchain;
