// Activity 1 : Variable declaration
// Task 1
//Number
var num = 123
console.log(num)

//Task 2
//String
let name = "Yogita"
console.log(`I'M ${name} here.`);

// Activity 2:
//Task 3
//Boolean
const isUser = false;
console.log(`Value : ${isUser} Type : ${isUser}`);

//Activity 3:
//Task 4
// number, string, boolean, object, array

// object
const stu = {
    name : "Yogi",
    age : "12",
    address : "Pune"
}
console.log(`Value : ${JSON.stringify(stu)} Type : ${typeof(stu)}`);

//array 
const car = ["Maruti", "fortuner", 'swift'];
console.log(`Value ${car} Type : ${typeof(car)}`);

// Activity 5 
// Task 5
let val = 5;
console.log(`Value : ${val} Type : ${typeof(val)}`);
val = 10;
console.log(`Value : ${val} Type : ${typeof(val)}`);

// Task 6
const number = "3000";
console.log(`Value : ${number} Type : ${typeof(number)}`);
//When we declared variable using const keyword we cannot assign value again.
number = "4000";
console.log(`Value : ${number} Type : ${typeof(number)}`);


