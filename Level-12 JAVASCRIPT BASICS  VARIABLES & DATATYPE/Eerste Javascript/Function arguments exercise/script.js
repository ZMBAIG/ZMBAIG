function paintWalls (){
    console.log("The wall has been painted red")
}

paintWalls();
//add an argument to the function
const paintWall = function(item){
    console.log("The wall has been painted" + item)
};
const wallColor = "Red";
const mycolor = "Green";

paintWall(wallColor);
paintWall(mycolor);

//Multiple arguments
const choicePaint = function (){
    console.log("The north wall has been painted orange");
    console.log("The south-east wall has been painted grey");

};
choicePaint();
