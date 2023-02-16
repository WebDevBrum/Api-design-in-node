const fs = require("fs/promises");
const { resolve } = require("path");
const path = require("path");

const read = async () => {
  const result = fs.readFile(path.join(__dirname, "package.json"), "utf-8");
  return result;
};

// await read(); //nope
// const test = async () => {
//   const red = await read();
//   console.log(red);
// };
// test(); // ok

// (async () => {
//   console.log(await read());
// })(); //ok

read().then((f) => console.log(f));
console.log(read());
console.log("hi");
