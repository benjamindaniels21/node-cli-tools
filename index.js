#!/usr/bin/env node
const fs = require("fs"); // require the file system module in node
const path = require("path"); // require path module

fs.readdir(".", (err, filenames) => {
  //either err === an error obj, which means there was an error
  //or err is null which means it's ok

  if (err) {
    //error handling code
    console.log(err);
    return;
  } else {
    console.log(filenames);
  }
});
