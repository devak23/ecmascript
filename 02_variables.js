/**
 * There are 3 ways of declaring variables: function scope, block scope, constant
 */

// function scope
var sunsnack = "sandwich";
// block scope
let monsnack = "omlette";
// cannot be reassigned
const tuesnack = "pizza";


// enable the next line to see the compilation error
//tuesnack = "Burger"
console.log(tuesnack);

// so constants cannot be reassigned. But that does NOT mean they are immutable
const meal = {
  firstCourse: { 
    apetizers: ["paneer-tikka", "harabhara kabab", "bruschetta"],
    welcomeDrink: ["juices", "beverages", "wine"]
  },
  secondCourse: {
    indian: ["daal-rice", "roti-subzi", "shahi punjab"],
    italian: ["pastas", "pizzas", "risotos", "lasagnes"]
  },
  thirdCourse: {
    icecreams: ["banana split", "tripple sundays", "death by chocolate"],
    desert: ["pudding", "kheer", "gulab-jamun"]
  }
}

meal.secondCourse.indian.push("kerela delicacies");
console.log(meal)

function varTest() {
  var voted = true;

  if (voted) {
    console.log("varTest: Has user voted? (func): ", voted);
    var voted = false;
  }

  console.log("varTest: Has user voted: ", voted);
}


varTest();




function letTest() {
  let voted = true;

  if (voted) {
    //console.log("letTest: Has user voted? (func): ", voted);
    let voted = false;
  }

  console.log("letTest: Has user voted: ", voted);
}


letTest();







if (true) {
  monsnack = "Pani-puri";
  console.log(monsnack);

  let mysnack = "croissant";
}

// enable the next line to see the compilation error
//console.log(mysnack); // mysnack has block scope... exists only in the if block



