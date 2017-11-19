let hello = function(name = "anonymous") {
  let age = 25;
  let company = "Rolta";
  age;
  company;
  return `Hello, My name is ${name}`;
};

console.log(hello());
console.log(hello("Avinash"));

calculateDefaultAmount = name => {
  return name === "Mayur" || name === "Kartik" ? 500 : 5;
};

const status = function(name, dollars = calculateDefaultAmount(name)) {
  return `My name is ${name} and I have ${dollars} dollars`;
};

console.log(status("Mithilesh", 100));
console.log(status("Vish"));
console.log(status("Shoeb", 300));
console.log(status("Mayur"));
console.log(status("Kartik",150));
