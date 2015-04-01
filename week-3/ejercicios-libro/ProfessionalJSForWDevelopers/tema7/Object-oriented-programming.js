/*
//Factory pattern
function createPerson(name, age, job){
var o = new Object();
o.name = name;
o.age = age;
o.job = job;
o.sayName = function(){
console.log(this.name);
};
return o;
}
var person1 = createPerson("Nicholas", 29, "Software Engineer");
var person2 = createPerson("Greg", 27, "Doctor");

//Constructor pattern
function Person(name, age, job){

	//We call the prototype object to show the "nature" of prototype. Assuming that we are rewriting the name age and job properties on every new instance of the
	//person object.
	Person.prototype.name = name;
	Person.prototype.age = age;
	Person.prototype.job = job;
	Person.prototype.sayName = function(){
		console.log(this.name);
	};
}

var person1 = new Person("Nicholas", 29, "Software Engineer");
var person2 = new Person("Greg", 27, "Doctor");
console.log(Person.prototype.isPrototypeOf(person1)); //true
console.log(Person.prototype.isPrototypeOf(person2)); //true
console.log(Object.getPrototypeOf(person1) == Person.prototype); //true
console.log(Object.getPrototypeOf(person1).name); //"Nicholas"

	//Use constructors as a functions
	var person = new Person("Nicholas", 29, "Software Engineer");
	person.sayName(); //"Nicholas"
	//call as a function
	Person("Greg", 27, "Doctor"); //adds to window
	window.sayName(); //"Greg"
	//call in the scope of another object
	var o = new Object();
	Person.call(o, "Kristen", 25, "Nurse");
	o.sayName(); //"Kristen"


//Use of IN and the logic of that.
function Person(){
}
Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function(){
console.log(this.name);
};
var person1 = new Person();
var person2 = new Person();
console.log(person1.hasOwnProperty("name")); //false
console.log("name" in person1); //true
person1.name = "Greg";
console.log(person1.name); //"Greg" - from instance
console.log(person1.hasOwnProperty("name")); //true
console.log("name" in person1); //true
console.log(person2.name); //"Nicholas" - from prototype
console.log(person2.hasOwnProperty("name")); //false
console.log("name" in person2); //true
delete person1.name;
console.log(person1.name); //"Nicholas" - from the prototype
console.log(person1.hasOwnProperty("name")); //false
console.log("name" in person1); //true

var o = {
toString : function(){
	return "My Object";
	}
};
for (var prop in o){
	if (prop == "toString"){
		alert("Found toString"); //won’t display in Internet Explorer
	}
}

//Dynamic nature of prototypes

var friend= new Person();
Person.prototype.sayHi = function(){
	alert("hi");
};
friend.sayHi(); //"hi" - works!


//Object just have a pointer to the prototype object, not to the constructor.
function Person(){

}

var friend = new Person();
Person.prototype = {
	constructor: Person,
	name : "Nicholas",
	age : 29,
	job : "Software Engineer",
	sayName : function () {
	alert(this.name);
	}
};

//That will result on an error because we have a pointer to the old prototype, when we change the prototype we lost the conection between prototype and object.
friend.sayName(); //error


//Method inheritance and overriding
function SuperType(){
	this.property = true;
}

SuperType.prototype.getSuperValue = function(){
	return this.property;
};

function SubType(){
	this.subproperty = false;
}

//inherit from SuperType
SubType.prototype = new SuperType();
//new method

SubType.prototype.getSubValue = function (){
	return this.subproperty;
};
//override existing method
SubType.prototype.getSuperValue = function (){
	return false;
};

var instance = new SubType();
console.log(instance.getSuperValue()); // false

//The next example is a bad practice to prototype inheritance
function SuperType(){
	this.property = true;
}
SuperType.prototype.getSuperValue = function(){
	return this.property;
};
function SubType(){
	this.subproperty = false;
}
//inherit from SuperType
SubType.prototype = new SuperType();
//try to add new methods - this nullifies the previous line, breaks the pointer to the prototype OBJECT
SubType.prototype = {
	getSubValue : function (){
		return this.subproperty;
	},
	someOtherMethod : function (){
		return false;
	}
};*/


//Douglas Crockford Prototypal Inheritance method.
function object(o){
	function F(){}
	F.prototype = o;
	return new F();
}

//We create a shadow copy of an object schema and only share the not primitive values of the object.
var person = {
	name: "Nicholas",
	friends: ["Shelby", "Court", "Van"],
	obj : {
		param1: "param1"
	}
};


var anotherPerson = object(person);
anotherPerson.name = "Greg";
anotherPerson.friends.push("Rob");
anotherPerson.obj.param1 = "param1 changed by another person";

var yetAnotherPerson = object(person);

yetAnotherPerson.name = "Linda";

yetAnotherPerson.friends.push("Barbie");

yetAnotherPerson.obj.param1 = "param1 changed by another person";


console.log(person.friends); //"Shelby,Court,Van,Rob,Barbie"
console.log(anotherPerson.name);
console.log(yetAnotherPerson.name);

console.log(person.obj.param1);

console.log(yetAnotherPerson.obj.param1);

//ECMAScript 5 Object.create() by example.
var person = {
	name: "Nicholas",
	friends: ["Shelby", "Court", "Van"]
};
var anotherPerson = Object.create(person);
anotherPerson.name = "Greg";
anotherPerson.friends.push("Rob");
var yetAnotherPerson = Object.create(person);
yetAnotherPerson.name = "Linda";
yetAnotherPerson.friends.push("Barbie");
alert(person.friends); //"Shelby,Court,Van,Rob,Barbie"