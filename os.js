import os from "os";

console.log(os.platform()); // operating system
console.log(os.arch()); // system architecture
console.log(os.totalmem()); // total RAM
console.log(os.freemem()); // free RAM
console.log(os.hostname()); // computer name

const obj = {
  name: "karan",
  age: 21,
};

const jsonString = JSON.stringify(obj);
console.log(jsonString);
const jsonToObj = JSON.parse(jsonString);
console.log(jsonToObj);
