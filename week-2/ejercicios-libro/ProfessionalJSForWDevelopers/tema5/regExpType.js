/*
* Encuentra todas las apariciones de 'at' en un string.
*/

var pattern1 = /at/g;

/*
* Encuentra la primera aparicion de 'bat' o 'cat', en mayusculas o minusculas.
*/
var pattern2 = /[bc]at/i;

/*
* Muestra las tres combinaciones de caracter que acaban con 'at', no importan las mayusculas o minusculas
*/
var pattern3 = /.at/gi;


/*
* Se pueden usar constructores para definir expresiones regulares. Como en el ejemplo siguiente
*/
var pattern2 = new RegExp("[bc]at", "i");


/*
* El uso de una RegExp con constructor o literal cambia principalmente en el comportamiento en el uso de por ejemplo .test(). Si usamos
* .test() con una regExp creada desde un literal, 'recordara' en cada uso de esa regExp la posicion en la que se ha quedado y seguira a partir de ahi.
* con el uso del constructor de RegExp eso no pasa.
*/

//Por ejemplo:
var re = null, res = null,
i;

var text = "mom and dad and baby";
var pattern = /mom( and dad( and baby)?)?/gi;
var matches = pattern.exec(text);
console.log(matches.index); //0
console.log(matches.input); //”mom and dad and baby”
console.log(matches[0]); //”mom and dad and baby”
console.log(matches[1]); //” and dad and baby”
console.log(matches[2]); //” and baby”

//Properties from the regExp
var pattern1 = /\[bc\]at/i;
console.log(pattern1.global); //false
console.log(pattern1.ignoreCase); //true
console.log(pattern1.multiline); //false
console.log(pattern1.lastIndex); //0
console.log(pattern1.source); //"\[bc\]at"
var pattern2 = new RegExp("\\[bc\\]at", "i");
console.log(pattern2.global); //false
console.log(pattern2.ignoreCase); //true
console.log(pattern2.multiline); //false
console.log(pattern2.lastIndex); //0
console.log(pattern2.source); //"\[bc\]at"

var text = "cat, bat, sat, fat";
var pattern1 = /.at/;
var matches = pattern1.exec(text);
console.log(matches.index); //0
console.log(matches[0]); //cat
console.log(pattern1.lastIndex); //0
matches = pattern1.exec(text);
console.log(matches.index); //0
console.log(matches[0]); //cat
console.log(pattern1.lastIndex); //0
var pattern2 = /.at/g;
var matches = pattern2.exec(text);
console.log(matches.index); //0
console.log(matches[0]); //cat
console.log(pattern2.lastIndex); //0
matches = pattern2.exec(text);
console.log(matches.index); //5
console.log(matches[0]); //bat
console.log(pattern2.lastIndex); //8

var text = "this has been a short summer";
var pattern = /(.)hort/g;

/*
* Note: Opera doesn’t support input, lastMatch, lastParen, or multiline.
* Internet Explorer doesn’t support multiline.
*/
if (pattern.test(text)){
	console.log(RegExp.input); //this has been a short summer
	console.log(RegExp.leftContext); //this has been a
	console.log(RegExp.rightContext); // summer
	console.log(RegExp.lastMatch); //short
	console.log(RegExp.lastParen); //s
	console.log(RegExp.multiline); //false
}
text = "this has been a short summer";
pattern = /(.)hort/g;
if (pattern.test(text)){
	console.log(RegExp.$_); //this has been a short summer
	console.log(RegExp["$`"]); //this has been a
	console.log(RegExp["$’"]); // summer
	console.log(RegExp["$&"]); //short
	console.log(RegExp["$+"]); //s
	console.log(RegExp["$*"]); //false
}