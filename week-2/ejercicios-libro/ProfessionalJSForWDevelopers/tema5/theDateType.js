var now = new Date();
console.log(now);

//Manipulando las fechas a mano, le podemos pasar las fechas de multiples maneras: mes/dia/año
///// nombre_mes dia, año /// dia_semana_nombre mes_nombre dia año horas:minutos:segundos zona horaria
// y por ultimo YYYY-MM-DDTHH:mm:ss.sssZ
var someDate = new Date(Date.parse("Mar 23, 2015"));
console.log(someDate);

//Ejemplo del uso de UTC
//January 1, 2000 at midnight GMT
var y2k = new Date(Date.UTC(2000, 0));
//May 5, 2005 at 5:55:55 PM GMT
var allFives = new Date(Date.UTC(2005, 4, 5, 17, 55, 55));

//Date mimifica el comportamiento de UTC de manera que si le pasamos:
//January 1, 2000 at midnight in local time
var y2k = new Date(2000, 0);
//May 5, 2005 at 5:55:55 PM local time
var allFives = new Date(2005, 4, 5, 17, 55, 55);

//Devolverá exactamente las mismas fechas que en la asignacion con UTC.

//Podemos obtener el tiempo en el que se ejecuta el codigo con Date.now()
var start = +Date.now();

//Llamamos a la funcion que sea
"Carles".length
//Para los navegadores que no soportan este metodo puedes "engañarlos" poniendo + delante para convertir la fecha en un numero
var stop = +Date.now(), result = stop - start;

console.log("Tiempo en ejecucion entre inicio y final: " + result);

//Comparando fechas, valueOf pasa a milisegundos las fechas para poder realizar comparaciones.
var date1 = new Date(2007, 0, 1); //”January 1, 2007”
var date2 = new Date(2007, 1, 1); //”February 1, 2007”
console.log(date1 < date2); //true
console.log(date1 > date2); //false

//Date formating methods
console.log("Date toString", date1.toDateString());
console.log("Date toLocaleString", date1.toLocaleDateString());
console.log("Date toLocaleTimeString", date1.toLocaleTimeString());
console.log("Date to UTC string", date1.toUTCString());



