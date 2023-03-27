/*
Note:
the variables begin with a "q#_" to associate a commonly used variable (such as 'a') to the appropriate step in the course
*/

//91. Modify the function checkObj to test if an object passed to the function (obj) contains a specific property (checkProp). If the property is found, return that property's value. If not, return "Not Found".

/*
function checkObj(obj, checkProp) {
  // Only change code below this line
  return "Change Me!";
  // Only change code above this line
}
*/

function checkObj(obj, checkProp) {
    // Only change code below this line
    if(obj.hasOwnProperty(checkProp)) {
        return obj[checkProp];
    }
    else {
    return "Change Me!";
    }
    // Only change code above this line
}



//92. Add a new album to the myMusic array. Add artist and title strings, release_year number, and a formats array of strings.

/*
const myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  }
];
*/

const myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  }, 

  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  }
];



//93. Access the myStorage object and assign the contents of the glove box property to the gloveBoxContents variable. Use dot notation for all properties where possible, otherwise use bracket notation.

/*
const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

const gloveBoxContents = undefined;
*/

const myStorage = {
    "car": {
      "inside": {
        "glove box": "maps",
        "passenger seat": "crumbs"
       },
      "outside": {
        "trunk": "jack"
      }
    }
  };
  
  const gloveBoxContents = myStorage.car.inside["glove box"];



//94. Using dot and bracket notation, set the variable secondTree to the second item in the trees list from the myPlants object.

/*
const myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

const secondTree = "";
*/

const myPlants = [
    {
      type: "flowers",
      list: [
        "rose",
        "tulip",
        "dandelion"
      ]
    },
    {
      type: "trees",
      list: [
        "fir",
        "pine",
        "birch"
      ]
    }
  ];
  
  const secondTree = myPlants[1].list[1];



//95. 

/*You are given an object literal representing a part of your musical album collection. Each album has a unique id number as its key and several other properties. Not all albums have complete information.

You start with an updateRecords function that takes an object literal, records, containing the musical album collection, an id, a prop (like artist or tracks), and a value. Complete the function using the rules below to modify the object passed to the function.

Your function must always return the entire record collection object.
If prop isn't tracks and value isn't an empty string, update or set that album's prop to value.
If prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it.
If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
If value is an empty string, delete the given prop property from the album.
Note: A copy of the recordCollection object is used for the tests.

*/

/*
// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');
*/

// Setup
const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  // Only change code below this line

  function updateRecords(records, id, prop, value) {
    if(prop !== "tracks" && value !== "") {
        records[id][prop] = value;
    }

    else if (prop === "tracks" && value !== "" && records[id].hasOwnProperty("tracks") === false) {
        records[id][prop] = [value];
    }

    else if(prop === "tracks" && value !== "") {
        records[id][prop].push(value);
    }

    else if (value === "") {
        delete records[id][prop];
    }

    return records;
  }
  


//96. Add the numbers 5 through 0 (inclusive) in descending order to myArray using a while loop.

/*

// Setup
const myArray = [];

// Only change code below this line

*/


// Setup
const q96_myArray = [];

// Only change code below this line
let i = 0;
while (i <= 5) {
    q96_myArray.push(i);
    i++;
}
console.log(q96_myArray.reverse());



//97. Use a for loop to push the values 1 through 5 onto myArray.

/*
// Setup
const myArray = [];

// Only change code below this line
*/

// Setup
const q97_myArray = [];

// Only change code below this line
for(let i = 0; i < q97_myArray.length; i++) {
    q97_myArray.push(i)
}

console.log(q97_myArray.reduce)



//98. Push the odd numbers from 1 through 9 to myArray using a for loop.

/*
// Setup
const myArray = [];

// Only change code below this line

*/

// Setup
const q98_myArray = [];

// Only change code below this line
for(let i = 1; i <= 9; i += 2) {
    q98_myArray.push(i)
}



//99. Push the odd numbers from 9 through 1 to myArray using a for loop.

/*
// Setup
const myArray = [];

// Only change code below this line

*/

// Setup
const q99_myArray = [];

// Only change code below this line
for(let i = 9; i > 0; i-2) {
    q99_myArray.push(i)
}



//100. Declare and initialize a variable total to 0. Use a for loop to add the value of each element of the myArr array to total.

/*
// Setup
const myArr = [2, 3, 4, 5, 6];

// Only change code below this line
*/

// Setup
const myArr = [2, 3, 4, 5, 6];

// Only change code below this line
let total = 0;

for(let i = 0; i < myArr.length; i++) {
  total += myArr[i]
}

console.log(total)

