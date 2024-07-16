// Task 6: Write a program to calculate the factorial of a number using a do...while loop.

let num = 5;
let fact = 1;

do{ 
    fact = fact * num;
    num--;
}while(num>0);
console.log(fact)