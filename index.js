#!/usr/bin/env node
const fs = require("fs"); // require the file system module in node
const util = require("util");

//Method 2
// const lstat = util.promisify(fs.lstat);

//Method 3
const { lstat } = fs.promises;

fs.readdir(process.cwd(), async (err, filenames) => {
  //either err === an error obj, which means there was an error
  //or err is null which means it's ok

  if (err) {
    //error handling code
    console.log(err);
  }

  for (let filename of filenames) {
    try {
      const stats = await lstat(filename);

      console.log(filename, stats.isFile());
    } catch (err) {
      console.log(err);
    }
  }
});

//Method 1
// const lstat = (filename) => {
//   return new Promise((resolve, reject) => {
//     fs.lstat(filename, (err, stats) => {
//       if (err) {
//         reject(err);
//       }
//       resolve(stats);
//     });
//   });
// };
