//21. There are two string-related functions in the editor. Export both of them using the method of your choice.

/*
const uppercaseString = (string) => {
  return string.toUpperCase();
}

const lowercaseString = (string) => {
  return string.toLowerCase()
}
*/

export const uppercaseString = (string) => {
    return string.toUpperCase();
}
  
export const lowercaseString = (string) => {
    return string.toLowerCase()
}



//22. Add the appropriate import statement that will allow the current file to use the uppercaseString and lowercaseString functions you exported in the previous lesson. These functions are in a file called string_functions.js, which is in the same directory as the current file.

/*
// Only change code above this line

uppercaseString("hello");
lowercaseString("WORLD!");
*/

// Only change code above this line

uppercaseString("hello");
lowercaseString("WORLD!");

import {uppercaseString, lowercaseString} from './string_functions.js';



//23. The code in this file requires the contents of the file: string_functions.js, that is in the same directory as the current file. Use the import * as syntax to import everything from the file into an object called stringFunctions.

/*
// Only change code above this line

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");
*/
import * as stringFunctions from "./string_functions.js";

// Only change code above this line

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");




//24. The following function should be the fallback value for the module. Please add the necessary code to do so.



/*
function subtract(x, y) {
  return x - y;
}
*/

export default function subtract(x, y) {
    return x - y;
}



//25. In the following code, import the default export from the math_functions.js file, found in the same directory as this file. Give the import the name subtract.

/*
// Only change code above this line

subtract(7,4);
*/

import subtract from "./math_functions.js";  
// Only change code above this line

subtract(7,4);



//26. Create a new promise called makeServerRequest. Pass in a function with resolve and reject parameters to the constructor.

/* */

const q26_makeServerRequest = new Promise ((resolve, reject) => {

})



//27. Make the promise handle success and failure. If responseFromServer is true, call the resolve method to successfully complete the promise. Pass resolve a string with the value We got the data. If responseFromServer is false, use the reject method instead and pass it the string: Data not received.



/*
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer;
    
  if(responseFromServer) {
    // Change this line
  } else {  
    // Change this line
  }
});
*/

const q27_makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer represents a response from a server
    let responseFromServer;
      
    if(responseFromServer) {
      // Change this line
      resolve("We got the data");
    } else {  
      // Change this line
      reject("Data not received");
    }
  });



//28. Add the then method to your promise. Use result as the parameter of its callback function and log result to the console.

/*
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = true;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});
*/

const q28_makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer is set to true to represent a successful response from a server
    let responseFromServer = true;
      
    if(responseFromServer) {
      resolve("We got the data");
    } else {  
      reject("Data not received");
    }
  });

q28_makeServerRequest.then(result => {
    console.log(result);
})

//29. Add the catch method to your promise. Use error as the parameter of its callback function and log error to the console.

/*
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to false to represent an unsuccessful response from a server
  let responseFromServer = false;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

makeServerRequest.then(result => {
  console.log(result);
});
*/

const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer is set to false to represent an unsuccessful response from a server
    let responseFromServer = false;
      
    if(responseFromServer) {
      resolve("We got the data");
    } else {  
      reject("Data not received");
    }
  });
  
  makeServerRequest.then(result => {
    console.log(result);
  });

  makeServerRequest.catch(error => {
    console.log(error)
  });


