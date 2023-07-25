// LECTURE: Values and Variables
const country = "Philippines";
const continent = "Asian Continent";
let population = 109840000;
console.log(country, continent, population);

// LECTURE: Data Types
// let isIsland = true;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// LECTURE: let, const and var
language = "Tagalog";
const isIsland = true;
isIsland = false;

// LECTURE: Basic Operators
const eachHalf = population / 2;
console.log(eachHalf);

population++;

let finland = 6000000;
console.log(population > finland);

let averagePopulation = 33000000;
console.log(population < averagePopulation);
// let description =
//   "Philippines is in Asia, and its 109.84 million people speaks Tagalog";
const description1 =
  country +
  " is in " +
  continent +
  ", and its " +
  population +
  "million people speak" +
  language;
console.log(description1);

// LECTURE: Strings and Template Literals
description1 = `${country} is in ${continent}, and its ${population} people speaks ${language}`;
console.log(description1);

// LECTURE: Taking Decisions: if / else Statements
if (population > averagePopulation) {
  console.log(`${country} population is above the average`);
} else {
  console.log(
    `${country} population is ${
      averagePopulation - population
    } million below average`
  );
}

// LECTURE: Type Conversion and Coercion
console.log("9" + "5"); // 4
console.log("19" - "13" + "17"); // '617'
console.log("19" - "13" + 17); // 23
console.log("123" < 57); // false
console.log(5 + 6 + "4" + 9 - 4 - 2); // 1143

// LECTURE: Equality Operators: == vs. ===

const numNeighbors = Number(
  prompt("How many neighbour countries does your country have?")
);
console.log(numNeighbors);

if (numNeighbors === 1) {
  console.log("Only 1 border");
} else if (numNeighbors > 1) {
  console.log("More than 1 border");
} else {
  console.log("No borders");
}
