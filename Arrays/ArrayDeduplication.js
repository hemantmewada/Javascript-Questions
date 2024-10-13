// Array Deduplication: Write a function that takes an array as input and returns a new array with all duplicate elements removed.

function removedDup(arr) {
  let outputArr = [];
  arr.forEach((a) => {
    if (!outputArr.includes(a)) {
      outputArr.push(a);
    }
  });
  return outputArr;
}
const arr = [1, 2, 3, 4, 5, 6, 7, 2, 4, 3, 6, 5];
console.log(removedDup(arr));
