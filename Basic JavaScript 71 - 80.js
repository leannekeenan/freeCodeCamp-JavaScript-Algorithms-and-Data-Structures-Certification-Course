/*
Note:
the variables begin with a "q#_" to associate a commonly used variable (such as 'a') to the appropriate step in the course
*/


//71. Combine the if statements into a single if/else statement.

/*
function testElse(val) {
  let result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  }

  if (val <= 5) {
    result = "5 or Smaller";
  }

  // Only change code above this line
  return result;
}

testElse(4);
*/

function testElse(val) {
    let result = "";
    // Only change code below this line
  
    if (val > 5) {
      result = "Bigger than 5";
    }
  
    else {

      result = "5 or Smaller";
    }
  
    // Only change code above this line
    return result;
  }
  
  testElse(4);



//72. Convert the logic to use else if statements.

/*
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }

  if (val < 5) {
    return "Smaller than 5";
  }

  return "Between 5 and 10";
}

testElseIf(7);
*/

function testElseIf(val) {
    if (val > 10) {
      return "Greater than 10";
    }
  
    else if (val < 5) {
      return "Smaller than 5";
    }

    else {
      return "Between 5 and 10";
    }
  }
  
  testElseIf(7);



//73. Change the order of logic in the function so that it will return the correct statements in all cases.
/*
function orderMyLogic(val) {
  if (val < 10) {
    return "Less than 10";
  } else if (val < 5) {
    return "Less than 5";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7);
*/

function orderMyLogic(val) {
    if(val >= 10) {
      return "Greater than or equal to 10";
    }
    else if (val < 5) {
      return "Less than 5";
    }
    else if (val < 10) {
      return "Less than 10";
    }  
  }
  
  console.log(orderMyLogic(7));



//74. Write chained if/else if statements to fulfill the following conditions:
    //num < 5 - return Tiny
    //num < 10 - return Small
    //num < 15 - return Medium
    //num < 20 - return Large
    //num >= 20 - return Huge

/*
function testSize(num) {
  // Only change code below this line


  return "Change Me";
  // Only change code above this line
}

testSize(7);
*/

function testSize(num) {
    // Only change code below this line
    if(num < 5) {
        return 'Tiny'
    }

    else if(num < 10) {
        return 'Small'
    }

    else if(num < 15) {
        return 'Medium'
    }

    else if(num < 20) {
        return 'Large'
    }

    else if(num >= 20) {
        return 'Huge'
    }

    
  
    return "Change Me";
    // Only change code above this line
  }
  
  testSize(7);

//75. In the game of Golf, each hole has a par, meaning, the average number of strokes a golfer is expected to make in order to sink the ball in the hole to complete the play. Depending on how far above or below par your strokes are, there is a different nickname.

// Your function will be passed par and strokes arguments. Return the correct string according to this table which lists the strokes in order of priority; top (highest) to bottom (lowest):

/*
Strokes	Return
1	"Hole-in-one!"
<= par - 2	"Eagle"
par - 1	"Birdie"
par	"Par"
par + 1	"Bogey"
par + 2	"Double Bogey"
>= par + 3	"Go Home!"
*/

//par and strokes will always be numeric and positive. We have added an array of all the names for your convenience.

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line

if(strokes === 1) {
    return names[0]
}

else if(strokes <= par - 2 ) {
    return names[1] 
}

else if(strokes === par - 1 ) {
    return names[2]     
}

else if(strokes === par  ) {
    return names[3]   
}

else if(strokes === par + 1 ) {
    return names[4]    
}

else if(strokes === par + 2 ) {
    return names[5]    
}

else if(strokes >= par +3) {
    return names[6] 
}
  return "Change Me";
  // Only change code above this line
}

golfScore(5, 4);



//76. Write a switch statement which tests val and sets answer for the following conditions:
//1 - alpha
//2 - beta
//3 - gamma
//4 - delta
/*
function caseInSwitch(val) {
  let answer = "";
  // Only change code below this line



  // Only change code above this line
  return answer;
}

caseInSwitch(1);
*/

  function caseInSwitch(val) {
    let answer = "";
    // Only change code below this line
  
    switch(val) {
    case 1:
        answer = "alpha";
    break;
    case 2:
        answer = "beta";
    break;
    case 3: 
        answer = "gamma";
    break;
    case 4: 
        answer = "delta";
    break;
  }
  
    // Only change code above this line
    return answer;
  }
  
  caseInSwitch(1);



//77. Write a switch statement to set answer for the following conditions:
// a - apple
//b - bird
//c - cat
//default - stuff

/*
function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line



  // Only change code above this line
  return answer;
}

switchOfStuff(1);
*/

function switchOfStuff(val) {
    let answer = "";
    // Only change code below this line
  
  switch(val) {
    case "a":
        answer = "apple";
    break;

    case "b":
        answer = "bird";
    break;
    
    case "c":
        answer = "cat";
    break;

    default:
        answer = "stuff";
    break;
  }
  
    // Only change code above this line
    return answer;
  }
  
  switchOfStuff(1);



//78. Write a switch statement to set answer for the following ranges:
//1-3 - Low
//4-6 - Mid
//7-9 - High


/*
function sequentialSizes(val) {
  let answer = "";
  // Only change code below this line



  // Only change code above this line
  return answer;
}

sequentialSizes(1);
*/

function sequentialSizes(val) {
    let answer = "";
    // Only change code below this line

    switch(val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
        break;

        case 4:
        case 5:
        case 6:
            answer = "Mid";
        break;

        case 7:
        case 8:
        case 9:
            answer = "High";
        break;
        
    }
  
  
    // Only change code above this line
    return answer;
  }
  
  sequentialSizes(1);



//79.Change the chained if/else if statements into a switch statement.
/*
function chainToSwitch(val) {
  let answer = "";
  // Only change code below this line

  if (val === "bob") {
    answer = "Marley";
  } else if (val === 42) {
    answer = "The Answer";
  } else if (val === 1) {
    answer = "There is no #1";
  } else if (val === 99) {
    answer = "Missed me by this much!";
  } else if (val === 7) {
    answer = "Ate Nine";
  }

  // Only change code above this line
  return answer;
}

chainToSwitch(7);
*/
function chainToSwitch(val) {
    let answer = "";
    // Only change code below this line
    switch(val) {
        case "bob":
            answer = "Marley";
        break;

        case 42: 
            answer = "The Answer";
        break;

        case 1: 
            answer = "There is no #1";
        break;

        case 99:
            answer = "Missed me by this much!";
        break;

        case 7:
             answer = "Ate Nine";
        break;
    }
  
    if (val === "bob") {
      answer = "Marley";
    } else if (val === 42) {
      answer = "The Answer";
    } else if (val === 1) {
      answer = "There is no #1";
    } else if (val === 99) {
      answer = "Missed me by this much!";
    } else if (val === 7) {
      answer = "Ate Nine";
    }
  
    // Only change code above this line
    return answer;
  }
  
  chainToSwitch(7)

//80. Fix the function isLess to remove the if/else statements

/*
function isLess(a, b) {
  // Only change code below this line
  if (a < b) {
    return true;
  } else {
    return false;
  }
  // Only change code above this line
}

isLess(10, 15);
*/

function isLess(a, b) {
    a < b;
}