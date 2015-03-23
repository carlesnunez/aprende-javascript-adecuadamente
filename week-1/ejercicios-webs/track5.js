//1 Escribe cinco sentencias console.log.
for(var i = 0; i < 5 ; i++){
    console.log(i);    
}

//2 Ejemplo de un bucle for
for( var counter = 1; counter < 11; counter ++) {
	console.log(counter);
}
//3 Cambia donde comience el bucle for.

for (var i = 5; i < 11; i = i + 1){
	console.log(i);
}
//4 Edita este bucle for

for (var i = 4; i <=23; i = i + 1){
	console.log(i);
}
//5 Edita este bucle for

for (var i = 5; i <= 50; i+=5) {
	console.log(i);
}
//6 Ejemplo de bucle for

for (var i = 8 ; i < 120; i+=12) {
	console.log(i);
}
//7Ejemplo de un bucle infinito - hará que tu computador se bloquee.

for( var i = 10 ; i >= 0 ; i-- ) {
	console.log(i);
}
//8 Escribe tu propio bucle for

for(var i = 100; i >= 0; i-=5){
    console.log(i);
}
//9 Ahora estás declarando un arreglo
//¡Los arreglos son una estructura de datos asombrosa!
var chatarra = ["hola", "zitro", 1, 2];

console.log(chatarra);
//10 Practica con las matrices

var datosChatarra = ["Eddie Murphy", 49, "maníes", 31];

console.log(datosChatarra[3]);
//11Vamos a imprimir cada elemento de un arreglo usando un bucle for

var ciudades = ["Melbiourne", "Amián", "Helskinki", "NYiC"];

for (var i = 0; i < ciudades.length; i++) {
    console.log("Me gustaría visitar" + " " + ciudades[i]);
}
//12¡Puedes hacer preguntas en el foro de preguntas y respuestas si te encuentras atascado!
var nombres = ["Xavi", "Ramon", "Tomas", "Arnau", "Victor"];
for(var i = 0, item = null, len = nombres.length; i < len ; i++){
    item = nombres[i];
    console.log("Yo conozco a alguien que se llama " + item);
}
//13
var arreglo = [3 , 6, 2, 56, 32, 5, 89, 32];
var mayor = 0;

for(var i = 0, item = null, len = arreglo.length; i < len; i++){
    item = arreglo[i];
    if(item > mayor){
        mayor = item;    
    }
}




console.log(mayor);