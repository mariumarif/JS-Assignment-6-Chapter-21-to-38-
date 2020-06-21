//// ================================================
//// ASSIGNMENT OF CHAPTERS NO. 21 - 25 (JAVASCRIPT)
//// ================================================
//// (STRING METHODS)

//// QUESTION NO. 1 : 
//// Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name.

//// SOLUTION :

// var firstName = prompt("Enter your first name","Your first name");
// var lastName = prompt("Enter your last name", "Your last name");
// var fullName = firstName + " " + lastName;
// alert("Assalam-o-Alaikum" + " " + fullName + "!");

//// ******************************************************************************************

//// QUESTION NO. 2 :
//// Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser.

//// SOLUTION :

// var str = prompt("Enter your favorite mobile phone model");
// var numOfCharsInStr = str.length;
// document.write("My favorite phone is: " + str + "<br>")
// document.write("Length of string: " + numOfCharsInStr)

//// ******************************************************************************************

//// QUESTION NO. 3 :
//// Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser .

//// SOLUTION :

// var str = "Pakistani";
// var indexOfN = str.indexOf("n");
// document.write("String: Pakistani" + "<br>")
// document.write("Index of 'n': " + indexOfN)

//// ******************************************************************************************

////  QUESTION NO. 4 :
//// Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.

//// SOLUTION :

// var str = "Hello World";
// var lastIndexOfN = str.lastIndexOf("l");
// document.write("String: Hello World" + "<br>")
// document.write("Last index of 'l': " + lastIndexOfN)

//// ******************************************************************************************

////  QUESTION NO. 5 :
//// Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.

//// SOLUTION :

// var str = "Pakistani";
// var charAt3 =str.charAt(3);
// document.write("String: Pakistani" + "<br>")
// document.write("Character at index 3: " + charAt3)

//// ******************************************************************************************

//// QUESTION NO. 6:
//// Repeat Q1 using string concat() method.

//// SOLUTION : 

// var firstName = prompt("Enter your first name","Your first name");
// var lastName = prompt("Enter your last name", "Your last name");
// var fullName = firstName.concat(" " , lastName);
// alert("Assalam-o-Alaikum" + " " + fullName + "!");

//// ******************************************************************************************

//// QUESTION NO.7:
//// Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.

//// SOLUTION :

// var city = "Hyderabad";
// var replacedCity = city.replace("Hyder", "Islam");
// document.write("City: " + city+ "<br>");
// document.write("After replacement: " + replacedCity)

//// ******************************************************************************************

//// QUESTION NO. 8:
//// Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.

//// SOLUTION:

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var replacedMsg = message.replace(/and/g, "&");
// document.write("Original Message: " + message + "<br>");
// document.write("Modified Message: " + replacedMsg);

//// ******************************************************************************************

//// QUESTION NO. 9:
//// Write a program that converts a string “472” to a number 472. Display the values & types in your browser.

//// SOLUTION:

// var numStr = "472";
// var a = typeof(numStr);
// var numInt = parseInt(numStr);
// var b = typeof(numInt);
// document.write("Value: " + numStr + "<br>");
// document.write("Type: " + a + "<br>");
// document.write("Value: " + numInt + "<br>");
// document.write("Type: " + b);

//// ******************************************************************************************

//// QUESTION NO. 10:
//// Write a program that takes user input. Convert and show the input in capital letters.

//// SOLUTION:

// var inp = prompt("Enter any noun in lower case");
// var inpUpperCase = inp.toUpperCase();
// alert("Upper Case: " + inpUpperCase);

//// ******************************************************************************************

//// QUESTION NO. 11:
//// Write a program that takes user input. Convert and show the input in title case.

//// SOLUTION:

// var x = prompt("Enter any noun in lower case");
// var firstChar = x.slice(0,1);
// var remainingChars = x.slice(1);
// var upperCase = firstChar.toUpperCase();
// var lowerCase = remainingChars.toLowerCase();
// var finalCase = upperCase + lowerCase;
// alert("Title Case: " + finalCase);

