// Every file is a Module by default

const names = require("./4-names");
const sayHi = require("./5-utils");

const data = require("./6-alternative-export");
require("./7-mind-granade");

// console.log(data);

// console.log(names);
// console.log(sayHi);
for (const item in names) {
  sayHi(item);
}
