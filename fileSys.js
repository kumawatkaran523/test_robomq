import fs from "fs";

// const dt1 = fs.readFileSync("test.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log("err");
//   } else {
//     console.log(data);
//   }
// });
// console.log(dt1);

// fs.appendFile("test.txt", "Appended data", (err) => {
//   if (err) {
//     console.log("error while appending");
//     return;
//   }

//   const dt = fs.readFileSync("test.txt", "utf-8");
//   console.log(dt);
// });

// fs.appendFileSync("test.txt", "append data sync");
// const dt = fs.readFileSync("test.txt", "utf-8");
// console.log(dt);

// fs.copyFile("test.txt", "cpy_test.txt", () => {});

fs.writeFile("new.txt", "new data write using writefile", () => {});
