// LECTURE: Functions

function describeCountry(country, population, capitalCity) {
  const countryInfo = `${country} has ${population} million people and its capital city is ${capitalCity}.`;
  return countryInfo;
}

const ph = describeCountry("Philippines", 109, "Manila");
const thai = describeCountry("Thailand", 71, "Bangkok");
const jp = describeCountry("Japan", 125, "Tokyo");
console.log(ph, thai, jp);

// LECTURE: Function Declarations vs. Expressions
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}
const percentagePh = percentageOfWorld1(109);
const percentageThai = percentageOfWorld1(71);
const percentageJp = percentageOfWorld1(125);
console.log(percentagePh, percentageThai, percentageJp);

// Function Expressions
const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};
const percentagePH = percentageOfWorld2(109);
const percentageThailand = percentageOfWorld2(71);
const percentageChina = percentageOfWorld2(1441);
console.log(percentagePH, percentageThailand, percentageChina);
