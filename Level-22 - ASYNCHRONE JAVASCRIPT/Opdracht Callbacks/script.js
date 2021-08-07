//Stap 1. Maak een functie en geef deze de naam huiswerkMaken. Het eerste argument kan je de naam vak geven.
function huiswerkMaken(vak, callback) {
  console.log(`Starting my ${"wiskunde"} huiswerk.`);
  callback();
}

function myFunction() {
  setTimeout(function () {
    console.log("Hello");
  }, 2000);
}

//Stap 2. en het tweede argument callback.

huiswerkMaken("Nederlands", function () {
  console.log("Kijk Paps/Mams, ik ben klaar met mijn huiswerk!");
});
