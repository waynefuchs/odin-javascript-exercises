const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const sum = (input) => input.reduce((total, current) => total + current, 0);
const multiply = (input) => input.reduce((total, current) => total * current, 1);
const power = (a, b) => a ** b;
const factorial = (n) => (Array.from(new Array(n), (x, i) => i+1)).reduce((total, current) => total * current, 1);

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
