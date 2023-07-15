// Coding Challenge #1
// BMI = mass / height ** 2 = mass /  (height * height)
// (mass in kg and height in meter)
/*
// TEST DATA 1
let markMass = 78;
let markHeight = 1.69;
let markBMI;

let johnMass = 92;
let johnHeight = 1.95;
let johnBMI;

markBMI = markMass / markHeight ** 2;
console.log(markBMI);

johnBMI = johnMass / johnHeight ** 2;
console.log(johnBMI);

let markHigherBMI = 27.309968138370508;
console.log(markHigherBMI > johnBMI);

// TEST DATA 2
let massMark = 95;
let heightMark = 1.88;
let bmiMark;

let massJohn = 85;
let heightJohn = 1.76;
let bmiJohn;

bmiMark = massMark / (heightMark * heightMark);
console.log(bmiMark);

bmiJohn = massJohn / (heightJohn * heightJohn);
console.log(bmiJohn);

let higherBMImark = 26.87867813490267;
console.log(higherBMImark > bmiJohn);

// Jonas Solution

const markWeight = 95;
const markTall = 1.88;
const johnWeight = 85;
const johnTall = 1.76;

const BMIMark = markWeight / markTall ** 2;
const BMIJohn = johnWeight / (johnTall * johnTall);
const markGreaterBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markGreaterBMI);


const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const Jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(Jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log(
  "String with \n\
multiple \n\
lines"
);

console.log(`String
multiple
lines`);
*/

const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log("Sarha can start driving license🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarha is too young. Wait another ${yearsLeft} years :)`);
}
