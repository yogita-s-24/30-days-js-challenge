// Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.

function checkLeapYear(year){
    let isLeap = false;
    if(year % 4 == 0 ){
        if(year % 100 !== (year % 100 === 0 && year % 400 === 0)){
            isLeap = true;
        }
    }
    return isLeap;
}

console.log(checkLeapYear(2032)); //true
console.log(checkLeapYear(2022)); //false
