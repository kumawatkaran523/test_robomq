// setTimeout(() => {
//     console.log("hi")
// }, 1000);
// setTimeout(() => {
//     console.log("hello")
// }, 3000);
// setTimeout(() => {
//     console.log("hello there")
// }, 5000);

// call back hell
setTimeout(() => {
  console.log("hi");
  setTimeout(() => {
    console.log("hello");
    setTimeout(() => {
      console.log("hello there");
    }, 5000);
  }, 3000);
}, 1000);

// resolve using promise
