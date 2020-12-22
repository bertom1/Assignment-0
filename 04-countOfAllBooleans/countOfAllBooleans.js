function countOfAllBooleans(arr) {
  // Insert code here;
  let sum = 0;
  for (let i = 0; i < arr.length; i++){
    if (arr[i] === true || arr[i] === false) {
      sum += 1;
    }
  }
  return sum;
}

// Do not edit this line;
module.exports = countOfAllBooleans;
