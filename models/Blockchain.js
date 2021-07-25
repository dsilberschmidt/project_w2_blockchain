const {BLOCKCHAIN_FILE} = require('../config');
const fs = require('fs');


class Blockchain {
  constructor() {
    //let data = ''
    //if file exist read from it else, create it
    if (fs.existsSync(BLOCKCHAIN_FILE)) {
        fs.readFile(BLOCKCHAIN_FILE, (err, data) => {
          if (err) throw err;
          //console.log(JSON.parse(data));
          this.blocks = JSON.parse(data);
          });
        //this.blocks = JSON.parse(data);
    }
    else {
      this.blocks = [];
    }
  }

  addBlock(block) {
    this.blocks.push(block);
    //save to file

    fs.writeFile(BLOCKCHAIN_FILE, JSON.stringify(this.blocks), (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
      })
  }

  blockHeight() {
    return this.blocks.length;
  }
}
module.exports = Blockchain;
