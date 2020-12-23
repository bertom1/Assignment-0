function countOfAllBooleansAndStrings(arr) {
  // Insert code here;
  let sum = 0;
  arr.forEach(element => {
    if (typeof element === "boolean" || typeof element === "string") {
      sum += 1;
    }
  });
  return sum;
}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;