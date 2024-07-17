//10. Write a higher order function that takes a  two functions and a value, applies the first to the value and then applies the second function to the reslut.

const applyFunctions = (func1, func2, value) => func2(func1(value));

// Usage example:
const add5 = (num) => num + 5;
const multiplyBy2 = (num) => num * 2;

const result = applyFunctions(add5, multiplyBy2, 10); // First adds 5 to 10, then multiplies by 2
console.log(result); // Output: 30
