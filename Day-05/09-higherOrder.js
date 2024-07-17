//Higher Order function 

//9. Write a higher order function that takes a function and a number and call the function that many times.


const repeatFunction = (func, times) => {
    for (let i = 0; i < times; i++) {
      func();
    }
  };
  
  // Usage example:
  const sayHello = () => console.log("Hello!");
  
  repeatFunction(sayHello, 3);
  
  // Output:
  // Hello!
  // Hello!
  // Hello!
  