function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here;
  let unionSet = new Set();
  for (const element of args) {
    unionSet = new Set([...unionSet, ...element])
  }
  return unionSet;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;