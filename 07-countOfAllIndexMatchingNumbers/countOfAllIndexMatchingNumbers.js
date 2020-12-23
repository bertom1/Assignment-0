function countOfAllIndexMatchingNumbers(nums) {
  // Insert code here;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i === nums[i]) {
      sum +=1;
    }
  }
  return sum;
}

// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;