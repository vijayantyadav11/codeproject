var Str = readLine().trim();
var patt = readLine().trim();
// YOUR CODE GOES HERE
let newReg = new RegExp(patt, 'i');
console.log(newReg.test(Str));



// Using search(): The search() method searches a string for a specified value and returns the position of the match.
// Using replace(): The replace() method replaces a specified value with another value in a string.
// Some of the REGEX patterns are:

// [abc]: Find any of the characters between the brackets.
// [0-9]: Find any of the digits between the brackets.
// (x|y): Find any of the alternatives separated with |.
// \d: Find a digit.
// \s: Find a whitespace character.
// \b: Find a match at the beginning of a word like this: \bWORD, or at the end of a word like this: WORD\b.
// \uxxxx: Find the Unicode character specified by the hexadecimal number xxxx.
// test(): We have a special feature in JavaScript of test() method. It searches a string for a pattern, and returns true or false, depending on the result.
// Also please note we may use let new RegExp(pattern, “modifier”) to create our own REGEX with required pattern and modifier.