// use node's filesystem API to modify files
const fs = require('fs');

// modify the readme's counter and commit it back up to a branch
const contents = fs.readFileSync(`${__dirname}/README.md`, 'utf8');
const currentNumber = Number(contents);
const newNumber = currentNumber + 1;
fs.writeFileSync("README.md", newNumber.toString());
