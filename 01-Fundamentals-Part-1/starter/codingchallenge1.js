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


// Challenge #2 //

const markWeight = 95;
const markTall = 1.88;
const johnWeight = 85;
const johnTall = 1.76;

const BMIMark = markWeight / markTall ** 2;
const BMIJohn = johnWeight / (johnTall * johnTall);
console.log(BMIMark, BMIJohn);

let higherBMI;

if (higherBMI) {
  higherBMI = BMIMark > BMIJohn;
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})`);
} else {
  higherBMI = BMIJohn < BMIMark;
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's BMI (${BMIMark})`);
}

// Jonas' Solution //
if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John (${BMIJohn})`);
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's BMI (${BMIMark})`);
}
*/

// Challenge #3
const aveDolphin = (97 + 112 + 112) / 3;
const aveKoalas = (109 + 95 + 106) / 3;

if (aveDolphin > aveKoalas && aveDolphin >= 100) {
  console.log(
    `Dolphin win the competition with the average score of ${aveDolphin}`
  );
} else if (aveKoalas > aveDolphin && aveKoalas >= 100) {
  console.log(`Koalas win the competition with the average score ${aveKoalas}`);
} else if (aveDolphin === aveKoalas && aveDolphin >= 100 && aveKoalas >= 100) {
  console.log("DRAW!");
} else {
  console.log("No one wins the trophy");
}

// Another test data
let scoreDolphin = (97 + 112 + 101) / 3;
let scoreKoalas = (109 + 95 + 123) / 3;
console.log(scoreDolphin, scoreKoalas);

// if (scoreDolphin < scoreKoalas && scoreDolphin <=)

// Switch Statement
const day = "monday";

switch (day) {
  case "monday": // day === "monday"
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    bconsole.log("Record videos");
    reak;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend");
    break;
  default:
    console.log("Not a valid day!");
}

if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend");
} else {
  console.log("Not a valid day!");
}

// Coding Challenge #4

// console.log(
//   `The bill was ${bill}, the tip was ${tip * bill} and the total value ${
//     bill + tip * bill
//   }`
// );

const bills = 275;
const tips = bills <= 300 && bills >= 50 ? bills * 0.15 : bills * 0.2;

console.log(
  `The bill was ${bills}, the tip was ${tips}, and the total value ${
    bills + tips
  }`
);
