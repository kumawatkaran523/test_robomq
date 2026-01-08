const nums = [1, 2, 2, 3, 3, 4];

// nums.forEach((itm) => console.log(itm));
const even = nums.filter((itm) => itm % 2 === 0);
console.log(even);

const doubled = nums.map((itm) => itm * 2);
console.log(doubled);

const sum = nums.reduce((a, b) => a + b, 0);
console.log(sum);

const maxEle = nums.reduce((a, b) => (a < b ? b : a), -1);
console.log(maxEle);

const unique = [...new Set(nums)];
// nums.forEach((itm) => unique.add(itm));
console.log(unique);

const mp = new Map();
nums.forEach((itm) => {
  if (mp.has(itm)) {
    mp.set(itm, mp.get(itm) + 1);
  } else {
    mp.set(itm, 1);
  }
});

console.log(mp);

const allPostive = nums.every((itm) => itm > 0);
console.log(allPostive);

const newNums = nums.concat([5, 5]);
console.log(newNums);

nums.fill(-1, 0, 3);
console.log(nums); //change in actual array

const Find = nums.find((itm) => itm == 4);
console.log(Find);

console.log(nums.lastIndexOf(-1));

console.log(nums.length);
nums.shift(); //left shift or remove first ele
console.log(nums);

const sliceNum = nums.slice(0, 2);
console.log(sliceNum);

const removed = nums.splice(0, 2);
console.log(removed);

nums.splice(2, 0, 444, 444);
console.log(nums);
