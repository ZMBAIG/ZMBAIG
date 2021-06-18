//1. Even Odd Reporter

/*Schrijf een loop die "iterate" van 0 tot 20. 
Voor elke loop, check of het huidige nummer even is of oneven (odd). */



for (let i=0; i<=20; i++) {
  if (i === 0) {
          console.log(i +  " is even");
  }
  else if (i % 2 === 0) {
          console.log(i + " is even");   
  }
  else {
          console.log(i + " is odd");
  }
}
//2. Multiplication tables


const number = 9;
for(let i = 1; i <= 10; i++) {

// multiply i with number
    const result = i * number;

 // display the result
    console.log(`${number} * ${i} = ${result}`);
}

//3. The Grade Assigner 
function assignGrade(score) {
        for (i = 0; i < 90; i++)
        if (score > 90) {
            return 'A';
        } else if (score > 80) {
            return 'B';
        } else if (score > 70) {
            return 'C';
        } else if (score > 65) {
                return 'D';    
        } else if (score > 60) {
            return 'F';
        } else {
            return 'E';
        }
    }