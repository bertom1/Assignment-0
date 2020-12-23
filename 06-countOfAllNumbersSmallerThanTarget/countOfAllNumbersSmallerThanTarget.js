function countOfAllNumbersSmallerThanTarget(nums, target) {
  // Insert code here;
  let sum = 0;
  nums.forEach(element => {
    if (element < target) {
      sum += 1;
    }
  });
  return sum;
}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;