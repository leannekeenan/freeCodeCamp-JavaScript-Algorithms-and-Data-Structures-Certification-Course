/*
Note:
the variables begin with a "q#_" to associate a commonly used variable (such as 'a') to the appropriate step in the course
*/

//81. Modify the function abTest so that if a or b are less than 0 the function will immediately exit with a value of undefined.

//Hint
//Remember that undefined is a keyword, not a string.

/*
// Setup
function abTest(a, b) {
  // Only change code below this line



  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);
*/

// Setup
function abTest(a, b) {
    // Only change code below this line

    if(a < 0 || b < 0) {
        return undefined
    }
  
    // Only change code above this line
  
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
  }
  
  abTest(2,2);

//82. You will write a card counting function. It will receive a card parameter, which can be a number or a string, and increment or decrement the global count variable according to the card's value (see table). The function will then return a string with the current count and the string Bet if the count is positive, or Hold if the count is zero or negative. The current count and the player's decision (Bet or Hold) should be separated by a single space.

/*
let count = 0;

function cc(card) {
  // Only change code below this line


  return "Change Me";
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');
*/

let count = 0;

function cc(card) {
  // Only change code below this line

  switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        count++;
    break;

    
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
        count--;
    break;
  }

  let holdbet = "Hold";
  if(count > 0) {
    holdbet = "Bet"
  }

  return count + " " + holdbet;
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');



//83. Make an object that represents a dog called myDog which contains the properties name (a string), legs, tails and friends.  You can set these object properties to whatever values you want, as long as name is a string, legs and tails are numbers, and friends is an array.
/*
const myDog = {
  // Only change code below this line


  // Only change code above this line
};
*/

const q83_myDog = {
    // Only change code below this line
  "name": "Donut",
  "legs": 4,
  "tails": 1,
  "friends": ["me", 'Adam', 'Mom']

  
    // Only change code above this line
};



//84. Read in the property values of testObj using dot notation. Set the variable hatValue equal to the object's property hat and set the variable shirtValue equal to the object's property shirt.

/*
// Setup
const testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

// Only change code below this line
const hatValue = testObj;      // Change this line
const shirtValue = testObj;    // Change this line
*/

// Setup
const q84_testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};
  
  // Only change code below this line
  const hatValue = q84_testObj.hat;      // Change this line
  const shirtValue = q84_testObj.shirt;    // Change this line



//85. Read the values of the properties an entree and the drink of testObj using bracket notation and assign them to entreeValue and drinkValue respectively.

/*
// Setup
const testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Only change code below this line
const entreeValue = testObj;   // Change this line
const drinkValue = testObj;    // Change this line
*/

// Setup
const q85_testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};
  
  // Only change code below this line
  const entreeValue = q85_testObj['an entree'];   // Change this line
  const drinkValue = q85_testObj['the drink'];    // Change this line



//86. Set the playerNumber variable to 16. Then, use the variable to look up the player's name and assign it to player.

/*
// Setup
const testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line
const playerNumber = 42;  // Change this line
const player = testObj;   // Change this line
*/

// Setup
const q86_testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};
  
  // Only change code below this line
  const playerNumber = 16;  // Change this line
  const player = q86_testObj[playerNumber];   // Change this line

//87. Update the myDog object's name property. Let's change her name from Coder to Happy Coder. You can use either dot or bracket notation.

/*
// Setup
const myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line

*/

// Setup
const q87_myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};
  
  // Only change code below this line
  q87_myDog.name = "Happy Coder";



//88. Add a bark property to myDog and set it to a dog sound, such as "woof". You may use either dot or bracket notation.

/*
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
*/

const q88_myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};

q88_myDog.bark = "woof";



//89. Delete the tails property from myDog. You may use either dot or bracket notation.
/*
// Setup
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

// Only change code below this line
*/

// Setup
const q89_myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
  };
  
  // Only change code below this line
  delete q89_myDog.tails;



//90. Convert the switch statement into an object called lookup. Use it to look up val and assign the associated string to the result variable.

/*
// Setup
function phoneticLookup(val) {
  let result = "";

  // Only change code below this line
  switch(val) {
    case "alpha":
      result = "Adams";
      break;
    case "bravo":
      result = "Boston";
      break;
    case "charlie":
      result = "Chicago";
      break;
    case "delta":
      result = "Denver";
      break;
    case "echo":
      result = "Easy";
      break;
    case "foxtrot":
      result = "Frank";
  }

  // Only change code above this line
  return result;
}

phoneticLookup("charlie");
*/

// Setup
function phoneticLookup(val) {
    let result = "";
  
    // Only change code below this line
    const lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        'delta':"Denver",
        "echo": "Easy",
        'foxtrot': "Frank"
    }
   result = lookup[val];
    // Only change code above this line
    return result;
  }
  
  phoneticLookup("charlie");