
const checkAge = function(age) {
  if (age >= 18) {
      return "Hello there";
  }

  if (age < 18) {
      return "Hey kiddo";
  } 
};

console.log(checkAge(20)); 
console.log(checkAge(15)); 

