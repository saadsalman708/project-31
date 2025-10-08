// Assignment #19

// JavaScript no 11

// Q1. Write a program that takes two user input for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name.

// Answer
// var userFirstName = prompt("Please Enter your first name");
// var userLastName = prompt("Please Enter your last name");

// var fullName = userFirstName + " " + userLastName;
// alert("Welcome " + fullName);





// Q2. Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser.

// Answer
// var userInput = prompt("Write your favorite mobile phone model");
// var lengthOfUserInput = userInput.length;

// document.write("My favorite phone is: " + userInput + "<br />");
// document.write("Length of string " + lengthOfUserInput);





// Q3. Write a program to find the index of letter "n" in the word "Pakistan" and display the result in your browser

// Answer
// var input = "Pakistani";
// var indexOfNInInput;

// for (var i = 0; i < input.length; i++) {

//     if (input[i] == "n") {    
//         indexOfNInInput = i;
//     }
// }

// document.write("String: " + input + "<br />");
// document.write("Index of 'n': " + indexOfNInInput);





// Q4. Write a program to find the last index of letter "l" in the word "Hello World" and display the result in your browser

// Answer
// var input = "Hello World";
// var checkLetter = "l";
// var findingLastIndexOfLetterL;

// for (let i = 0; i < input.length; i++) {

//     if (input[i] == checkLetter) {
//         findingLastIndexOfLetterL = i;
//     }
// }

// document.write("String: " + input + "<br />");
// document.write("Last index of '" + checkLetter + "': " + findingLastIndexOfLetterL);






// 5. Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.

// Answer
// var input = "Pakistani";
// var checkLetter = "i";
// var findingFirstIndexOfLetterI;

// for (let i = 0; i < input.length; i++) {

//     if (input[i] == checkLetter) {
//         findingFirstIndexOfLetterI = i;
//         break;
//     }
// }

// document.write("String: " + input + "<br />");
// document.write("Character at index '" + checkLetter + "': " + findingFirstIndexOfLetterI);





// Q6. Repeat Q1 using string concat() method.

// Answer
// var userFirstName = prompt("Please Enter your first name");
// var userLastName = prompt("Please Enter your last name");

// var fullName = userFirstName.concat(userLastName);
// alert("Welcome " + fullName);





// Q7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.

// Answer
// var cityName = "Hyderabad";
// var newCityName = cityName.replace("Hyder", "Islam");

// document.write("City: " + cityName + "<br />");
// document.write("After replacement: " + newCityName);





// yes, both of these 7 & 8 questioned's answers I google it





// Q8. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and football together.”;

// Answer
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var newMsg = message.replace(/and/g , "&");

// document.write("Before: " + message + "<br />");
// document.write("After: " + newMsg);







// Q9. Write a program that converts a string “472” to a number 472. Display the values & types in your browser.

// Answer
// var input = "472";
// document.write("Value:" + input);
// document.write("Type:" + typeof input);

// var convertedInput = +input;
// document.write("Value:" + convertedInput);
// document.write("Type:" + typeof convertedInput);





// Q10. Write a program that takes user input. Convert and show the input in capital letters.

// Answer
// var userInput = prompt();
// var intoCapi = userInput.toUpperCase();

// document.write("User input: " + userInput + "<br />");
// document.write("Upper case: " + intoCapi);





// Q11. Write a program that takes user input. Convert and show the input in title case.

// Answer
// var userInput = "javascript";

// for (let i = 1; i < userInput.length; i++) {

//     var total;
//     // var firstLetter = userInput[0].toUpperCase();
//     total += userInput[i];
// }
// document.write(userInput[0].toUpperCase() + total);
// document.write("User input: ");
// document.write("Title case: ");





// Q12. Write a program that converts the variable num to string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.






// Q13. Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .

// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64

// Answer
// var userInput = prompt("Enter user name");
// var isOK = true;

// for (let i = 0; i < userInput.length; i++) {

//     if (userInput[i] === "@" || userInput[i] === "," || userInput[i] === "." || userInput[i] === "!") {
//         alert("Please enter valid username");
//         isOK = false;
//         break;
//     }
// }

// if (isOK) {
//     alert("Nice"); 
// }





// Q14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not.
// Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability. Example:

// Answer
// var userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?").trim().toLowerCase();
// var items = ["cake", "apple pie", "cookie", "chips", "patties"];
// var isFound = false;

// for (let i = 0; i < items.length; i++) {

//     if (userInput === items[i]){
//         document.write(userInput + " is <b>available</b> at index " + i + " in our bakery");
//         isFound = true;
//         break;
//     }
// }

// if (!isFound) {
//     document.write("We are sorry. " + userInput + " is <b>not available</b> in our bakery");
// }






// Q15. Write a program to take password as an input from user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements, prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document.

// Answer
// var userInput = prompt("Create Password: \nwith number, letter and atleast 6 characters long").trim();
// var hasLetter = false;
// var hasNum = false;


// if (userInput.length < 6) {
//     document.write("Please Enter Atleast 6 character");
// } else if (userInput.charCodeAt(0) >= 48 && userInput.charCodeAt(0) <= 57) {
//     document.write("Please do not enter number in the start  <br />");
// } else {

//     for (let i = 0; i < userInput.length; i++) {
//         var easy = userInput.charCodeAt(i);

//         if ((easy >= 65 && easy <= 90) || (easy >= 97 && easy <= 122)) {
//             hasLetter = true;
//         }

//         if (easy >= 48 && easy <= 57) {
//             hasNum = true;
//         }

//         if (hasLetter && hasNum) {
//             break;
//         }
//     }

//     if (hasLetter && hasNum) {
//         document.write("Valid Password");
//     } else if (!hasLetter) {
//         document.write("Password should include letters  <br/>");
//     } else if (!hasNum) {
//         document.write("Password should include numbers  <br/>");
//     }
// }





// Q