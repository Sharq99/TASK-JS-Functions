/**
 * greet(name):
 * - receives a name
 * - logs "Hello <name>"
 *
 * e.g.
 * greet("Hamza") logs "Hello Hamza"
 */
function greet(name) {
  // Your code here
  console.log(`Hello ${name}`);
}

greet("ABdullah Al-Sharqawi");

/**
 * isOdd(n):
 * - receives a number n
 * - returns true if it's odd, false otherwise
 *
 * e.g.
 * isOdd(7) -> true
 * isOdd(10) -> false
 */
function isOdd(n) {
  // Your code here
  if (n % 2 === 0){
    return false;
  }else{
    return true;
  }
}

let Check = true;
Check = isOdd(10);
console.log(Check);

/**
 * oddsSmallerThan(n):
 * - receives a number n
 * - returns the number of ODD numbers smaller than n
 *
 * e.g.
 * oddsSmallerThan(7) -> 3
 * oddsSmallerThan(15) -> 7
 */
function oddsSmallerThan(n) {
  // Your code here
  if(n % 2 === 0){
    return n / 2;
  }else{
  return (n - 1) / 2;
  }
}

let OST = 0;
OST = oddsSmallerThan(7);
console.log(OST);
//OST = oddsSmallerThan(3);
//console.log(OST);

/**
 * squareOrDouble(n):
 * - receives a number n
 * - returns its square if it's odd
 * - returns its double if it's even
 *
 * e.g.
 * squareOrDouble(16) -> 32
 * squareOrDouble(9) -> 81
 */
function squareOrDouble(n) {
  // Your code here
  if(n % 2 === 0){
    return n + n;
  }else{
    return n ** 2;
  }
}

let SOD = 0;
OST = squareOrDouble(16);
console.log(SOD);

module.exports = { greet, isOdd, oddsSmallerThan, squareOrDouble };
