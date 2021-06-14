//Function Expression.
const getNumbers =function (number1, number2){
    return (number1*2 + number2*2)*2;
}
console.log(getNumbers(3,8));

//Function declarations
function getNumbers(number1, number2){
    return (number1*2 + number2*2)*2;

}
console.log(getNumbers(3,8));
//Arrow Functions
const getNumbers = (number1, number2) => {
    return (number1*2 + number2*2)*2;
}
console.log(getNumbers(3,8));