//// ******************************************************************************************

//// QUESTION NO. 12:
//// Write a program that converts the variable num to string.
//// Remove the dot to display “3536” display in your browser.

//// SOLUTION:

// var num = 35.36 ;
// var numToString = num.toString();
// var a1 = numToString.split(".")[0]; ///before
// var a2 = numToString.split(".")[1]; ///after
// var a = a1 + a2;
// document.write("Number : ", num, "<br>");
// document.write("Type : ", typeof(num), "<br>");
// document.write("Number : ", numToString, "<br>");
// document.write("Type : ", typeof(numToString), "<br>");
// document.write("Number after removing dot : ", a);

//// ******************************************************************************************

//// QUESTION NO. 13:
//// Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username.

//// SOLUTION:

// var username = prompt("Enter your username");
// var check = "n";
// var whileVar = 0;
// while(whileVar != 1){
//     for (var i = 0; i <= username.length; i++){
//         var a = username.charCodeAt(i);
//         if(a === 44){
//             check = "y";
//         }
//         if(a === 33){
//             check = "y";
//         }
//         if(a === 46){
//             check = "y";    
//         }
//         if(a === 64){
//             check = "y";    
//         }
//     }
//     if(check === "y"){
//         alert("Please enter a valid username");
//         var username = prompt("Enter your username");
//         whileVar = 0;
//     }
//     else{
//         whileVar = 1;
//     }
// }
// alert(username)

//// ******************************************************************************************

//// QUESTION NO. 14:
//// You have an array
//// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
//// Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not.
//// Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability.

//// SOLUTION:

// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var input = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?", "Write it down here")
// var inputLowerCase = input.toLowerCase();
// for (var i = 0; i <= A.length ; i++){
//     if(inputLowerCase == A[i]){
//         alert(input.toUpperCase() + ' is available at index ' + i + ' in our bakery.');
//         var check = 'y';
//     }
// }
// if(check != 'y'){
//     alert('We are sorry! ' + input.toUpperCase() + ' is not available in our bakery.');
// }

//// ******************************************************************************************

//// QUESTION NO. 15:
//// Write a program to take password as an input from user. The password must qualify these requirements:
//// a. It should contain alphabets and numbers
//// b. It should not start with a number
//// c. It must at least 6 characters long
//// If the password does not meet above requirements, prompt the user to enter a valid password.
//// For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document.

//// SOLUTION:

// var pas=prompt("Enter Password ");
// var s=pas.length;
  
// if(s<6){
//     alert("Password should be atleast 6 characters long");
// }
// else if(pas[0]>='0' && pas[0] <='9'){
//     alert("Password should not start with a number");
// }

//// ******************************************************************************************

//// QUESTION NO. 16:
//// Write a program to convert the following string to an array using string split method. Display the elements of array in your browser.

//// SOLUTION:

// var university = "University of Karachi";
// var splitted = university.split("");
// for(var i = 0; i < splitted.length; i++){
//     document.write(splitted[i] + "<br>");
// }

//// ******************************************************************************************

//// QUESTION NO. 17:
//// Write a program to display the last character of a user input.

//// SOLUTION:

// var userInput = prompt("Write something");
// var lengthOfInput = userInput.length;
// var lastCharOfInput = userInput.slice(lengthOfInput-1 , lengthOfInput);
// document.write('User input: ' + userInput + '<br>')
// document.write('Last character of input: ' + lastCharOfInput);

//// ******************************************************************************************

//// QUESTION NO. 18:
//// You have a string “The quick brown fox jumps over the lazy dog”. 
////Write a program to count number of occurrences of word “the” in given string.

//// SOLUTION:

