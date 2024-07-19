//8. Use filter method to create new array with only even numbers and log a new array.

const arr = [1,2,3,4,5,6,7,8,9,10];

const newArr = arr.filter(evenNum);

function evenNum(num){
    return num % 2 == 0
}

console.log(newArr);