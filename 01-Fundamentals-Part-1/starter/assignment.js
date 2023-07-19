// LECTURE: Values and Variables
const country = "Philippines";
const continent = "Asian Continent";
let population = 109840000;
console.log(country, continent, population);

// LECTURE: Data Types
let isIsland = 7640;
let language;
console.log(isIsland, population, country, language);

// LECTURE: let, const and var
language = "Tagalog";
// continent = "Europe";

// LECTURE: Basic Operators
const eachHalf = population / 2;
console.log(eachHalf);

population++;

let finland = 6000000;
console.log(population > finland);

let averagePopulation = 33000000;
console.log(population < averagePopulation);
let description =
  "Philippines is in Asia, and its 109.84 million people speaks Tagalog";
console.log(description);

// LECTURE: Strings and Template Literals

description = `Philippines is in Asia, and its 109.84 million people speaks Tagalog`;
console.log(description);

// LECTURE: Taking Decisions: if / else Statements
if (population > averagePopulation) {
  console.log("Philippines population is above the average");
} else {
  console.log(
    `Philippines population is ${averagePopulation - population} below average`
  );
}

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