// var str = "The quick brown fox jumps over the lazy dog";
// var strToLowerCase = str.toLowerCase();
// var count = 0;
// for(var i = 0; i < str.length; i++){
//     var a = strToLowerCase.slice(i, i+3);
//     if(a === "the"){
//         count++;
//     }
// }
// document.write('Text: The quick brown fox jumps over the lazy dog. <br>');
// document.write("There are " + count + " occurence(s) of word 'the'.");

//// ******************************************************************************************

//// ================================================
//// ASSIGNMENT OF CHAPTERS NO. 26 - 30 (JAVASCRIPT)
//// ================================================
//// (MATH METHODS)

//// QUESTION NO. 1 : 
//// Write a program that takes a positive integer from user & display the following in your browser.
//// a. number
//// b. round off value of the number 
//// c. floor value of the number
//// d. ceil value of the number

//// SOLUTION :

// var inputNum = prompt("Enter a positive integer number");
// var check = 'n'
// while(check != 'y'){
//     if(inputNum > 0){
//         check = 'y';
//         var roundOff = Math.round(inputNum)
//         // // var roundOff = parseInt(inputNum);
//         var floorValue = Math.floor(inputNum);
//         var ceilValue = Math.ceil(inputNum);
//         document.write('number: ' + inputNum + '<br>');
//         document.write('round off value: ' + roundOff + '<br>')
//         document.write('floor value: ' + floorValue + '<br>')
//         document.write('ceil value: ' + ceilValue)
//     }
//     else{
//         alert("You have entered an invalid number, please enter a positive integer number")
//         var inputNum = prompt("Enter a positive integer number");
//     }
// }

//// ***************************************************************************************** 

//// QUESTION NO. 2 :
//// Write a program that takes a negative floating point number from user & display the following in your browser.
//// a. number
//// b. round off value of the number
//// c. floor value of the number
//// d. ceil value of the number

//// SOLUTION:

// var inputNum = prompt("Enter a negative floating point number");
// var check = 'n'
// while(check != 'y'){
//     if(inputNum < 0){
//         check = 'y';
//         var roundOff = Math.round(inputNum)
//         var floorValue = Math.floor(inputNum);
//         var ceilValue = Math.ceil(inputNum);
//         document.write('number: ' + inputNum + '<br>');
//         document.write('round off value: ' + roundOff + '<br>')
//         document.write('floor value: ' + floorValue + '<br>')
//         document.write('ceil value: ' + ceilValue)
//     }
//     else{
//         alert("You have entered an invalid number, please enter a negative floating point number")
//         var inputNum = prompt("Enter a negative floating point number");
//     }
// }

//// ***************************************************************************************** 

//// QUESTION NO. 3 :
//// Write a program that displays the absolute value of a number.

//// SOLUTION:

// var anyValue = prompt("Enter any +ve or -ve number");
// var absoluteValue = Math.abs(anyValue);
// document.write('The absolute value of ' + anyValue + ' is ' + absoluteValue);

//// ***************************************************************************************** 

//// QUESTION NO. 4:
//// Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.

//// SOLUTION:

// var diceRoll = Math.floor( Math.random() * 6 ) + 1;
// document.write('random dice value: ' + diceRoll);

//// ***************************************************************************************** 

//// QUESTION NO. 5:
//// Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser.

//// SOLUTION:

// var coinToss = Math.floor( Math.random() * 2 ) + 1;
// if(coinToss === 1){
//     document.write(coinToss + '<br>' + 'random coin value: TAILS')
// }
// if(coinToss === 2){
//     document.write(coinToss + '<br>' + 'random coin value: HEADS')
// }

//// ***************************************************************************************** 

//// QUESTION NO. 6:
//// Write a program that shows a random number between 1 and 100 in your browser.

//// SOLUTION:

// var randomNo = Math.floor( Math.random() * 100 ) + 1;
// document.write('random number between 1 and 100: ' + randomNo);

//// ***************************************************************************************** 

//// QUESTION NO. 7:
//// Write a program that asks the user about his weight. Parse the user input and display his weight in your browser.

//// SOLUTION:

