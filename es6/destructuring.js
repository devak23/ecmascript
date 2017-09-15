const arr = ["I love icecream", "I love pizza", "I love chocolate"];

// old way to de-structure variables

//var stmt1 = arr[0];
//var stmt2 = arr[1];
//var stmt3 = arr[2];


// ES6 way of destructring
let [one, two, three] = arr

console.log(one, two, three);

// This works well for objects as well not simply for arrays
const customer = {
  name: { firstname: "Abhay", lastname: "Kulkarni" },
  age: 32,
  address: { line1: "First line", line2: "second line", city: "Mumbai"}
}

let { name, age, address } = customer;

console.log(name);
console.log(age);
console.log(address);

