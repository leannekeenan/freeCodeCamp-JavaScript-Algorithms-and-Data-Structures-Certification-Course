/*
Note:
the variables begin with a "q#_" to associate a commonly used variable (such as 'a') to the appropriate step in the course
*/



//41. Create a variable called myData and set it to equal the first value of myArray using bracket notation.
/*
const myArray = [50, 60, 70];
*/
const q41_myArray = [50, 60, 70];
const q_41myData = q41_myArray[0];



//42. Modify the data stored at index 0 of myArray to a value of 45.
/*
// Setup
const myArray = [18, 64, 99];

// Only change code below this line
*/
// Setup
const q42_myArray = [18, 64, 99];

// Only change code below this line
q42_myArray[0] = 45;
console.log(q42_myArray)

//43. Using bracket notation select an element from myArray such that myData is equal to 8.
/*
const myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

const myData = myArray[0][0];
*/
const q43_myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  
const q43_myData = q43_myArray[2][1];



//44. Push ["dog", 3] onto the end of the myArray variable.
/*
// Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line

*/
// Setup
const q44_myArray = [["John", 23], ["cat", 2]];
// Only change code below this line
q44_myArray.push(["dog", 3]);



//45. Use the .pop() function to remove the last item from myArray and assign the popped off value to a new variable, removedFromMyArray.
/*
// Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line

*/
// Setup
const q45_myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
const q45_removedFromMyArray = myArray.pop();

console.log(q45_myArray);
console.log(q45_removedFromMyArray);



//46.Use the .shift() function to remove the first item from myArray and assign the "shifted off" value to a new variable, removedFromMyArray.
/*
// Setup
const myArray = [["John", 23], ["dog", 3]];

// Only change code below this line

*/
// Setup
const q46_myArray = [["John", 23], ["dog", 3]];

// Only change code below this line
const q46_removedFromMyArray = q46_myArray.shift();
console.log(q46_myArray)
console.log(q46_removedFromMyArray)



//47.Add ["Paul", 35] to the beginning of the myArray variable using unshift().
/*
// Setup
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line
*/

// Setup
const q47_myArray = [["John", 23], ["dog", 3]];
q47_myArray.shift();

// Only change code below this line
q47_myArray.unshift(["Paul", 35]);



//48. There should be at least 5 sub-arrays in the list.
/*
const myList = [];
*/
const myList = [["apple", .50], ["apple", .50], ["apple", .50], ["apple", .50], ["apple", .50]];



//49. //Create a function called reusableFunction which prints the string Hi World to the dev console.
      //Call the function.
function reusableFunction() {
    console.log("Hi World")
}
reusableFunction();



//50. // Create a function called functionWithArgs that accepts two arguments and outputs their sum to the dev console.
      // Call the function with two numbers as arguments.

      function functionWithArgs(arg1, arg2) {
        console.log(arg1 +arg2);
      }
     
      functionWithArgs(1, 2)