// var inp= prompt("Enter weight in kgs");
// var input= parseInt(inp);
// alert("The weight of user is " + input + " kilograms");

//// ***************************************************************************************** 

//// QUESTION NO. 8:
//// Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input equals the secret number, congratulate the user.

//// SOLUTION:

// var randomSecretNumber = Math.floor( Math.random() * 10 ) + 1;
// var num1 = +prompt("Enter a number between 1 and 10");
// if(num1 === randomSecretNumber){
//     alert("Congratulations!")
// }
// else{
//     alert("Oops! Try again.")
// }

//// ***************************************************************************************** 

//// ================================================
//// ASSIGNMENT OF CHAPTERS NO. 31 - 34 (JAVASCRIPT)
//// ================================================
//// (DATE METHODS)

//// QUESTION NO. 1 :
//// Write a program that displays current date and time in your browser.

//// SOLUTION: 

// var rightNow = new Date();
// document.write(rightNow);

//// ***************************************************************************************** 

//// QUESTION NO. 2 :
//// Write a program that alerts the current month in words. For example December.

//// SOLUTION:

// var monthNames = ["January", "Febraury", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var now = new Date();
// var theMonth = now.getMonth();
// var monthInWords = monthNames[theMonth];
// document.write('Current Month: ' + monthInWords);

//// ***************************************************************************************** 

//// QUESTION NO. 3 :
//// Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun.

//// SOLUTION:

// var today = new Date();
// var todayString = today.toString();
// var day = todayString.slice(0,3);
// document.write('Today is '+ day);

//// ***************************************************************************************** 

//// QUESTION NO. 4 :
//// Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.

//// SOLUTION:

// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var today= new Date();
// var todayDay = today.getDay();
// var todayDayName = dayNames[todayDay];
// if(todayDay === 0 || todayDay === 6){
//     alert("It's Fun day");
// }
// else{
//     alert('Today is ' + todayDayName);
// }

//// ***************************************************************************************** 

//// QUESTION NO. 5 :
//// Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month else shows “Last days of the month”.

//// SOLUTION:

// var today = new Date();
// var todayDate = today.getDate();
// if(todayDate >= 1 && todayDate <= 15){
//     document.write("First fifteen days of the month");
// }
// else{
//     document.write("Last days of the month");
// }

//// ***************************************************************************************** 

//// QUESTION NO. 6:
//// Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that hasn't been declared beforehand. Use any variable you like to represent the Date object.

//// SOLUTION:

// var d = new Date();
// var millsSince = d.getTime();
// var minsSince = millsSince / (1000 * 60);
// document.write('Current Date: ',d, '<br>');
// document.write('Elapsed milliseconds since January 1, 1970: ',millsSince , '<br>');
// document.write('Elapsed minutes since January 1, 1970: ',minsSince);

//// ***************************************************************************************** 

//// QUESTION NO. 7:
//// Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.

//// SOLUTION:

// var d = new Date();
// var hour = d.getHours();
// if(hour >= 0 && hour <= 11){
//     document.write("It's AM");
// }
// else{
//     document.write("It's PM");
// }

//// ***************************************************************************************** 

//// QUESTION NO. 8:
//// Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate.

//// SOLUTION:

// var laterDate = new Date("December 31, 2020");
// document.write(laterDate);

//// ***************************************************************************************** 

//// QUESTION NO. 9:
//// Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan?
//// Note: 1st Ramadan was on Friday, 24 April 2020

//// SOLUTION:

// var date = new Date();
// var ramzaanDate = new Date("April 24, 2020");
// var msDate = date.getTime();
// var msRamzaanDate = ramzaanDate.getTime();
// var msDiff = msDate - msRamzaanDate;
// var dayDiff = msDiff / (1000*60*60*24);
// dayDiff = Math.floor(dayDiff);
// document.write(dayDiff + ' days have passed since 1st Ramadan, 2020.');

//// ***************************************************************************************** 

//// QUESTION NO. 10:
//// Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015.

//// SOLUTION:

