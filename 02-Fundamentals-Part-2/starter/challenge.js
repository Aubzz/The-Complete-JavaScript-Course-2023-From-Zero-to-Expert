const calcAverage = (team1, team2, team3) => (team1 + team2 + team3) / 3;
console.log(calcAverage(3, 4, 5));

const scoresDolphin = calcAverage(44, 23, 71);
const scoresKoalas = calcAverage(65, 54, 49);
console.log(scoresDolphin, scoresKoalas);

const checkWinner = function (avgDolphin, avgKoalas) {
  if (avgDolphin >= 2 * avgKoalas) {
    console.log(`Dolphin win (${avgDolphin} vs ${avgKoalas}})`);
  } else if (avgKoalas >= 2 * avgDolphin) {
    console.log(`Koalas win ${avgKoalas} vs ${avgDolphin}`);
  } else {
    console.log("No team wins!");
  }
};

checkWinner(scoresDolphin, scoresKoalas);
