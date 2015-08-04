//1
var friends = function friends(){
        
}
//2
var friends = {
    bill : {},
    steve : {}
}
//3
var friends = {
    bill : {
        firstName : "Bill",
        lastName: "Gates",
        number: "(93)8000000"
        },
    steve : {
        firstName : "Steve",
        lastName: "Jobs",
        number: "(93)8000000"
        },
}
//4
var friends = {
    bill : {
        firstName : "Bill",
        lastName: "Gates",
        number: "(93)8000000",
        address: ["piruleta, 4"]
        },
    steve : {
        firstName : "Steve",
        lastName: "Jobs",
        number: "(93)8000000",
        address: ["Infinite loop, 3"]
        },
}

//5
var friends = {
    bill : {
        firstName : "Bill",
        lastName: "Gates",
        number: "(93)8000000",
        address: ["piruleta, 4"]
        },
    steve : {
        firstName : "Steve",
        lastName: "Jobs",
        number: "(93)8000000",
        address: ["Infinite loop, 3"]
        },
}

function list(param){
    for(var key in param){
        console.log(key);
        }
}
//6
var friends = {
    Bill : {
        firstName : "Bill",
        lastName: "Gates",
        number: "(93)8000000",
        address: ["piruleta, 4"]
        },
    Steve : {
        firstName : "Steve",
        lastName: "Jobs",
        number: "(93)8000000",
        address: ["Infinite loop, 3"]
        },
}

function list(param){
    for(var key in param){
        console.log(key);
        }
}

function search(name){
    for(var key in friends){
        if(key == name){
            console.log(typeof key);
            return friends[key];
        }
    }
}
//7