// var d = new Date();
// var beginningOf2015 = new Date("January 1, 2015 00:00:00");
// var msDiff = d.getTime() - beginningOf2015.getTime();
// var seconds = Math.floor(msDiff / 1000);
// document.write("On reference date " + d + ", " + seconds + " seconds had passed since beginning of 2015");

//// ***************************************************************************************** 

//// QUESTION NO. 11:
//// Create a Date object for the current date and time. Extract the hours, reset the date object an hour ahead and finally display the date object in your browser.

//// SOLUTION:

// var d = new Date(); //current date and time
// document.write("Current date and time is : " + d + "<br>" + "<br>");
// var hour = d.getHours(); //current hour number
// d.setHours(++hour); //resetting the date obj an hour ahead
// document.write("After resetting the date object an hour ahead : " + d);

//// ***************************************************************************************** 

//// QUESTION NO. 12:
//// Write a program that creates a date object and show the date in an alert box that is reset to 100 years back?

//// SOLUTION:

// var d = new Date();
// document.write("Current date : " + d + "<br>" + "<br>");
// var a = d.getFullYear();
// var a = a - 100;
// d.setFullYear(a);
// document.write("100 years back, it was : " + d);

//// ***************************************************************************************** 

//// QUESTION NO. 13:
//// Write a program to ask the user about his age. Calculate and show his birth year in your browser.

//// SOLUTION: 

// var today = new Date();
// var year = today.getFullYear();
// var age = +prompt("What's your age?");
// var diff = year - age;
// document.write("Your age is " + age + "<br>");
// document.write("Your birth year is " + diff);

//// ***************************************************************************************** 

//// QUESTION NO. 14:
//// Write a program to generate your K-Electric bill in your browser. All the amounts should be rounded off to 2 decimal places. Display the following fields:
//// a. Customer Name
//// b. Current Month
//// c. Number of units
//// d. Charges per unit
//// e. Net Amount Payable (within Due Date)
//// f. Late Payment Surcharge
//// g. Gross Amount Payable (after Due Date)
//// Where,
//// Net Amount Payable (within Due Date) = Number of units * Charges per unit
//// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge

//// SOLUTION:

// var numOfUnits = 500;
// var chargesPerUnit = 18.83;
// var latePayment = 500;
// var netAmount = numOfUnits * chargesPerUnit;
// var grossAmount = netAmount + latePayment;

// document.write("<h2>K-Electric Bill</h2>");

// document.write("Customer Name: <b>Marium Arif</b> </br>");
// document.write("Month: <b>June</b> </br>");
// document.write("Number of units: <b>" + numOfUnits + "</b> </br>");
// document.write("Charges per unit: <b>" + chargesPerUnit + "</b></br></br>");
// document.write("Net Amount Payable (within Due Date): <b>" + netAmount + "</b></br>");
// document.write("Late Payment Surcharge: <b>" + latePayment + "</b> </br>");
// document.write("Gross Amount Payable (after Due Date): <b>" + grossAmount + "</b></br>");

//// ***************************************************************************************** 

//// ================================================
//// ASSIGNMENT OF CHAPTERS NO. 35 - 38 (JAVASCRIPT)
//// ================================================
//// (FUNCTIONS)

//// QUESTION NO. 1 :
//// Write a function that displays current date & time in your browser.

//// SOLUTION: 

// function tellTime() {
//     var now = new Date();
//     document.write(now);
// }

// tellTime();

//// ***************************************************************************************** 

//// QUESTION NO. 2 :
//// Write a function that takes first & last name and then it greets the user using his full name.

//// SOLUTION:

// function name(){
//     var firstName = prompt("Enter your first name");
//     var lastName = prompt("Enter your last name");
//     document.write("Hello " + firstName + " " + lastName + "!");
// }

// name();

//// ***************************************************************************************** 

//// QUESTION NO. 3 :
//// Write a function that adds two numbers (input by user) and returns the sum of two numbers.

