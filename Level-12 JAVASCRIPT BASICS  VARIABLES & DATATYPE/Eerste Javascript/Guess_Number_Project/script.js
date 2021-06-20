function myFunction() {
    const personName = prompt("Welkom! Wat is je naam?");
    if (personName != null) {
      document.getElementById("demo").innerHTML =
      "Hey! " + personName; 
    const myNum  = prompt("Voer een nummer in van 0 tot 25 om te beginnen met raden...");
    
        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
          }
        document.getElementById("demo").innerHTML =
        "Gefeliciteerd je hebt gewonnen" + (getRandomInt(5));   

       document.getElementById("demo").innerHTML ="Dat is niet correct"
        Math.floor(Math.random() * 25) + 1;
            }
            
            }
  