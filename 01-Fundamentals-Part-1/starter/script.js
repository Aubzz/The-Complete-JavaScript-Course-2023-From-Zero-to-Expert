/* let js = "amazing";
if (js === "amazing") alert("JavaScript is so fun!");

console.log(40 + 8 + 23 - 10);

let firstName = "Matilda";
console.log(firstName);
console.log(firstName);
console.log(firstName);

let years = "3";
console.log(jsa);

true;

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 19);
console.log(typeof "Abby");

javascriptIsFun = "Yes";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);


let age = 25;
age = 19;
console.log(age);

const birthYear = 1991;
birthYear = 1990;

var job = "Software Engineer";
job = "farmer";
console.log(job);


// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarha = now - 2003;
console.log(ageJonas, ageSarha);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
//  2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Aubrey";
const lastName = "Ragandan";
console.log(firstName + " " + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarha);
console.log(ageSarha >= 18);

const isFullAge = ageSarha >= 18;

console.log(now - 1991 > now - 2018);


const now = 2037;
const ageJonas = now - 1991;
const ageSarha = now - 2018;

console.log(now - 1991 > now - 2018);

// console.log(30 - 10 - 15);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10
// console.log(x, y);

const averageAge = (ageJonas + ageSarha) / 2;
console.log(ageJonas, ageSarha, averageAge);



/* String and Template Literals 
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

/* If else statement 
const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log("Sarha can start driving license🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarha is too young. Wait another ${yearsLeft} years :)`);
}

/* Variable Conditionally
const bornYear = 1991;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);



// TYPE CONVERSION
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23);

// TYPE COERSION
console.log("I am " + 23 + " years old"); // Type coersion
console.log("I am " + "23" + " years old");

// if the JS have not type coersion, then this would work
console.log("I am " + String(23) + " years old");

console.log("23" - "10" - 3);

console.log("23" + "10" + 3);

console.log(23 * 2);
console.log(23 / 2);

console.log("23" * "2");
console.log("23" / "2");

let n = "1" + 1;
n = n - 1;
console.log(n);


console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));

const money = 10;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log("You should get a job!");
}

let height = 0;
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}

const age = "18";
if (age === 18) console.log("You just became an adult :D (strict)");

if (age == 18) console.log("You just became an adult :D (loose)");

const favorite = Number(prompt("What's your favorite number?"));
console.log(favorite);

if (favorite == 23) {
  console.log("Cool! 23 is an amazing number!");
} else if (favorite === 7) {
  console.log("7 is a also a cool number");
} else if (favorite === 9) {
  console.log("9 is a also a cool number");
} else {
  console.log("Number is not 23 or 7 or 9");
}

if (favorite !== 23) console.log("Why not 23?");


// Logical Operators
const hasDriverLicense = true; // A
const hasGoodVision = true; // B
console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

// const shouldDrive = hasDriverLicense && hasGoodVision;

// if (hasDriverLicense && hasGoodVision) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive");
// }

const isTired = false; // C
console.log(hasDriverLicense && hasGoodVision && isTired);

if (hasDriverLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive");
}

// statements and expression
if (23 > 0) {
  const str = "23 is bigger";
}

const me = "Jonas";
console.log(`I'm ${2037 - 1991} years old ${me}`);
*/

const age = 23;
// age >= 18
//   ? console.log("I like to drink wine 🍷")
//   : console.log("I like to drink water 💧");

// above is not much used

const drink = age >= 18 ? "wine 🍷" : "water 💧";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine 🍷";
} else {
  drink2 = "water 💧";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`);
