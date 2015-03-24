//Los nombres de funciones son unicamente punteros al objeto que las contiene. Es decir, que lo siguiente es posible.
function sum(num1, num2){
	return num1 + num2;
}

console.log(sum(4,4));

//Sum clone apunta a la funcion también ahora.
var sumClone = sum;

console.log(sumClone(4,4));

//sum ha perdido su relacion con la funcion, hemos borrado el puntero.
sum = null;

//Sin embargo sumClone sigue apuntando a la funcion y podemos usarla.
console.log(sumClone(4,4));

//Llegados a este punto es logico pensar que el overloading no existe.
var addSomeNumber = function (num){
	return num + 100
};

//Estamos reescribiendo la variable con una nueva funcion.
addSomeNumber = function(num){
	return num + 200;
};

var result = addSomeNumber(100);

//Declaracion de funciones VS Expresion de funciones

//Si declaramos una funcion esta se "interpretara" al inicio de la ejecucion del programa de manera que la tendremos disponible desde el punto 0 de ejecucion.
console.log(sumTest(4,4));
function sumTest(num1, num2){
	return num1 + num2;
}

//Si lo cambiamos a una expresion tendremos un problema ya que esa funcion no existira hasta que no se ejecute esa parte del codigo.
//console.log(sumTest2(4,4)); codigo comentado para evitar errores en ejecucion.
var sumTest2 = function(sum1, sum2){
	return num1 + num2;
};


//Pasar funciones como argumentos
function callSomeFunction(someFunction, someArgument){
	return someFunction(someArgument);
}

var result = callSomeFunction(
	function(num1){
		return num1+2
	},
	10
);
console.log(result);

var result2 = callSomeFunction(
	function(name){
		return "Hola ke ase " + name
	},
	"Carlos"
);

console.log(result2);

//Imaginemos que queremos crear una function que determine en base a que propiedad queremos ordenar un array.

function createComparisonFunction(propertyName){
	//Esta funcion a partir del nombre de propiedad nos devolvera una funcion que comparara en base a esas propiedades.
	return function(object1, object2){
		var value1 = object1[propertyName];
		var value2 = object2[propertyName];

		if(value1 < value2){
			return -1;
		} else if (value1 > value2){
			return 1;
		} else {
			return 0;
		}
	}
}

var data = [{name: 'Zachary', age: 28}, {name: 'Nicholas', age: 29}];
console.log(data);

data.sort(createComparisonFunction("name"));
console.log(data);

data.sort(createComparisonFunction("age"));
console.log(data);


//Objetos internos en las funciones

//	Callee
function factorial(num){
	if(num <= 1){
		return 1;
	}else{
		return num * arguments.callee(--num);
	}
}

console.log(factorial(4));

// This
//Cuando llamamos a this referencia al contexto del objeto que la contiene, en el caso del scope global referencia a window.

//En node simulamos la existencia de window.
window = {};
window.color = "Red";

var o = {color : "blue"};

window.sayColor = function sayColor(){
	console.log(this.color);
}

window.sayColor();

o.sayColor = window.sayColor;
o.sayColor();


//Caller, hace referencia a la funcion que ha llamado a esa funcion.
function inner(){
	console.log("I was called by: ", inner.caller);
}

function outer(){
	inner();
}

outer();

//Propiedades y metodos de las funciones
function sayName(name){
	console.log(name);
}
sum = function (num1, num2){
	return num1 + num2;
}
function sayHi(){
	console.log("hi");
}
console.log(sayName.length); //1
console.log(sum.length); //2
console.log(sayHi.length); //0

function callSum1(num1, num2){
	return sum.apply(this, arguments);
}

function callSum2(num1, num2){
	return sum.apply(this, [num1, num2]);
}

console.log(callSum1(10, 10));
console.log(callSum2(10, 10));

function callSum(num1, num2){
	return sum.call(this, num1, num2);
}

console.log(callSum(10,10));


//Potencial de call

function sayColorCalling(){
	console.log(this.color);
}
//Call nos permite pasar el objeto que queremos que se use como this en el contecto de la funcion.
console.log("Calling a function with call passing a object");
sayColorCalling.call(o);
console.log();
sayColorCalling.call(window);

/*BIND, nos permite "ligar" un objeto al this de una funcion permanentemente, de manera que esa funcion, se llame desde donde se llame,
* siempre contendra como this el objeto usado en el bindeo
*/
console.log("***************************");
var objectSayColor = sayColorCalling.bind(o);
objectSayColor();
o.color = "Yellow";
objectSayColor();


