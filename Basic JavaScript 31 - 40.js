/*
Note:
the variables begin with a "q#_" to associate a commonly used variable (such as 'a') to the appropriate step in the course
*/


//31. Set someAdjective to a string of at least 3 characters and append it to myStr using the += operator.
/*
// Change code below this line
const someAdjective = "";
let myStr = "Learning to code is ";
*/
// Change code below this line
const someAdjective = "my favorite hobby";
let q31_myStr = "Learning to code is ";

q31_myStr += someAdjective;



//32. Use the .length property to set lastNameLength to the number of characters in lastName.
/*
let lastNameLength = 0;
const lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName;
*/
// Setup
let lastNameLength = 0;
const q32_lastName = "Lovelace";

// Only change code below this line
lastNameLength = q32_lastName.length;



//33. Use bracket notation to find the first character in the lastName variable and assign it to firstLetterOfLastName.
/*
// Setup
let firstLetterOfLastName = "";
const lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName; // Change this line
*/

// Setup
let firstLetterOfLastName = "";
const q33_lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = q33_lastName[0]; // Change this line



//34. Correct the assignment to myStr so it contains the string value of Hello World using the approach shown in the example above.
/*
// Setup
let myStr = "Jello World";

// Only change code below this line
myStr[0] = "H"; // Change this line
// Only change code above this line
*/

// Setup
let q34_myStr = "Jello World";

// Only change code below this line
/*requires reassignment */
q34_myStr = "Hello World"; // Change this line

// Only change code above this line



//35. Set thirdLetterOfLastName to equal the third letter of the lastName variable using bracket notation.
/*
// Setup
const lastName = "Lovelace";

// Only change code below this line
const thirdLetterOfLastName = lastName; // Change this line
*/
// Setup
const q35_lastName = "Lovelace";

// Only change code below this line
const thirdLetterOfLastName = q35_lastName[2]; // Change this line



//36. Use bracket notation to find the last character in the lastName variable.
/*
// Setup
const lastName = "Lovelace";

// Only change code below this line
const lastLetterOfLastName = lastName; // Change this line
*/
// Setup
const lastNameq36_ = "Lovelace";

// Only change code below this line
const lastLetterOfLastName = lastNameq36_[lastNameq36_.length - 1]; // Change this line



//37. Use bracket notation to find the second-to-last character in the lastName string.
/*
// Setup
const lastName = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = lastName; // Change this line
*/
// Setup
const q37_lastName = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = q37_lastName[q37_lastName.length - 2]; // Change this line



//38. 
/*
In this challenge, we provide you with a noun, a verb, an adjective and an adverb. You need to form a complete sentence using words of your choice, along with the words we provide.

You will need to use the string concatenation operator + to build a new string, using the provided variables: myNoun, myAdjective, myVerb, and myAdverb. You will then assign the formed string to the wordBlanks variable. You should not change the words assigned to the variables.

You will also need to account for spaces in your string, so that the final sentence has spaces between all the words. The result should be a complete sentence. 
*/
/*
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
const wordBlanks = ""; // Change this line
// Only change code above this line
*/
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
const wordBlanks = 
"The " 
+ myAdjective 
+ " sweet " 
+ myNoun 
+ " always " 
+ myVerb 
+ " very " 
+ myAdverb ;
// Only change code above this line



//39.Modify the new array myArray so that it contains both a string and a number (in that order).
/*
// Only change code below this line
const myArray = [];
*/
// Only change code below this line
const q39_myArray = ['string', 1];



//40. Create a nested array called myArray.
/*
// Only change code below this line
const myArray = [];
*/
// Only change code below this line
const q40_myArray = [[]];