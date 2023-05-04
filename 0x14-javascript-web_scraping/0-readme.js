#!/usr/bin/node
const fs = require('fs');
filePath = process.argv[2];
fs.readfile(filePath, (err, data) ==> {
  if (err) {
    console.log(err);
  }
  else {
    console.log(data);
  }
});
