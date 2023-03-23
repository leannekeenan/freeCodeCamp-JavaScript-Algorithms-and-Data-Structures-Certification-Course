/*
Note:
the variables begin with a "q#_" to associate a commonly used variable (such as 'a') to the appropriate step in the course
*/

//51. Create a function timesFive that accepts one argument, multiplies it by 5, and returns the new value.
function timesFive(num) {
    return num * 5
}



//52.Using let or const, declare a global variable named myGlobal outside of any function. Initialize it with a value of 10.  Inside function fun1, assign 5 to oopsGlobal without using the var, let or const keywords.
/*
// Declare the myGlobal variable below this line


function fun1() {
  // Assign 5 to oopsGlobal here

}

// Only change code above this line

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
*/
// Declare the myGlobal variable below this line
let myGlobal = 10

function fun1() {
    // Assign 5 to oopsGlobal here
    oopsGlobal = 5;
  }
  
  // Only change code above this line
  
  function fun2() {
    let output = "";
    if (typeof myGlobal != "undefined") {
      output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
      output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
  }



//53. The editor has two console.logs to help you see what is happening. Check the console as you code to see how it changes. Declare a local variable myVar inside myLocalScope and run the tests.

//Note: The console will still display ReferenceError: myVar is not defined, but this will not cause the tests to fail.

/*
function myLocalScope() {
  // Only change code below this line

  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);
*/
function myLocalScope() {
    // Only change code below this line
  let myVar = myLocalScope
    console.log('inside myLocalScope', myVar);
  }
  myLocalScope();
  
  // Run and check the console
  // myVar is not defined outside of myLocalScope
  console.log('outside myLocalScope', myVar);



//54. Add a local variable to myOutfit function to override the value of outerWear with the string sweater.
/*
// Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line

  // Only change code above this line
  return outerWear;
}

myOutfit();
*/
// Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  let outerWear = 'sweater';
  // Only change code above this line
  return outerWear;
}

myOutfit();



//55. Create a function addFive without any arguments. This function adds 5 to the sum variable, but its returned value is undefined.
/*
// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line


// Only change code above this line

addThree();
addFive();
*/
// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive() {
    sum =  sum + 5
}

// Only change code above this line

addThree();
addFive();



//56. Call the processArg function with an argument of 7 and assign its return value to the variable processed.
/*
// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line

*/
// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7);



//57. Write a function nextInLine which takes an array (arr) and a number (item) as arguments. Add the number to the end of the array, then remove the first element of the array. The nextInLine function should then return the element that was removed.
/*
function nextInLine(arr, item) {
  // Only change code below this line
  
  return item;
  // Only change code above this line
}

// Setup
let testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
*/
function nextInLine(arr, item) {
    // Only change code below this line
    arr.push(item)
    // Only change code above this line
  }
  
  // Setup
  let testArr = [1, 2, 3, 4, 5];
  
  // Display code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));



//58. Modify the welcomeToBooleans function so that it returns true instead of false.
/*
function welcomeToBooleans() {
  // Only change code below this line

  return false; // Change this line

  // Only change code above this line
}
*/
function welcomeToBooleans() {
    // Only change code below this line
  
    return true; // Change this line
  
    // Only change code above this line
  }



//59.Create an if statement inside the function to return Yes, that was true if the parameter wasThatTrue is true and return No, that was false otherwise.
/*
function trueOrFalse(wasThatTrue) {
  // Only change code below this line



  // Only change code above this line

}
*/
function trueOrFalse(wasThatTrue) {
    // Only change code below this line
    if(wasThatTrue === true) {
          return 'Yes, that was true'
      }
      else if(wasThatTrue === false) {
          return 'No, that was false'
      }
    
  
    // Only change code above this line
  
  }
  


//60.Add the equality operator to the indicated line so that the function will return the string Equal when val is equivalent to 12.

/*
// Setup
function testEqual(val) {
  if (val) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);
*/
// Setup
function testEqual(val) {
    if (val == 12) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  testEqual(10);