// Find Maximum: Write a function that finds the maximum value in an array of numbers without using the built-in Math.max() function.

function FindMaximum(arr) {
  let maximum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maximum) {
      maximum = arr[i];
    }
  }
  return maximum;
}
console.log(FindMaximum([1, 54, 5, 897, 898, 24, 38, 716]));
