// Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.
// Simulate fetching data with a delay
const fetchData = (message, delay) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(message);
      }, delay);
    });
  };
  
  // Chain the promises to log messages in a specific order
  fetchData("Fetching user data...", 1000)
    .then((message) => {
      console.log(message);
      return fetchData("Fetching posts data...", 1000);
    })
    .then((message) => {
      console.log(message);
      return fetchData("Fetching comments data...", 1000);
    })
    .then((message) => {
      console.log(message);
      console.log("All data fetched successfully!");
    })
    .catch((error) => {
      console.error("An error occurred:", error);
    });