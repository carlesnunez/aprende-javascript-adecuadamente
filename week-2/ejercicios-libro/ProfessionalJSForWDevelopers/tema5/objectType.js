//Using object constructor.
var person = new Object();
person.name = "Nicholas";
person.age = 29;

//Using object literal notation.
var person = {
	name : "Nicholas",
	age : 29,
	//Number property name
	5: true
}

//Using curly braces empty to make a default object.
var person = {};
person.name = "Nicholas";
person.age = 29;


//Passing large number of optional arguments to a function
function displayInfo(args){
	var output = "";

	if(typeof args.name == "string"){
		output += "Name: " + args.name + "\n";
	}

	if(typeof args.age == "number"){
		output += "Age: " + args.age + "\n";
	}

	console.log(output);
}

displayInfo({
	name : "Nicholas",
	age: 29
});

displayInfo({
	name : "Greg"
});

function bracketPropertyAcces(args){
	var propertyName = "name";

	console.log(args[propertyName]);
}

bracketPropertyAcces({name : "Nicholas"});



