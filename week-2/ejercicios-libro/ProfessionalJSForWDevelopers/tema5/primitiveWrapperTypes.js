var s1 = "some text";
var s2 = s1.substring(2);

console.log(s1);

console.log(s2);

//No se pueden añadir en tiempo de ejecucion metodos y propiedades a tipos primitivos.
var s3 = "some text";
s3.color = "red";
console.log(s3.color);

console.log(typeof(s3));//El tipo de s3 es string

var obj = new Object("some text");
console.log(obj instanceof String); // true
console.log(typeof obj); // Object
console.log("**************************");

//No es lo mismo hacer un cast que crear un objeto, como vemos en este ejemplo.
var value = "25";
var number = Number(value); //casting function
console.log(typeof number); //”number”
var obj = new Number(value); //constructor
console.log(typeof obj); //”object”


//Boolean type.
console.log("**************************");
var falseObject = new Boolean(false);
var result = falseObject && true;
console.log(result);

var falseValue = false;
result = falseValue && true;
console.log(result);

//Los booleanos actuan como objetos en comparaciones y son tratados como tal por javascript.
console.log(typeof falseObject); //object
console.log(typeof falseValue); //boolean
console.log(falseObject instanceof Boolean); //true
console.log(falseValue instanceof Boolean); //false


//Number type
//Devuelve un objeto  del tipo Number a traves del constructor le pasamos el numero que queramos.
var numberObject = new Number(10);

//Su metodo substring admite un argumento que es el radio con el que representara el numero
var num = 10;
console.log(num.toString());
console.log(num.toString(2));
console.log(num.toString(8));
console.log(num.toString(10));

//Tiene metodos propios como puede ser el toFixed, toExponential o toPrecision
console.log(num.toFixed(2)); // 10.00

console.log(num.toExponential(1));

var num = 99;

console.log(num.toPrecision(1))	// 1e+2
console.log(num.toPrecision(2))	// 99
console.log(num.toPrecision(3))	// 99.0


//Como en el caso de los boolean, estos numeros funcionan diferente cuando se instancian o cuando se crean igualando una variable a un numero.
var numberObject = new Number(10);
var numberValue = 10;
console.log(typeof numberObject); //”object”
console.log(typeof numberValue); //”number”
console.log(numberObject instanceof Number); //true
console.log(numberValue instanceof Number); //false


//Tipo string
console.log("******************************************");
var stringObject = new String("hello world");
console.log(stringObject.length); // 11

console.log(stringObject.charAt(0)); // h
console.log(stringObject.charCodeAt(0)); // 104
console.log(stringObject[0]); // h

var stringConcat = ", I am in Zitro interactive";

var res = stringObject.concat(stringConcat);

console.log(res);

console.log(stringObject.slice(3))
console.log(stringObject.substring(3))
console.log(stringObject.substr(3))
console.log(stringObject.slice(3, 7))
console.log(stringObject.substring(3, 7))
console.log(stringObject.substr(3, 7))
console.log();
//Los valores negativos se interpretan diferente en cada caso
console.log(stringObject.slice(-3)); //rld Los tres ultimos valores
console.log(stringObject.substring(-3)); // hello world Se interpreta como un 0
console.log(stringObject.substr(-3)); // rld el valor + la longitud del string.


console.log(stringObject.indexOf("o")); //4
console.log(stringObject.lastIndexOf("o")); //7

//Si le pasamos un valor empieza a buscar a partir de ese valor
console.log(stringObject.indexOf("o", 6)); //4
console.log(stringObject.lastIndexOf("o", 6)); //7

var stringValue = "Lorem ipsum dolor sit amet, consectetur adipisicing elit";
var positions = new Array();
var pos = stringValue.indexOf("e");

while(pos > -1){
	positions.push(pos);
	pos = stringValue.indexOf("e", pos+1);
}

console.log(positions);


//From char code
console.log(String.fromCharCode(104, 101, 108, 108, 111)); //hello

/********************************* GLOBAL OBJECT ********************************/
var uri = "http://www.wrox.com/illegal value.htm#start";

//”http://www.wrox.com/illegal%20value.htm#start”
console.log(encodeURI(uri));

//”http%3A%2F%2Fwww.wrox.com%2Fillegal%20value.htm%23start”
console.log(encodeURIComponent(uri));

uri = "http%3A%2F%2Fwww.wrox.com%2Fillegal%20value.htm%23start";
//http%3A%2F%2Fwww.wrox.com%2Fillegal value.htm%23start
console.log(decodeURI(uri));
//http://www.wrox.com/illegal value.
console.log(decodeURIComponent(uri));

//EVAL
var msg = "hello world";
eval("console.log(msg)"); //”hello world”

eval("function sayHi() { console.log('hi'); }");
sayHi();

var color = "red";

function sayColor(){
	//console.log(window.color);
}

//window.sayColor();

//Math object

//Max
var max = Math.max(3, 54, 32, 16);
console.log(max);

var min = Math.min(3, 54, 32, 16);
console.log(min);

var values = [1, 2, 3, 4, 5, 6, 7, 8];
var max = Math.max.apply(Math, values);

console.log(Math.ceil(25.9)); //26
console.log(Math.ceil(25.5)); //26
console.log(Math.ceil(25.1)); //26
console.log(Math.round(25.9)); //26
console.log(Math.round(25.5)); //26
console.log(Math.round(25.1)); //25
console.log(Math.floor(25.9)); //25
console.log(Math.floor(25.5)); //25
console.log(Math.floor(25.1)); //25


var number = Math.floor(Math.random() * 10 + 0);
console.log();
console.log(number);

var selectFrom = function selectFrom(from, to){
	var choices = to - from + 1;
	return Math.floor(Math.random() * choices + from);
}
console.log(selectFrom(5, 20));

var colors = ["red", "blue", "yellow", "green", "black"];
var color = colors[selectFrom(0, colors.length-1)];
console.log(color);