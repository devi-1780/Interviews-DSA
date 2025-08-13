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

let isEvenOrOdd = function (num) {
  return num % 2 === 0 ? "Even" : "Odd";
};
console.log(isEvenOrOdd(10));

function printAllEvenNumbers(arr) {
  let res = arr.filter((num) => num % 2 === 0);
  return res.join(" ");
}

let arr = [10, 3, 5, 2, 7, 6, 9];
let evenNumberArr = printAllEvenNumbers(arr);
console.log(evenNumberArr);

function countNegatives(arr) {
  if (arr.length < 0) return [];
  let count = 0;
  for (let num of arr) {
    if (num < 0) {
      count++;
    }
  }
  return count;
}

let negativeCount = countNegatives([2, -6, 4, 8, 1, -9]);
console.log(negativeCount);

function findSmallestNum(arr) {
  if (arr.length < 0) return null;
  let smallest = Infinity;
  for (let num of arr) {
    if (num < smallest) {
      smallest = num;
    }
  }
  return smallest;
}

let smallest = findSmallestNum([2, 3, -1, 5, 6]);
console.log(smallest);

function findLargestNum(arr) {
  if (arr.length < 0) return null;
  let largest = -Infinity;
  for (let num of arr) {
    if (num > largest) {
      largest = num;
    }
  }
  return largest;
}

let largest = findLargestNum([2, 3, -1, 5, 6]);
console.log(largest);

function secondLargestNumber(arr) {
  if (arr.length < 2) return null;

  let firstLargest = -Infinity;
  let secondLargest = -Infinity;
  for (let num of arr) {
    if (num > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = num;
    } else if (num > secondLargest && num != firstLargest) {
      secondLargest = num;
    }
  }
  return secondLargest;
}

let secondLargest = secondLargestNumber([20, 30, 20, 50, 30]);
console.log(secondLargest);

function countDigits(n) {
  if (n === 0) return 1;
  n = Math.abs(n);
  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
}

let num = -256;
let numberOfDigits = countDigits(num);
console.log(numberOfDigits);
