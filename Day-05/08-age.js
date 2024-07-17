//8. Write a function that take a  person name and age and  return a greeting message. Provide a defalut value to age.

const message = (name, age=23) => `Hello, ${name}! You are ${age} years old.`;

console.log(message("Yogita"));