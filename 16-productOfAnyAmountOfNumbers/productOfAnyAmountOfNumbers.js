function productOfAnyAmountOfNumbers(...args) {
  // Insert code here;
  let product = 1;
  for (const element of args){
    product *= element;
  };
  return product;
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;