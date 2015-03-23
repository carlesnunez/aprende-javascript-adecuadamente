var numbers = [1,2,3,4,5,4,3,2,1];

//Every devolvera true unicamente si la funcion que le pasamos devuelve true para todos y cada uno de los elementos del array.
var everyResult = numbers.every(function(item, index, array){
	return (item > 2);
});

console.log("Every result: ", everyResult);

//Some devolvera true en el momento que el resultado de la funcion que le pasamos sea igual a true.
var someResult = numbers.some(function(item, index, array){
	return (item >2);
});

console.log("Some result: ", someResult);

//Filter guardara en un nuevo array todos los valores de los cuales el resultado(return) de la function que le pasamos sea true.
var filterResult = numbers.filter(function(item,index,array){
	return (item > 2);
});

console.log(filterResult);

//Map se usa para generar una nueva coleccion de datos a partir de unos datos iniciales, por ejemplo.
var mapResult = numbers.map(function(item, index, array){
	return ("modificando!: " + item * 2);
});

console.log(mapResult);

//Foreach nos permite trabajar con el array en si mismo. No devuelve ningun nuevo array ni valor de manera que podemos realizar modificaciones en el propio array.
numbers.forEach(function(item, index, array){
	array[index] = item + "this is madness";
});

console.log(numbers);
