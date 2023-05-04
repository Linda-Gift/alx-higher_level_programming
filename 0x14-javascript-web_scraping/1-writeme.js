#!/usr/bin/node

const fs = require('fs');
const filePath = process.argv[2];
fs.writeFile(filePath, process.argv[3], { flag: 'w' }, (err) => {
  if (err) {
    console.log(err);
  }
});
