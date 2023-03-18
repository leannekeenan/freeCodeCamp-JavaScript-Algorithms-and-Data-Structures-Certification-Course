/*
Note:
the variables begin with a "q#_" to associate a commonly used variable (such as 'a') to the appropriate step in the course
*/


//21. Convert the assignments for a, b, and c to use the += operator.
/*
let a = 3;
let b = 17;
let c = 12;

// Only change code below this line
a = a + 12;
b = 9 + b;
c = c + 7;
*/

let q21_a = 3;
let q21_b = 17;
let q21_c = 12;

q21_a += 12;
q21_b += 9;
q21_c += 7;


//22. Convert the assignments for a, b, and c to use the -= operator.
/*
let a = 11;
let b = 9;
let c = 3;

// Only change code below this line
a = a - 6;
b = b - 15;
c = c - 1;
*/
let q22_a = 11;
let q22_b = 9;
let q22_c = 3;

// Only change code below this line
q22_a -= 6;
q22_b -= 15;
q22_c -= 1;


//23. Convert the assignments for a, b, and c to use the *= operator.
/*
let a = 5;
let b = 12;
let c = 4.6;

// Only change code below this line
a = a * 5;
b = 3 * b;
c = c * 10;
*/
let q23_a = 5;
let q23_b = 12;
let q23_c = 4.6;

// Only change code below this line
q23_a *= 5;
q23_b *= 3;
q23_c *= 10;


//24. Convert the assignments for a, b, and c to use the /= operator.
/*
let a = 48;
let b = 108;
let c = 33;

// Only change code below this line
a = a / 12;
b = b / 4;
c = c / 11;
*/
let q24_a = 48;
let q24_b = 108;
let q24_c = 33;

// Only change code below this line
q24_a /= 12;
q24_b /= 4;
q24_c /= 11;

//25. Use backslashes to assign a string to the myStr variable so that if you were to print it to the console, you would see: I am a "double quoted" string inside "double quotes".
//const myStr = ""; // Change this line
const q25_myStr = "I am a \"double quoted\" string inside \"double quotes\".";

//26. Change the provided string to a string with single quotes at the beginning and end and no escape characters.  Right now, the <a> tag in the string uses double quotes everywhere. You will need to change the outer quotes to single quotes so you can remove the escape characters.
/*
const myStr = "<a href=\"http://www.example.com\" target=\"_blank\">Link</a>";
*/
const q26_myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

//27. Assign the following three lines of text into the single variable myStr using escape sequences.

/*
FirstLine
\SecondLine
ThirdLine
*/

//You will need to use escape sequences to insert special characters correctly. You will also need to follow the spacing as it looks above, with no spaces between escape sequences or words.

//Note: The indentation for SecondLine is achieved with the tab escape character, not spaces.
/* 
const myStr = ""; // Change this line
*/
const q27_myStr = "FirstLine\n\t\\SecondLine\n\ThirdLine"; // Change this line

//28. Build myStr from the strings 'This is the start'. and 'This is the end'. using the + operator. Be sure to include a space between the two strings.
//const myStr = ""; // Change this line
const q28_myStr = "This is the start. " + "This is the end."; // Change this line

//29. Build myStr over several lines by concatenating these two strings: This is the first sentence. and This is the second sentence. using the += operator. Use the += operator similar to how it is shown in the example and be sure to include a space between the two strings. Start by assigning the first string to myStr, then add on the second string.
//let myStr;
let q29_myStr = "This is the first sentence."; 
q29_myStr += "This is the second sentence.";

//30. Set myName to a string equal to your name and build myStr with myName between the strings My name is and and I am well!
/*
// Only change code below this line
const myName = "";
const myStr = "";
*/
// Only change code below this line
const q30_myName = "Leanne";
const q30_myStr = "My name is " + myName + "and I am well!";