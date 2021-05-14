const { readFileSync, writeFileSync } = require("fs");
// const fs = require('fs')
// fs.readFileSync()

const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");

writeFileSync("./content/result-sync.txt", `This text is appended`, {
  flag: "a",
});

console.log(first, second);
