// String Manipulation: Write a function that takes a string as input and returns the string with all vowels removed.

function removeAllVowels(str) {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  const arr = str.split("");
  const removedArr = arr.map((a) => {
    if (!vowels.includes(a)) {
      return a;
    }
  });
  const outputStr = removedArr.join("");
  return outputStr;
}
function removeAllVowels2(str) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    arr.push(str[i]);
  }
  let removedArr = [];
  for (let j = 0; j < arr.length; j++) {
    if (!isVowel(arr[j])) {
      removedArr.push(arr[j]);
    }
  }
  let outputStr = "";
  for (let k = 0; k < removedArr.length; k++) {
    outputStr += removedArr[k];
  }
  return outputStr;
}
function isVowel(s) {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  for (let i = 0; i < vowels.length; i++) {
    if (vowels[i] == s) {
      return true;
    }
  }
  return false;
}

console.log(removeAllVowels("dikshant"));
console.log(removeAllVowels2("dikshant"));
// changed something
