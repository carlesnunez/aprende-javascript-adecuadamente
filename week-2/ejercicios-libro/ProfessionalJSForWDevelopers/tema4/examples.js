function ex1(){
	var person = new Object();
	person.name = "Nicholas";
	alert(person.name); //”Nicholas”
}

function ex2CopyValues(){
	var obj1 = new Object();
	var obj2 = obj1;
	obj1.name = "Nicholas";
	alert(obj2.name); //”Nicholas”
}

function argumentPassing(){
	function addTen(num) {
	num += 10;
	return num;
	}
	var count = 20;
	var result = addTen(count);
	alert(count); //20 - no change
	alert(result); //30
}

function objectsAreNotPassedByReference(){
	function setName(obj) {
		obj.name = “Nicholas”;
		obj = new Object();
		obj.name = “Greg”;
	}
	var person = new Object();
	setName(person);
	alert(person.name); //”Nicholas”
}

function determiningType(){
	var s = “Nicholas”;
	var b = true;
	var i = 22;
	var u;
	var n = null;
	var o = new Object();
	alert(typeof s); //string
	alert(typeof i); //number
	alert(typeof b); //boolean
	alert(typeof u); //undefined
	alert(typeof n); //object
	alert(typeof o); //object

	alert(person instanceof Object); //is the variable person an Object?
	alert(colors instanceof Array); //is the variable colors an Array?
	alert(pattern instanceof RegExp); //is the variable pattern a RegExp?
}


//SCOPE EXECUTION
var color = “blue”;
function changeColor(){
	if (color === “blue”){
	color = “red”;
	} else {
	color = “blue”;
	}
}
changeColor();

var color = "blue";
function changeColor(){
	var anotherColor = "red";
	function swapColors(){
		var tempColor = anotherColor;
		anotherColor = color;
		color = tempColor;
		//color, anotherColor, and tempColor are all accessible here
	}
	//color and anotherColor are accessible here, but not tempColor
	swapColors();
}


//Chain augmentation
function buildUrl() {
	var qs = “?debug=true”;
	with(location){
		var url = href + qs;
	}
	return url;
}

//Variable declaration
function add(num1, num2) {
	var sum = num1 + num2;
	return sum;
}
var result = add(10, 20); //30
alert(sum);

//Identifier lookup
var color = “blue”;
function getColor(){
	return color;
}
alert(getColor()); //”blue”


