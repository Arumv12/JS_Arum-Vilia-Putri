// 1. JS FUNDAMENTAL
// Contoh Tipe Data

// String
let greeting = "Hello, World!";
console.log("String:", greeting);

// Boolean
let isStudent = true;
console.log("Boolean:", isStudent);

// Numbers
let age = 20;
console.log("Number:", age);

// Array
let colors = ["Red", "Green", "Blue"];
console.log("Array:", colors);

// Object
let person = {
  name: "Arum",
  age: 20,
  isStudent: true,
};
console.log("Object:", person);

// Logical Operators
let isAdult = age > 18;
console.log("Logical Operator (age > 18):", isAdult);

// Equality Comparison
let isEqual = age === 20;
console.log("Equality Comparison (age === 20):", isEqual);

// 2. JS FUNCTION
// Function Javascript

// 1. Define Practice
function printHeart() {
  console.log("<3");
}
printHeart();

// 2. Return Value Practice
function multiply(a, b) {
  return a * b;
}
console.log("Multiply (2 * 3):", multiply(2, 3)); // 6
console.log("Multiply (9 * 9):", multiply(9, 9)); // 81
console.log("Multiply (5 * 4):", multiply(5, 4)); // 20

// 3. Scope Practice
// What is printed to the console when this code runs?
// OUTPUT -> Animal in observe: Pajama Squid

let animal = "Giant Pacific Octopus";
function observe() {
  let animal = "Pajama Squid";
  console.log("Animal in observe:", animal);
}
observe();

// B. What is printed to the console when this code runs?
// OUTPUT-> Deadly Animal in handleAnimal: Scorpionfish
//          Global Deadly Animal: Blue-Ringed Octopus

let deadlyAnimal = "Blue-Ringed Octopus";
function handleAnimal() {
  let deadlyAnimal = "Scorpionfish";
  console.log("Deadly Animal in handleAnimal:", deadlyAnimal);
}
handleAnimal();
console.log("Global Deadly Animal:", deadlyAnimal);

// 4. Arrow Function Exercise
// OUTPUT-> Hello Hagrid!
//          Hello Luna!

const sayHello = (name) => `Hello ${name}!`;
console.log(sayHello("Hagrid")); // "Hello Hagrid!"
console.log(sayHello("Luna")); // "Hello Luna!"
