// //Functie 1:
// Schrijf een simpele functie die meerdere cijfers bij elkaar optelt
// De functie accepteert meerdere argumenten.

const optellen = function (...args) {
  return args.reduce((acc, item) => {
    return acc + item;
  });
};

console.log(optellen(1, 2, 3, 4, 5, 6, 7)); // verwachte uitkomst: 28

// //Functie 2:
// Schrijf een simpele functie die meerdere cijfers bij elkaar optelt
// De functie accepteert 1 argument, namelijk een array van cijfers
// Gebruik de spread operator om ervoor te zorgen dat je functie alle items in de array bij elkaar optelt.

const countingNumber = function (num1, num2, num3) {
  return num1 + num2 + num3;
};

const cijfers = [1, 2, 3];

console.log(countingNumber(...cijfers));
// verwachte uitkomst: 6
