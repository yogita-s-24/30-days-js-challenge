// Task 3: Write a program to find the largest of three numbers using nested if-else statements.

let num1 = 100;
let num2 = 200;
let num3 = 300;

let largeNum;

if (num1 > num2) {
  if (num1 > num3) {
    largeNum = num1;
  } else {
    largeNum = num3;
  }
} else if (num2 > num3) {
  largeNum = num2;
} else {
  largeNum = num3;
}
console.log(largeNum);
