function printHello() {
  console.log("Hello World!");
}
printHello();

function addTwoIntegers(a, b) {
  return a + b;
}
let sum = addTwoIntegers(4, 5);
console.log("The sum of given numbers is " + sum);

function findSquare(num) {
  return num ** 2;
}

let square = findSquare(4);
console.log("Square of the given number is " + square);

let checkEligible = (age) => {
  let res = age >= 18 ? true : false;
  return res;
};

let age = 22;
let isEligible = checkEligible(age);
console.log(isEligible);
