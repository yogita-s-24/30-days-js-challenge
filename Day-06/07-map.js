//7. Use a map method to create a new array where each number is doubled and log the new array.

const numbers = [2,4,6,8];

const newArray = numbers.map(doubleNum);

function doubleNum(num){
    return num * 2;

}
console.log(newArray);

