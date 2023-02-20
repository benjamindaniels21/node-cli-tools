#!/usr/bin/env node
const fs = require("fs"); // require the file system module in node

fs.readdir(process.cwd(), (err, filenames) => {
  //either err === an error obj, which means there was an error
  //or err is null which means it's ok

  if (err) {
    //error handling code
    console.log(err);
  }

  const allStats = Array(filenames.length).fill(null); //create an array the appropriate length and fill each slot with a "null" value

  for (let filename of filenames) {
    const index = filenames.indexOf(filename);

    fs.lstat(filename, (err, stats) => {
      if (err) {
        console.log(err);
      }
      allStats[index] = stats;

      const ready = allStats.every((stats) => {
        return stats;
      });

      if (ready) {
        allStats.forEach((stats, index) => {
          console.log(filenames[index], stats.isFile());
        });
      }
    });
  }
});