//// SOLUTION:

// function add(){
//     var num1 = Number(prompt("Enter first number"));
//     var num2 = Number(prompt("Enter second number"));
//     var sum = num1 + num2 ;
//     return sum;
// }

// var a = add();
// document.write("The sum of the two numbers is " + a);

//// ***************************************************************************************** 

//// QUESTION NO. 4 :
//// Calculator:
//// Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser.

//// SOLUTION:

// function Calculator(num1,num2,operator){
//     var result = 0;
//     switch(operator){
//         case "+":
//             result = num1 + num2;
//             break;
//         case "-":
//             result = num1 - num2;
//             break;
//         case "*":
//             result = num1 * num2;
//             break;
//         case "/":
//             result = num1 / num2;
//             break;
//         default:
//             alert("You have entered an invalid operator");
//     }
//     return result;
// }

// var num1 = +prompt("Enter first number");
// var operator = prompt("Enter operation to be performed on both numbers e.g +,-,*,/");
// var num2 = +prompt("Enter second number");

// var result = Calculator(num1,num2,operator);
// document.write(num1 + " " + operator + " " + num2 + " = " + result);

//// ***************************************************************************************** 

//// QUESTION NO. 5 :
//// Write a function that squares its argument.

//// SOLUTION:

// function square(x){
//     var squareOfNum = Math.pow(x , 2)
//     return squareOfNum;
// }

// var anyNum = +prompt("Enter a number");
// var b = square(anyNum);
// document.write("Square of " + anyNum + " is " + b);

//// ***************************************************************************************** 

//// QUESTION NO. 6 :
//// Write a function that computes factorial of a number.

//// SOLUTION : 

// function factorial(n){
//     var result = 1;
//     for(var i = 2; i <= n; i++){
//         result = result * i ;
//     }
//     return result;
// }

// var number = +prompt("Enter any +ve number");
// var factorialOfNumber = factorial(number);
// document.write(factorialOfNumber);

//// ***************************************************************************************** 

//// QUESTION NO. 7:
//// Write a function that take start and end number as inputs& display counting in your browser.

//// SOLUTION:

// function counting(start,end){
//     if(start < end){
//         for(var i = start; i <= end ; i++){
//         document.write(i + "<br>");
//         }
//     }
//     else{
//         for(var i = end; i <= start ; i++){
//             document.write(i + "<br>");
//         }
//     }
// }

// var num1 = +prompt("Enter start number");
// var num2 = +prompt("Enter end number");
// counting(num1, num2);

//// ***************************************************************************************** 

//// QUESTION NO. 8:
//// Write a nested function that computes hypotenuse of a right angle triangle.
//// Hypotenuse2 = Base2 + Perpendicular2
//// Take base and perpendicular as inputs.
//// Outer function : calculateHypotenuse()
//// Inner function: calculateSquare()

//// SOLUTION:

// function calculateHypotenuse(base, perp){

//     var base = calculateSquare(base);
//     var perp = calculateSquare(perp);
//     var hyp = Math.sqrt(base + perp);
//     return hyp;

//     function calculateSquare(num){
//         var sq = num * num;
//         return sq;
//     }
// }

// var x = +prompt("Enter value of Base");
// var y = +prompt("Enter value of Perpendicular");
// var ans = calculateHypotenuse(x,y);
// document.write("Base is " + x + "<br>");
// document.write("Perpendicular is " + y + "<br>");
// document.write("Hypotenuse is " + ans);

//// ***************************************************************************************** 

//// QUESTION NO. 9:
//// Write a function that calculates the area of a rectangle.
////  A = width * height
////  Pass width and height in following manner:
//// i. Arguments as value
//// ii. Arguments as variables

//// SOLUTION:

//// i)

// function areaOfRectangle(w,h){
//     var area = w * h;
//     return area;
// }
// var a = areaOfRectangle(10,10);
// document.write("Area of the rectangle is: " + a + "<br>");

