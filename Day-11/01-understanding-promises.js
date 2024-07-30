// Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.

const delayeMessage = new Promise((resolve)=>{
  setTimeout(()=>{
    resolve("Hello world!")
  }, 2000);
});

delayeMessage.then((message)=>{
    console.log(message);
});

// • Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using.catch().

const delayedError = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Error");
  }, 2000);
});
delayedError
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });


