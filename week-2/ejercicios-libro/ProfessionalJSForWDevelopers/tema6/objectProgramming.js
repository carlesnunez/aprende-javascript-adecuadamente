//UNDERSTANDING OBJECTS

//Creating a new instance of object
var personIO = new Object();
personIO.name = "Nicholas";
personIO.age = 29;
personIO.job = "Software Engineer";
personIO.sayName = function sayName(){
	console.log(this.name);
 };

 //Using literal notation
var personLt = {
	name: "Nicholas",
	age : 29,
	job: "Software Engineer",

	sayName: function(){
		console.log(this.name);
	}
}

personLt.name = "Carlos";

console.log(personLt.sayName());

console.log(personLt.name);

var personDefine = {};
//Define property
Object.defineProperty(personDefine, "name", {
	writable : false,
	value : "Nicholas"
})
console.log(personDefine.name);

//Esta propiedad no se modificara nunca.
personDefine.name = "Greg";

console.log(personDefine.name);

Object.defineProperty(personDefine, "age", {
	configurable: false,
	value: 24
})
console.log(personDefine.age);
delete personDefine.age;
console.log(personDefine.age);


//No se puede redefinir una propiedad no configurable
/*Object.defineProperty(personDefine, "age", {
	configurable: true,
	value: 24
});*/

//La notacion _ determina que esa propiedad no debe ser usada desde fuera del contexto de metodos del objeto.
var book = {};

//O varias de una tacada.
Object.defineProperties(book, {
	_year: {
		value: 2004
	},

	edition: {
		value: 1
	},

	year: {
		get : function(){
			return this._year;
		},

		set: function(newValue){
			if(newValue > 2004){
				this._year = newValue;
				this.edition += newValue - 2004;
			}
		}
	}
});

book.year = 2015;
console.log(book.edition, book.year);

var descriptor = Object.getOwnPropertyDescriptor(book, "_year");

console.log(descriptor.value); // 2004
console.log(descriptor.configurable); // false
console.log(descriptor.writable); // false

