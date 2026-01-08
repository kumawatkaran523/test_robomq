for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// Output (after 100ms): 3, 3, 3
// All callbacks share the same 'i', which is 3 by the time they run

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// Output (after 100ms): 0, 1, 2
// Each callback has its own separate 'i' binding for its specific iteration

// closure

function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}

let fn = outer();
console.log(fn);
console.log("count : ", fn());
console.log("count : ", fn());
console.log("count : ", fn());
