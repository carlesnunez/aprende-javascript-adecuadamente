// Write your code below!
var userAge;
userAge = parseInt(prompt("What's up?"));
if(isNaN(userAge)){
    console.log("Error, put a number please");
}else if(userAge > 18 && userAge < 100){
    console.log("Hey you are not over 100 but are over 18");
}else{
    console.log("You have", userAge);
}