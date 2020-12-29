function countOfAllBooleans(arr) {
  // Insert code here;
  let sum = 0;
  arr.forEach(element => {
    if (typeof(element) === "boolean") {
      sum++;
    }
  });
  return sum;
}

// Do not edit this line;
module.exports = countOfAllBooleans;
