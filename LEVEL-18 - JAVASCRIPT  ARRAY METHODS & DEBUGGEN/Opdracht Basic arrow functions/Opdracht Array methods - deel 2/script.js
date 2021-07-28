//A
// Find Spiderman
// result should be: {name: "Spiderman", alter_ego: "Peter Parker"}
const superheroes = [
  { name: "Batman", alter_ego: "Bruce Wayne" },
  { name: "Superman", alter_ego: "Clark Kent" },
  { name: "Spiderman", alter_ego: "Peter Parker" },
];
console.log(superheroes.find((myHero) => myHero.name === "Spiderman"));

//B In een array met integers. Zorg dat je een array returned met de integers verdubbeld. Gebruik de .forEach method of, een level hoger: de .map method.

const doubleArrayValues = [1, 2, 3];
const doubleArrayMap = doubleArrayValues.map((x) => x * 2);
console.log(doubleArrayMap);

//C In een array met integers. Schrijf een JavaScript functie die checkt of er een nummer (integer) in de array aanwezig is dat groter is dan 10.

//containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11]);
// result should be true
//containsNumberBiggerThan10([1, 2, 1, 2, 1, 2]);
// result should be false

const containsNumberBiggerThan10 = [1, 4, 3, 6, 9, 7, 11];
const biggerThan10 = (element) => element % 4 === 0;
console.log(containsNumberBiggerThan10.some(biggerThan10));

//const containsNumberBiggerThan10 = [1, 2, 1, 2, 1, 2];
//const biggerThan10 = (element) => element % 4 === 0;
//console.log(containsNumberBiggerThan10.some(biggerThan10));

// D In een array met strings. Schrijf een JavaScript functie die kijkt of er een bepaalde string: "Italy" in de array aanwezig is.

function isItalyInTheGreat7(array) {
  return array.includes("Italy");
}
console.log(
  "Is Italie aanwezig?:",
  isItalyInTheGreat7([
    "Canada",
    "France",
    "Germany",
    "Italy",
    "Japan",
    "United Kingdom",
    "United States",
  ])
);

//E In een array met integers. Schrijf een JavaScript functie die elke integer vertienvoudigt. Gebruik .forEach.

const tenFold = function (array) {
  let newArray = [];
  array.forEach((number) => {
    newArray.push(number * 10);
  });
  return newArray;
};
console.log("tenfold", tenFold([1, 4, 3, 6, 9, 7, 11]));

//F In een array met integers. Schrijf een JavaScript functie die checkt of alle waardes in de array onder de 100 zijn, en true or false retourneert.

function isBelow100(array) {
  return array.every((number) => {
    return number < 100;
  });
}
console.log(
  "Under 100?:",
  isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98])
);
console.log(
  "Under 100, Should:",
  isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98])
);
