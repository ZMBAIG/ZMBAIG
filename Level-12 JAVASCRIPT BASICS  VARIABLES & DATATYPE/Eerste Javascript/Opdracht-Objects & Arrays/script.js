
//Deel 1: Objecten:
let person = {
    name: "Zafar",
    age: 53
};
//Gebruik console.log(person) en run je JavaScript programma, om je object te loggen.
console.log(person);
//Log alleen de value van de naam, door middel van de key name
console.log("Zafar");
//Log alleen de leeftijd age
console.log("53");
//Gebruik de dot-notation en de bracket-notation 
console.log(person.name);
person ["name"] = "Wasif";
console.log(person.name);
/*Maak nog een laatste key-value pair. De key is evaluations, de value [7,
10, 9]. Dit zijn de cijfers die je hebt gehaald afgelopen jaar.*/
let evaluations = [7, 10, 9];
//Log alleen de property evaluations . Wat is de waarde?
console.log(evaluations);
//==========================================================================================
 //Deel 2: Arrays: 
//Maak een nieuwe variabele met een lege array [].
//Vul deze array met minstens 3 verschillende kleuren, 
//in de vorm van strings Bijvoorbeeld: "groen", "blauw", "rood".
let verschillendeKleuren = ["groen", "blauw", "rood"];
//Log de lengte van je array naar de console.
console.log(verschillendeKleuren.length);
//Log het eerste element van je array naar de console, dus in ons voorbeeld: "groen".
console.log(verschillendeKleuren[0]);
//Log het laatste element van je array naar de console, dus in ons voorbeeld: "rood".
console.log(verschillendeKleuren[2]);
//Voeg een 4de element toe aan je array, Resultaat: ['groen, 'blauw, 'rood', 'geel']
verschillendeKleuren[3] = 'geel';
console.log(verschillendeKleuren);
//Voeg een cijfer toe aan je array, Resultaat: ['groen, 'blauw, 'rood', 'geel', 5]
verschillendeKleuren[4] = '5';
console.log(verschillendeKleuren);
/*Voeg een object toe aan je array met de push methode. Het object ziet er zo uit: 
{greeting: "hi ik ben een object"} 
Resultaat: ['groen, 'blauw, 'rood', 'geel', 5, {greeting: "Hi ik ben een object"} ]*/ 
verschillendeKleuren[5] = '{greeting: "Hi ik ben een object"}';
console.log(verschillendeKleuren);
console.log(verschillendeKleuren[5]);
//======================================================================================================
//Deel-03 Bekijk een "real-life" object
const catBreeds = [{
    name: "Abyssinian",
    description: "The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.",
    dog_friendly: 4,
    energy_level: 5,
    life_span: "14 - 15",
    origin: "Egypt",
    temperament: ["Active", "Energetic", "Independent", "Intelligent", "Gentle"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Abyssinian_(cat)",
                food: {
                        favourite_food: "fish",
      medium_liked_food: "dried fruits", 
      disliked_food: "walnuts"
     }
  },
        {
    name: "Aegean",
    description: "Native to the Greek islands known as the Cyclades in the Aegean Sea, these are natural cats, meaning they developed without humans getting involved in their breeding. As a breed, Aegean Cats are rare, although they are numerous on their home islands. They are generally friendly toward people and can be excellent cats for families with children.",
    dog_friendly: 4,
    energy_level: 53,
    life_span: "9- 12",
    origin: "Greece",
    temperament: [ "Affectionate", "Social", "Intelligent", "Playful", "Active"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Aegean_cat",
    food: {
                        favourite_food: "tuna",
      medium_liked_food: "canned food", 
      disliked_food: "all fruits"
     }
  },
        {
    name: "American Bobtail",
    description: "American Bobtails are loving and incredibly intelligent cats possessing a distinctive wild appearance. They are extremely interactive cats that bond with their human family with great devotion.",
    dog_friendly: 5,
    energy_level: 3,
    life_span: "11 - 15",
    origin: "United States",
    temperament: [ "Intelligent", "Interactive", "Lively", "Playful", "Sensitive"],
    wikipedia_url: "https://en.wikipedia.org/wiki/American_Bobtail",
    food: {
                        favourite_food: "meaty things",
      medium_liked_food: "tuna", 
      disliked_food: "canned food"
     }
  }
]
//Log de naam van het laatste kattenras. Resultaat: American Bobtail
console.log(catBreeds['2'].name);
//Log de energy levels van de eerste kat. Resultaat: 5
console.log(catBreeds['0'].energy_level);
//Log het eerste temperament van de temperamenten van de tweede kat.Resultaat: Affectionate
console.log(catBreeds ['1'].temperament);
//Log het laatst temperament van de temperamenten van de derde kat.Resultaat: Sensitive


