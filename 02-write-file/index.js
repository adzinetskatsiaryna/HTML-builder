const fs = require('fs');
const readline = require('readline');
const path = require('path');
const process = require('process');
const textWay = path.join(__dirname, 'text.txt');

console.log('Hello, enter something');
const stream = fs.createWriteStream(textWay);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', (input) => {
    if (input === 'exit') {
      rl.close();
      return;
    }

    fs.appendFile(textWay, `${input}\n`, (err) => {
        if (err) {
          throw err;
        }
      })
}) 
process.on('exit', () => console.log('have a nice day, see you'));