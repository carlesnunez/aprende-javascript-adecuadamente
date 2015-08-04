//1
var isEven = function(number) {
  // Your code goes here!
  if(number % 2 == 0){
    return true;  
    }else{
        return false;
    }
};

//2
var isEven = function(number) {
  // Your code goes here!
  if(number % 2 == 0){
    return true;  
    }else if(isNaN(number)){
        return "Error, introduce un numero";
        }else{
        return false;
    }
};

//3
// Write your loop below!
for(var i= 0; i < 10; i++){
    console.log(i);
    }
//4

var color = prompt("What's your favorite primary color?","Type your favorite color here");

switch(color) {
  case 'red':
    console.log("Red's a good color!");
    break;
  case 'blue':
    console.log("That's my favorite color, too!");
    break;
  //Add your case here!
  case 'yellow':
      console.log("Yellow is a good color");
    break;
  default:
    console.log("I don't think that's a primary color!");
}

//5
var candy = prompt("What's your favorite candy?","Type your favorite candy here.");

switch(candy) {
  case 'licorice':
    console.log("Gross!");
    break;
  case 'gum':
    console.log("I like gum!");
    break;
  case 'beets':
    console.log("...is that even a candy?");
    break;
  // Add your code here!
  default:
    console.log("select a candy");
    break;
  
}

//6
var answer = prompt("Add your question here!");

switch(answer) {
  case 'yellow':
    console.log("ok!");
    break;
    case 'red':
        console.log("ok");
        break;
        
    default: 
    console.log("select a color");
    break;
}

//7
// Write your code below!

switch('23'){
    case '23':
        console.log("ok");
    break;
    case '24':
        console.log("not ok");
    break;
    case '25':
        console.log("not ok");
    break;
    default:
    console.log("no string");
    break;
}
//8
// Complete lines 3 and 4!

var iLoveJavaScript = true;
var iLoveLearning = true;

if(iLoveJavaScript && iLoveLearning) {
  // if iLoveJavaScript AND iLoveLearning:
  console.log("Awesome! Let's keep learning!");
} else if(!(iLoveJavaScript || iLoveLearning)) {
  // if NOT iLoveJavaScript OR iLoveLearning:
  console.log("Let's see if we can change your mind.");
} else {
  console.log("You only like one but not the other? We'll work on it.");
}
//9
// Declare your variables here!
var hungry = true, foodHere = true;

var eat = function() {
  // Add your if/else statement here!
  if(hungry && foodHere){
    return true;
    }else{
    return false;
    }
};

//10
// Declare your variables here!
var tired = true, bored = false;

var nap = function() {
  // Add your if/else statement here!
  if(tired || bored){return true;}else{return false;}
};

//11

