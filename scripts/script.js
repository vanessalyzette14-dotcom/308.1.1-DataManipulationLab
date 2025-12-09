// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// 1. Better defined the question
// // CHeck the input/started code
//  // reread, reread, reread, reread the question
// 2.  Define or better unstand expected outputs

//   arithmetic - math - number
// Logic - and or NOT - return bool
// comparison - return bool

// 1.   Check if all numbers are divisible by 5. Cache the result in a variable.
// Excpected output: variable containing a boolean
const isDivBy5 = (n1 % 5) + (n2 % 5) + (n3 % 5) + (n4 % 5) == 0;
console.log("isDiv5:", isDivBy5);

// 2.   Check if the first number is larger than the last. Cache the result in a variable.
const isFirstLargerThanLast = n1 > n4;
console.log("isFirstLargerThanLast:", isFirstLargerThanLast);

// 3.   Accomplish the following arithmetic chain:
// ✅ Subtract the first number from the second number.
// ✅ Multiply the result by the third number.
// ✅ Find the remainder of dividing the result by the fourth number.
let result = n2 - n1;
// result = result * n3;
result *= n3
result %= n4
console.log('Result:', result);

// 4.   ✅ Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons. Rename the variable as appropriate.

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = n1 + n2 + n3 + n4 == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 <= 25 || n2 <= 25 || n3 <= 25 || n4 <= 25;
console.log('IsOver25:', isOver25)

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique =
  n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis =
  n1 + n2 + n3 + n4 == 50 &&
  (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2 &&
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) &&
  n1 != n2 &&
  n1 != n3 &&
  n1 != n4 &&
  n2 != n3 &&
  n2 != n4 &&
  n3 != n4;




// Math Problem Part 2

// What do we know?
// distance = 15000 miles
// budget = 175
//  55mph = 30 mpg
//  60mph = 28 mpg
//  75mph = 23 mpg
// cost per gallon = 3$

// What can infer?
//
// What is the input?

// What is the expected output?
// How many gallons we need
// totalGallons = distance / mpg

// how much will it cost
// cost = totalGallons * cpg

// how long will it take?
// time = dist / speed

// Const Variables
const distance = 1500;
const costPerGal = 3;
const budget = 175;

//  Dynamic Variables
let speed = 75;
let mpg = 23;

// Formula Variables
let totalGallons = distance / mpg;
let totalCost = totalGallons * costPerGal;
let time = distance / speed;

console.log(
    `Distance: ${distance},
    Speed: ${speed}mph,
    MPG: ${mpg},
    Total Time: ${time},
    Gallons of Fuel: ${totalGallons},
    Cost: ${totalCost},
    isFeasible: ${totalCost <= budget}`
);