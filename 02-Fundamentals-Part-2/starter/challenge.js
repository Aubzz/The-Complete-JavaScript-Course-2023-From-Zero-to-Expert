const calcAverage = (
  dolphinTeam1,
  dolphinTeam2,
  dolphinTeam3,
  koalasTeam1,
  koalasTeam2,
  KoalasTeam3
) => {
  const avgDolphin =
    calcAverage(dolphinTeam1 + dolphinTeam2 + dolphinTeam3) / 3;
  const avgKoalas = calcAverage(koalasTeam1 + koalasTeam2 + KoalasTeam3) / 3;
};
console.log(calcAverage(44, 23, 71, 65, 54, 49));

const checkWinner = function (avgDolphin, avgKoalas) {
  calcAverage();
  if (avgDolphin > avgKoalas && dolphinTeam1 >= 2 * koalasTeam1) {
    console.log(`Dolphin win (${dolphinTeam1} vs ${koalasTeam1})`);
  } else if (avgKoalas > avgDolphin && dolphinTeam2 >= 2 * koalasTeam2) {
    console.log(`Koalas win ${dolphinTeam2} vs ${koalasTeam2}`);
  } else {
    console.log("No team wins!");
  }
};

console.log(checkWinner());
