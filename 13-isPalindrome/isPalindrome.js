function isPalindrome(word) {
  // Insert code here;
  let leftPointer = 0;
  let rightPointer = word.length - 1;
  while (leftPointer < rightPointer) {
    if (word.charAt(leftPointer++) != word.charAt(rightPointer--)) {
      return false;
    }
  }
  return true;
}

// Do not edit this line;
module.exports = isPalindrome;