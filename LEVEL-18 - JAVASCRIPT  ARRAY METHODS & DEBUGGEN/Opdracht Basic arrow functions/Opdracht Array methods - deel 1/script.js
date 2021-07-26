//A Schrijf een JavaScript functie om het woord "cool" aan een array met strings toe te voegen. Gebruik de .push method.

const addTheWordCool = ["nice", "awesome", "tof"];
addTheWordCool.push("cool");

console.log(addTheWordCool);

// B Schrijf een JavaScript functie die het aantal elementen in een array retourneert.

const amountOfElementsInArray = ["appels", "peren", "citroenen"];
console.log(amountOfElementsInArray.length);

//C Schrijf een JavaScript functie om het éérste element uit een array te retourneren. PS: Bij welk cijfer begint een array ook alweer met tellen?

const selectBelgiumFromBenelux = ["Belgie", "Nederland", "Luxemburg"];
console.log(selectBelgiumFromBenelux["0"]);

//D Schrijf een JavaScript functie om het laatste element uit een array te retourneren.
const lastElementInArray = ["Haas", "Cavia", "Kip", "Schildpad"];

console.log(lastElementInArray[lastElementInArray.length - 1]);

//E Schrijf een JavaScript functie om het eerste element uit een array te halen en het restant te retourneren . Gebruik .slice én de alternatieve optie .splice. Wat is het verschil tussen deze functies? Hint: mutability.

///const presidents = ["Trump", "Obama", "Bush", "Clinton"];
//const impeachTrumpSlice = presidents.splice(1, 0);

//console.log(impeachTrumpSlice(presidents));
//console.log(impeachTrumpSplice(presidents));

//F Write a simple JavaScript program to join all elements of the following array into a string (with spaces).

const stringsTogether = ["Winc", "Academy", "is", "leuk", ";-}"];
console.log(stringsTogether.join(" "));

//G Schrijf een functie die 2 arrays ['array 1'] ['array2'] combineert tot 1 array

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combineArrays = array1.concat(array2);
console.log(combineArrays);
