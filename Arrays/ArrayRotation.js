// Array Rotation: Write a function that rotates an array to the right by a given number of steps.

function ArrayRotation(arr = [], steps) {
  const slicedArr = arr.slice(0, arr.length - steps);
  const reversedArr = arr.slice(arr.length - steps, arr.length);
  return reversedArr.concat(slicedArr);
}

console.log(ArrayRotation([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
