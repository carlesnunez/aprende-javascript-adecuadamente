//1
var list = [1,2,3];
//2
var languages = ["HTML", "CSS", "JavaScript", "Python", "Ruby"];

console.log(languages[2]);
//3
var languages = ["HTML", "CSS", "JavaScript", "Python", "Ruby"];

console.log(languages[2]);

console.log(languages.length);

//4
var languages = ["HTML", "CSS", "JavaScript", "Python", "Ruby"];

for(var i = 0, length = languages.length; i < length; i++){
    console.log(languages[i]);    
}
//5
var myArray = [1, true, "carles"];
//6
var newArray = [[3,1,2],[3,6,9],[1,3,4]];
//7
var jagged = [[1],[2,3]];
//8
var me = {
    name : "Carles",
    age: 23
}
//9
var me = new Object();
me.name = "Carles";
me.age = 23;
//10
var object1 = {prop: 1, prop2: 2} ;
var object2 =  {prop: 1, prop2: 2};
var object3 =  {prop: 1, prop2: 2};
//11
var myArray = [1, true, "string", {name: "yo", age: 23}];
//12
var newArray = [[1], [1,2,{}]];
//13
var myObject = {
  name: 'Eduardo',
  type: 'Most excellent',
  // Add your code here!
  interests : ["programming"]
};
//14
var myOwnObject = {
    name:"yo",
    test:function test(){
        return this.name
        }
    }
   