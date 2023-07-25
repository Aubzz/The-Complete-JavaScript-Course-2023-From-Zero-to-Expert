"use strict";

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");

// reserved variable names
const interface = "Audio";
const private = 541;
const break = 23;
const if = 3; 


function logger() {
  console.log("My name is Aubrey");
}

// calling / running / invoking functions
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/

function calcAge1(birthYear) {
  const age = 2037 - birthYear;
  return age;
}

// we can simplify and return all in one go
const age1 = calcAge1(1991);
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

// FUNCTION EXPRESSION
const age2 = calcAge2(1991);
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

console.log(age1, age2);
