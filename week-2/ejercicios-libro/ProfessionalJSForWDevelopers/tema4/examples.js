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