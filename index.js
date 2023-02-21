#!/usr/bin/env node

import fs from "fs";
import util from "util";
import chalk from "chalk";

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

  const statPromises = filenames.map((filename) => {
    return lstat(filename);
  });
  const allStats = await Promise.all(statPromises);

  for (let stats of allStats) {
    const index = allStats.indexOf(stats);

    if (stats.isFile()) {
      console.log(chalk.yellow(filenames[index]));
    } else {
      console.log(chalk.green(filenames[index]));
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
