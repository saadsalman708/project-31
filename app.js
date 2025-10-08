// Assignment #19

// JavaScript no 11

// Q1. Write a program that takes a positive integer from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// Answer
// var userInput = prompt("Enter any number");
// document.write("Number: " + +userInput + "<br />");
// document.write("round off value: " + Math.round(userInput) + "<br />");
// document.write("floor value: " + Math.floor(userInput) + "<br />");
// document.write("ceil value: " + Math.ceil(userInput) + "<br />");





// 2. Write a program that takes a negative floating point number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// Answer
// var userInput = prompt("Enter any number");
// document.write("Number: " + +userInput + "<br />");
// document.write("round off value: " + Math.round(userInput) + "<br />");
// document.write("floor value: " + Math.floor(userInput) + "<br />");
// document.write("ceil value: " + Math.ceil(userInput) + "<br />");





// 3. Write a program that displays the absolute value of a number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

// Answer
// var userInput = prompt("Enter any number");
// if (userInput > 0) {
//     document.write("The absolute value of " + userInput + " is " + userInput);
// } else if (userInput < 0) {
//     var convertedNum = +userInput - (+userInput * 2);
//     document.write("The absolute value of " + userInput + " is " + convertedNum);
// } else {
//     document.write("Please enter number only");
// }





// 4. Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.

// Answer
// var randomNum = Math.floor(Math.random() * 6) + 1;
// document.write("Random dice value: " + randomNum + "<br /><br />");
// document.write("refresh to change the dice number");





// Q5. Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser

// Answer
// var randomNum = Math.floor(Math.random() * 2) + 1;
// document.write(randomNum + "<br /><br />");
// if (randomNum == 1) {
//     document.write("Random coin value: Head<br /><br />");
// } else {
//     document.write("Random coin value: Tail<br /><br />");
// }
// document.write("refresh to change the dice number");





// Q6. Write a program that shows a random number between 1 and 100 in your browser.

// Answer
// var randomNum = Math.floor(Math.random() * 100) + 1;
// document.write("Random number between 1 to 100: " + randomNum);





// 7. Write a program that asks the user about his weight. Parse the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

// Answer
// var userInput = prompt("Enter you weight in kilogram");
// var convertedToNum = parseFloat(userInput);
// document.write("The weight of user is " + convertedToNum + " kilograms");





// Q8. Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10.
// If the user input equals the secret number, congratulate the user.

// Answer
// var userInput = prompt("Enter the number between 1 to 10");
// var secretNum = Math.floor(Math.random() * 10) + 1;

// if (userInput == secretNum) {
//     document.write("Congratulation! you guessed it right");
// } else {
//     document.write("Try again <br />Refresh to Start");
// }