// Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.

let books = {
    title: "The Motive",
    author: "S.S Fazor",
    year: 2000,
    get_Title_and_Author: function () {
      return `${this.title} book written by ${this.author}`;
    },
  };

//   console.log(books.title);
//   console.log(books.author);

  console.log(books.get_Title_and_Author());



  // Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.
let Books = {
    title: "The GateWay of India",
    author: "S S Shitole",
    year: 1999,
    updateYear: function (year) {
      this.year = year;
    },
  };
  
  Books.updateYear(2024);
  console.log(Books);