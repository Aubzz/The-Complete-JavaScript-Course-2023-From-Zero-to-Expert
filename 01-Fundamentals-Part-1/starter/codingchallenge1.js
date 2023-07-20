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
let aveScoreDolphin = (96 + 108 + 89) / 3;
let aveScoreKoalas = (88 + 91 + 110) / 3;
console.log(aveScoreDolphin, aveScoreKoalas);

if (aveScoreDolphin > aveScoreKoalas) {
  console.log(`The winners of the competition is Dolphins`);
} else if (aveScoreDolphin === aveScoreKoalas) {
  console.log("It's a DRAW!");
} else {
  console.log(`The winner of the competition is Koalas`);
}

// Another test data
let scoreDolphin = (97 + 112 + 101) / 3;
let scoreKoalas = (109 + 95 + 123) / 3;
console.log(scoreDolphin, scoreKoalas);

// if (scoreDolphin < scoreKoalas && scoreDolphin <=)
