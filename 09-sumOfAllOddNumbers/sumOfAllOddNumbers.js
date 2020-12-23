function sumOfAllOddNumbers(nums) {
  // Insert code here;
  let sum = 0;
  nums.forEach(element => {
    if (element % 2 === 1) {
      sum += 1;
    }
  });
  return sum;
}

// Do not edit this line;
module.exports = sumOfAllOddNumbers;