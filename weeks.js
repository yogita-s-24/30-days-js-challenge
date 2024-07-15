// Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.

function geytWeeksDay(dayNumber) {
  switch (dayNumber) {
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Thusday");
      break;
    case 4:
      console.log("Friday");
      break;
    case 5:
      console.log("Saturday");
      break;
    case 6:
      console.log("Sunday");
      break;
    default:
      console.log("Invalid Number.");
  }
}
geytWeeksDay(5);
geytWeeksDay(7);
geytWeeksDay(3);
geytWeeksDay(2);
