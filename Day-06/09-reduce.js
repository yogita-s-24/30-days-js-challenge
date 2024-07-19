//9. USe the reduce method to calculate the sum of all numbers in the array and log the result.

const num = [1,2,3,4,5];

const newArray = num.reduce(sumNumbers, 0);

function sumNumbers(number, nums){
    return number + nums
}

console.log(newArray);

//OR

let numbers1 = [1, 2, 3, 4, 5, 6];
let sum = numbers1.reduce((acc, number) => acc + number, 0);
console.log(sum);

// Output: 21