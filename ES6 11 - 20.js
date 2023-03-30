//11. Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables lowToday and highToday the values of today.low and today.high from the LOCAL_FORECAST object.

/*
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

// Only change code below this line
  
const lowToday = LOCAL_FORECAST.today.low;
const highToday = LOCAL_FORECAST.today.high;

// Only change code above this line
*/

const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
};
  
// Only change code below this line
    
//const lowToday = LOCAL_FORECAST.today.low;
//const highToday = LOCAL_FORECAST.today.high;
const{ today: {low: lowToday, high: highToday}} = LOCAL_FORECAST;
  
// Only change code above this line



//12. Use destructuring assignment to swap the values of a and b so that a receives the value stored in b, and b receives the value stored in a.

/*
let a = 8, b = 6;
// Only change code below this line
*/

let a = 8, b = 6;
// Only change code below this line
[a, b] = [b, a]


//13. Use a destructuring assignment with the rest syntax to emulate the behavior of Array.prototype.slice(). removeFirstTwo() should return a sub-array of the original array list with the first two elements omitted.

/*
function removeFirstTwo(list) {
  // Only change code below this line
  const shorterList = list; // Change this line
  // Only change code above this line
  return shorterList;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);
*/

function removeFirstTwo(list) {
    // Only change code below this line
    const [first, second, ...shorterList] = list; // Change this line
    // Only change code above this line
    return shorterList;
}
  
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);



//14. Use destructuring assignment within the argument to the function half to send only max and min inside the function.  set the return value to be half

/*
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// Only change code below this line
const half = (stats) => (stats.max + stats.min) / 2.0; 
// Only change code above this line
*/

const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  };
  
// Only change code below this line
//const half = (stats) => (stats.max + stats.min) / 2.0; 
const half = ({max, min}) => (max + min) / 2.0
// Only change code above this line



//15.

/*
Use template literal syntax with backticks to create an array of list element (li) strings. Each list element's text should be one of the array elements from the failure property on the result object and have a class attribute with the value text-warning. The makeList function should return the array of list item strings.

Use an iterator method (any kind of loop) to get the desired output (shown below).

[
  '<li class="text-warning">no-var</li>',
  '<li class="text-warning">var-on-top</li>',
  '<li class="text-warning">linebreak</li>'
]
*/

/*
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Only change code below this line
  const failureItems = [];
  // Only change code above this line

  return failureItems;
}

const failuresList = makeList(result.failure);
*/

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  function makeList(arr) {
    // Only change code below this line
    const failureItems = [];//let 'failureItems remain an empty array
    for(let i = 0; i < arr.length; i++) {//for every object iteration in the parameter 'arr'
        failureItems.push(`<li class="text-warning">${arr[i]}</li`)//push the 'result' array objects itterated values to a list item with the class of text-warning
    }
    // Only change code above this line
  
    return failureItems;
  }
  
  const failuresList = makeList(result.failure);



//16. Use object property shorthand with object literals to create and return an object with name, age and gender properties.

/*
const createPerson = (name, age, gender) => {
  // Only change code below this line
  return {
    name: name,
    age: age,
    gender: gender
  };
  // Only change code above this line
};
*/

const createPerson = (name, age, gender) => {
    // Only change code below this line
    return ({
      name,
      age,
    gender
    });
    // Only change code above this line
  };



//17. Refactor the function setGear inside the object bicycle to use the shorthand syntax.

/*
// Only change code below this line
const bicycle = {
  gear: 2,
  setGear: function(newGear) {
    this.gear = newGear;
  }
};
// Only change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);
*/

// Only change code below this line
const bicycle = {
    gear: 2,
    setGear(newGear) {
      this.gear = newGear;
    }
  };
  // Only change code above this line
  bicycle.setGear(3);
  console.log(bicycle.gear);



//18.Use the class keyword and write a constructor to create the Vegetable class. The Vegetable class allows you to create a vegetable object with a property name that gets passed to the constructor.

/*
// Only change code below this line

// Only change code above this line

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'
*/

class Vegetable {
    constructor(name) {
        this.name = name
    }
}

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'


//19.

/*
Use the class keyword to create a Thermostat class. The constructor accepts a Fahrenheit temperature.

In the class, create a getter to obtain the temperature in Celsius and a setter to set the temperature in Celsius.

Remember that C = 5/9 * (F - 32) and F = C * 9.0 / 5 + 32, where F is the value of temperature in Fahrenheit, and C is the value of the same temperature in Celsius.

Note
*/

/*
// Only change code below this line

// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
*/

// Only change code below this line
class Thermostat {
    constructor(fahrenheit) {
      this._fahrenheit = fahrenheit;
    }
  
    get temperature() {
      return (5/9) * (this._fahrenheit - 32);
    }
  
    set temperature(celcius) {
    this._fahrenheit = (celcius * 9 / 5) + 32
    }
  }
  
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius



//20. Add a script to the HTML document of type module and give it the source file of index.js

/*
<html>
  <body>
    <!-- Only change code below this line -->

    <!-- Only change code above this line -->
  </body>

</html>
*/



