// a function that takes an array as an argument where each even number is squares and odd number is tripled
function processArray(arr) {
  // using map function to create a new array
  return arr.map(num => {
    //check if the number is odd
    if (num % 2 === 0) {
      //if it is even,square the number
      return num ** 2;
    } else {
      // if it's odd,triple the number
      return num * 3;
    }
  });
}


function formatArrayStrings(strArr, numArr) {
  return strArr.map(function(str, i) {
      if (numArr[i] % 2 === 0) {
          return str.toUpperCase();
      } else {
          return str.toLowerCase();
      }
  });
}


