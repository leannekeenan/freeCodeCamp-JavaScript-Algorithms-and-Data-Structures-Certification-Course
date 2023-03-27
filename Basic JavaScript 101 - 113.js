/*
Note:
the variables begin with a "q#_" to associate a commonly used variable (such as 'a') to the appropriate step in the course
*/

//101. Modify function multiplyAll so that it returns the product of all the numbers in the sub-arrays of arr.

/*
function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line

  // Only change code above this line
  return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
*/

function multiplyAll(arr) {
    let product = 1;
    // Only change code below this line

    for(let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j ++) {
            product *= arr[i][j]
        }
    }

    // Only change code above this line
    return product;
}
  
multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);



//102. Change the while loop in the code to a do...while loop so the loop will push only the number 10 to myArray, and i will be equal to 11 when your code has finished running.

/*
// Setup
const myArray = [];
let i = 10;

// Only change code below this line
while (i < 5) {
  myArray.push(i);
  i++;
}
*/

// Setup
const myArray = [];
let i = 10;

// Only change code below this line
do {
    myArray.push(i);
    i++;
}
  
while (i < 5);



//103. Write a recursive function, sum(arr, n), that returns the sum of the first n elements of an array arr.

/*
function sum(arr, n) {
  // Only change code below this line

  // Only change code above this line
}
*/

function sum(arr, n) {
    // Only change code below this line
    if(n <= 0) {
        return 1;
    }
    else {
        return sum(arr, n - 1) + arr[n - 1];
    }
    // Only change code above this line
}



//104. 
/*
We have an array of objects representing different people in our contacts lists.

A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.

The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.

If both are true, then return the "value" of that property.

If name does not correspond to any contacts then return the string No such contact.

If prop does not correspond to any valid properties of a contact found to match name then return the string No such property.
*/

/*
// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line

  // Only change code above this line
}

lookUpProfile("Akira", "likes");
*/

// Setup
// Setup
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  function lookUpProfile(name, prop) {
    // Only change code below this line
  for(let i = 0; i < contacts.length; i++) {
    if(contacts[i].firstName === name) {
      return contacts[i][prop] || "No such property";
    }
  }
  
  return "No such contact";
    // Only change code above this line
}
  
lookUpProfile("Akira", "likes");



//105. Change randomFraction to return a random number instead of returning 0.

/*
function randomFraction() {

  // Only change code below this line

  return 0;

  // Only change code above this line
}
*/

function randomFraction() {

    // Only change code below this line
  
    return Math.random();
  
    // Only change code above this line
}



//106. Use this technique to generate and return a random whole number between 0 and 9.

/*
function randomWholeNum() {

  // Only change code below this line

  return Math.random();
}
*/

function randomWholeNum() {

    // Only change code below this line
  
    return Math.floor(Math.random() * 10);
}



//107. Create a function called randomRange that takes a range myMin and myMax and returns a random whole number that's greater than or equal to myMin, and is less than or equal to myMax, inclusive.

/*
function randomRange(myMin, myMax) {
  // Only change code below this line
  return 0;
  // Only change code above this line
}
*/

function randomRange(myMin, myMax) {
    // Only change code below this line

    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
    // Only change code above this line
}



//108. Use parseInt() in the convertToInteger function so it converts the input string str into an integer, and returns it.

/*
function convertToInteger(str) {

}

convertToInteger("56");
*/

function convertToInteger(str) {
    return parseInt(str)
}

convertToInteger("56");



//109. Use parseInt() in the convertToInteger function so it converts a binary number to an integer and returns it.

/*
function convertToInteger(str) {

}

convertToInteger("10011");
*/

function convertToInteger(str) {
    return parseInt(str, 2)// can be any number between 2 and 36
}

convertToInteger("10011");



//110. Use the conditional operator in the checkEqual function to check if two numbers are equal or not. The function should return either the string Equal or the string Not Equal.

/*
function checkEqual(a, b) {

}

checkEqual(1, 2);
*/

function checkEqual(a, b) {
    return a === b ? "Equal" : "Not Equal";
}

checkEqual(1, 2);



//111. In the checkSign function, use multiple conditional operators - following the recommended format used in findGreaterOrEqual - to check if a number is positive, negative or zero. The function should return positive, negative or zero.

/*
function checkSign(num) {

}

checkSign(10);
*/

function checkSign(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero"; 
}

checkSign(10);



//112. We have defined a function called countdown with one parameter (n). The function should use recursion to return an array containing the integers n through 1 based on the n parameter. If the function is called with a number less than 1, the function should return an empty array. For example, calling this function with n = 5 should return the array [5, 4, 3, 2, 1]. Your function must use recursion by calling itself and must not use loops of any kind.

/*// Only change code below this line
function countdown(n){
  return;
}
// Only change code above this line

*/

// Only change code below this line
function countdown(n){
    if(n < 1) {
        return [];
    }
    else {
        const count = countdown(n - 1);
        count.unshift(n)

        return count;
    }
  }
  // Only change code above this line

  



//113. We have defined a function named rangeOfNumbers with two parameters. The function should return an array of integers which begins with a number represented by the startNum parameter and ends with a number represented by the endNum parameter. The starting number will always be less than or equal to the ending number. Your function must use recursion by calling itself and not use loops of any kind. It should also work for cases where both startNum and endNum are the same.

/*
function rangeOfNumbers(startNum, endNum) {
  return [];
};
*/

function rangeOfNumbers(startNum, endNum) {
   if(endNum < startNum) {
    return [];
   }
   else {
    const num = rangeOfNumbers(startNum, endNum - 1);
    num.push(endNum);
    return num;
   }
  };


