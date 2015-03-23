var colors = Array(3);//Crea un array con 3 items en lugar de un array con un item que sea el numero 3, ademas se puede omitir el NEW, funciona igual.
var names = new Array("Greg"); //Crea un array de 1 posicion con el item STRING Greg


//Array literal notation.

var colors = ["red", "blue", "green"];
var names = [];
//Desaconsejado totalmente por inconsistencia en la implementacion en algunas versiones de IE.
var values = [1, 2,];
var options = [,,,,,];

console.log(colors);
console.log(names);
console.log(values);
console.log(options);

//Mostrar datos de un array
console.log(colors[0]);

colors[2] = "Black";
colors[3] = "Brown";

console.log(colors.length);

//Length no es solo de lectura, si modificamos la longitud de un array tambien lo "cortaremos"
colors.length = 3;

console.log(colors[3]);//Brown ya no existe.


if(Array.isArray(colors)){
	console.log("Colors es un array");
}

var person1 = {
	toLocaleString : function () {
		return "Nikolaos";
	},
	toString : function() {
		return "Nicholas";
	}
};
var person2 = {
	toLocaleString : function () {
		return "Grigorios";
	},
	toString : function() {
		return "Greg";
	}
};

var people = [person1, person2];
console.log(people); //Nicholas,Greg (Nota, imprimiria esto si se llamase a alert, ya que alert al detectar el array allama automaticamente a el metodo .toString())
console.log(people.toString()); //Nicholas,Greg
console.log(people.toLocaleString()); //Nikolaos,Grigorios

//Imprimir un array con un separador distinto. El metodo join permite realizar eso.
console.log(colors.join("@"));