///// ii)

// function areaOfRectangle(w,h){
//     var area = w * h;
//     return area;
// }
// var width = +prompt("Enter width of the rectangle");
// var height = +prompt("Enter height of the rectangle");
// var a = areaOfRectangle(width,height);
// document.write("Area of the rectangle is: " + a);

//// ***************************************************************************************** 

//// QUESTION NO. 10:
//// Write a JavaScript function that checks whether a passed string is palindrome or not?

//// SOLUTION:

// function palindrome(str) {

//     var len = str.length;
//     var mid = Math.floor(len/2);

//     for ( var i = 0; i < mid; i++ ) {
//         if (str[i] !== str[len - 1 - i]) {
//             return false;
//         }
//     }
//     return true;
// }

// var str = prompt("Enter any string");
// var a = palindrome(str);
// if(a === true){
//     document.write(str + " is a palindrome word.");
// }
// else{
//     document.write(str + " is not a palindrome word.");
// }

//// ***************************************************************************************** 

//// QUESTION NO. 11:
//// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
//// EXAMPLE STRING : 'the quick brown fox'
//// EXPECTED OUTPUT : 'The Quick Brown Fox'

//// SOLUTION:

// function uppercase(str)
// {
//   var array1 = str.split(' ');
//   var newarray1 = [];
    
//   for(var x = 0; x < array1.length; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
//   return newarray1.join(' ');
// }

// var str = prompt("Enter any string in lower case");
// document.write(uppercase(str));

                           ///// Another ////

// function titleCase(str) {

//     var splitStr = str.toLowerCase().split(' ');
//     for (var i = 0; i < splitStr.length; i++) {
//         splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
//     }
//     return splitStr.join(' '); 

//  }

//   document.write("<br>")
//   document.write(titleCase("I'm a little tea pot"));

//// ***************************************************************************************** 

//// QUESTION NO. 12:
//// Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
//// EXAMPLE STRING : 'Web Development Tutorial'
//// EXPECTED OUTPUT : 'Development'

//// SOLUTION:

// function find_longest_word(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }

// document.write(find_longest_word('Web Development Tutorial'));

                              //// Another ////

// function longestWord(string) {
//     var str = string.split(" ");
//     var longest = 0;
//     var word = null;
//     for (var i = 0; i < str.length ; i++) {
//         if (longest < str[i].length) {
//             longest = str[i].length;
//             word = str[i];
//         }
//     }
//     return word;
// }
// var str = prompt("Enter any sentence");
// document.write("<br>")
// document.write(longestWord(str));

//// ***************************************************************************************** 

//// QUESTION NO. 13:
//// Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.
//// Sample arguments : 'JSResourceS.com', 'o'

//// SOLUTION:

// function char_count(str, letter) 
// {
//  var letter_Count = 0;
//  for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }

// document.write(char_count('JSResourceS.com', 'o'));

//// ***************************************************************************************** 

//// QUESTION NO. 14:
//// The Geometrizer
//// Create 2 functions that calculate properties of a circle, using the definitions here.
//// Create a function called calcCircumference:
//// • Pass the radius to the function.
//// • Calculate the circumference based on the radius, and output
//// "The circumference is NN".
//// Create a function called calcArea:
//// • Pass the radius to the function.
//// • Calculate the area based on the radius, and output "The area is NN".
//// Circumference of circle = 2πr
//// Area of circle = πr2

//// SOLUTION:

// function calcCircumference(radius) {
//     var c = 2 * Math.PI * radius;
//     document.write("The radius is " + radius + ". ");
//     document.write("The circumfrence is " + c + "." + "<br>");
//   }
//   function calcArea(radius) {
//     var a = Math.PI * (radius * radius);
//     document.write("The radius is " + radius + ". ");
//     document.write("The area is " + a + ".");
//   }
  
//   calcCircumference(10);
//   calcArea(10);

//// ***************************************************************************************** 
////                              END