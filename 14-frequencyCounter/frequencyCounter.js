function frequencyCounter(word) {
  // Insert code here;
  let letters = {};
  let wordArr = word.split("");
  for (let i = 0; i < wordArr.length; i++) {
    if (!letters.hasOwnProperty(wordArr[i])) {
      letters[wordArr[i]] = 1;
    }
    else {
      letters[wordArr[i]] += 1;
    }
  }
  return letters;
}

// Do not edit this line;
module.exports = frequencyCounter;