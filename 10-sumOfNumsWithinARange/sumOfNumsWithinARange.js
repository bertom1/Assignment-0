function sumOfNumsWithinARange(nums, start, end) {
  // Insert code here;
  let sum = 0;
  nums.forEach(element => {
    if (element >= start && element <= end) {
      sum += 1;
    }
  });
  return sum;
}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;
