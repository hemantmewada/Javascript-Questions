// Common Elements: Create a function that takes two arrays and returns an array of elements that are common to both arrays.
function CommonElements(arr1, arr2) {
  let arr = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        arr.push(arr1[i]);
      }
    }
  }
  return arr;
}

console.log(CommonElements([1, 2, 3, 4, 5, 6], [1, 3, 6, 8]));
