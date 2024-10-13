// Array Flattening: Implement a function that takes a nested array (an array containing arrays) and flattens it into a single-dimensional array.

function ArrayFlattening(arr = []) {
  let result = [];
  arr.forEach((a) => {
    if (Array.isArray(a)) {
      result = result.concat(ArrayFlattening(a));
    } else {
      result.push(a);
    }
  });
  return result;
}

console.log(ArrayFlattening(["A", ["B1", "B2", ["B31", "B32"]]]));

function doSomething(n) {
  if (n === 0) {
    console.log("TASK COMPLETED!");
    return;
  }
  console.log(`I'm doing something.${n}`);
  doSomething(n - 1);
}
doSomething(3);
