//Metodos de manipulacion de arrays
//CONCAT. Permite añadir o "fusionar" dos arrays en uno de solo.
var colors = ["red", "green", "blue"];
var colors2 = colors.concat("yellow", ["black", "brown"]);

console.log(colors);
console.log(colors2);

//SLICE

var colors3 = colors2.slice(1);
var colors4 = colors2.slice(1,4)

console.log("Color 3: ",colors3);
console.log("Color 4: ",colors4);
console.log();
console.log();

//SPLICE
var colors = ["red", "green", "blue"];
var removed = colors.splice(0,1); //remove the first item
console.log(colors); //green,blue
console.log(removed); //red - one item array
removed = colors.splice(1, 0, "yellow", "orange"); //insert two items at position 1
console.log(colors); //green,yellow,orange,blue
console.log(removed); //empty array
removed = colors.splice(1, 1, "red", "purple"); //insert two values, remove one
console.log(colors); //green,red,purple,orange,blue
console.log(removed); //yellow - one item array


