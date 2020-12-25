function fizzBuzz(start, end) {
  // Insert code here;
   let arr = new Array();
   let position =  start;
   while (position <= end) {
     if (position % 5 === 0 && position % 3 === 0) {
       arr.push("FizzBuzz");
     }
     else if (position % 5 === 0) {
       arr.push("Buzz");
     }
     else if (position % 3 === 0) {
       arr.push("Fizz");
     }
     else {
       arr.push(position);
     }
     position++;
   }
   return arr;
}

// Do not edit this line;
module.exports = fizzBuzz;