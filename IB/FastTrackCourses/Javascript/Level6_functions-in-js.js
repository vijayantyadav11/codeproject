// You have to just implement the myFunction.

var a = parseInt(readLine().trim());
var b = parseInt(readLine().trim());
var c = parseInt(readLine().trim());

// YOUR CODE GOES HERE
function myFunction(a,b,c){return a*b*c;}


/*
var z = myFunction(a,b,c);
console.log(z);
*/





// Functions by new Keyword:

// Functions can also be defined with a built-in JavaScript function constructor called Function(). Let us see below given an example to understand it better:

// Example:
// var x = new Function("a", "b", "return a + b");
// var z = x(7, 5);
// This is similar to using var x = function (a, b) {return a + b}; So here again 12 will be stored in z. 
// Function Parameters and Arguments:

// Function parameters are the names listed in the function definition. Function arguments are the real values passed to (and received by) the function. JavaScript function definitions do not specify data types for parameters. Also, JavaScript functions do not perform type checking on the passed arguments, and the number of arguments received.

// Example:
// function functionName(parameter1, parameter2, parameter3) {
//    // code which we will be executed
// }
// If a function is called with missing arguments (less than declared), the missing values are set to undefined.