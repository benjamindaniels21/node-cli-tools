const counterObj = require("./myscript");

console.log(counterObj.getCounter());
counterObj.incrementCounter();
console.log(counterObj.getCounter());

const newCounterObj = require("./myscript");

console.log(newCounterObj.getCounter());

newCounterObj.incrementCounter();

console.log(newCounterObj.getCounter());
